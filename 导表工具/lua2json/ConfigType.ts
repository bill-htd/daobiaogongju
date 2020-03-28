interface RuneComposeConfig {
	checkMaterial: number[];
	count: number;
	id: number;
	material: number[];
	mixId: number[];
}

interface MijiBaseConfig {
	lockId: number;
}

interface PlayFunConfig {
	sort: number;
	id: number;
	layer: number;
	icon: string;
	cls: string;
	iconSkin: string;
	pos: number;
	noMove: number;
	iconParam: { x: number, bottom: number, height: number, right: number, width: number, y: number, scaleY: number, scaleX: number};
	iconCls: string;
}

interface TeamFuBenGuideConfig {
	guideText: string;
	monName: string;
	monHead: string;
	orderId: number;
	roomId: number;
	dangerLv: string;
}

interface ActivityType12Config {
	skinType: string;
	exitTime: number;
	index: number;
	showType: number;
	id: number;
	blessWord: string;
	wordCount: number;
	score: number;
	record: string;
	isCross: number;
}

interface ShenShouConfig {
	maxCount: number;
	posCount: number;
	matCount: number;
	openzhuanshenglv: number;
	battleCountItem: number;
	minCount: number;
	openserverday: number;
}

interface ShenShouBase {
	activeImg: string;
	minLevel: number[];
	id: number;
	iconImg: string;
	skill: number[];
}

interface ShenShouEquip {
	attrs: {value:number,type:number}[];
	exp: number;
	id: number;
	totalExp: number;
	starattrs: {value:number,type:number}[];
}

interface ShenShouSkill {
	equipPercent: {}[];
	name: string;
	quality: number;
	id: number;
	target: number;
	icon: string;
	desc: string;
}

interface RongLuExpConfig {
	id: number;
	reward: {id:number,type:number,count:number}[];
	exp: number;
}

interface PActivityType9Config {
	yb: number;
	index: number;
	Id: number;
	showType: number;
	item: number;
	reward: {id:number,type:number,count:number,times:number}[];
	rate: {}[];
}

interface PActivityType1Config {
	index: number;
	Id: number;
	rewards: {id:number,type:number,count:number}[];
	showType: number;
	zhanlingLv: number;
}

interface MergeConfig {
	index: number;
	sort: number;
	id: number;
	lv: number;
	btn_name: string;
	openZs: number;
}

interface MergeTotal {
	type: number;
	openZs: number;
	id: number;
	sort: number;
	btn_source: string;
}

interface ZhanLingConfig {
	plusLevel: number;
	hintNum: number;
	stageitemid: number;
	openzhuanshenglv: number;
	zlEquipName: {0:string,1:string}[];
	unitPrice: number;
	disappearTime: number;
	unitTime: number;
	anchorOffset: number[];
	equipPosCount: number;
	delayTime: number;
	openserverday: number;
	upgradeInfo: {attr:{value:number,type:number}[],sort:number,precent:number}[];
	showzhanlingcd: number;
	stageitemexp: number;
}

interface ZhanLingBase {
	sort: number;
	talent: number;
	id: number;
	skill: {id:number,open:number}[];
	mat: number;
	icon: string;
	show: number;
}

interface ZhanLingLevel {
	attrs: {value:number,type:number}[];
	zlNameLabel: string;
	appearance: string;
	exp: number;
	id: number;
	maxCount: {}[];
	stageDesc: string;
	count: number;
	zlName: string;
	activeLv: number;
	level: number;
	innerAppearance: string;
	talentLevel: number;
}

interface ZhanLingEquip {
	id: number;
	level: number;
	attrs: {value:number,type:number}[];
	pos: number;
	mat: {id:number,count:number}[];
}

interface ZhanLingSuit {
	precent: number;
	suitWithName: string;
	expower: number;
	suitCondition: string;
	level: number;
	suitTname: string;
	attrs: {value:number,type:number}[];
}

interface ZhanLingTalent {
	rate: number;
	talentDesc: { name: string, icon: string, desc: string};
	expower: number;
	effId: number;
	id: number;
	level: number;
	costCount: number;
	showWords: string;
	attrs: {value:number,type:number}[];
	passive: {id:number,type:number}[];
}

interface ZhanLingSkill {
	id: number;
	passive: number;
	passivePlus: number;
	attrs: {value:number,type:number}[];
	desc: { icon: string, name: string, desc: string};
}

interface TeamFuBenBaseConfig {
	closeTime: number[];
	flowerChiv: number;
	openDay: number;
	rankBoardSize: number;
	rankMaxSize: number;
	inviteText: string;
	needZsLv: number;
	itemId: number;
}

interface TeamFuBenConfig {
	nameImg: string;
	fbid: number;
	guanqiaImg: string;
	id: number;
	infoText: string;
	bossImg: string;
	name: string;
	rewardShow: {id:number,type:number,count:number}[];
	bossName: string;
	pmaxnum: number;
	chiv: number;
}

interface FlameStamp {
	monsterId: number[];
	openLevel: number;
	skillId: number[];
}

interface SDKConfig {
	shareCount: number;
	shareReward: {id:number,type:number,count:number}[];
	shareInterval: number;
}

interface FlameStampLevel {
	attrs: {value:number,type:number}[];
	bulletDamage: { a: number, b: number};
	bulletDesc: string;
	exp: number;
	costItem: number;
	level: number;
	costCount: number;
	summonerAttr: {value:number,type:number}[];
}

interface PActivity2Config {
	needRecharge: number;
	index: number;
	Id: number;
	rewards: {id:number,type:number,count:number}[];
	currencyType: number;
	count: number;
	originalPrice: number;
	showType: number;
	discount: number;
	price: number;
	vip: number;
}

interface FlameStampEffect {
	stamp: number;
	uiEff: string;
	id: number;
	costCount: number;
	stampLevel: number;
	skillname: string;
	costItem: number;
	level: number;
	icon: string;
	skillId: number;
	exPower: number;
	skillDesc: string;
	reloadTime: number;
	effId: number;
	selfEffId: number;
	bulletDamage: { a: number};
}

interface FlameStampMat {
	mixDesc: string;
	exp: number;
	itemId: number;
	limitLv: number;
	costItem: number;
	costCount: number;
}

interface PActivity3Config {
	showType: number;
	type: number;
	index: number;
	mailInfo: { context: string, head: string};
	Id: number;
	rewards: {id:number,type:number,count:number}[];
	day: number;
	val: number;
}

interface PActivityBtnConfig {
	activityType: number;
	type: number;
	sort: number;
	title: string;
	id: number;
	timeType: number;
	icon: string;
	light: number;
}

interface PActivityConfig {
	desc: string;
	tabName: string;
	openType: number;
	Id: number;
	duration: number;
	zslv: number;
	activityType: number;
}

interface WeaponSoulItemAttr {
	attr: {value:number,type:number}[];
	id: number;
}

interface WeaponSoulBaseConfig {
	maxItemNum: number;
	itemid: number;
}

interface PrivilegeData {
	rightDesc: string;
	priviMoney: number;
	reduceKuangTime: number;
	priviCardDays: number;
	addKuangCount: number;
}

interface ActivityType10Config {
	yuanBao: number;
	recharge: number;
	id: number;
	level: number;
	info: {multiple:number,value:number}[];
}

interface PunchEquipMasterConfig {
	exPower: number;
	level: number;
	exattr: {value:number,type:number}[];
}

interface PunchEquipConfig {
	id: number;
	level: number;
	attr: {value:number,type:number}[];
	cost: { id: number, count: number};
}

interface ActivityType9Config {
	yb: number;
	index: number;
	Id: number;
	showType: number;
	item: number;
	reward: {id:number,type:number,count:number,times:number}[];
	rate: {}[];
	middleDesc: string;
}

interface SuperVipConfig {
	id: number;
	money: number;
}

interface GodWeaponTaskConfig {
	itemName: {0:string,1:string,2:string,3:string,4:string,5:string,6:string,7:string,8:string,9:string,10:string,11:string,12:string,13:string,14:string,15:string,16:string,17:string,18:string}[];
	controlTarget: {0:string,1:string,2:string,3:string,4:string,5:string,6:string,7:string,8:string}[];
	target: number;
	tips: string;
	param: number;
	desc: string;
}

interface ActorExRingFubenConfig {
	freeCount: number;
	recPrice: number[];
	vipCount: {}[];
	vipcost: number;
	item: number;
	reward: {id:number,type:number,count:number}[];
}

interface TrainDayAwardConfig {
	id: number;
	score: number;
	openDay: number;
	reward: {id:number,type:number,count:number}[];
}

