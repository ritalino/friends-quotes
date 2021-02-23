goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___39564 = arguments.length;
var i__4737__auto___39565 = (0);
while(true){
if((i__4737__auto___39565 < len__4736__auto___39564)){
args__4742__auto__.push((arguments[i__4737__auto___39565]));

var G__39566 = (i__4737__auto___39565 + (1));
i__4737__auto___39565 = G__39566;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq39325){
var G__39326 = cljs.core.first(seq39325);
var seq39325__$1 = cljs.core.next(seq39325);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39326,seq39325__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__39341 = cljs.core.seq(sources);
var chunk__39342 = null;
var count__39343 = (0);
var i__39344 = (0);
while(true){
if((i__39344 < count__39343)){
var map__39359 = chunk__39342.cljs$core$IIndexed$_nth$arity$2(null,i__39344);
var map__39359__$1 = (((((!((map__39359 == null))))?(((((map__39359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39359):map__39359);
var src = map__39359__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39359__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39359__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39359__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39359__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39361){var e_39569 = e39361;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39569);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39569.message)].join('')));
}

var G__39570 = seq__39341;
var G__39571 = chunk__39342;
var G__39572 = count__39343;
var G__39573 = (i__39344 + (1));
seq__39341 = G__39570;
chunk__39342 = G__39571;
count__39343 = G__39572;
i__39344 = G__39573;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39341);
if(temp__5735__auto__){
var seq__39341__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39341__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39341__$1);
var G__39574 = cljs.core.chunk_rest(seq__39341__$1);
var G__39575 = c__4556__auto__;
var G__39576 = cljs.core.count(c__4556__auto__);
var G__39577 = (0);
seq__39341 = G__39574;
chunk__39342 = G__39575;
count__39343 = G__39576;
i__39344 = G__39577;
continue;
} else {
var map__39365 = cljs.core.first(seq__39341__$1);
var map__39365__$1 = (((((!((map__39365 == null))))?(((((map__39365.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39365.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39365):map__39365);
var src = map__39365__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39365__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39365__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39365__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39365__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e39373){var e_39581 = e39373;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39581);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39581.message)].join('')));
}

var G__39582 = cljs.core.next(seq__39341__$1);
var G__39583 = null;
var G__39584 = (0);
var G__39585 = (0);
seq__39341 = G__39582;
chunk__39342 = G__39583;
count__39343 = G__39584;
i__39344 = G__39585;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__39377 = cljs.core.seq(js_requires);
var chunk__39378 = null;
var count__39379 = (0);
var i__39380 = (0);
while(true){
if((i__39380 < count__39379)){
var js_ns = chunk__39378.cljs$core$IIndexed$_nth$arity$2(null,i__39380);
var require_str_39586 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39586);


var G__39587 = seq__39377;
var G__39588 = chunk__39378;
var G__39589 = count__39379;
var G__39590 = (i__39380 + (1));
seq__39377 = G__39587;
chunk__39378 = G__39588;
count__39379 = G__39589;
i__39380 = G__39590;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39377);
if(temp__5735__auto__){
var seq__39377__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39377__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39377__$1);
var G__39591 = cljs.core.chunk_rest(seq__39377__$1);
var G__39592 = c__4556__auto__;
var G__39593 = cljs.core.count(c__4556__auto__);
var G__39594 = (0);
seq__39377 = G__39591;
chunk__39378 = G__39592;
count__39379 = G__39593;
i__39380 = G__39594;
continue;
} else {
var js_ns = cljs.core.first(seq__39377__$1);
var require_str_39595 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39595);


var G__39596 = cljs.core.next(seq__39377__$1);
var G__39597 = null;
var G__39598 = (0);
var G__39599 = (0);
seq__39377 = G__39596;
chunk__39378 = G__39597;
count__39379 = G__39598;
i__39380 = G__39599;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__39389){
var map__39390 = p__39389;
var map__39390__$1 = (((((!((map__39390 == null))))?(((((map__39390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39390):map__39390);
var msg = map__39390__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39390__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39390__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39396(s__39397){
return (new cljs.core.LazySeq(null,(function (){
var s__39397__$1 = s__39397;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__39397__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__39403 = cljs.core.first(xs__6292__auto__);
var map__39403__$1 = (((((!((map__39403 == null))))?(((((map__39403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39403):map__39403);
var src = map__39403__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39403__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39403__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__39397__$1,map__39403,map__39403__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__39390,map__39390__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39396_$_iter__39398(s__39399){
return (new cljs.core.LazySeq(null,((function (s__39397__$1,map__39403,map__39403__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__39390,map__39390__$1,msg,info,reload_info){
return (function (){
var s__39399__$1 = s__39399;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__39399__$1);
if(temp__5735__auto____$1){
var s__39399__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__39399__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__39399__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__39401 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__39400 = (0);
while(true){
if((i__39400 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__39400);
cljs.core.chunk_append(b__39401,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__39602 = (i__39400 + (1));
i__39400 = G__39602;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39401),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39396_$_iter__39398(cljs.core.chunk_rest(s__39399__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39401),null);
}
} else {
var warning = cljs.core.first(s__39399__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39396_$_iter__39398(cljs.core.rest(s__39399__$2)));
}
} else {
return null;
}
break;
}
});})(s__39397__$1,map__39403,map__39403__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__39390,map__39390__$1,msg,info,reload_info))
,null,null));
});})(s__39397__$1,map__39403,map__39403__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__39390,map__39390__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39396(cljs.core.rest(s__39397__$1)));
} else {
var G__39603 = cljs.core.rest(s__39397__$1);
s__39397__$1 = G__39603;
continue;
}
} else {
var G__39604 = cljs.core.rest(s__39397__$1);
s__39397__$1 = G__39604;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__39408_39605 = cljs.core.seq(warnings);
var chunk__39409_39606 = null;
var count__39410_39607 = (0);
var i__39411_39608 = (0);
while(true){
if((i__39411_39608 < count__39410_39607)){
var map__39417_39609 = chunk__39409_39606.cljs$core$IIndexed$_nth$arity$2(null,i__39411_39608);
var map__39417_39610__$1 = (((((!((map__39417_39609 == null))))?(((((map__39417_39609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39417_39609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39417_39609):map__39417_39609);
var w_39611 = map__39417_39610__$1;
var msg_39612__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39417_39610__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39417_39610__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39614 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39417_39610__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39417_39610__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39615)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39613),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39614),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39612__$1)].join(''));


var G__39616 = seq__39408_39605;
var G__39617 = chunk__39409_39606;
var G__39618 = count__39410_39607;
var G__39619 = (i__39411_39608 + (1));
seq__39408_39605 = G__39616;
chunk__39409_39606 = G__39617;
count__39410_39607 = G__39618;
i__39411_39608 = G__39619;
continue;
} else {
var temp__5735__auto___39620 = cljs.core.seq(seq__39408_39605);
if(temp__5735__auto___39620){
var seq__39408_39621__$1 = temp__5735__auto___39620;
if(cljs.core.chunked_seq_QMARK_(seq__39408_39621__$1)){
var c__4556__auto___39622 = cljs.core.chunk_first(seq__39408_39621__$1);
var G__39623 = cljs.core.chunk_rest(seq__39408_39621__$1);
var G__39624 = c__4556__auto___39622;
var G__39625 = cljs.core.count(c__4556__auto___39622);
var G__39626 = (0);
seq__39408_39605 = G__39623;
chunk__39409_39606 = G__39624;
count__39410_39607 = G__39625;
i__39411_39608 = G__39626;
continue;
} else {
var map__39419_39627 = cljs.core.first(seq__39408_39621__$1);
var map__39419_39628__$1 = (((((!((map__39419_39627 == null))))?(((((map__39419_39627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39419_39627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39419_39627):map__39419_39627);
var w_39629 = map__39419_39628__$1;
var msg_39630__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39419_39628__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39631 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39419_39628__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39632 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39419_39628__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39633 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39419_39628__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39633)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39631),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39632),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39630__$1)].join(''));


var G__39634 = cljs.core.next(seq__39408_39621__$1);
var G__39635 = null;
var G__39636 = (0);
var G__39637 = (0);
seq__39408_39605 = G__39634;
chunk__39409_39606 = G__39635;
count__39410_39607 = G__39636;
i__39411_39608 = G__39637;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__39387_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__39387_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__39428){
var map__39429 = p__39428;
var map__39429__$1 = (((((!((map__39429 == null))))?(((((map__39429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39429):map__39429);
var msg = map__39429__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39429__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__39431 = cljs.core.seq(updates);
var chunk__39433 = null;
var count__39434 = (0);
var i__39435 = (0);
while(true){
if((i__39435 < count__39434)){
var path = chunk__39433.cljs$core$IIndexed$_nth$arity$2(null,i__39435);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39478_39638 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39482_39639 = null;
var count__39483_39640 = (0);
var i__39484_39641 = (0);
while(true){
if((i__39484_39641 < count__39483_39640)){
var node_39642 = chunk__39482_39639.cljs$core$IIndexed$_nth$arity$2(null,i__39484_39641);
if(cljs.core.not(node_39642.shadow$old)){
var path_match_39643 = shadow.cljs.devtools.client.browser.match_paths(node_39642.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39643)){
var new_link_39644 = (function (){var G__39491 = node_39642.cloneNode(true);
G__39491.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39643),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39491;
})();
(node_39642.shadow$old = true);

(new_link_39644.onload = ((function (seq__39478_39638,chunk__39482_39639,count__39483_39640,i__39484_39641,seq__39431,chunk__39433,count__39434,i__39435,new_link_39644,path_match_39643,node_39642,path,map__39429,map__39429__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39642);
});})(seq__39478_39638,chunk__39482_39639,count__39483_39640,i__39484_39641,seq__39431,chunk__39433,count__39434,i__39435,new_link_39644,path_match_39643,node_39642,path,map__39429,map__39429__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39643], 0));

goog.dom.insertSiblingAfter(new_link_39644,node_39642);


var G__39645 = seq__39478_39638;
var G__39646 = chunk__39482_39639;
var G__39647 = count__39483_39640;
var G__39648 = (i__39484_39641 + (1));
seq__39478_39638 = G__39645;
chunk__39482_39639 = G__39646;
count__39483_39640 = G__39647;
i__39484_39641 = G__39648;
continue;
} else {
var G__39649 = seq__39478_39638;
var G__39650 = chunk__39482_39639;
var G__39651 = count__39483_39640;
var G__39652 = (i__39484_39641 + (1));
seq__39478_39638 = G__39649;
chunk__39482_39639 = G__39650;
count__39483_39640 = G__39651;
i__39484_39641 = G__39652;
continue;
}
} else {
var G__39653 = seq__39478_39638;
var G__39654 = chunk__39482_39639;
var G__39655 = count__39483_39640;
var G__39656 = (i__39484_39641 + (1));
seq__39478_39638 = G__39653;
chunk__39482_39639 = G__39654;
count__39483_39640 = G__39655;
i__39484_39641 = G__39656;
continue;
}
} else {
var temp__5735__auto___39657 = cljs.core.seq(seq__39478_39638);
if(temp__5735__auto___39657){
var seq__39478_39658__$1 = temp__5735__auto___39657;
if(cljs.core.chunked_seq_QMARK_(seq__39478_39658__$1)){
var c__4556__auto___39659 = cljs.core.chunk_first(seq__39478_39658__$1);
var G__39660 = cljs.core.chunk_rest(seq__39478_39658__$1);
var G__39661 = c__4556__auto___39659;
var G__39662 = cljs.core.count(c__4556__auto___39659);
var G__39663 = (0);
seq__39478_39638 = G__39660;
chunk__39482_39639 = G__39661;
count__39483_39640 = G__39662;
i__39484_39641 = G__39663;
continue;
} else {
var node_39664 = cljs.core.first(seq__39478_39658__$1);
if(cljs.core.not(node_39664.shadow$old)){
var path_match_39665 = shadow.cljs.devtools.client.browser.match_paths(node_39664.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39665)){
var new_link_39666 = (function (){var G__39492 = node_39664.cloneNode(true);
G__39492.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39665),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39492;
})();
(node_39664.shadow$old = true);

(new_link_39666.onload = ((function (seq__39478_39638,chunk__39482_39639,count__39483_39640,i__39484_39641,seq__39431,chunk__39433,count__39434,i__39435,new_link_39666,path_match_39665,node_39664,seq__39478_39658__$1,temp__5735__auto___39657,path,map__39429,map__39429__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39664);
});})(seq__39478_39638,chunk__39482_39639,count__39483_39640,i__39484_39641,seq__39431,chunk__39433,count__39434,i__39435,new_link_39666,path_match_39665,node_39664,seq__39478_39658__$1,temp__5735__auto___39657,path,map__39429,map__39429__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39665], 0));

goog.dom.insertSiblingAfter(new_link_39666,node_39664);


var G__39667 = cljs.core.next(seq__39478_39658__$1);
var G__39668 = null;
var G__39669 = (0);
var G__39670 = (0);
seq__39478_39638 = G__39667;
chunk__39482_39639 = G__39668;
count__39483_39640 = G__39669;
i__39484_39641 = G__39670;
continue;
} else {
var G__39671 = cljs.core.next(seq__39478_39658__$1);
var G__39672 = null;
var G__39673 = (0);
var G__39674 = (0);
seq__39478_39638 = G__39671;
chunk__39482_39639 = G__39672;
count__39483_39640 = G__39673;
i__39484_39641 = G__39674;
continue;
}
} else {
var G__39675 = cljs.core.next(seq__39478_39658__$1);
var G__39676 = null;
var G__39677 = (0);
var G__39678 = (0);
seq__39478_39638 = G__39675;
chunk__39482_39639 = G__39676;
count__39483_39640 = G__39677;
i__39484_39641 = G__39678;
continue;
}
}
} else {
}
}
break;
}


var G__39679 = seq__39431;
var G__39680 = chunk__39433;
var G__39681 = count__39434;
var G__39682 = (i__39435 + (1));
seq__39431 = G__39679;
chunk__39433 = G__39680;
count__39434 = G__39681;
i__39435 = G__39682;
continue;
} else {
var G__39683 = seq__39431;
var G__39684 = chunk__39433;
var G__39685 = count__39434;
var G__39686 = (i__39435 + (1));
seq__39431 = G__39683;
chunk__39433 = G__39684;
count__39434 = G__39685;
i__39435 = G__39686;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39431);
if(temp__5735__auto__){
var seq__39431__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39431__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39431__$1);
var G__39687 = cljs.core.chunk_rest(seq__39431__$1);
var G__39688 = c__4556__auto__;
var G__39689 = cljs.core.count(c__4556__auto__);
var G__39690 = (0);
seq__39431 = G__39687;
chunk__39433 = G__39688;
count__39434 = G__39689;
i__39435 = G__39690;
continue;
} else {
var path = cljs.core.first(seq__39431__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39493_39691 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39497_39692 = null;
var count__39498_39693 = (0);
var i__39499_39694 = (0);
while(true){
if((i__39499_39694 < count__39498_39693)){
var node_39695 = chunk__39497_39692.cljs$core$IIndexed$_nth$arity$2(null,i__39499_39694);
if(cljs.core.not(node_39695.shadow$old)){
var path_match_39696 = shadow.cljs.devtools.client.browser.match_paths(node_39695.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39696)){
var new_link_39697 = (function (){var G__39505 = node_39695.cloneNode(true);
G__39505.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39696),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39505;
})();
(node_39695.shadow$old = true);

(new_link_39697.onload = ((function (seq__39493_39691,chunk__39497_39692,count__39498_39693,i__39499_39694,seq__39431,chunk__39433,count__39434,i__39435,new_link_39697,path_match_39696,node_39695,path,seq__39431__$1,temp__5735__auto__,map__39429,map__39429__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39695);
});})(seq__39493_39691,chunk__39497_39692,count__39498_39693,i__39499_39694,seq__39431,chunk__39433,count__39434,i__39435,new_link_39697,path_match_39696,node_39695,path,seq__39431__$1,temp__5735__auto__,map__39429,map__39429__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39696], 0));

goog.dom.insertSiblingAfter(new_link_39697,node_39695);


var G__39699 = seq__39493_39691;
var G__39700 = chunk__39497_39692;
var G__39701 = count__39498_39693;
var G__39702 = (i__39499_39694 + (1));
seq__39493_39691 = G__39699;
chunk__39497_39692 = G__39700;
count__39498_39693 = G__39701;
i__39499_39694 = G__39702;
continue;
} else {
var G__39703 = seq__39493_39691;
var G__39704 = chunk__39497_39692;
var G__39705 = count__39498_39693;
var G__39706 = (i__39499_39694 + (1));
seq__39493_39691 = G__39703;
chunk__39497_39692 = G__39704;
count__39498_39693 = G__39705;
i__39499_39694 = G__39706;
continue;
}
} else {
var G__39707 = seq__39493_39691;
var G__39708 = chunk__39497_39692;
var G__39709 = count__39498_39693;
var G__39710 = (i__39499_39694 + (1));
seq__39493_39691 = G__39707;
chunk__39497_39692 = G__39708;
count__39498_39693 = G__39709;
i__39499_39694 = G__39710;
continue;
}
} else {
var temp__5735__auto___39711__$1 = cljs.core.seq(seq__39493_39691);
if(temp__5735__auto___39711__$1){
var seq__39493_39712__$1 = temp__5735__auto___39711__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39493_39712__$1)){
var c__4556__auto___39713 = cljs.core.chunk_first(seq__39493_39712__$1);
var G__39714 = cljs.core.chunk_rest(seq__39493_39712__$1);
var G__39715 = c__4556__auto___39713;
var G__39716 = cljs.core.count(c__4556__auto___39713);
var G__39717 = (0);
seq__39493_39691 = G__39714;
chunk__39497_39692 = G__39715;
count__39498_39693 = G__39716;
i__39499_39694 = G__39717;
continue;
} else {
var node_39718 = cljs.core.first(seq__39493_39712__$1);
if(cljs.core.not(node_39718.shadow$old)){
var path_match_39719 = shadow.cljs.devtools.client.browser.match_paths(node_39718.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39719)){
var new_link_39720 = (function (){var G__39508 = node_39718.cloneNode(true);
G__39508.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39719),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39508;
})();
(node_39718.shadow$old = true);

(new_link_39720.onload = ((function (seq__39493_39691,chunk__39497_39692,count__39498_39693,i__39499_39694,seq__39431,chunk__39433,count__39434,i__39435,new_link_39720,path_match_39719,node_39718,seq__39493_39712__$1,temp__5735__auto___39711__$1,path,seq__39431__$1,temp__5735__auto__,map__39429,map__39429__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39718);
});})(seq__39493_39691,chunk__39497_39692,count__39498_39693,i__39499_39694,seq__39431,chunk__39433,count__39434,i__39435,new_link_39720,path_match_39719,node_39718,seq__39493_39712__$1,temp__5735__auto___39711__$1,path,seq__39431__$1,temp__5735__auto__,map__39429,map__39429__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39719], 0));

goog.dom.insertSiblingAfter(new_link_39720,node_39718);


var G__39721 = cljs.core.next(seq__39493_39712__$1);
var G__39722 = null;
var G__39723 = (0);
var G__39724 = (0);
seq__39493_39691 = G__39721;
chunk__39497_39692 = G__39722;
count__39498_39693 = G__39723;
i__39499_39694 = G__39724;
continue;
} else {
var G__39725 = cljs.core.next(seq__39493_39712__$1);
var G__39726 = null;
var G__39727 = (0);
var G__39728 = (0);
seq__39493_39691 = G__39725;
chunk__39497_39692 = G__39726;
count__39498_39693 = G__39727;
i__39499_39694 = G__39728;
continue;
}
} else {
var G__39731 = cljs.core.next(seq__39493_39712__$1);
var G__39732 = null;
var G__39733 = (0);
var G__39734 = (0);
seq__39493_39691 = G__39731;
chunk__39497_39692 = G__39732;
count__39498_39693 = G__39733;
i__39499_39694 = G__39734;
continue;
}
}
} else {
}
}
break;
}


var G__39735 = cljs.core.next(seq__39431__$1);
var G__39736 = null;
var G__39737 = (0);
var G__39738 = (0);
seq__39431 = G__39735;
chunk__39433 = G__39736;
count__39434 = G__39737;
i__39435 = G__39738;
continue;
} else {
var G__39739 = cljs.core.next(seq__39431__$1);
var G__39740 = null;
var G__39741 = (0);
var G__39742 = (0);
seq__39431 = G__39739;
chunk__39433 = G__39740;
count__39434 = G__39741;
i__39435 = G__39742;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__39513){
var map__39514 = p__39513;
var map__39514__$1 = (((((!((map__39514 == null))))?(((((map__39514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39514):map__39514);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39514__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__39521){
var map__39522 = p__39521;
var map__39522__$1 = (((((!((map__39522 == null))))?(((((map__39522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39522):map__39522);
var _ = map__39522__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39522__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__39527,done,error){
var map__39528 = p__39527;
var map__39528__$1 = (((((!((map__39528 == null))))?(((((map__39528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39528):map__39528);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39528__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__39530,done,error){
var map__39531 = p__39530;
var map__39531__$1 = (((((!((map__39531 == null))))?(((((map__39531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39531):map__39531);
var msg = map__39531__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39531__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39531__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39531__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__39533){
var map__39534 = p__39533;
var map__39534__$1 = (((((!((map__39534 == null))))?(((((map__39534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39534):map__39534);
var src = map__39534__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39534__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__39540 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__39540) : done.call(null,G__39540));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__39541){
var map__39542 = p__39541;
var map__39542__$1 = (((((!((map__39542 == null))))?(((((map__39542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39542):map__39542);
var msg__$1 = map__39542__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39542__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e39544){var ex = e39544;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__39545){
var map__39546 = p__39545;
var map__39546__$1 = (((((!((map__39546 == null))))?(((((map__39546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39546):map__39546);
var env = map__39546__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39546__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__39549){
var map__39550 = p__39549;
var map__39550__$1 = (((((!((map__39550 == null))))?(((((map__39550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39550):map__39550);
var msg = map__39550__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39550__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__39558){
var map__39559 = p__39558;
var map__39559__$1 = (((((!((map__39559 == null))))?(((((map__39559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39559):map__39559);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39559__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39559__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__39561){
var map__39562 = p__39561;
var map__39562__$1 = (((((!((map__39562 == null))))?(((((map__39562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39562):map__39562);
var svc = map__39562__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39562__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
