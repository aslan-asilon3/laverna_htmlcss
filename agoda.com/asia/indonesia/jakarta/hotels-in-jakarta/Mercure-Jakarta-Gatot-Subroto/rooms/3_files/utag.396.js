//tealium universal tag - utag.396 ut4.0.202402210702, Copyright 2024 Tealium.com Inc. All Rights Reserved.
var b=window.taq=function(){b.queue.push(arguments)};b.queue=[];try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={"js_page.rtag_hotelid":"custom.hotel_id","js_page.rtag_checkin":"custom.travel_start_date","js_page.rtag_checkout":"custom.travel_end_date","js_page.rtag_exp_rmkt_5":"custom.ab","tripadvisor_event":"track"};u.extend=[function(a,b){try{if(1){b['tripadvisor_event']='PAGEVIEW'}}catch(e){utag.DB(e);}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={"base_url":"//static.tacdn.com/js3/taevents-c.js","track":"","custom":{}
};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");if(e){for(f=0;f<e.length;f++){if(e[f].indexOf("custom.")===0){var id=e[f].substr(7);u.data.custom[id]=b[d];}
else
u.data[e[f]]=b[d];}}}}
u.data.track=u.data.track||'PAGEVIEW';window.taq('init','483479235');taq('track',u.data.track,u.data.custom);u.loader_cb=function(){u.initialized=true;};if(!u.initialized){u.loader({"type":"script","src":u.data.base_url,"cb":u.loader_cb,"loc":"script","id":'utag_396'});}else{u.loader_cb();}
}};utag.o[loader].loader.LOAD(id);})("396","agoda.main2018");}catch(error){utag.DB(error);}