interface ActivityType5Config {
	Id: number;
	rewards: {id:number,type:number,count:number}[];
	index: number;
	day: number;
	showType: number;
}

interface ItemComposeConfig {
	srcItemId: number;
	srcCount: number;
}

interface LoopRechargeConfig {
	awardList: {id:number,type:number,count:number}[];
	pay: number;
	day: number;
	index: number;
}

interface CampBattleConfig {
	fbId: number;
	openLevel: number;
	noAttack: number[];
	assigncounts: number;
	lastTimes: number;
	desc: string;
	npcPos: number[];
	openDay: number;
	rebornCd: number;
	openTips: string;
	buyRebornCdCost: number;
	assignPer: number;
}

interface CampBattlePersonalAwardConfig {
	id: number;
	count1: number;
	award: {id:number,type:number,count:number}[];
	integral: number;
}

interface CampBattlePersonalRankAwardConfig {
	award: {id:number,type:number,count:number}[];
	rank: number;
}

interface GodWingLevelConfig {
	level: number;
	itemId: number;
	slot: number;
}

interface MonsterTitleConf {
	Id: number;
	img: string;
	name: string;
	eff: string;
	anchorOffsetY: number;
}

interface FbChallengeLotteryConfig {
	count: number;
	group: {id:number,type:number,count:number}[];
}

interface LoginActivateConfig {
	openDay: number;
	vipLevel: number;
	loginDays: number;
	reward: {id:number,type:number,count:number}[];
	roleCount: number;
}

interface GodWingSuitConfig {
	precent: number;
	lv: number;
	suitname: string;
	skillicon: string;
	skilldesc: string;
	skillname: string;
	exattr: {value:number,type:number}[];
	skilllevel: number;
}

interface GodWingItemConfig {
	attr: {value:number,type:number}[];
	slot: number;
	needMoney: number;
	exPower: number;
	exattr: {value:number,type:number}[];
	showlv: number;
	level: number;
	composeItem: { id: number, count: number};
	itemId: number;
}

interface NewWorldBossRankConfig {
	reward: {id:number,type:number,count:number}[];
}

interface NewWorldBossAttrConfig {
	attr: {value:number,type:number}[];
	type: number;
	count: number;
}

interface NewWorldBossBaseConfig {
	fbId: number;
	clearCdCost: number;
	lvUpTime: {lv:number,t:number}[];
	openLv: number;
	bossTime: number;
	showAwards: {id:number,type:number,count:number}[];
	showDrows: {id:number,type:number,count:number}[];
}

interface MailIdConfig {
	attachment: {id:number,type:number,count:number}[];
}

interface CityBaseConfig {
	fbId: number;
	enterPoint: {y:number,x:number}[];
	masterPos: { y: number, x: number};
	rebornCd: number;
	statuePos: {};
	BuyRebornCost: number;
}

interface CityBossConfig {
	bossId: number;
	showReward: number[];
	killCount: number[];
	killBossId: number;
}

interface LevelMailConfig {
	idList: number[];
	level: number;
}

interface LoginDayMailConfig {

}

interface GuildBonFireConfig {
	value: number;
	level: number;
	reward: number;
}

interface ActivityType4Config {
	Id: number;
	titleName: string;
	rankType: number;
	ranking: number;
	rewards: {id:number,type:number,count:number}[];
	value: number;
	titleEffName: string;
}

interface VipGiftConfig {
	nameImg: string;
	awards: RewardData[];
	id: number;
	img: string;
	adImg: string;
	pageName: string;
	vipLv: number;
	bgImg: string;
	needYb: number;
	cond: number[];
	hfTimes: number;
}

interface ActivityType3Config {
	showType: number;
	type: number;
	index: number;
	mailInfo: { context: string, head: string};
	Id: number;
	rewards: {id:number,type:number,count:number}[];
	day: number;
	val: number;
	expAttr: {0:string,1:string,2:string,3:string,4:string,5:string,6:string,7:string,8:string,9:string,10:string,11:string,12:string,13:string,14:string,15:string}[];
	activityID: number[];
}

interface RechargeDaysAwardsConfig {
	id: number;
	awardList: RewardData[];
	bigReward: number;
}

interface RechargeItemsConfig {
	itemName: number;
	cash: number;
	amount: number;
	id: number;
	award: number;
	icon: string;
	desc: string;
}

interface WeaponSoulSuit {
	attr: {value:number,type:number}[];
	skilldesc: string;
	id: number;
	level: number;
	skillname: string;
	skillicon: string;
	ex_attr: {value:number,type:number}[];
}

interface WeaponSoulPosConfig {
	costNum: number;
	name: string;
	costItem: number;
	id: number;
	level: number;
	icon: number;
	showlv: number;
	attr: {value:number,type:number}[];
	assault: number;
}

interface WeaponSoulConfig {
	icon: string;
	name: string;
	pic: {0:string,1:string,2:string,3:string,4:string,5:string,6:string,7:string,8:string,9:string}[];
	id: number;
	outside: {0:string,1:string,2:string,3:string,4:string,5:string,6:string,7:string,8:string,9:string,10:string,11:string,12:string,13:string,14:string}[];
	actcond: number[];
	inside: {0:string,1:string,2:string,3:string,4:string,5:string,6:string,7:string,8:string,9:string,10:string,11:string,12:string,13:string,14:string,15:string,16:string}[];
}

interface KuangYuanConfig {
	npcId: number;
	baseTime: number;
	id: number;
	rewards: RewardData[];
	needTime: number;
	name: string;
	maxTimes: number;
	color: number;
	level: number;
	revengePrecent: number;
	robPrecent: number;
	rewardItem: RewardData[];
}

interface NpcBaseConfig {
	action: string;
	avatar: string;
	id: number;
	name: string;
	headIcon: string;
	controlTarget: {0:string,1:string,2:string,3:string,4:string,5:string,6:string,7:string,8:string,9:string,10:string,11:string,12:string,13:string,14:string,15:string,16:string,17:string}[];
	level: number;
	title: string;
	actType: number;
	weapon: string;
	icon: string;
}

interface CaiKuangConfig {
	maxOpenKuangCount: number;
	maxKuangCount: number;
	openLevel: number;
	openServerDay: number;
	maxRobCount: number;
	quickCost: number;
	refreshCost: number[];
	doubleCost: number;
	needItem: { id: number, count: number};
	kuangPos: {y:number,x:number,d:number}[];
	fubenId: number;
	transPos: {y:number,x:number}[];
	maxBeRobCount: number;
}

interface RichManRoundAwardConfig {
	award: RewardData[];
	round: number;
}

interface RichManGridConfig {
	param: RewardData[] | number;
	action: number;
	dir: number;
}

interface RichManBaseConfig {
	cameraWidth: number;
	cameraHeight: number;
	speed: number;
	diceTime: number;
	dicePrice: number;
	diceNum: number;
}

interface FuwenTreasureRewardConfig {
	id: number;
	reward: {id:number,type:number,count:number}[];
	needTime: number;
}

interface MonsterSpeakConfig {
	speak: string;
}

interface LeadFubenBaseConfig {
	rebornCd: number;
	BuyRebornCost: number;
}

interface GuanYinAwardConfig {
	award: { id: number, type: number, count: number};
	level: number;
}

interface MonthCardConfig {
	smeltPrecent: number;
	neiGongGoldPrecent: number;
	monthCardDays: number;
	expFubenPrecent: number;
	privilegeMoney: number;
	monthCardMoney: number;
	sweepPrecent: number;
	specialAttributes: {value:number,type:number}[];
}

interface ItemGiftConfig {
	id: number;
	type: number;
	awards: {id:number,type:number,count:number}[];
}

interface HeirloomEquipConfig {
	attr: {value:number,type:number}[];
	attr_add: number;
	slot: number;
	expend: { id: number, count: number};
	skillicon: string;
	image: string;
	name: string;
	model: string;
	skilldesc: string;
	lv: number;
	icon: number;
	skillname: string;
}

interface HeirloomEquipItemConfig {
	downitem: { id: number, count: number};
	expend: { id: number, count: number};
	item: number;
	pos: number;
}

interface HeirloomEquipFireConfig {
	expend: { id: number, count: number};
	slot: number;
}

interface HeirloomEquipSetConfig {
	attr: {value:number,type:number}[];
	weff: string;
	neff: string;
	lv: number;
	name: string;
}

interface ItemDescConfig {
	type: number;
	id: number;
	quality: number;
	subType: number;
	job: number;
}

interface DailyRechargeConfig {
	awardList: {id:number,type:number,count:number}[];
	pay: number;
	day: number;
	index: number;
}

interface FirstRechargeConfig {
	paydesc: string;
	pay: number;
	payReturn: number;
}

