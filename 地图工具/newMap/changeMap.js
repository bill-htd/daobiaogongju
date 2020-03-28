
var fs = require('fs')
    , gm = require('gm');


fs.readFile('./maps.json', function (err, data) {
    if (err) {
        console.log(err)
        return;
    }
    var maps = data.toString();
    maps = JSON.parse(maps)
    // console.log(maps)
    let mapsName = []
    for (let i in maps) {
        console.log(i)
        mapsName.push(i)
        let flieName = i
        // console.log(maps[i])
        let pixHeight = maps[i].pixHeight;
        let grids = maps[i].grids;
        let maxX = maps[i].maxX;
        let title_wh = maps[i].title_wh;
        let maxY = maps[i].maxY;
        let pixWidth = maps[i].pixWidth;
        let gridsString = ''
        let gridsStringBLue = ''
        for (let k = 0; k < maxY; k++) {
            let suzu = []
            if (grids[k] & (1 << 0) > 0) {
                suzu.push(0)
            } else {
                suzu.push(1)
            }
            for (let j = 0; j < grids.length; j++) {
                if (j < maxY) continue
                let string = ''
                if (grids[j] & (1 << 0) > 0) {
                    string = '0'
                } else {
                    string = '1'
                }
                if ((j - k) % maxY == 0 && suzu.length <= maxX) {
                    suzu.push(string)
                }
                if (suzu.length == maxX) {
                    for (let x = 0; x < suzu.length; x++) {
                        let Numstring = suzu[x] + ','
                        gridsString += Numstring;
                        gridsStringBLue += '0,'
                    }
                    break;

                }
            }
        }

        gridsString = gridsString.slice(0, gridsString.length - 1)
        gridsStringBLue = gridsStringBLue.slice(0, gridsStringBLue.length - 1)
        // console.log(gridsString)
        let imgW = maxX * title_wh;
        let imgH = title_wh * maxY;
        gm('./test.jpg')
            .resize(imgW, imgH, '!')
            .write('C:/Users/Admin/Desktop/地图工具/tilemap/newMap/' + flieName + '.jpg', function (err) {
                if (err) {
                    console.log(err)
                }
                if (!err) console.log('done');
            });

            
        let string =
            '<?xml version="1.0" encoding="UTF-8"?>' +
            '<map version="1.0" tiledversion="1.1.6" orientation="orthogonal" renderorder="left-up" width="' + maxX + '" height="' + maxY + '" tilewidth="' + title_wh + '" tileheight="' + title_wh + '" infinite="0" nextobjectid="1">' +
            '<tileset firstgid="1" name="tile_res" tilewidth="' + title_wh + '" tileheight="' + title_wh + '" tilecount="2" columns="2">' +
            '<image source="../misc/tile_res.png" width="128" height="64"/>' +
            '</tileset>' +
            '<tileset firstgid="3" name="tile_res" tilewidth="' + title_wh + '" tileheight="' + title_wh + '" tilecount="2" columns="2">' +
            '<image source="../misc/tile_res.png" width="128" height="64"/>' +
            '</tileset>' +
            '<imagelayer name="背景">' +
            '<image source="' + flieName + '.jpg" width="' + imgW + '" height="' + imgH+ '"/>' +
            '</imagelayer>' +
            '<layer name="遮挡（蓝色）" width="' + maxX + '" height="' + maxY + '">' +
            '<data encoding="csv">' + gridsStringBLue +
            '</data >' +
            '</layer >' +
            '<layer name="碰撞（红色）" width="' + maxX + '" height="' + maxY + '">' +
            '<data encoding="csv">' + gridsString +
            '</data>' +
            '</layer>' +
            '</map>';
        fs.writeFile("C:/Users/Admin/Desktop/地图工具/tilemap/newMap/" + flieName + ".tmx", string, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });

        // console.log(string)
        // return
    }

    fs.readFile('C:/Users/Admin/Desktop/地图工具/Debug/convert_tilemap_conf.json', function (err, data) {
        if (err) {
            console.log(err)
            return;
        }
        console.log(data)
        var path = JSON.parse(data.toString());
        console.log(path)
        path.convert_file = mapsName
        path.tilemap_dir = '..\\tilemap\\newMap'
        path.out_dir = '..\\assets\\dev\\newMap'
        path = JSON.stringify(path)
        fs.writeFile("C:/Users/Admin/Desktop/地图工具/Debug/convert_tilemap_conf.json", path, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("The file was change!");
        });


    })




})