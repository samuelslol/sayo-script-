// ==UserScript==
// @name         Samu's Script (BETA)
// @namespace    http://tampermonkey.net/
// @version      0.8
// @icon         https://i.imgur.com/L0yl2aC.jpg
// @description  Hide the advertisement section, error banners, and customize UI in the game <3
// @author       Samu
// @match        https://gota.io/web/*
// @grant        GM_addStyle
// ==/UserScript==

function _0x2749(){const _0x3d2873=['3826416FisCmw','BmQbu','QdnqH','addEventListener','SuJBm','change','aOdYK','forEach','ixVdY','vHSFS','font','.main-panel,\x20.gota-btn,\x20.main-bottom-stats,\x20#popup-party,\x20#popup-login,\x20.login-input,\x20#chat-input,\x20.ui-pane,\x20#chat-container,\x20#leaderboard-panel,\x20#score-panel,\x20#minimap-panel,\x20#party-panel','pUrPI','body','opYFG','WUyZS','subtree','pOSEH','Ulouy','addedNodes','none','length','enableRGBBorders','QrDRa','cssText','#popup-party\x20{border:\x20solid\x202px\x20rgba(99,\x2097,\x2095,\x200.5);\x20border-radius:\x205px;\x20box-shadow:\x200px\x200px\x200px\x200px\x20rgba(0,0,0,0.25);}','.keybinds-btn\x20{background:\x20white;\x20border:\x201.5px\x20solid\x20black;\x20border-radius:\x2015px;\x20color:\x20black;\x20font-weight:\x20bold}','dCJwc','vfXtW','party-canvas','appendChild','tbody#servers-body-eu::-webkit-scrollbar-thumb,\x20tbody#servers-body-na::-webkit-scrollbar-thumb,\x20.scrimmage-mode-box::-webkit-scrollbar-thumb\x20{background-color:\x20#7f7f7f;\x20border-radius:\x2010px;}','url(','.bottom-btn\x20{margin-bottom:\x203px}','AuXCx','XYfoZ','main-content','.stext\x20{margin-top:\x202px;\x20margin-bottom:\x202px;}','WXYPM','6518RyUrTP','hWhwy','QmiGS','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20colspan=\x224\x22\x20style=\x22text-align:\x20left;\x20font-size:\x2014px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Minimap\x20Background\x20URL:\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22text\x22\x20id=\x22iMapBackground\x22\x20placeholder=\x22Enter\x20URL\x22\x20style=\x22width:\x20100%;\x20padding:\x201px;\x20margin-top:\x205px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','.options-table','trim','hJoaX','value','heZOz','rgbBordersEnabled','omeWB','style','checked','jceqX','#name-box\x20{font-weight:\x20bold}','#chat-input\x20{font-weight:\x20bold}','main-themes','yAkco','.error-banner','207256fWZYIX','#main-side\x20{height:\x20490px;\x20margin-top:\x2080px;}','#main\x20{width:\x201025px;\x20background-color:\x20transparent;\x20border:\x20none;}','8411730EhfJOn','prototype','createElement','LoyOT','#popup-login\x20{border:\x20solid\x202px\x20rgba(99,\x2097,\x2095,\x200.5);\x20border-radius:\x205px;\x20box-shadow:\x200px\x200px\x200px\x200px\x20rgba(0,0,0,0.25);}','mhwhY','FJuou','.gota-btn:hover\x20{filter:\x20hue-rotate(25deg)}','QOPyf','leaderboard-canvas','ZBdPW','bWmqu','iMapBackground','jkiuA','getItem','ouVXZ','querySelectorAll','SPQie','#leaderboard-panel\x20{font-size:\x2024px;}','SZRVl','bold\x2015px\x20Ubuntu','script-version','xHPOv','remove','koFjk','UzQBX','.main-bottom-links\x20{display:\x20none;}','key','TCuUk','\x0a\x20\x20\x20\x20\x20\x20\x20\x20@keyframes\x20pulseBorder\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x200%\x20{\x20border-color:\x20#ff0080;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2025%\x20{\x20border-color:\x20#8000ff;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2050%\x20{\x20border-color:\x20#00ff80;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x2075%\x20{\x20border-color:\x20#ff8000;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20100%\x20{\x20border-color:\x20#ff0080;\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20.gamer-border\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x203px\x20solid\x20transparent;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x2010px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20animation:\x20pulseBorder\x204s\x20ease-in-out\x20infinite;\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20','XBekP','rLSdM','MKKQM','EVhZi','CHmKG','WmGgx','#main-social\x20{background:\x20none;\x20border:\x20none;}','Script\x20Version:\x201.4.6.2<br>Release\x20Date:\x20July\x2021st,\x202024','setItem','kXPKG','true','canvas','.coordinates\x20{font-family:\x20Ubuntu;}','.main-panel\x20{background:\x20#070707}','.xp-meter,\x20.xp-meter\x20>\x20span\x20{border-radius:\x2010px;}','OcgXP','minimapBackgroundURL','WojTF','qYbLq','6773046FvBXhV','.main-panel\x20{border:\x20solid\x203px\x20rgba(99,\x2097,\x2095,\x200.5);\x20border-radius:\x205px;\x20box-shadow:\x200px\x200px\x200px\x200px\x20rgba(0,0,0,0.52);}','JVLqn','vwnDD','NYAur','oPova','.scrimmage-select\x20{border:\x202px\x20solid\x20black;\x20border-radius:\x2010px;\x20padding:\x204px;\x20font-weight:\x20bold;\x20margin-top:\x203px;}','apply','25529896IdfFkw','Kkpnz','shYsM','querySelector','sGyfC','.keybinds-table\x20{background:\x20#333;\x20border-radius:\x205px;\x20padding:\x2012px;}','Enter','#main-content\x20{width:\x20305px;\x20height:\x20490px;\x20margin-top:\x2080px;}','GpPRO','300CfchTL','EPpJN','#main-account\x20{margin:\x2010px\x2010px;}','IVzMM','innerHTML','NRYPQ','@import\x20url(https://fonts.googleapis.com/css?family=Ubuntu);','.gota-btn:hover\x20{box-shadow:\x200px\x200px\x200px\x20rgba(10,10,10,10)}','display','backgroundImage','FcJUh','fillText','PVNqJ','.server-row:hover\x20{font-size:\x2016px;\x20font-weight:\x20bold;}','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20colspan=\x224\x22\x20style=\x22text-align:\x20center;\x20font-weight:\x20bold;\x20font-size:\x2016px;\x22>Samu\x27s\x20Theme</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','getElementById','wgwfN','#minimap-canvas\x20{background-size:\x20cover;\x20background-position:\x20center;\x20background-repeat:\x20no-repeat;}','gamer-border','.server-row\x20{transition:\x20all\x200.3s}','keydown','SsmJo','zhXsz','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<td\x20colspan=\x224\x22\x20style=\x22text-align:\x20left;\x20font-size:\x2014px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<label\x20style=\x22display:\x20block;\x20margin-top:\x202px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<input\x20type=\x22checkbox\x22\x20id=\x22enableRGBBorders\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Enable\x20RGB\x20Borders\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</label>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</td>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','.main-bottom-stats\x20{border:\x20solid\x203px\x20rgba(99,\x2097,\x2095,\x200.5);\x20border-radius:\x205px;\x20box-shadow:\x200px\x200px\x200px\x200px\x20rgba(0,0,0,0.52);}','3304780dbZeZb','tbody','HnSBm'];_0x2749=function(){return _0x3d2873;};return _0x2749();}function _0x4da6(_0x3f5a4f,_0x52ef20){const _0x350a4c=_0x2749();return _0x4da6=function(_0x4bb64e,_0x135199){_0x4bb64e=_0x4bb64e-(0x21c7+-0x1a38*0x1+-0x53*0x12);let _0x4da96f=_0x350a4c[_0x4bb64e];return _0x4da96f;},_0x4da6(_0x3f5a4f,_0x52ef20);}(function(_0x2ba844,_0x487f85){const _0x6ff9f1=_0x4da6,_0x2793a8=_0x2ba844();while(!![]){try{const _0x59a6cd=parseInt(_0x6ff9f1(0x244))/(-0xaa*0x2d+0x11ec*-0x1+0x2fcf*0x1)*(-parseInt(_0x6ff9f1(0x1ec))/(-0xdf6+-0x1686+-0x123f*-0x2))+-parseInt(_0x6ff9f1(0x1c5))/(-0x1*0x7db+0x2*-0xc2a+0x2032)+parseInt(_0x6ff9f1(0x1ff))/(0x1bc2+0x4ee*-0x4+-0x806)+-parseInt(_0x6ff9f1(0x1c2))/(0x3*0x511+-0xcc3+-0x26b*0x1)+parseInt(_0x6ff9f1(0x202))/(0x1*0xbb7+-0x308+-0x8a9*0x1)+-parseInt(_0x6ff9f1(0x233))/(0x24f1+0x19c7+0x3eb1*-0x1)+parseInt(_0x6ff9f1(0x23b))/(-0x2*0x291+-0x800+0x695*0x2);if(_0x59a6cd===_0x487f85)break;else _0x2793a8['push'](_0x2793a8['shift']());}catch(_0x3a3db4){_0x2793a8['push'](_0x2793a8['shift']());}}}(_0x2749,-0x5f9c3*-0x1+0x46a9*0x42+0x277*-0x517),(function(){'use strict';const _0x5a1969=_0x4da6,_0x569985={'WUyZS':'main-rb','jkiuA':_0x5a1969(0x1d9),'MUPcQ':function(_0x2b4bdf){return _0x2b4bdf();},'jceqX':function(_0x41bf12,_0x595cd9){return _0x41bf12===_0x595cd9;},'Ioobx':_0x5a1969(0x20b),'CHmKG':'minimap-canvas','SsmJo':_0x5a1969(0x216),'OsAum':function(_0xe6e4d5,_0x4159a6){return _0xe6e4d5===_0x4159a6;},'hJoaX':'#minimap-canvas','heZOz':_0x5a1969(0x230),'JVLqn':_0x5a1969(0x1bb),'OyyUi':_0x5a1969(0x1d0),'NHeQf':function(_0x575308){return _0x575308();},'XJHWd':_0x5a1969(0x1f0),'vfXtW':_0x5a1969(0x1c3),'HnSBm':function(_0x51a53d,_0x72c516){return _0x51a53d(_0x72c516);},'vKEkg':'.options-table\x20thead:not(:first-child)\x20tr\x20th\x20{\x20padding-top:\x2010px;\x20}','koFjk':function(_0x2b1b30,_0x2009fd){return _0x2b1b30(_0x2009fd);},'pOSEH':'.options-table\x20{\x20margin-top:\x2020px;\x20}','TEbhm':_0x5a1969(0x20e),'TCuUk':_0x5a1969(0x1db),'lPsqJ':function(_0x529325,_0x46e4b7){return _0x529325===_0x46e4b7;},'QOPyf':_0x5a1969(0x1f5),'PVNqJ':_0x5a1969(0x22a),'dCJwc':function(_0x4f763c){return _0x4f763c();},'yAkco':_0x5a1969(0x1bd),'WmGgx':function(_0x10341a){return _0x10341a();},'ZBdPW':_0x5a1969(0x1fc),'yfVgh':function(_0x499fb2){return _0x499fb2();},'FJuou':function(_0x317341){return _0x317341();},'jQEWy':function(_0x5b3f77,_0x4d33a9){return _0x5b3f77(_0x4d33a9);},'SuJBm':_0x5a1969(0x24a),'EVhZi':_0x5a1969(0x1ba),'azRvK':'*{font-family:\x20Ubuntu;}','mhwhY':function(_0x1e768b,_0x39355a){return _0x1e768b(_0x39355a);},'EPpJN':function(_0x3785e0,_0x32d8d7){return _0x3785e0(_0x32d8d7);},'lvVTc':_0x5a1969(0x214),'SPQie':function(_0xe623e8,_0x3d7988){return _0xe623e8(_0x3d7988);},'shYsM':_0x5a1969(0x234),'QmiGS':function(_0x1ba6e5,_0x424abd){return _0x1ba6e5(_0x424abd);},'QrDRa':_0x5a1969(0x1c1),'wgwfN':function(_0xa9364e,_0x46ddc1){return _0xa9364e(_0x46ddc1);},'yhbXy':_0x5a1969(0x1de),'sGyfC':_0x5a1969(0x206),'pUrPI':function(_0x4f2051,_0x10c7ae){return _0x4f2051(_0x10c7ae);},'WojTF':_0x5a1969(0x1fb),'omeWB':_0x5a1969(0x1ea),'WXYPM':function(_0x548049,_0x1952b0){return _0x548049(_0x1952b0);},'aOdYK':_0x5a1969(0x1fa),'GpPRO':function(_0x4ce779,_0x500250){return _0x4ce779(_0x500250);},'FcJUh':_0x5a1969(0x251),'NYAur':_0x5a1969(0x1bc),'UzQBX':function(_0x4b6891,_0x52f97f){return _0x4b6891(_0x52f97f);},'BmQbu':_0x5a1969(0x209),'IVzMM':function(_0x441d2c,_0x3862c9){return _0x441d2c(_0x3862c9);},'DXDbH':_0x5a1969(0x24b),'OcgXP':function(_0x427e7f,_0xc3944f){return _0x427e7f(_0xc3944f);},'NRYPQ':_0x5a1969(0x1e6),'vHSFS':function(_0x577bcf,_0x3ba0c6){return _0x577bcf(_0x3ba0c6);},'MKKQM':_0x5a1969(0x201),'hWhwy':_0x5a1969(0x242),'aMtqE':function(_0x45945d,_0x3e2a22){return _0x45945d(_0x3e2a22);},'vwnDD':'#main-left\x20{margin-top:\x2080px;\x20margin-right:\x2011px;\x20margin-left:\x20-16px;\x20height:\x20490px;}','XBekP':function(_0x4f6122,_0x2a92d2){return _0x4f6122(_0x2a92d2);},'WdptK':function(_0x3cd94b,_0x2bdbac){return _0x3cd94b(_0x2bdbac);},'opYFG':_0x5a1969(0x226),'DiFcv':_0x5a1969(0x1df),'QdnqH':_0x5a1969(0x240),'ouVXZ':function(_0x3d70e7,_0x38b3a5){return _0x3d70e7(_0x38b3a5);},'ixVdY':function(_0x1ebe79,_0x54ce27){return _0x1ebe79(_0x54ce27);},'Ulouy':_0x5a1969(0x22e),'HhVCt':_0x5a1969(0x21c),'SZRVl':'#onesignal-bell-container.onesignal-reset\x20.onesignal-bell-launcher.onesignal-bell-launcher-md\x20.onesignal-bell-launcher-button\x20{display:\x20none;}','Kkpnz':function(_0x259418,_0x25b243){return _0x259418(_0x25b243);},'rLSdM':'.options-container::-webkit-scrollbar,\x20tbody#servers-body-eu::-webkit-scrollbar,\x20tbody#servers-body-na::-webkit-scrollbar,\x20.scrimmage-mode-box::-webkit-scrollbar\x20{background-color:\x20#3d3d3d;\x20border-radius:\x2010px;\x20width:\x2010px;}','LoyOT':_0x5a1969(0x1e4),'xHPOv':_0x5a1969(0x1e9),'oPova':'div','cjmyv':_0x5a1969(0x227),'bWmqu':_0x5a1969(0x217),'lcqyU':'text-align:center;font-size:12px;color:white;'};function _0x3a9753(){const _0x330887=_0x5a1969,_0x28c659=document[_0x330887(0x253)](_0x569985[_0x330887(0x1d4)]);_0x28c659&&(_0x28c659[_0x330887(0x1f7)][_0x330887(0x24c)]=_0x569985[_0x330887(0x20f)]);}function _0x4bbdd2(){const _0x2a4b88=_0x5a1969,_0x3cbf22=document[_0x2a4b88(0x23e)](_0x2a4b88(0x1fe));_0x3cbf22&&(_0x3cbf22[_0x2a4b88(0x1f7)][_0x2a4b88(0x24c)]=_0x569985[_0x2a4b88(0x20f)]);}const _0xad0a33=new MutationObserver(function(_0x2a7b4){const _0x361fe0={'AuXCx':function(_0x327466){return _0x327466();},'XtRSQ':function(_0x3bf7fb){return _0x569985['MUPcQ'](_0x3bf7fb);}};_0x2a7b4['forEach'](function(_0x21d911){const _0x55f4b0=_0x4da6;_0x21d911[_0x55f4b0(0x1d8)][_0x55f4b0(0x1da)]&&(_0x361fe0[_0x55f4b0(0x1e7)](_0x3a9753),_0x361fe0['XtRSQ'](_0x4bbdd2));});}),_0x46f745={};_0x46f745['childList']=!![],_0x46f745[_0x5a1969(0x1d5)]=!![],_0xad0a33['observe'](document[_0x5a1969(0x1d2)],_0x46f745),_0x569985['yfVgh'](_0x3a9753),_0x569985[_0x5a1969(0x208)](_0x4bbdd2),_0x569985['jQEWy'](GM_addStyle,_0x569985[_0x5a1969(0x1c9)]),_0x569985[_0x5a1969(0x1c4)](GM_addStyle,_0x569985[_0x5a1969(0x223)]),_0x569985[_0x5a1969(0x1c4)](GM_addStyle,_0x569985['azRvK']),_0x569985[_0x5a1969(0x207)](GM_addStyle,_0x5a1969(0x22c)),_0x569985[_0x5a1969(0x245)](GM_addStyle,_0x569985['lvVTc']);const _0x4c49a2=CanvasRenderingContext2D['prototype'][_0x5a1969(0x24f)];CanvasRenderingContext2D[_0x5a1969(0x203)][_0x5a1969(0x24f)]=function(){const _0x2248a5=_0x5a1969;(_0x569985[_0x2248a5(0x1f9)](this[_0x2248a5(0x22b)]['id'],_0x569985['Ioobx'])||this['canvas']['id']===_0x569985[_0x2248a5(0x224)]||_0x569985['jceqX'](this['canvas']['id'],_0x2248a5(0x1e2)))&&(this[_0x2248a5(0x1cf)]=_0x569985[_0x2248a5(0x1be)]),_0x4c49a2[_0x2248a5(0x23a)](this,arguments);},_0x569985[_0x5a1969(0x213)](GM_addStyle,_0x5a1969(0x21f)),GM_addStyle(_0x569985[_0x5a1969(0x23d)]),_0x569985[_0x5a1969(0x1ee)](GM_addStyle,_0x569985[_0x5a1969(0x1dc)]),_0x569985[_0x5a1969(0x1b9)](GM_addStyle,_0x569985['yhbXy']),_0x569985['wgwfN'](GM_addStyle,_0x569985[_0x5a1969(0x23f)]),_0x569985[_0x5a1969(0x1d1)](GM_addStyle,_0x569985[_0x5a1969(0x231)]),GM_addStyle(_0x569985[_0x5a1969(0x1f6)]),_0x569985[_0x5a1969(0x1eb)](GM_addStyle,_0x569985[_0x5a1969(0x1cb)]),_0x569985[_0x5a1969(0x243)](GM_addStyle,_0x569985[_0x5a1969(0x24e)]),_0x569985[_0x5a1969(0x213)](GM_addStyle,_0x569985[_0x5a1969(0x237)]),_0x569985[_0x5a1969(0x21b)](GM_addStyle,_0x569985[_0x5a1969(0x1c6)]),_0x569985[_0x5a1969(0x247)](GM_addStyle,_0x569985['DXDbH']),_0x569985[_0x5a1969(0x1c4)](GM_addStyle,_0x5a1969(0x22d)),_0x569985[_0x5a1969(0x22f)](GM_addStyle,_0x569985[_0x5a1969(0x249)]),_0x569985[_0x5a1969(0x1ce)](GM_addStyle,_0x569985[_0x5a1969(0x222)]),_0x569985[_0x5a1969(0x1ee)](GM_addStyle,_0x569985[_0x5a1969(0x1ed)]),_0x569985['aMtqE'](GM_addStyle,_0x5a1969(0x200)),_0x569985['vHSFS'](GM_addStyle,_0x569985[_0x5a1969(0x236)]),_0x569985[_0x5a1969(0x220)](GM_addStyle,_0x5a1969(0x246)),_0x569985['WdptK'](GM_addStyle,_0x569985[_0x5a1969(0x1d3)]),_0x569985[_0x5a1969(0x22f)](GM_addStyle,_0x569985['DiFcv']),GM_addStyle(_0x569985[_0x5a1969(0x1c7)]),_0x569985['IVzMM'](GM_addStyle,'.sp-replacer,\x20input[type=\x22checkbox\x22\x20i]\x20{margin-right:\x207.5px;}'),_0x569985[_0x5a1969(0x211)](GM_addStyle,_0x5a1969(0x239)),_0x569985[_0x5a1969(0x1cd)](GM_addStyle,_0x569985[_0x5a1969(0x1d7)]),_0x569985[_0x5a1969(0x213)](GM_addStyle,_0x569985['HhVCt']),_0x569985[_0x5a1969(0x247)](GM_addStyle,_0x569985[_0x5a1969(0x215)]),_0x569985[_0x5a1969(0x23c)](GM_addStyle,'#name-box\x20{display:\x20inline-flex;}'),_0x569985[_0x5a1969(0x220)](GM_addStyle,_0x569985[_0x5a1969(0x221)]),_0x569985[_0x5a1969(0x1d1)](GM_addStyle,'.options-container::-webkit-scrollbar-thumb\x20{background-color:\x20#5f5f5f;\x20border-radius:\x2010px;}'),GM_addStyle(_0x569985[_0x5a1969(0x205)]);const _0x32bc39=document[_0x5a1969(0x253)](_0x569985[_0x5a1969(0x218)]);if(_0x32bc39){const _0x222151=document[_0x5a1969(0x204)](_0x569985[_0x5a1969(0x238)]);_0x222151[_0x5a1969(0x248)]=_0x569985['cjmyv'],_0x222151['id']=_0x569985[_0x5a1969(0x20d)],_0x32bc39[_0x5a1969(0x1e3)](_0x222151),document[_0x5a1969(0x253)](_0x5a1969(0x217))['style'][_0x5a1969(0x1dd)]=_0x569985['lcqyU'];}function _0x36bdc3(){const _0x4ae308=_0x5a1969,_0x3c666e={'qYbLq':_0x569985[_0x4ae308(0x235)],'XYfoZ':_0x569985['OyyUi'],'kXPKG':function(_0x473a06){return _0x569985['NHeQf'](_0x473a06);},'zhXsz':_0x4ae308(0x1f5)},_0x53f15d=document[_0x4ae308(0x253)]('main-themes');if(_0x53f15d){const _0x3fadc3=_0x53f15d['querySelector'](_0x569985['XJHWd']),_0x2e4da3=_0x3fadc3[_0x4ae308(0x23e)](_0x569985[_0x4ae308(0x1e1)]);if(_0x2e4da3){_0x569985['HnSBm'](GM_addStyle,_0x569985['vKEkg']),_0x569985[_0x4ae308(0x21a)](GM_addStyle,_0x569985[_0x4ae308(0x1d6)]);const _0x53b253=document[_0x4ae308(0x204)]('tr');_0x53b253[_0x4ae308(0x248)]=_0x4ae308(0x252),_0x2e4da3['appendChild'](_0x53b253);const _0x49d90a=document[_0x4ae308(0x204)]('tr');_0x49d90a[_0x4ae308(0x248)]=_0x4ae308(0x1ef),_0x2e4da3[_0x4ae308(0x1e3)](_0x49d90a);const _0x30a4bb=document[_0x4ae308(0x204)]('tr');_0x30a4bb['innerHTML']=_0x4ae308(0x1c0),_0x2e4da3['appendChild'](_0x30a4bb);const _0x13d50a=document[_0x4ae308(0x253)](_0x569985['TEbhm']),_0x81455d=document[_0x4ae308(0x253)](_0x569985[_0x4ae308(0x21e)]),_0x31ca0d=localStorage[_0x4ae308(0x210)](_0x569985[_0x4ae308(0x1f4)]);_0x31ca0d&&(_0x13d50a[_0x4ae308(0x1f3)]=_0x31ca0d,document[_0x4ae308(0x23e)](_0x569985[_0x4ae308(0x1f2)])['style'][_0x4ae308(0x24d)]=_0x4ae308(0x1e5)+_0x31ca0d+')');const _0x138acd=_0x569985['lPsqJ'](localStorage['getItem'](_0x569985[_0x4ae308(0x20a)]),_0x569985[_0x4ae308(0x250)]);_0x81455d[_0x4ae308(0x1f8)]=_0x138acd,_0x569985[_0x4ae308(0x1e0)](_0x1ca46d),_0x13d50a['addEventListener'](_0x569985[_0x4ae308(0x1fd)],function(_0x47d451){const _0x5742f9=_0x4ae308;if(_0x569985['OsAum'](_0x47d451[_0x5742f9(0x21d)],_0x5742f9(0x241))){const _0x1909b4=_0x13d50a[_0x5742f9(0x1f3)][_0x5742f9(0x1f1)]();_0x1909b4&&(document[_0x5742f9(0x23e)](_0x569985[_0x5742f9(0x1f2)])[_0x5742f9(0x1f7)][_0x5742f9(0x24d)]=_0x5742f9(0x1e5)+_0x1909b4+')',localStorage[_0x5742f9(0x228)](_0x569985['heZOz'],_0x1909b4),_0x13d50a[_0x5742f9(0x1f3)]='');}});function _0x1ca46d(){const _0x11f0ec=_0x4ae308,_0x4a3ed0=document[_0x11f0ec(0x212)](_0x3c666e[_0x11f0ec(0x1e8)]);_0x4a3ed0[_0x11f0ec(0x1cc)](_0x206bce=>{const _0x12b347=_0x11f0ec;_0x81455d[_0x12b347(0x1f8)]?_0x206bce['classList']['add'](_0x3c666e[_0x12b347(0x232)]):_0x206bce['classList'][_0x12b347(0x219)](_0x12b347(0x1bb));});}_0x81455d[_0x4ae308(0x1c8)](_0x4ae308(0x1ca),function(){const _0x45fecf=_0x4ae308;_0x3c666e[_0x45fecf(0x229)](_0x1ca46d),localStorage['setItem'](_0x3c666e[_0x45fecf(0x1bf)],_0x81455d[_0x45fecf(0x1f8)]);}),_0x569985[_0x4ae308(0x225)](_0x1ca46d);}}}const _0x2a9358=setInterval(()=>{const _0x171383=_0x5a1969,_0xb23b5f=document[_0x171383(0x253)](_0x569985[_0x171383(0x20c)]);_0xb23b5f&&(_0x569985['NHeQf'](_0x36bdc3),clearInterval(_0x2a9358));},0x7*-0x4b5+0x2*0x3b5+0x1d71);}()));