interface FirstRechargeClientConfig {
	RechargeRewardData: {id:number,type:number,count:number}[];
	weaponshow: string;
	bodyshow: string;
	job: number;
}

interface ExpFubenBaseConfig {
	openLv: number;
	freeCount: number;
	recPrice: number[];
	vipCount: {}[];
}

interface ExpFubenConfig {
	id: number;
	slv: number;
	fbId: number;
	exp: number;
}

interface ExpFbMonsterConfig {
	id: number;
	exp: number;
}

interface ImbaSkillReviseConfig {
	a: number;
	skill: number;
	imba_id: number;
	b: number;
	args: {vals:number[],type:number}[];
	d: number;
	cd: number;
}

interface HintConfig {
	type: number;
	index: number;
	target: {fbId:number,presceneid:number,achievementId:number,sceneid:number,isfull:number,guanqiaId:number,prefbId:number,taskId:number}[];
	targetType: number;
	image: string;
}

interface SkillsSorderConfig {
	skillorder: number[];
	job: number;
}

interface SkillsDescConfig {
	castRange: number;
	name: string;
	effectId: number;
	cd: number;
	actionType: string;
	sound: string;
	desc: string;
	wordEff: string;
	herdBossRate: number;
	herdPlayerRate: number;
	herdMonRate: number;
}

interface ScenesConfig {
	enterY: number;
	sceneid: number;
	turn: number;
	enterX: number;
	mapfilename: string;
	autoPunch: number;
	hideBodyEff: number;
	npc: {id:number,x:number,d:number,y:number}[];
	effPos: {pos:{y:number,x:number}[],eff:string}[];
	area: {attr:{type:number}[],grids:{y:number,x:number}[]}[];
}

interface YouDangConfig {
	id: number;
	fileName: number[];
}

interface BossHomeConfig {
	id: number;
	boss: number[];
	icon: number[];
	vip: number;
}

interface OpenSystemConfig {
	funName: string;
	openlevel: number;
	judge: number;
	id: number;
	openzs: number;
	opencheck: number;
	than: number;
}

interface LoongSoulBaseConfig {
	openlv: number;
}

interface DeathgainWayConfig {
	level: number;
	gainWay: {0:string,1:string,2:string,3:string,4:string,5:string,6:string,7:string}[];
	itemId: string;
}

interface DeathGuideConfig {
	id: number;
	lv: number;
	zslv: number;
	gainWay: {}[][];
}

interface TrainBaseConfig {
	actImbaId: number;
}

interface FbChNameConfig {
	group: number;
	name: string;
}

interface StoneOpenConfig {
	posId: number;
	openLv: number;
}

interface WorldBossKillMsgConfig {
	id: number;
	msg: string;
}

interface MonstershpConfig {
	typeface: number;
	hp: number;
	avatar: string;
}

interface MonthSignVipConfig {
	complementTimes: number;
	vipLevel: number;
}

interface MonthSignDaysConfig {
	days: number;
	rewards: {id:number,type:number,count:number}[];
}

interface MonthSignBaseConfig {
	openLevel: number;
}

interface MonthSignConfig {
	rewards: {id:number,type:number,count:number}[];
	day: number;
	dayLabel: number;
	vipLabel: number;
}

interface BookListConfig {
	nameImg: string;
	name: string;
	id: number;
	sort: number;
	icon: string;
	idList: number[];
}

interface DecomposeConfig {
	imgGray: string;
	name: string;
	topStar: number;
	imgLight: string;
	id: number;
	quality: number;
	value: number;
	itemId: number;
	imgShow: string;
}

interface SuitConfig {
	attrs: {value:number,type:number}[];
	count: number;
	id: number;
	level: number;
	idList: number[];
}

interface CardConfig {
	attrs: {value:number,type:number}[];
	cost: number;
	id: number;
	level: number;
	power: number;
	itemId: number;
	specialAttr: {value:number,type:number}[];
}

interface TreasureBoxRateConfig {
	fubenIdList: number;
}

interface TreasureBoxGridConfig {
	chapter: number;
	pos: number;
}

interface TreasureBoxConfig {
	quality: number;
	type: number;
	name: string;
	imgOpen: string;
	imgClose: string;
	rewards: {id:number,type:number,count:number}[];
	time: number;
	desc: {0:string,1:string,2:string,3:string,4:string,5:string,6:string,7:string,8:string,9:string,10:string,11:string,12:string}[];
}

interface TreasureBoxBaseConfig {
	openLevel: number;
	moneyCoefficient: number;
	getItemguide: number;
	openQueue: number;
	thirdOpenLevel: number;
	maxFreeNumber: number;
}

interface TianTiConstConfig {
	buyChallengesCountYuanBao: number;
	challengesCountCd: number;
	openLevel: number;
	diamond: { id: number, level: number};
	maxRestoreChallengesCount: number;
	maxBuyChallengesCount: number;
}

interface TianTiDanConfig {
	winAward: number;
	showDan: number;
	danAward: {id:number,type:number,count:number}[];
	id: number;
	level: number;
	showStar: number;
	showLevel: string;
}

interface TianTiRankAwardConfig {
	award: {id:number,type:number,count:number}[];
	rank: number;
}

interface NeiGongBaseConfig {
	openLevel: number;
	openGuanqia: number;
	levelPerStage: number;
	maxStage: number;
	maxLevel: number;
}

interface NeiGongStageConfig {
	tips: number;
	costMoney: number;
	attribute: {value:number,type:number}[];
	level: number;
	totalExp: number;
	addExp: number;
}

interface FuwenTreasureConfig {
	huntTenth: number;
	huntOnce: number;
	maxBlissVal: number;
	openlevel: number;
	huntItem: number;
}

interface FuwenTreasureLevelConfig {
	level: number;
	showicon: {id:number,type:number,count:number}[];
	levelend: number;
}

interface FbChallengeConfig {
	fbId: number;
	zsLevelLimit: number;
	levelLimit: number;
	id: number;
	layer: number;
	limitTimes: number;
	lotteryCount: number;
	dayReward: number;
	clearReward: {id:number,type:number,count:number}[];
	group: number;
	showIcon: number;
	equipPos: number;
	describe: string;
}

interface RuneConverConfig {
	id: number;
	conversion: number;
	checkpoint: number;
}

interface RuneBaseConfig {
	gain: number;
	power: number;
	id: number;
	expend: number;
	attr: {value:number,type:number}[];
	chip: number;
	equipAttr: {value:number,type:number}[];
	exAttr: {value:number,type:number}[];
	specialAttr: {value:number,type:number}[];
	goldCount: number;
}

interface RuneLockPosConfig {
	lockLv: number;
	pos: number;
}

interface RuneNameConfig {
	runeName: string;
	type: number;
}

interface RuneOtherConfig {
	zsLevel: number;
	goldItemId: number;
	maxQuality: number;
	maxEquip: number;
	maxDecompose: number;
}

interface RuneAttrTypeConfig {
	id: number;
	type: number;
}

interface TogetherHitEquipPageConfig {
	name: string;
	id: number[];
}

interface TogetherHitEquipQmConfig {
	num: number;
	exAttr: {value:number,type:number}[];
	lv: number;
	zslv: number;
	desc: string;
	noticeId: number;
}

interface TogetherHitEquipExchangeConfig {
	zsLevel: number;
	exchangeMaterial: {id:number,type:number,count:number}[];
	id: number;
	level: number;
	getItem: { id: number, type: number, count: number};
}

interface TogetherHitConfig {
	exAttr: {value:number,type:number}[];
	level: number;
	condition: {v:number,t:number}[];
	skill_id: number[];
}

interface LimitTimeTaskConfig {
	controlTarget: {0:string,1:string,2:string,3:string,4:string,5:string,6:string}[];
	type: number;
	name: string;
	control: number;
	id: number;
	awardList: {id:number,type:number,count:number}[];
	target: number;
	desc: string;
}

interface LimitTimeConfig {
	taskIds: number[];
	openZhuan: number;
	time: number;
	id: number;
	openLevel: number;
}

interface BubbleConfig {
	news: string;
	bubbleid: number;
}

interface DefineEff {
	souce: string;
	effid: number;
}

interface ActorExRingConfig {
	openDay: number;
	effid: number;
	id: number;
	openYb: number;
	wexplain: string;
	explain: string;
	needZs: number;
	name: string;
	order: number;
	needLevel: number;
	openVip: number;
	icon: string;
	mtCombat: number;
	showMonsterLv: number;
	useYb: number;
	skillGridYb: number;
	monsterId: number;
}

