//tealium universal tag - utag.1445 ut4.0.202402210702, Copyright 2024 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
if(utag.ut.loader===undefined){u.loader=function(o){var b,c,l,a=document;if(o.type==="iframe"){b=a.createElement("iframe");o.attrs=o.attrs||{"height":"1","width":"1","style":"display:none"};for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";for(l in utag.loader.GV(o.attrs)){b[l]=o.attrs[l];}b.src=o.src;}if(o.id){b.id=o.id};if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb()},false);}else{b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b)}}}}else{u.loader=utag.ut.loader;}
u.ev={view:1};u.initialized=false;u.map={"_sm_1445_1":"stage","_sm_1445_2":"price","_sm_1445_3":"currency","_sm_1445_4":"occurred_at","_sm_1445_5":"payment_fee","_sm_1445_6":"taxes","_sm_1445_7":"fees","_sm_1445_8":"check_in","_sm_1445_9":"check_out","_sm_1445_10":"rooms","_sm_1445_11":"guests"};u.extend=[function(a,b){try{b['_sm_1445_1']="booking-page";}catch(e){utag.DB(e);}
try{b['_sm_1445_10']="2";}catch(e){utag.DB(e);}
try{b['_sm_1445_11']="3";}catch(e){utag.DB(e);}
try{b['_sm_1445_2']="1000.00";}catch(e){utag.DB(e);}
try{b['_sm_1445_3']="GBP";}catch(e){utag.DB(e);}
try{b['_sm_1445_4']="2023-01-01T12:00:00+00:00";}catch(e){utag.DB(e);}
try{b['_sm_1445_5']="10.00";}catch(e){utag.DB(e);}
try{b['_sm_1445_6']="15.00";}catch(e){utag.DB(e);}
try{b['_sm_1445_7']="5.00";}catch(e){utag.DB(e);}
try{b['_sm_1445_8']="2022-01-01";}catch(e){utag.DB(e);}
try{b['_sm_1445_9']="2022-01-02";}catch(e){utag.DB(e);}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={"base_url":'https://analytics.skyscanner.net/dv/v1/tag.js',"stage":"","price":"","currency":"","occurred_at":"","payment_fee":"","taxes":"","fees":"","check_in":"","check_out":"","rooms":"","guests":"",};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
(function(s,k,y,t){s['SkyscannerAnalyticsDVTag']=t;s[t]=s[t]||function(){(s[t].buffer=s[t].buffer||[]).push(arguments)};s[t].u=y;var l=k.createElement("script");l.src=y;l.id=t;l.async=1;var h=k.getElementsByTagName("head")[0];h.appendChild(l);})(window,document,u.data.base_url,'skyscannerDvTag');function skyscannerDVTag(){skyscannerDvTag('init','{{tracking_source_id}}');skyscannerDvTag('send','pre-conversion',{stage:u.data.stage,price:u.data.price,currency:u.data.currency,occurred_at:u.data.occurred_at,payment_fee:u.data.payment_fee,taxes:u.data.taxes,fees:u.data.fees,check_in:u.data.check_in,check_out:u.data.check_out,rooms:u.data.rooms,guests:u.data.guests});}
}};utag.o[loader].loader.LOAD(id);})("1445","agoda.main2018");}catch(error){utag.DB(error);}
