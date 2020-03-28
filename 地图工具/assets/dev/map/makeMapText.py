#!/usr/bin/env python
# encoding: utf-8
'''
1、读取指定目录下的所有文件
2、读取文件，正则匹配出需要的内容，获取文件名
3、打开此文件(可以选择打开可以选择复制到别的地方去)
'''
import os
import os.path
import re
import json
 
# 遍历指定目录，显示目录下的所有文件名
def eachFile(filepath):
	pathDir =  os.listdir(filepath)
	for allDir in pathDir:
		child = os.path.join('%s\%s' % (filepath, allDir))
		#print(child)
		if os.path.isfile(child):
			readFile(child)
			continue
		eachFile(child)
   
# 遍历出结果 返回文件的名字
def readFile(filenames):
	fopen = open(filenames, 'r') # r 代表read
	fileread = fopen.read()
	fopen.close()
	t=re.search(r'mapIdStr',fileread)
	if t:
		if (str.find(filenames,"py") == -1):
			arr.append(fileread)
			
if __name__ == "__main__":
	print("-------delete maps.json-------")
	dataFile = open("maps.json", "a+")
	dataFile.close()
	os.remove("maps.json")
	firstToMake = 1 #第一次需要增加括号
	cwd = os.getcwd()
	filenames = cwd # refer root dir
	arr=[]
	eachFile(filenames)
	
	arrLenght = len(arr)
	
	for fileread in arr:
		fristDouHaoIndex = str.find(fileread,",") #返回第一个逗号位置
		dataNew = fileread[1:fristDouHaoIndex+10] #获取字段 +10 是匹配  ,"mapData" 刚好10位
		
		jsonData = json.loads(fileread)   # 转化为json 取值
		mapIdStr = '"'+jsonData['mapIdStr']+'"'   # 取到地图id
		allStr = fileread.replace(dataNew,mapIdStr)  #替换字段为地图id 以匹配配置格式  
		print("jieXi"+mapIdStr)
		stringLen = len(allStr)
		if(firstToMake==1):
			newStr = '{'+allStr[1:stringLen-1]+','
		elif(firstToMake == arrLenght):
			newStr = allStr[1:stringLen-1]+'}'
		else:
			newStr = allStr[1:stringLen-1]+','
		firstToMake = firstToMake +1
		
		fo = open("maps.json", "a+")
		fo.write(newStr)
		fo.close()
		print("addData:"+mapIdStr)
		print("--------------")
		
	print("success maps.json")