interface ActorExRingBookConfig {
	attr: {value:number,type:number}[];
	num: number;
	skillIcon: string;
	skillDesc: string;
	id: number;
	level: number;
	skillName: string;
	itemId: number;
	bookAttrPer: {value:number,type:number}[];
	exPower: number;
}

interface ActorExRing2Config {
	bjRate: number;
	upPower: number;
	cost: number;
	costItem: number;
	bjAddPower: number;
	judgeup: number;
	extAttrAward: {value:number,type:number}[];
	addPower: number;
	level: number;
	SpecialRingSkin: string;
	attrAward: {value:number,type:number}[];
}

interface ActorExRing3Config {
	bjRate: number;
	upPower: number;
	cost: number;
	costItem: number;
	bjAddPower: number;
	judgeup: number;
	addPower: number;
	level: number;
	SpecialRingSkin: string;
	attrAward: {value:number,type:number}[];
}

interface ActorExRing4Config {
	bjRate: number;
	upPower: number;
	cost: number;
	costItem: number;
	bjAddPower: number;
	judgeup: number;
	extAttrAward: {value:number,type:number}[];
	addPower: number;
	level: number;
	SpecialRingSkin: string;
	attrAward: {value:number,type:number}[];
}

interface ActorExRing5Config {
	bjRate: number;
	upPower: number;
	cost: number;
	costItem: number;
	bjAddPower: number;
	judgeup: number;
	addPower: number;
	level: number;
	SpecialRingSkin: string;
	attrAward: {value:number,type:number}[];
}

interface ActorExRing6Config {
	bjRate: number;
	upPower: number;
	cost: number;
	costItem: number;
	bjAddPower: number;
	judgeup: number;
	addPower: number;
	level: number;
	SpecialRingSkin: string;
	attrAward: {value:number,type:number}[];
}

interface ActorExRing7Config {
	tollSkillGrid: number;
	cost: number;
	costItem: number;
	level: number;
	attrAward: {value:number,type:number}[];
	freeSkillGrid: number;
	judgeup: number;
	exPower: number;
	summonerSkillId: number;
	extAttrAward: {value:number,type:number}[];
}

interface ActorExRingAbilityConfig {
	abilityName: string;
	abilityDesc: string;
	id: number;
	ringLv: number;
	abilityIcon: string;
}

interface ActorExRingItemConfig {
	id: number;
	abilityName: string;
	attrPer: number;
	abilityDesc: string;
	rid: number;
	lv: number;
	monId: number;
	itemId: number;
}

interface MonstersConfig {
	type: number;
	atk: number;
	def: number;
	id: number;
	hp: number;
	effect: number;
	name: string;
	scale: number;
	head: number;
	level: number;
	avatar: number;
	res: number;
	dir: number;
	attrange: number;
	penetRate: number;
	dirNum: number;
	titleId: number;
}

interface ExpConfig {
	expcache: number;
	level: number;
	exp: number;
}

interface ItemConfig {
	id: number;
	name: string;
	icon: number;
	descIndex: number;
	level: number;
	zsLevel: number;
	desc: string;
	bagType: number;
	split: number;
	needyuanbao: number;
	useCond: number;
}

interface EquipConfig {
	appearance: string;
	stoneId: number;
	id: number;
	stoneNum: number;
	hp: number;
	atk: number;
	noWSoulEff: number;
	def: number;
	res: number;
	baseAttr2: { value: number, type: number};
	baseAttr1: { value: number, type: number};
	exAttr1: { value: number, type: number};
	exPower: number;
	exAttr2: { value: number, type: number};
	moneyType: {count:number,type:number}[];
}

interface SkillsConfig {
	id: number;
	args: { a: number, b: number, type: number, attr: number, c: number};
	desc_ex: number[];
	desc: number;
	castType: number;
	affectRange: number;
	affectCount: number;
	repelDistance: number;
	effType: number;
	tarEff: number[];
	teleport: number;
	targetType: number;
	passive: { rate: number, cond: number, p1: number, p3: number, p4: number, p2: number};
	selfEff: number[];
	calcType: number;
	otarEff: number[];
	otherSkills: number[];
}

interface SkirmishRewardConfig {
	rewards: { essence: number, exp: number, gold: number};
	level: number;
}

interface SkirmishBaseConfig {
	failedRewardRate: number;
	openLevel: number;
	rankBoardSize: number;
	subPkvalCost: number;
	rankMaxSize: number;
	onesPkval: number;
	refreshCost: number;
	listSize: number;
	range: number;
	subPkval: number;
	positionCount: number;
	maxPkval: number;
	refreshTime: number;
	noExpCount: number;
}

interface EffectsConfig {
	overlayType: number;
	type: number;
	group: number;
	args: { i: number, c: number, b: number, d: number, a: number, t: number};
	id: number;
	duration: number;
	interval: number;
	isBuff: number;
	effName: string;
	unionBuff: number[];
	probabilityBuff: number;
	effID: number;
	otherBuffs: number[];
}

interface ChaptersRewardConfig {
	id: number;
	rewards: {id:number,type:number,count:number}[];
	name: string;
	needLevel: number;
}

interface WorldRewardConfig {
	groupId: number;
	name: string;
	position: { y: number, x: number};
	id: number;
	rewards: {id:number,type:number,count:number}[];
	icon: string;
	needLevel: number;
}

interface WingLevelConfig {
	itemNum: number;
	appearance: string;
	exp: number;
	attrPill: number;
	itemPrice: number;
	specialBaseExp: number;
	name: string;
	flyPill: number;
	attr: {value:number,type:number}[];
	level: number;
	specialRate: {rate:number,times:number}[];
	itemId: number;
	pasSkillId: number;
	clearTime: number;
}

interface WingCommonConfig {
	flyPillId: number;
	openLevel: number;
	attrPillId: number;
	levelItemid: number;
	flyPillAttr: {value:number,type:number}[];
	openDay: number;
	levelExpChange: {id:number,type:number,count:number}[];
	tempattr: number;
	flyPill: number;
	attrPill: {value:number,type:number}[];
	levelItemidStage: number;
}

interface DailyFubenConfig {
	levelLimit: number;
	id: number;
	showItem: { id: number, type: number, count: number};
	freeCount: number;
	sweepLevel: number;
	vipBuyCount: {}[];
	name: string;
	zsLevel: number;
	buyPrice: {}[];
	bossId: number;
	des: string;
	monthcard: number;
	specialCard: number;
}

interface DailyConfig {
	awardList: {id:number,type:number,count:number}[];
	id: number;
	desc: string;
	name: string;
	control: number;
	target: number;
	controlTarget: {0:string,1:string,2:string,3:string,4:string}[];
	trainExp: number;
	activeValue: number;
}

interface DailyAwardConfig {
	id: number;
	awardList: {id:number,type:number,count:number}[];
	valueLimit: number;
}

interface ImbaJigsawConf {
	jigsawId: number;
	name: string;
	power: number;
	point: { y: number, x: number};
	guide: string;
	img: string;
	attrs: {value:number,type:number}[];
}

interface ImbaConf {
	jigsawId: number[];
	getDesc: string;
	index: number;
	power: number;
	id: number;
	img: string;
	buttonDesc: string;
	imgName: string;
	winGuide: {0:string,1:string,2:string,3:string,4:string,5:string,6:string}[];
	simpleDesc: string;
	count: number;
	computingMode: number;
	funcDesc: string;
	imgShadow: string;
	name: string;
	turnDesc: string;
	attrs: {value:number,type:number}[];
	specialAttr: {value:number,type:number}[];
	exattrs: {value:number,type:number}[];
}

interface AchievementTaskConfig {
	type: number;
	index: number;
	finishwarning: string;
	showType: number;
	achievementType: number;
	desc: string;
	score: number;
	achievementId: number;
	control: number;
	target: number;
	awardList: {id:number,type:number,count:number}[];
	name: string;
	taskId: number;
	startwarning: string;
	controlTarget: {0:string,1:string,2:string,3:string,4:string,5:string,6:string}[];
}

interface ZhuanShengConfig {
	normalItem: number;
	conversionCount: number;
	advanceCount: number;
	normalCount: number;
	normalExp: number;
	advanceExp: number;
	level: number;
	advanceItem: number;
	conversionRate: number;
}

interface ZhuanShengLevelConfig {
	atk: number;
	exp: number;
	res: number;
	level: number;
	hp: number;
	def: number;
}

interface JingMaiStageConfig {
	attr: {value:number,type:number}[];
	level: number;
	stage: number;
	name: string;
}

interface JingMaiLevelConfig {
	attr: {value:number,type:number}[];
	level: number;
	count: number;
	itemId: number;
}

