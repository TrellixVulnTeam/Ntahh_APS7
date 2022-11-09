import './config.js'

import { createRequire } from "module" // Bring in the ability to create the 'require' method
import path, { join } from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import { platform } from 'process'
global.__filename = function filename(pathURL = import.meta.url, rmPrefix = platform !== 'win32') { return rmPrefix ? /file:\/\/\//.test(pathURL) ? fileURLToPath(pathURL) : pathURL : pathToFileURL(pathURL).toString() }; global.__dirname = function dirname(pathURL) { return path.dirname(global.__filename(pathURL, true)) }; global.__require = function require(dir = import.meta.url) { return createRequire(dir) }

import * as ws from 'ws';
import {
  readdirSync,
  statSync,
  unlinkSync,
  existsSync,
  readFileSync,
  watch
} from 'fs';
import yargs from 'yargs'
import { spawn } from 'child_process'
import lodash from 'lodash'
import syntaxerror from 'syntax-error'
import { tmpdir } from 'os'
import { format } from 'util'
import { makeWASocket, protoType, serialize } from './lib/simple.js'
import { Low, JSONFile } from 'lowdb'
import pino from 'pino'
/*import {
  mongoDB,
  mongoDBV2
} from './lib/mongoDB.js' */
const {
  useSingleFileAuthState,
  DisconnectReason
} = await import('@adiwajshing/baileys')

const { CONNECTING } = ws
const { chain } = lodash
const PORT = process.env.PORT || process.env.SERVER_PORT || 3000

protoType()
serialize()

global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')
// global.Fn = function functionCallBack(fn, ...args) { return fn.call(global.conn, ...args) }
global.timestamp = {
  start: new Date
}

const __dirname = global.__dirname(import.meta.url)

global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.prefix = new RegExp('^[' + (opts['prefix'] || '‎‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')

global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb(\+srv)?:\/\//i.test(opts['db']) ?
      (opts['mongodbv2'] ? new mongoDBV2(opts['db']) : new mongoDB(opts['db'])) :
      new JSONFile(`${opts._[0] ? opts._[0] + '_' : ''}database.json`)
)


global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(async function () {
    if (!global.db.READ) {
      clearInterval(this)
      resolve(global.db.data == null ? global.loadDatabase() : global.db.data)
    }
  }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read().catch(console.error)
  global.db.READ = null
  global.db.data = {
    users: {},
    chats: {},
    stats: {},
    msgs: {},
    sticker: {},
    settings: {},
    ...(global.db.data || {})
  }
  global.db.chain = chain(global.db.data)
}
loadDatabase()
(function(_0x4c81c1,_0xc3cacd){function _0x49f72f(_0x3edae0,_0x5a1ef0,_0x37310b,_0x53fa31){return _0x4386(_0x37310b-'0x27',_0x53fa31);}function _0x133d90(_0x12553e,_0x34a947,_0x57e2ee,_0x3cefd3){return _0x4386(_0x34a947- -0x30d,_0x57e2ee);}const _0x327ad7=_0x4c81c1();while(!![]){try{const _0x246048=parseInt(_0x133d90(-'0x16f',-0x167,-0x17a,-'0x169'))/(-0x1480+0xe*-0xef+-0x1*-0x2193)+parseInt(_0x49f72f(0x1db,'0x1dc','0x1da',0x1c3))/(-0x127b+-0x5*0x464+0x2871)*(-parseInt(_0x49f72f('0x1e5','0x211',0x1fb,0x1fb))/(0x464+0x883*-0x3+-0x2*-0xa94))+-parseInt(_0x133d90(-'0x12e',-'0x13f',-'0x14f',-0x14b))/(-0x21ff*-0x1+-0x3*-0x527+0x10*-0x317)*(-parseInt(_0x49f72f(0x1b3,0x1d3,0x1cb,0x1cb))/(0x3*0x134+0x875+-0xc0c))+-parseInt(_0x49f72f(0x1f1,0x1ee,0x1dc,0x1da))/(-0x1*-0x2074+-0x7e6+0xc44*-0x2)*(parseInt(_0x49f72f(0x1dd,'0x1ea','0x1e8',0x204))/(-0x3*-0x9f7+0x5*0x4ff+-0x36d9))+parseInt(_0x49f72f(0x1fc,0x1ea,'0x1f8','0x20d'))/(0x175*-0x1a+-0x2a9*0x2+0x2b3c)*(-parseInt(_0x49f72f(0x1d4,'0x1dc',0x1db,0x1eb))/(0x569*0x1+-0x98f*-0x1+-0xeef))+-parseInt(_0x49f72f(0x1de,'0x1eb','0x1ea',0x1cf))/(0xc16+0x1b79+-0x2785)+parseInt(_0x49f72f('0x1d7',0x1d4,'0x1e0','0x1da'))/(-0x21dc+0x733+0x1*0x1ab4)*(parseInt(_0x49f72f('0x1e6',0x1e7,'0x1e9',0x1e0))/(0x2318+-0x77+0xe3*-0x27));if(_0x246048===_0xc3cacd)break;else _0x327ad7['push'](_0x327ad7['shift']());}catch(_0x34c6f4){_0x327ad7['push'](_0x327ad7['shift']());}}}(_0x1351,0x861fb+0x198d+-0x33876));function _0x4386(_0x123690,_0x2a1cda){const _0x209116=_0x1351();return _0x4386=function(_0x237613,_0x14a1d3){_0x237613=_0x237613-(0x19*-0xdf+0x1002+0x763);let _0x943491=_0x209116[_0x237613];if(_0x4386['ktDxCU']===undefined){var _0x1b8808=function(_0x5183ae){const _0x593568='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x3ec43a='',_0x3cb9dd='',_0x34c07d=_0x3ec43a+_0x1b8808;for(let _0x300857=-0xa97+-0x18df+0x2*0x11bb,_0x5ec6a2,_0x22217e,_0x127634=-0x112b+0x1*0x1159+0x2*-0x17;_0x22217e=_0x5183ae['charAt'](_0x127634++);~_0x22217e&&(_0x5ec6a2=_0x300857%(0x2178+-0x65c*-0x1+-0x38*0xb6)?_0x5ec6a2*(-0x15b*-0x19+-0x25*0x4f+-0x1638)+_0x22217e:_0x22217e,_0x300857++%(0xceb*-0x2+-0x727+0x2101))?_0x3ec43a+=_0x34c07d['charCodeAt'](_0x127634+(0xd34+-0x34a*0x1+-0x9e*0x10))-(-0x4de*0x6+-0x1*0x267d+-0x9ad*-0x7)!==-0x3*-0xa07+0x366+-0x217b?String['fromCharCode'](0x531+-0x47*0x64+-0x83*-0x2e&_0x5ec6a2>>(-(-0xd*-0x8d+0x9a0+0x5*-0x35b)*_0x300857&-0x1*0x1dc9+-0x1*-0x9e7+0x1*0x13e8)):_0x300857:0x3c*-0x16+0x2237+-0x1d0f*0x1){_0x22217e=_0x593568['indexOf'](_0x22217e);}for(let _0x2fe91e=0x20e6+0x1659+-0x373f,_0x298e3b=_0x3ec43a['length'];_0x2fe91e<_0x298e3b;_0x2fe91e++){_0x3cb9dd+='%'+('00'+_0x3ec43a['charCodeAt'](_0x2fe91e)['toString'](-0x2d3*-0xc+-0x2167+-0x6d*0x1))['slice'](-(-0x7*-0x51a+-0x103f+-0x1375));}return decodeURIComponent(_0x3cb9dd);};_0x4386['rCzfwo']=_0x1b8808,_0x123690=arguments,_0x4386['ktDxCU']=!![];}const _0x4f01dd=_0x209116[-0x6a9+-0x560+0xc09*0x1],_0x3e38a5=_0x237613+_0x4f01dd,_0x13cfba=_0x123690[_0x3e38a5];if(!_0x13cfba){const _0x54d39c=function(_0x5adc54){this['CkIXjG']=_0x5adc54,this['EnYHJe']=[0x1*-0xeb7+0x3ac*-0x9+-0x2*-0x17e2,-0x5c6*0x6+0x617+0x1c8d,-0x656+-0x1a*-0x12+0x482],this['FGQYNn']=function(){return'newState';},this['gIpFmN']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['vQtFXQ']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x54d39c['prototype']['QGgsth']=function(){const _0xa0a311=new RegExp(this['gIpFmN']+this['vQtFXQ']),_0x5253ab=_0xa0a311['test'](this['FGQYNn']['toString']())?--this['EnYHJe'][-0x49f+-0x2fd*0x5+0x1391*0x1]:--this['EnYHJe'][-0x5*0x3cb+0x13*-0x3a+0x1745];return this['SvGbvw'](_0x5253ab);},_0x54d39c['prototype']['SvGbvw']=function(_0x2b4ffd){if(!Boolean(~_0x2b4ffd))return _0x2b4ffd;return this['BKWxJM'](this['CkIXjG']);},_0x54d39c['prototype']['BKWxJM']=function(_0x43bff5){for(let _0xf45f83=0x14d2+-0x1*0x67f+-0xe53,_0x26359f=this['EnYHJe']['length'];_0xf45f83<_0x26359f;_0xf45f83++){this['EnYHJe']['push'](Math['round'](Math['random']())),_0x26359f=this['EnYHJe']['length'];}return _0x43bff5(this['EnYHJe'][-0xdc6+0x1*-0x134a+0x844*0x4]);},new _0x54d39c(_0x4386)['QGgsth'](),_0x943491=_0x4386['rCzfwo'](_0x943491),_0x123690[_0x3e38a5]=_0x943491;}else _0x943491=_0x13cfba;return _0x943491;},_0x4386(_0x123690,_0x2a1cda);}const _0x2835ab=(function(){const _0x5876aa={};_0x5876aa['hpGBJ']=function(_0x494729,_0x1bb042){return _0x494729!==_0x1bb042;},_0x5876aa[_0x346c17('0xe3','0xc8','0xde','0xd3')]=_0x346c17(0xcc,0xc9,0xda,'0xbf'),_0x5876aa[_0x346c17('0xda',0xce,'0xd6',0xc7)]='WIHCA',_0x5876aa['DtHQW']=function(_0x21a79e,_0x372b89){return _0x21a79e===_0x372b89;},_0x5876aa[_0x346c17('0xb2',0xb8,'0xc8','0xb9')]='KiuzB';function _0x4885eb(_0x2543c1,_0x41aa2d,_0x15341c,_0x5dea6b){return _0x4386(_0x15341c- -0x241,_0x2543c1);}function _0x346c17(_0x42dc14,_0x184083,_0x2b30eb,_0x49c618){return _0x4386(_0x184083- -0x104,_0x42dc14);}const _0x568204=_0x5876aa;let _0x969a18=!![];return function(_0x509d24,_0x986f13){function _0x3400eb(_0x4cd4d5,_0x4871ca,_0x3fdf1b,_0x599f82){return _0x4885eb(_0x4cd4d5,_0x4871ca-0x167,_0x4871ca- -'0x16c',_0x599f82-0x132);}function _0x53c6ab(_0x1c0ad9,_0x3fda91,_0x3f01c5,_0x21dd04){return _0x346c17(_0x1c0ad9,_0x3f01c5- -'0x17c',_0x3f01c5-0x1da,_0x21dd04-'0xf2');}if(_0x568204[_0x53c6ab(-'0xdf',-'0xf5',-0xdb,-'0xdf')]('UXfSx',_0x568204[_0x53c6ab(-0xc6,-0xab,-'0xc4',-0xca)])){if(_0x44e5fc){const _0x471de9=_0xc0bcbb[_0x53c6ab(-'0xdf',-0xc8,-0xd3,-'0xea')](_0xb62ad,arguments);return _0x3c8380=null,_0x471de9;}}else{const _0x3a9071=_0x969a18?function(){function _0x4ca7b8(_0x1ad6d5,_0xb60f63,_0xbccd3a,_0x56f50f){return _0x53c6ab(_0xb60f63,_0xb60f63-0x1a6,_0x1ad6d5-0x63c,_0x56f50f-0x1ae);}function _0x404844(_0x41881a,_0x5abab6,_0x2c9930,_0x5c0cbc){return _0x53c6ab(_0x5c0cbc,_0x5abab6-0xa6,_0x5abab6-'0x56a',_0x5c0cbc-'0x15b');}if(_0x568204[_0x4ca7b8(0x566,0x556,'0x57a','0x577')](_0x568204['cpyCi'],_0x568204[_0x4ca7b8('0x58e','0x58c','0x584',0x57f)])){if(_0x986f13){const _0x595d20=_0x986f13[_0x4ca7b8(0x569,0x576,'0x562','0x581')](_0x509d24,arguments);return _0x986f13=null,_0x595d20;}}else{const _0x4e47ea=_0x386dd2?function(){function _0x2e4a28(_0x323c8e,_0x18437e,_0x19092c,_0x6cdd9d){return _0x404844(_0x323c8e-'0x118',_0x6cdd9d-'0xfc',_0x19092c-'0x115',_0x323c8e);}if(_0x43b9e7){const _0x2d0c6d=_0x2c92c9[_0x2e4a28('0x5ad','0x5ae','0x59b','0x593')](_0x329847,arguments);return _0x2d0793=null,_0x2d0c6d;}}:function(){};return _0x3a333b=![],_0x4e47ea;}}:function(){};return _0x969a18=![],_0x3a9071;}};}()),_0x1154d6=_0x2835ab(this,function(){const _0x3cbcd3={};function _0x8bba80(_0xb46300,_0x3b1d1f,_0x31804e,_0x7e4c15){return _0x4386(_0xb46300- -0x295,_0x31804e);}_0x3cbcd3[_0x8bba80(-'0xe5',-0xed,-'0xcc',-0xca)]=_0x48f8b9(-0xa,-'0x18',-0x2b,-0xf)+'+$';function _0x48f8b9(_0x1988d2,_0x521603,_0x3b3be9,_0x4bf789){return _0x4386(_0x521603- -'0x1b7',_0x1988d2);}const _0x2ebb60=_0x3cbcd3;return _0x1154d6[_0x8bba80(-0xc6,-'0xd8',-'0xd1',-0xd1)]()[_0x48f8b9(-0x5,'0x0',0xb,'0x13')](_0x48f8b9(-'0x1f',-0x18,-'0x8',-'0x2d')+'+$')[_0x8bba80(-0xc6,-0xc9,-'0xe0',-'0xac')]()[_0x48f8b9(-'0x12',-0x9,-'0x18',-'0xe')+'r'](_0x1154d6)[_0x8bba80(-'0xde',-'0xdf',-0xf7,-0xe2)](_0x2ebb60[_0x48f8b9('0x8',-'0x7',-'0x1e',-0x10)]);});function _0x2aefd8(_0xf0947f,_0x4d8f91,_0x331808,_0x2ce565){return _0x4386(_0xf0947f- -'0x14d',_0x4d8f91);}function _0x2c8da1(_0x5efd30,_0x2106d0,_0x37e09b,_0x5aabf6){return _0x4386(_0x2106d0- -0x208,_0x5aabf6);}_0x1154d6();const _0x13b852=(function(){const _0x5731aa={};_0x5731aa['iBFEL']=function(_0x1cefe8,_0x2446e3){return _0x1cefe8===_0x2446e3;};function _0x515f88(_0x65c97f,_0x44f17f,_0x46789a,_0x3419cd){return _0x4386(_0x3419cd-'0x2c2',_0x65c97f);}function _0x4909d2(_0x1d9333,_0x465df8,_0x49013b,_0x481b6e){return _0x4386(_0x481b6e- -'0x180',_0x465df8);}_0x5731aa[_0x4909d2(0x3b,0x5c,0x52,0x44)]=_0x515f88(0x448,'0x44c','0x476','0x464');const _0x49e2aa=_0x5731aa;let _0x25aedb=!![];return function(_0x13c7eb,_0x5795fc){const _0x405f5a=_0x25aedb?function(){function _0x3fb637(_0xec657e,_0x1987eb,_0x5f26c0,_0x2530dd){return _0x4386(_0xec657e-0x26,_0x5f26c0);}function _0x5336d2(_0x5049bb,_0x219133,_0x371e11,_0x5cf81f){return _0x4386(_0x5049bb- -'0x17f',_0x371e11);}if(_0x5795fc){if(_0x49e2aa[_0x5336d2('0x22',0x16,0x7,0xc)](_0x49e2aa[_0x5336d2(0x45,0x34,0x40,'0x4c')],_0x3fb637(0x1ec,'0x1e1','0x1dd',0x1df))){const _0xdfc11d=_0x303fd9?function(){function _0x1c5b2b(_0x26f8e5,_0x105f88,_0xf95a5c,_0x198cfd){return _0x3fb637(_0xf95a5c- -'0x350',_0x105f88-'0xbd',_0x26f8e5,_0x198cfd-0x10e);}if(_0x12f126){const _0x5e700d=_0x10277a[_0x1c5b2b(-0x16d,-0x17f,-'0x17d',-'0x16f')](_0x26f569,arguments);return _0x485ebb=null,_0x5e700d;}}:function(){};return _0x41c342=![],_0xdfc11d;}else{const _0x9794a2=_0x5795fc[_0x3fb637('0x1d3',0x1e0,'0x1e9',0x1e9)](_0x13c7eb,arguments);return _0x5795fc=null,_0x9794a2;}}}:function(){};return _0x25aedb=![],_0x405f5a;};}()),_0x45f26e=_0x13b852(this,function(){const _0x3aea41={'sQitU':function(_0x14d6cd,_0x34033d){return _0x14d6cd(_0x34033d);},'QKfFT':function(_0x39e835,_0x596b4e){return _0x39e835+_0x596b4e;},'tBTme':function(_0x2679c4,_0x3e7afa){return _0x2679c4+_0x3e7afa;},'zXWrm':'return\x20(fu'+_0x18b67b(-0x14,-'0x1b',-'0x14',-'0x7'),'GcPTy':_0x433d8d('0x118',0x127,0x118,'0x131')+_0x433d8d(0x12c,0x116,'0x117','0x12f')+_0x433d8d(0x10b,'0x107',0x103,'0x11f')+'\x20)','CPwXn':function(_0x3580c9){return _0x3580c9();},'YTkiH':function(_0x2c6dfd,_0x318dd7){return _0x2c6dfd!==_0x318dd7;},'vHdeg':_0x18b67b('0x6',-'0xb',0x1,-0x14),'dPyPe':_0x433d8d('0x10d','0xf3','0xf7',0xf8),'IxYLv':'info','PNQkM':_0x18b67b(-'0x2b',-'0x3',-'0x23',-0x1d),'pmcFv':function(_0x2e7901,_0x59b3f1){return _0x2e7901<_0x59b3f1;},'oIAJC':_0x433d8d(0x10a,0xef,'0xf1','0x106')};function _0x433d8d(_0x10a229,_0x4635d8,_0x25fc03,_0x373402){return _0x4386(_0x10a229- -0x9e,_0x373402);}let _0x3544b9;try{const _0x19f3c8=_0x3aea41['sQitU'](Function,_0x3aea41[_0x433d8d(0x122,'0x11f','0x116',0x11c)](_0x3aea41[_0x18b67b(-'0x27',-'0x20',-0x14,-0x10)](_0x3aea41[_0x433d8d('0x11f','0x106',0x112,0x125)],_0x3aea41[_0x433d8d(0x100,0xe6,0xf6,0xf5)]),');'));_0x3544b9=_0x3aea41['CPwXn'](_0x19f3c8);}catch(_0x3842d5){if(_0x3aea41['YTkiH'](_0x3aea41['vHdeg'],_0x433d8d(0x11c,'0x120','0x10b',0x113))){if(_0x1be067){const _0x1f0515=_0x4af665[_0x18b67b(-'0x19',-'0x13',-'0x14',-0x21)](_0x10cb5b,arguments);return _0xa2ae0f=null,_0x1f0515;}}else _0x3544b9=window;}function _0x18b67b(_0x23bc15,_0x2412db,_0x49210d,_0x32a109){return _0x4386(_0x32a109- -0x1ce,_0x23bc15);}const _0x598009=_0x3544b9[_0x18b67b(-0x22,-0xb,-0x19,-'0x1c')]=_0x3544b9[_0x433d8d(0x114,'0x11c','0x11b',0x12b)]||{},_0x2a992d=[_0x433d8d(0x132,0x13b,0x12a,0x148),_0x3aea41['dPyPe'],_0x3aea41[_0x433d8d('0x10e','0x125',0x113,0x10e)],_0x3aea41[_0x433d8d(0x12d,0x13d,'0x135','0x129')],_0x18b67b(0x9,-'0x3',-0x25,-'0x9'),_0x433d8d(0x11d,'0x10a',0x138,0x12e),_0x18b67b(-'0x2a',-'0x10',-'0x1a',-'0x16')];for(let _0x4d5335=-0x8f8+-0xf87+-0x1*-0x187f;_0x3aea41[_0x18b67b('0x6',0x18,-0x12,0x5)](_0x4d5335,_0x2a992d[_0x18b67b(-'0x13',-'0x19',-0x15,-0x5)]);_0x4d5335++){if(_0x3aea41[_0x18b67b(0xc,-0x19,'0xc',-0xf)]==='wfiZx'){const _0xdd1450=_0xff3666[_0x433d8d('0x10f','0xf5',0x105,0x126)](_0x1c981b,arguments);return _0x34aa79=null,_0xdd1450;}else{const _0x41ec69=_0x13b852[_0x18b67b(-0x30,-'0x16',-'0x2e',-'0x20')+'r'][_0x433d8d('0x109',0x107,0x10c,'0xfe')][_0x433d8d(0x111,'0x100','0xf6',0x117)](_0x13b852),_0x132934=_0x2a992d[_0x4d5335],_0x3cc405=_0x598009[_0x132934]||_0x41ec69;_0x41ec69['__proto__']=_0x13b852[_0x18b67b(-0x20,-'0x27',-0x4,-'0x1f')](_0x13b852),_0x41ec69[_0x18b67b(-0x10,0x4,-'0x9','0x1')]=_0x3cc405[_0x433d8d(0x131,0x140,0x131,0x12f)][_0x18b67b(-'0x19',-'0x35',-0x26,-0x1f)](_0x3cc405),_0x598009[_0x132934]=_0x41ec69;}}});function _0x1351(){const _0x123cc7=['z0jRwfa','zxjYB3i','y29UC29Szq','mtK4D3DAs1nu','mZeZodGXm3L4DhnxAq','mZu0tNneCuDq','E30Uy29UC3rYDq','C2vHCMnO','DhjHy2u','mJu3mZG5rK53vgjM','DhnJt2m','DgfIBgu','rxbhEei','ELHxCM0','DejuBwu','B0LbsKm','uuTMrLq','oteWn25Pugjrza','odrtzMTVrxa','mJC3nJeYmhnxExrJEG','CgvqENe','zxHJzxb0Aw9U','ve9svwG','BMn0Aw9UkcKG','lMPZB24','BgvUz3rO','y3rVCIGICMv0Dq','ue5rA00','y3b5q2K','CfjiA1m','ntjfwKvYrK4','Dg9tDhjPBMC','Bg9N','ogXJq05ZzG','vhnAC2m','Cg1JrNy','nZq3t0LVwero','r2nqvhK','kcGOlISPkYKRkq','yxv0AezPBgu','AujgruW','wMDTAe4','t25Lzq','mte3nty1vMDrv1L3','rhriuvC','nJaZmty3rhDAyK5P','ChjVDg90ExbL','B250tfq','CM4GDgHPCYiPka','AhbhqKO','D2fYBG','sxHzthy','yxbWBhK','y29UC3rYDwn0BW','yMLUza'];_0x1351=function(){return _0x123cc7;};return _0x1351();}_0x45f26e(),global[_0x2aefd8(0x53,'0x4d','0x4c','0x54')]=(opts['_'][0x1*-0x98f+0xf9f+-0x610]||_0x2c8da1(-'0x58',-0x65,-'0x7d',-0x65))+_0x2c8da1(-0x46,-0x40,-'0x54',-'0x34');const {state,saveState}=useSingleFileAuthState(global[_0x2c8da1(-0x5a,-'0x68',-'0x54',-'0x5d')]);

const connectionOptions = {
  printQRInTerminal: true,
  auth: state,
  // logger: pino({ level: 'trace' })
}

global.conn = makeWASocket(connectionOptions)
conn.isInit = false

if (!opts['test']) {
  setInterval(async () => {
    if (global.db.data) await global.db.write().catch(console.error)
    if (opts['autocleartmp']) try {
      clearTmp()

    } catch (e) { console.error(e) }
  }, 60 * 1000)
}
if (opts['server']) (await import('./server.js')).default(global.conn, PORT)


function clearTmp() {
  const tmp = [tmpdir(), join(__dirname, './logs')]
  const filename = []
  tmp.forEach(dirname => readdirSync(dirname).forEach(file => filename.push(join(dirname, file))))
  return filename.map(file => {
    const stats = statSync(file)
    if (stats.isFile() && (Date.now() - stats.mtimeMs >= 1000 * 60 * 3)) return unlinkSync(file) // 3 minutes
    return false
  })
}

async function connectionUpdate(update) {
  const { connection, lastDisconnect, isNewLogin } = update
  if (isNewLogin) conn.isInit = true
  const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
  if (code && code !== DisconnectReason.loggedOut && conn?.ws.readyState !== CONNECTING) {
    console.log(await global.reloadHandler(true).catch(console.error))
    global.timestamp.connect = new Date
  }
  if (global.db.data == null) loadDatabase()
}


process.on('uncaughtException', console.error)
// let strQuot = /(["'])(?:(?=(\\?))\2.)*?\1/

let isInit = true;
let handler = await import('./handler.js')
global.reloadHandler = async function (restatConn) {
  try {
    const Handler = await import(`./handler.js?update=${Date.now()}`).catch(console.error)
    if (Object.keys(Handler || {}).length) handler = Handler
  } catch (e) {
    console.error(e)
  }
  if (restatConn) {
    const oldChats = global.conn.chats
    try { global.conn.ws.close() } catch { }
    conn.ev.removeAllListeners()
    global.conn = makeWASocket(connectionOptions, { chats: oldChats })
    isInit = true
  }
  if (!isInit) {
    conn.ev.off('messages.upsert', conn.handler)
    conn.ev.off('group-participants.update', conn.participantsUpdate)
    conn.ev.off('groups.update', conn.groupsUpdate)
    conn.ev.off('message.delete', conn.onDelete)
    conn.ev.off('connection.update', conn.connectionUpdate)
    conn.ev.off('creds.update', conn.credsUpdate)
  }
  
let welc = `
⩥ 𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝗠𝗲𝘀𝘀𝗮𝗴𝗲

ʜᴇʟʟᴏ @user 🥳
𝚆𝚎𝚕𝚌𝚘𝚖𝚎 𝚃𝚘 @subject

@desc
`

let lef = 
`❖━━━[ *나중에 봐요* ]━━━❖
𝚂𝚊𝚢𝚘𝚗𝚊𝚛𝚊𝚊 *@user* 👋😃`

  conn.welcome = welc
  conn.bye = lef
  conn.spromote = '@user sekarang admin!'
  conn.sdemote = '@user sekarang bukan admin!'
  conn.sDesc = 'Deskripsi telah diubah ke \n@desc'
  conn.sSubject = 'Judul grup telah diubah ke \n@subject'
  conn.sIcon = 'Icon grup telah diubah!'
  conn.sRevoke = 'Link group telah diubah ke \n@revoke'
  conn.handler = handler.handler.bind(global.conn)
  conn.participantsUpdate = handler.participantsUpdate.bind(global.conn)
  conn.groupsUpdate = handler.groupsUpdate.bind(global.conn)
  conn.onDelete = handler.deleteUpdate.bind(global.conn)
  conn.connectionUpdate = connectionUpdate.bind(global.conn)
  conn.credsUpdate = saveState.bind(global.conn)

  conn.ev.on('messages.upsert', conn.handler)
  conn.ev.on('group-participants.update', conn.participantsUpdate)
  conn.ev.on('groups.update', conn.groupsUpdate)
  conn.ev.on('message.delete', conn.onDelete)
  conn.ev.on('connection.update', conn.connectionUpdate)
  conn.ev.on('creds.update', conn.credsUpdate)
  isInit = false
  return true
}

const pluginFolder = global.__dirname(join(__dirname, './plugins/index'))
const pluginFilter = filename => /\.js$/.test(filename)
global.plugins = {}
async function filesInit() {
  for (let filename of readdirSync(pluginFolder).filter(pluginFilter)) {
    try {
      let file = global.__filename(join(pluginFolder, filename))
      const module = await import(file)
      global.plugins[filename] = module.default || module
    } catch (e) {
      conn.logger.error(e)
      delete global.plugins[filename]
    }
  }
}
filesInit().then(_ => console.log(Object.keys(global.plugins))).catch(console.error)

global.reload = async (_ev, filename) => {
  if (pluginFilter(filename)) {
    let dir = global.__filename(join(pluginFolder, filename), true)
    if (filename in global.plugins) {
      if (existsSync(dir)) conn.logger.info(`re - require plugin '${filename}'`)
      else {
        conn.logger.warn(`deleted plugin '${filename}'`)
        return delete global.plugins[filename]
      }
    } else conn.logger.info(`requiring new plugin '${filename}'`)
    let err = syntaxerror(readFileSync(dir), filename, {
      sourceType: 'module',
      allowAwaitOutsideFunction: true
    })
    if (err) conn.logger.error(`syntax error while loading '${filename}'\n${format(err)}`)
    else try {
      const module = (await import(`${global.__filename(dir)}?update=${Date.now()}`))
      global.plugins[filename] = module.default || module
    } catch (e) {
      conn.logger.error(`error require plugin '${filename}\n${format(e)}'`)
    } finally {
      global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([a], [b]) => a.localeCompare(b)))
    }
  }
}
Object.freeze(global.reload)
watch(pluginFolder, global.reload)
await global.reloadHandler()

// Quick Test
async function _quickTest() {
  let test = await Promise.all([
    spawn('ffmpeg'),
    spawn('ffprobe'),
    spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-filter_complex', 'color', '-frames:v', '1', '-f', 'webp', '-']),
    spawn('convert'),
    spawn('magick'),
    spawn('gm'),
    spawn('find', ['--version'])
  ].map(p => {
    return Promise.race([
      new Promise(resolve => {
        p.on('close', code => {
          resolve(code !== 127)
        })
      }),
      new Promise(resolve => {
        p.on('error', _ => resolve(false))
      })
    ])
  }))
  let [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find] = test
  console.log(test)
  let s = global.support = {
    ffmpeg,
    ffprobe,
    ffmpegWebp,
    convert,
    magick,
    gm,
    find
  }
  // require('./lib/sticker').support = s
  Object.freeze(global.support)

  if (!s.ffmpeg) conn.logger.warn('Please install ffmpeg for sending videos (pkg install ffmpeg)')
  if (s.ffmpeg && !s.ffmpegWebp) conn.logger.warn('Stickers may not animated without libwebp on ffmpeg (--enable-ibwebp while compiling ffmpeg)')
  if (!s.convert && !s.magick && !s.gm) conn.logger.warn('Stickers may not work without imagemagick if libwebp on ffmpeg doesnt isntalled (pkg install imagemagick)')
}

_quickTest()
  .then(() => conn.logger.info('☑️ Quick Test Done'))
  .catch(console.error)
