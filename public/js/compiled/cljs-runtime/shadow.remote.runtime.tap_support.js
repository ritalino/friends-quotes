goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__38172,p__38173){
var map__38174 = p__38172;
var map__38174__$1 = (((((!((map__38174 == null))))?(((((map__38174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38174):map__38174);
var svc = map__38174__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38174__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38174__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38174__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__38175 = p__38173;
var map__38175__$1 = (((((!((map__38175 == null))))?(((((map__38175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38175):map__38175);
var msg = map__38175__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38175__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38175__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38175__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38175__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__38184,p__38185){
var map__38187 = p__38184;
var map__38187__$1 = (((((!((map__38187 == null))))?(((((map__38187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38187):map__38187);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38187__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__38189 = p__38185;
var map__38189__$1 = (((((!((map__38189 == null))))?(((((map__38189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38189):map__38189);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38189__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__38205,p__38206){
var map__38207 = p__38205;
var map__38207__$1 = (((((!((map__38207 == null))))?(((((map__38207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38207):map__38207);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38207__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38207__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__38208 = p__38206;
var map__38208__$1 = (((((!((map__38208 == null))))?(((((map__38208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38208):map__38208);
var msg = map__38208__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38208__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__38215,tid){
var map__38216 = p__38215;
var map__38216__$1 = (((((!((map__38216 == null))))?(((((map__38216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38216):map__38216);
var svc = map__38216__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38216__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__38224 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__38225 = null;
var count__38226 = (0);
var i__38227 = (0);
while(true){
if((i__38227 < count__38226)){
var vec__38238 = chunk__38225.cljs$core$IIndexed$_nth$arity$2(null,i__38227);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38238,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38238,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__38273 = seq__38224;
var G__38274 = chunk__38225;
var G__38275 = count__38226;
var G__38276 = (i__38227 + (1));
seq__38224 = G__38273;
chunk__38225 = G__38274;
count__38226 = G__38275;
i__38227 = G__38276;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38224);
if(temp__5735__auto__){
var seq__38224__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38224__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38224__$1);
var G__38277 = cljs.core.chunk_rest(seq__38224__$1);
var G__38278 = c__4556__auto__;
var G__38279 = cljs.core.count(c__4556__auto__);
var G__38280 = (0);
seq__38224 = G__38277;
chunk__38225 = G__38278;
count__38226 = G__38279;
i__38227 = G__38280;
continue;
} else {
var vec__38242 = cljs.core.first(seq__38224__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38242,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38242,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__38288 = cljs.core.next(seq__38224__$1);
var G__38289 = null;
var G__38290 = (0);
var G__38291 = (0);
seq__38224 = G__38288;
chunk__38225 = G__38289;
count__38226 = G__38290;
i__38227 = G__38291;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__38219_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__38219_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__38220_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__38220_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__38221_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__38221_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__38222_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__38222_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__38250){
var map__38251 = p__38250;
var map__38251__$1 = (((((!((map__38251 == null))))?(((((map__38251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38251):map__38251);
var svc = map__38251__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38251__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38251__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