interface JingMaiCommonConfig {
	levelItemChange: number;
	stageMax: number;
	openLevel: number;
	levelMax: number;
	itemid: number;
	levelItemid: number;
	levelPerStage: number;
	levelItemidStage: number;
}

interface SkillsUpgradeConfig {
	cost: number;
	level: number;
}

interface SkillsOpenConfig {
	index: number;
	level: number;
}

interface ZhuanShengExpConfig {
	exp: number;
}

interface NewRoleConfig {
	zsLevel: number;
	level: number;
	index: number;
	vip: number;
}

interface ForgeIndexConfig {
	index: number;
	posId: number;
}

interface StoneLevelCostConfig {
	soulNum: number;
	level: number;
	stoneId: number;
}

interface StoneLevelConfig {
	level: number;
	index: number;
	posId: number;
	attr: {value:number,type:number}[];
}

interface ZhulingAttrConfig {
	level: number;
	index: number;
	posId: number;
	attr: {value:number,type:number}[];
}

interface ZhulingCostConfig {
	price: number;
	level: number;
	count: number;
	itemId: number;
}

interface EnhanceAttrConfig {
	attr: {value:number,type:number}[];
	level: number;
	index: number;
	posId: number;
}

interface EnhanceCostConfig {
	level: number;
	stoneNum: number;
	stoneId: number;
}

interface LegendLevelupConfig {
	itemId: number;
	newEquipId: number;
	count: number;
	oldEquipId: number;
}

interface LegendComposeConfig {
	itemId: number;
	count: number;
	equipId: number;
}

interface ExRingConfig {
	id: number;
	name: string;
	costItem: number;
}

interface ExRing0Config {
	extAttrAward: {};
	level: number;
	attrAward: {};
	cost: number;
	power: number;
}

interface ExRing1Config {
	extAttrAward: {};
	level: number;
	attrAward: {};
	cost: number;
	power: number;
}

interface EquipItemConfig {
	id: number;
	discountImg: string;
	count: number;
	itemId: number;
}

interface ItemStoreConfig {
	index: number;
	id: number;
	price: number;
	use: string;
	itemId: number;
	vipLimit: {}[];
}

interface StoreCommonConfig {
	refreshYuanBao: number;
	refreshItem: number;
	refreshCd: number;
	IntegralProportion: number;
	refreshIntegral: number;
	refreshLimit: number;
}

interface IntegralStore {
	type: number;
	index: number;
	use: string;
	price: number;
	showYuanBao: number;
	count: number;
	itemId: number;
}

interface TreasureOverViewConfig {
	id: number;
	itemId: { id: number, type: number, count: number};
}

interface EffectConfig {
	id: number;
	type: number;
	fileName: string;
}

interface VipConfig {
	attrAddition: {value:number,type:number}[];
	vipImg: string;
	awards: {id:number,type:number,count:number}[];
	boss2buy: number;
	id: number;
	boss1buy: number;
	description: string;
	needYb: number;
}

interface ShieldConfig {
	attr: {value:number,type:number}[];
	name: string;
	exp: number;
	level: number;
	itemId: number;
}

interface ShieldStageConfig {
	attr: {value:number,type:number}[];
	normalCost: number;
	normalCostTip: number;
	normalBaseExp: number;
	stage: number;
	icon: string;
}

interface LoongSoulConfig {
	attr: {value:number,type:number}[];
	level: number;
	itemId: number;
	exp: number;
}

interface LoongSoulStageConfig {
	attr: {value:number,type:number}[];
	normalCost: number;
	normalCostTip: number;
	normalBaseExp: number;
	stage: number;
	icon: string;
}

interface TreasureHuntConfig {
	huntTenth: number;
	huntOnce: number;
	hefuDay: number;
	huntItem: number;
}

interface TreasureHuntPoolConfig {
	index: number;
	reward: {id:number,type:number,count:number}[];
}

interface TreasureHuntPoolHefuConfig {
	index: number;
	reward: {id:number,type:number,count:number}[];
}

interface SkirmishRankConfig {
	rewards: {id:number,type:number,count:number}[];
	maxRank: number;
	minRank: number;
}

interface GainItemConfig {
	gainWay: {0:string,1:string,2:string,3:string,4:string,5:string,6:string,7:string,8:string,9:string,10:string}[][];
	itemId: number;
}

interface BagBaseConfig {
	baseSize: number;
	rowSize: number;
}

interface BagExpandConfig {
	row: number;
	cost: number;
}

interface WorldBossConfig {
	type: number;
	fbid: number;
	zslook: number[];
	zsLevel: number;
	canRewardshow: {0:number,1:number,2:number,id:number,type:number,count:number}[];
	belongRewardshow: {0:number,1:number,2:number,id:number,type:number,count:number}[];
	level: number;
	showReward: number[];
	bossId: number;
	showName: string;
	samsaraLv: number;
}

interface WorldBossBaseConfig {
	belongMaxCount: number[];
	openLevel: number[];
	dayCount: number[];
	openCheck: number;
	challengeItem: number[];
	canSeeDarkBossDay: number;
	clearCdCost: number[];
	rebornItem: number;
	canSennDarkBoss: number;
	belongCount: number[];
	challengeItemYb: number[];
	shenyuOpenDay: number;
	buyCountPrice: number[];
}

interface ServerTips {
	id: number;
	tips: string;
}

interface AttrPowerConfig {
	power: number;
	type: number;
	relate_power: number;
	relate_type: number;
}

interface TrainLevelConfig {
	itemAward: {};
	type: number;
	power: number;
	exp: number;
	trainlevel: number;
	level: number;
	attrAward: {value:number,type:number}[];
	trainName: string;
	img: string;
}

interface LoginRewardsConfig {
	day: number;
	rewards: {id:number,type:number,count:number}[];
}

interface ActivityType1Config {
	index: number;
	rewards: {id:number,type:number,count:number}[];
	Id: number;
	level: number;
	zslevel: number;
	showType: number;
	wingLv: number;
	zzLv: number;
	lhLv: number;
	tjPower: number;
	equipPower: number;
	consumeYuanbao: number;
	huoyanRingLv: number;
	total: number;
	lunhLv: number;
	zhanlingLv: number;
}

interface ActivityType2Config {
	needRecharge: number;
	index: number;
	Id: number;
	rewards: {id:number,type:number,count:number}[];
	currencyType: number;
	giftName: string;
	count: number;
	showType: number;
	source: {0:string,1:string,2:string,3:string,4:string,5:string,6:string,7:string,8:string,9:string,10:string,11:string,12:string,13:string,14:string}[];
	price: number;
	vip: number;
	originalPrice: number;
	discount: number;
	shamScount: number;
	limitTime: number[];
	shamScountRed: number[];
	shamScountLimit: number;
	scount: number;
}

interface ActivityType6Config {
	sort: number;
	bossID: {}[][];
	index: number;
	jump: {0:string,1:string,2:string,3:string,4:string,5:string,6:string}[][];
	Id: number;
	rewards: {id:number,type:number,count:number,job:number}[];
	groupName: string;
	giftName: string;
}

interface ActivityType8Config {
	index: number;
	rewardsNum: number;
	Id: number;
	rewards: number;
	ybCount: number;
	showType: number;
	cond: number;
}

interface ActivityType7Config {
	showType: number;
	index: number;
	title: number;
	Id: number;
	rewards: {id:number,type:number,count:number}[];
	count: number;
	score: number;
	itemCount: number;
	itemId: number;
	exValue: { bossModel: string};
	items: {id:number,count:number}[];
	dailyCount: number;
}

interface ActivityConfig {
	desc: string;
	tabName: string;
	startTime: string;
	Id: number;
	timeType: number;
	endTime: string;
	activityType: number;
	pageStyle: number;
	hfTimes: number;
	pageSkin: string;
}

interface ActivityBtnConfig {
	type: number;
	sort: number;
	activityType: number;
	id: number;
	title: string;
	icon: string;
	light: number;
	timeType: number;
	acDesc: string;
	endTime: string;
	startTime: string;
	showType: number;
	showReward: {id:number,type:number,count:number}[];
	hfTimes: number;
	relyOn: number[];
	pageSkin: string;
	jump: {0:string,1:string,2:string,3:string,4:string,5:string,6:string}[];
	pageStyle: number;
}

interface SkillPowerConfig {
	index: number;
	powerPerLevel: number;
}

interface KnighthoodConfig {
	attrs: {value:number,type:number}[];
	type: string;
	effid: number;
	achievementIds: {achieveId:number,taskId:number}[];
	level: number;
	desc: string;
}

interface KnighthoodBasicConfig {
	actImbaId: number;
	perLevel: number;
}

interface ChongZhi1Config {
	type: number;
	day: number;
	awardList: {id:number,type:number,count:number}[][];
	pay: number;
	index: number;
}

interface ChongZhi2Config {
	type: number;
	day: number;
	openType: number;
	awardList: {id:number,type:number,count:number}[];
	pay: number;
	index: number;
}

interface FuncNoticeConfig {
	openLv: number;
	openPanel: {0:string,1:string,2:string,3:string,4:string,5:string,6:string}[];
	index: number;
}

interface RefinesystemExpConfig {
	id: number;
	yuanBao: number;
	exp: number;
}

interface VipGridConfig {
	grid: number;
	vip: number;
}

interface OtherBoss1Config {
	llimit: number;
	fbid: number;
	rank2: {id:number,type:number,count:number}[];
	shield: {shield:number,hp:number,reward:number}[];
	hlimit: number;
	bossId: number;
	rankname: {0:string,1:string,2:string,3:string,4:string}[];
	rank4: {id:number,type:number,count:number}[];
	rank3: {id:number,type:number,count:number}[];
	rank1: {id:number,type:number,count:number}[];
	showReward: number[];
	killReward: number;
}

interface EquipPointConstConfig {
	rankGrowUp: number;
}

interface EquipPointBasicConfig {
	id: number;
	activationItem: { id: number, count: number};
	name: string;
	activationLevel: number;
}

interface EquipPointGrowUpConfig {
	attrs: {value:number,type:number}[];
	growUpState: number;
	id: number;
	needLevel: number;
	growUpItem: { id: number, count: number};
	growUpProbability: number;
	star: number;
	growUpId: number;
	level: number;
	rank: number;
}

interface EquipPointRankConfig {
	id: number;
	rankUpProbability: number;
	rankUpItem: { id: number, count: number};
	rank: number;
}

interface EquipPointResolveConfig {
	materials: {id:number,type:number,count:number}[];
	itemId: number;
}

interface WanBaGiftbagBasic {
	day: number;
	items: {id:number,type:number,count:number}[];
}

interface HelpInfoConfig {
	id: number;
	text: string;
}

interface ClientGlobalConfig {
	effectItems: {};
}

interface CashCowBoxConfig {
	time: number;
	index: number;
	box: number[];
}

interface CashCowLimitConfig {
	maxTime: number;
	vip: number;
}

interface CashCowBasicConfig {
	yuanbao: number;
	time: number;
	gold: number;
}

interface CashCowAmplitudeConfig {
	level: number;
	needExp: number;
	rate: number;
}

interface GuildConfig {
	openLevel: number;
	commonSkillNames: {0:string,1:string}[];
	posCounts: {}[][];
	buildingTips: {0:string,1:string,2:string,3:string,4:string,5:string,6:string,7:string,8:string,9:string,10:string,11:string,12:string,13:string,14:string,15:string,16:string}[];
	maxMember: number[];
	bonfireItem: number;
	impeachTime: number;
	practiceSkillCount: number;
	skillDesc: {0:string,1:string,2:string,3:string,4:string,5:string,6:string}[];
	impeachCost: number;
	bonfireReward: {id:number,type:number,count:number}[];
	commonSkillCount: number;
	affairMember: number[];
	bonfirecount: number;
	bonfirecaution: number;
	commonSkillLevels: number[];
	practiceSkillLevels: number[];
	bonfireValue: number;
	buildingNames: {0:string,1:string,2:string,3:string}[];
	practiceSkillNames: {0:string,1:string,2:string,3:string}[];
}

interface GuildCommonSkillConfig {
	1: {value:number,type:number}[];
	attrs: {value:number,type:number}[];
	id: number;
	level: number;
	contribute: number;
	money: number;
}

interface GuildPracticeSkillConfig {
	attrs: {value:number,type:number}[];
	upExp: number;
	exp: number;
	id: number;
	level: number;
	contribute: number;
	money: number;
}

interface GuildCreateConfig {
	vipLv: number;
	moneyCount: number;
	level: number;
	award: number;
	moneyType: number;
}

interface GuildDonateConfig {
	type: number;
	index: number;
	awardFund: number;
	id: number;
	awardContri: number;
	dayCount: number[];
	count: number;
}

interface GuildLevelConfig {
	type: number;
	upFund: number;
	level: number;
}

interface GuildTaskConfig {
	type: number;
	name: string;
	conID: number;
	id: number;
	desc: string;
	target: number;
	param: number;
	controlTarget: {0:string,1:string,2:string,3:string,4:string,5:string,6:string,7:string,8:string,9:string,10:string,11:string,12:string,13:string,14:string,15:string}[];
}

interface WelfareConfig {
	panel: number;
	type: number;
	id: number;
	icon: string;
	desc: string;
	activityId: number;
}

interface OtherBoss2Config {
	show: {id:number,type:number,count:number}[];
	name: string;
	levelLimit: number;
	id: number;
	titledes: string;
	challengeTime: number[];
	itemId: number;
}

interface MiJiGridConfig {
	zsLevel: number;
	vipLevel: number;
	grid: number;
}

interface MiJiSkillConfig {
	id: number;
	power: number;
	item: number;
	p1: number;
	p2: number;
	p3: number;
}

interface TitleConf {
	keepTime: number;
	type: string;
	Id: number;
	img: string;
	condition: string;
	rare: number;
	name: string;
	level: number;
	sort: number;
	attrs: {value:number,type:number}[];
	eff: string;
}

interface TrainLevelAwardConfig {
	skillname: string;
	exattrs: {value:number,type:number}[];
	id: number;
	level: number;
	icon: string;
	desc: string;
}

interface TerraceDescConfig {
	pId: number;
	desc: string;
}

interface WeiXiGuanZhuConst {
	awards: {id:number,type:number,count:number}[];
	context: string;
	head: string;
}

interface GuildBattleLevel {
	fbId: number;
	feats: number;
	name: string;
	help: string;
	id: number;
	switchSceneCd: number;
	resurgenceCd: number;
	btnName: string;
}

interface GuildBattleConst {
	occupationAward: {id:number,type:number,count:number}[];
	openLevel: number;
	gateLotteryWaitTime: number;
	maxDay: number;
	openServer: { min: number, hours: number, day: number};
	memberOccupationAwardHead: string;
	hefuAward: { leader: { award: {id:number,type:number,count:number}[][], context: string, title: string}, normal: { award: {id:number,type:number,count:number}[][], context: string, title: string}};
	gatherTime: number;
	hefuOpen: {min:number,hours:number,day:number}[];
	occupationAwardShow: {id:number,type:number,count:number}[];
	memberOccupationAwardContext: string;
	gateLiveTime: number;
	continueTime: number;
}

interface GuildBattleDayAward {
	day: number;
	award: {id:number,type:number,count:number}[];
}

interface GuildBattleDistributionAward {
	count: number;
	id: number;
	awardShow: {id:number,type:number,count:number}[];
	award: {id:number,type:number,count:number}[];
	rank: number;
	rewardFlag: number;
}

interface GuildBattlePersonalAward {
	id: number;
	award: {id:number,type:number,count:number}[];
	integral: number;
}

interface GuildBattlePersonalRankAward {
	award: {id:number,type:number,count:number}[];
	rank: number;
}

interface GuildStoreConfig {
	day: number;
	practiceSkillCount: number;
	item: number[];
	time: number[];
	needContrib: number;
}

interface FriendLimit {
	chatLv: number;
	contentLimit: number;
	chatsListLen: number;
	blacklistLen: number;
	applyListLen: number;
	friendListLen: number;
	sysLv: number;
}

interface ZhuangBanId {
	attr: {value:number,type:number}[];
	sort: number;
	roletype: number;
	cost: { num: number, itemId: number};
	id: number;
	res: string;
	name: string;
	pos: number;
	invalidtime: number;
	exPower: number;
	attr_precent: {pre:number,pos:number}[];
	wing_attr_per: number;
}

interface ZhuangBanConfig {
	activecontext: string;
	zhuangbanpos: {0:string,1:string}[];
	noticeid: number;
	mailinvalidcontext: string;
	mailinvalidtitle: string;
}

interface FeatsStore {
	shopType: number;
	index: number;
	buyType: number;
	use: string;
	costMoney: { count: number, type: number};
	goods: {id:number,type:number,count:number}[];
	costItem: { id: number, count: number};
	daycount: number;
}

interface GuildBossConfig {
	radisLv: number;
	notOpenDayOfWeek: number;
	dayTimes: number;
}

interface GuildBossInfoConfig {
	fbId: number;
	boss: { posY: number, monId: number, posX: number};
	ShowImg: string;
	id: number;
	passAwards: {id:number,type:number,count:number}[];
	enterAwards: number;
	killerAwards: {id:number,type:number,count:number}[];
}

interface GuildBossHpAwardsConfig {
	idx: number;
	randTimes: number[];
	awards: {id:number,type:number,count:number}[];
	id: number;
	hpPer: number;
}

interface GuildBossRankConfig {
	srank: number;
	erank: number;
	awards: {id:number,type:number,count:number}[];
}

interface AllWorldConfig {
	id: number;
	mapGroup: number[];
	name: string;
	position: { y: number, x: number};
}

interface GuideConfig {
	guideId: number;
	type: number;
	direction: number;
	tips: string;
	start: { value: number, type: number};
	target: string;
	view: string;
	stepId: number;
	overs: {value:number,type:number}[];
}

interface TogerherHitBaseConfig {
	TogExgRate: number;
	actImbaId: number;
	needCount: number;
}

interface ActorExRingCommon {
	actImbaId: number;
	openlevel: number;
	MaxOutNum: number[];
}

interface HeirloomTreasureConfig {
	huntTenth: number;
	huntOnce: number;
	openDay: number;
	openZSlevel: number;
	freeCount: number;
	maxBlissVal: number;
	boxes: {id:number,type:number,count:number}[];
	huntItem: number;
}

interface HeirloomTreasureRewardConfig {
	id: number;
	reward: {id:number,type:number,count:number}[];
	needTime: number;
}

interface OptionalGiftConfig {
	show: {id:number,str:string,reward:{id:number,type:number,count:number}[]}[];
	itemid: number;
	options: {itemcount:number,useGrid:number,level:number,itemid:number,zslimit:number}[];
}

interface GodweaponItemConfig {
	id: number;
	skill: number[];
	attr: {value:number,type:number}[];
}

interface GodWeaponLineConfig {
	attr: {value:number,type:number}[];
	upLevel: number;
	maxLevel: number;
	skinId: number;
	lockDesc: string;
	skillName: string;
	iconId: number;
	lineId: number[];
	condition: {}[];
	exPower: number;
	skill: number;
	exattr: {value:number,type:number}[];
	newskill: number;
	passiveskill: number;
}

interface GodWeaponLevelConfig {
	everyExp: number;
	exp: number;
	attr3: {value:number,type:number}[];
	attr2: {value:number,type:number}[];
	attr1: {value:number,type:number}[];
}

interface GodWeaponBaseConfig {
	weaponItemCount: number;
	mailData: { context: string, head: string};
	openLevel: number[];
	zhuanshengLevel: number;
	godWeaponCount: number;
	noticeDay: number;
	freeCount: number;
	skillResetCost: number;
	noticeSkillId: {}[][];
	needLevel: number;
	noticeOpenLv: number;
	fbGrade: number[];
	fubenItem: number;
	openDay: number;
}

interface GodWeaponFubenConfig {
	fbId: number;
	award: {id:number,type:number,count:number}[][];
	firstAward: {id:number,type:number,count:number}[];
}

interface GWSkillReviseConfig {
	targetEff: number[];
	gwIndex: number;
	skill: number;
	desc: string;
	d: number;
	selfEff: number[];
	args: {vals:number[],type:number}[];
	critDamage: number;
	affectCount: number;
	affectRange: number;
}

interface MoneyConfig {
	id: number;
	name: string;
	describe: string;
}

interface FbChallengeBaseConfig {
	LotteryOpenLevel: number;
}

interface YuPeiConfig {
	attrs: {value:number,type:number}[];
	count: number;
	item_id: number;
	level: number;
	deterLevel: number;
}

interface YuPeiBasicConfig {
	deterDesc: string;
	perLevel: number;
	openLv: number;
}

interface PassionPointConfig {
	fbId: number;
	expPoint: {}[][];
	openLv: number;
	lastTimes: number;
	desc: string;
	npcPos: number[];
	sendAwardSec: number;
	rebornCd: number;
	efficiencyDesc: string;
	openTips: string;
	buyRebornCdCost: number;
}

interface PassionPointAwardConfig {
	id: number;
	color: number;
	reward: {id:number,type:number,count:number}[];
	times: number;
}

interface RoleConfig {
	atk: number;
	def: number;
	hp: number;
	job: number;
	ms: number;
	acrit: number;
	tough: number;
	mp: number;
	as: number;
	level: number;
	crit: number;
	res: number;
}

interface NewFuncNoticeConfig {
	icon: string;
	close: number;
	id: number;
	openLv: number;
	open: number;
	pic: string;
}

interface ReincarnationBase {
	openLevel: number;
	levelLimit: number;
	hellsLv: number[];
	headName: {0:string}[];
	hellsName: string;
	animalsLv: number[];
	advanceItem: { id: number, time: number, value: number};
	effectAttrType: number[];
	levelExchangeTimes: number;
	normalItem: { id: number, time: number, value: number};
	ghostsName: string;
	godsName: string;
	humansName: string;
	state: {0:string,1:string}[];
	demigodsLv: number[];
	demigodsName: string;
	animalsName: string;
	ghostsLv: number[];
	equipsList: {}[][];
	humansLv: number[];
	godsLv: number[];
}

interface ReincarnationExchange {
	value: number;
	Level: number;
}

interface ReincarnationLevel {
	attrs: {value:number,type:number}[];
	level: number;
	consume: number;
}

interface ReincarnateSpirit {
	attrs: {value:number,type:number}[];
	level: number;
	consume: number;
	slot: number;
}

interface ReincarnateSuit {
	attrs: {value:number,type:number}[];
	level: number;
	ex_power: number;
	exAttrs: {value:number,type:number}[];
}

interface ReincarnateEquip {
	id: number;
	exp: number;
}

interface EquipWithEffConfig {
	offX: number;
	inShowEff: string;
	nextShowEff: string;
	id: string;
	scaling: number;
	offY: number;
}

interface PrestigeBase {
	recycle: string;
	normalDeterDam: number;
	openLevel: number;
	cost: number;
	rankDeterDam: number[];
	skillTips: string[];
	topThree: {des:string, res:string}[];
	openDay: number;
}

interface PrestigeLevel {
	attr: {value:number,type:number}[];
	name: string;
	exp: number;
	level: number;
	res: string;
	retrieve: number;
}

interface ActivityType11_1Config {
	showText: string;
	index: number;
	mailInfo: { context: string, head: string};
	id: number;
	showType: number;
	score: number;
	reward: {id:number,type:number,count:number}[];
}

interface ActivityType11_2Config {
	type: number;
	index: number;
	id: number;
	gName: string;
	group: number;
	day: number;
	name: string;
	dayImg: string;
	target: number;
	dayLimit: number;
	score: number;
	reward: {id:number,type:number,count:number}[];
	turn: {0:string,1:string,2:string,3:string,4:string,5:string,6:string}[];
	param: number;
	rate: number;
}

interface ReincarnateEquipCompose {
	id: number;
	material: { id: number, count: number};
	distinguishi: number;
}

interface SpecialEquipsConfig {
	id: number;
	style: number;
}

interface ReincarnationSoulLevel {
	attrs: {value:number,type:number}[];
	demonLevel: number;
	slot: number;
	soulLinkLevel: number;
	level: number;
	materialInfo: { id: number, count: number};
	job: number;
}

interface ReincarnationDemonLevel {
	precent: number;
	level: number;
	slot: number;
}

interface ReincarnationLinkLevel {
	attrs: {value:number,type:number}[];
	level: number;
	firstSlot: number;
	secondSlot: number;
}

interface PeakRaceBase {
	KnockOutTime: number;
	openTime: string;
	likeCount: number;
	promInterval: number;
	interval: number;
	likeScore: number;
	mobaiChips: number;
	openDay: number;
	mobaiNum: number;
	exchangeItems: number[];
	singleRewards: {id:number,type:number,count:number}[];
	croosRewards: {id:number,type:number,count:number}[];
	crossRelTime: number;
	crossWinMail: number;
	winMail: number;
	promWin: number;
	needZsLv: number;
	signUpLose: number;
}

interface PeakRaceTime {
	status: number;
	relTime: number;
	loseMail: number;
	maxBett: number;
}

interface PeakRaceCrossTime {
	status: number;
	relTime: number;
	loseMail: number;
	maxBett: number;
}

interface ActivityType19Config {
	activityID: number;
	index: number;
	showType: number;
	Id: number;
	rewards: {id:number,type:number,count:number}[];
	range: number[];
	condition: number;
}

interface ActivityType18Config {
	Id: number;
	showType: number;
	index: number;
	showDrop: {id:number,type:number,count:number}[];
	yb: number;
	count: number;
	itemCount: number;
	item: number;
}

interface HeartMethodStarConfig {
	attr: {value:number,type:number}[];
	posItem: number;
	nextItem: number;
	splitNum: number;
	heartmethodId: number;
	posSort: number;
	costItem: number;
	effect: string;
	bigIcon: string;
	costNum: number;
	star: number;
	posId: number;
	quality: number;
	power: number;
}

interface GuardGodWeaponConf {
	fbId: {}[];
	privilegeSweepZsLimit: number;
	sSkillIcon: {0:string,1:string,2:string,3:string,4:string,5:string,6:string,7:string}[];
	gwMonPos: number[];
	fbMaxMon: number;
	opencondition: number[];
	UIshowDropNotice: string;
	starDelayRsf: number;
	UIshowDrop: {0:string,1:string,2:string,3:string,4:string,5:string,6:string,7:string}[];
	sSkillCd: number[];
	sBoss: {}[][];
	sBossAward: {}[];
	showReward: {}[][];
	cHead: string;
	noticeId: {}[];
	sbContext: string;
	sbHead: string;
	sSummonCost: number[];
	sSummonLimit: {}[];
	cbHead: string;
	gwMonId: number;
	sSummonPos: {}[][];
	sSkillCost: number[];
	recoverCD: number;
	sSkillVal: {}[][];
	cContext: string;
	dailyCount: number;
	cBossAward: {}[];
	cbContext: string;
	sSkillUseText: {0:string,1:string,2:string,3:string,4:string,5:string,6:string,7:string,8:string,9:string,10:string,11:string}[];
}

interface GGWWaveConf {
	zsLvl: number;
	time: number;
	idx: number;
}

interface JadePlateBaseConfig {
	openlv: number;
	perLevel: number;
	openDay: number;
	skillIcons: number[];
	upgradeInfo: {attr:{value:number,type:number}[],precent:number}[];
	itemInfo: {}[];
	skillUnlock: {id:number,name:string,desc:string}[];
}

interface JadePlateLevelConfig {
	attrs: {value:number,type:number}[];
	level: number;
	upgradeItemInfo: {}[];
	exp: number;
	skillIdList: number[];
	exAttrs: {value:number,type:number}[];
}

interface HeartMethodBaseConfig {
	zsLv: number;
	proShowList: {id:number,name:string,filter:number}[];
	starMax: number;
	serverDay: number;
}

interface HeartMethodConfig {
	blankIcon: {0:string,1:string,2:string,3:string,4:string,5:string,6:string,7:string,8:string}[];
	id: number;
	skillButton: string;
	inside: string;
	openTips: string;
	name: string;
	posList: number[];
	skillShowPic: string;
	splitItem: number;
	icon: string;
	pic: string;
	openCondition: { day: number, zs: number};
	upGradeCondition: number;
	posGainGuide: number;
}

interface HeartMethodPosConfig {
	posItem: number;
	star: number;
	quality: number;
	pos: number;
}

interface HeartMethodLevelConfig {
	id: number;
	level: number;
	attr: {value:number,type:number}[];
	costNum: number;
	costItem: number;
	power: number;
}

interface HeartMethodStageConfig {
	id: number;
	normalCostTip: number;
	stage: number;
	attr: {value:number,type:number}[];
}

interface HeartMethodSuitConfig {
	attr: {value:number,type:number}[];
	skilldesc: string;
	id: number;
	level: number;
	skillname: string;
	inside: string;
	power: number;
}

interface ZhiZunEquipLevel {
	attrs: {value:number,type:number}[];
	slot: number;
	materialInfo: { id: number, count: number};
	headTxt: string;
	showPower: number;
	ex_power: number;
	level: number;
	soulLinkLevel: number;
	skillId: number;
}

interface ZhiZunLinkLevel {
	attrs: {value:number,type:number}[];
	chainDesc: string;
	ex_power: number;
	level: number;
	firstSlot: number;
	secondSlot: number;
	exAttrs: {value:number,type:number}[];
}

interface CrossBossBase {
	belongMaxCount: number;
	openDay: number;
	flagBelongMaxCount: number;
	flagId: number;
	needTime: number;
	bossBelongCount: number;
	showBoss: string;
	rebornCost: number;
	flagRefreshTime: number;
	rebornCd: number;
	cdTime: number;
	flagBelongCount: number;
	bossBelongMaxCount: number;
}

interface CrossBossConfig {
	bossId: number;
	belongRewardshow: {id:number,type:number,count:number}[];
	fbid: number;
	levelLimit: number[];
	id: number;
	refreshNoticeId: number;
	refreshTime: number;
	sceneName: string;
}

interface ZhuangBanLevelUp {
	id: number;
	level: number;
	attr: {value:number,type:number}[];
	cost: { num: number, itemId: number};
}

interface ActivityType20Config {
	rankReward: {head:string,start:number,endi:number,context:string,reward:{id:number,type:number,count:number}[]}[];
	monsterId: { id: number, scale: number, monster: string};
	index: number;
	openTime: number;
	Id: number;
	duration: number;
	showReward: {id:number,type:number,count:number}[];
	enterTime: number;
}

interface ActivityType22_1Config {
	Id: number;
	freshItem: number;
	showType: number;
	freshPrice: number;
}

interface ActivityType22_3Config {
	low: number;
	score: number;
	id: number;
	high: number;
	showReward: {discountImg:number,type:number,count:number,cost:number,id:number}[];
}

interface HideBossConfig {
	bossId: number;
	rewardShow: number[];
}

interface DevilBossBase {
	openDay: number;
	partSaleAwards: {id:number,type:number,count:number}[];
	cdTime: number;
	belongSaleAwards: {id:number,type:number,count:number}[];
	rebornCost: number;
	belongAwards: {id:number,type:number,count:number}[];
	rebornCd: number;
	startTime: number[];
	partAwards: {id:number,type:number,count:number}[];
	hefuTimeLimit: number;
}

interface DevilBossConfig {
	id: number;
	bossName: string;
	openBossList: number[];
	levelLimit: number;
}

interface AuctionConfig {
	rushTime: number;
	sellFailureContent: string;
	globalShowTime: number;
	globalTax: number;
	sellSuccessContent: string;
	openserverday: number;
	sellSuccessTitle: string;
	falseHints: {0:string,1:string,2:string,3:string,4:string,5:string}[];
	eachPageNumber: number;
	sellSuccessGuildContent: string;
	openzhuanshenglv: number;
	priceIncrease: number;
	sellSuccessGuildTitle: string;
	exceedTitle: string;
	positiveParameter: number;
	exceedContent: string;
	buySuccessContent: string;
	guildShowTime: number;
	sellFailureTitle: string;
	quotaMax: number;
	buySuccessTitle: string;
	guildTax: number;
}

interface AuctionItem {
	item: { id: number, type: number, count: number};
	globalTime: number;
	id: number;
	guildTime: number;
	bid: number;
	buy: number;
}

interface HunGuConf {
	hunyuType: {}[][];
	hunguName: {0:string,1:string}[];
	unlockCost: {}[];
	equipCount: number;
	suitName: {0:string,1:string,2:string,3:string,4:string,5:string,6:string,7:string,8:string,9:string,10:string,11:string,12:string,13:string,14:string,15:string,16:string,17:string,18:string,19:string,20:string,21:string,22:string}[][];
	showzhuanshenglv: number;
	fbOpenDay: number;
	dayRewardCount: number;
	openzhuanshenglv: number;
	showZsLv: number;
	suit: {0:number,1:number,2:number,3:number,4:number,5:number}[];
	gainItemId: number;
	hunyuCount: number;
	sweepLayer: number;
	canFenjieItem: {};
	needZsLv: number;
	openserverday: number;
}

interface HunGuEquip {
	attrs: {value:number,type:number}[];
	type: number;
	hunyuNum: number;
	id: number;
	addStageCost: {id:number,type:number,count:number}[];
	stage: number;
	nextId: number;
}

interface HunYuEquip {
	attrs: {value:number,type:number}[];
	name: string;
	cost: { id: number, type: number, count: number};
	id: number;
	level: number;
	icon: string;
}

interface HunGuSuit {
	count: number;
	effectId: string;
	id: number;
	dec: string;
	stage: number;
	specialAttrs: number;
	attrs: {value:number,type:number}[];
	expower: number;
}

interface FsFbConfig {
	idx: number;
	zsLevelLimit: number;
	pic: string;
	monster: number;
	fbId: number;
	award: {id:number,type:number,count:number}[];
	fbName: string;
}

interface InstanceBaseConfig {
	maxCheckPoint: number;
}

