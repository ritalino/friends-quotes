goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37078){
var map__37079 = p__37078;
var map__37079__$1 = (((((!((map__37079 == null))))?(((((map__37079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37079):map__37079);
var m = map__37079__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37079__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37079__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37085_37423 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37086_37424 = null;
var count__37087_37425 = (0);
var i__37088_37426 = (0);
while(true){
if((i__37088_37426 < count__37087_37425)){
var f_37431 = chunk__37086_37424.cljs$core$IIndexed$_nth$arity$2(null,i__37088_37426);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_37431], 0));


var G__37436 = seq__37085_37423;
var G__37437 = chunk__37086_37424;
var G__37438 = count__37087_37425;
var G__37439 = (i__37088_37426 + (1));
seq__37085_37423 = G__37436;
chunk__37086_37424 = G__37437;
count__37087_37425 = G__37438;
i__37088_37426 = G__37439;
continue;
} else {
var temp__5735__auto___37445 = cljs.core.seq(seq__37085_37423);
if(temp__5735__auto___37445){
var seq__37085_37446__$1 = temp__5735__auto___37445;
if(cljs.core.chunked_seq_QMARK_(seq__37085_37446__$1)){
var c__4556__auto___37447 = cljs.core.chunk_first(seq__37085_37446__$1);
var G__37449 = cljs.core.chunk_rest(seq__37085_37446__$1);
var G__37450 = c__4556__auto___37447;
var G__37451 = cljs.core.count(c__4556__auto___37447);
var G__37452 = (0);
seq__37085_37423 = G__37449;
chunk__37086_37424 = G__37450;
count__37087_37425 = G__37451;
i__37088_37426 = G__37452;
continue;
} else {
var f_37453 = cljs.core.first(seq__37085_37446__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_37453], 0));


var G__37454 = cljs.core.next(seq__37085_37446__$1);
var G__37455 = null;
var G__37456 = (0);
var G__37457 = (0);
seq__37085_37423 = G__37454;
chunk__37086_37424 = G__37455;
count__37087_37425 = G__37456;
i__37088_37426 = G__37457;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_37458 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_37458], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_37458)))?cljs.core.second(arglists_37458):arglists_37458)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37104_37476 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37105_37477 = null;
var count__37106_37478 = (0);
var i__37107_37479 = (0);
while(true){
if((i__37107_37479 < count__37106_37478)){
var vec__37138_37482 = chunk__37105_37477.cljs$core$IIndexed$_nth$arity$2(null,i__37107_37479);
var name_37483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37138_37482,(0),null);
var map__37141_37484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37138_37482,(1),null);
var map__37141_37485__$1 = (((((!((map__37141_37484 == null))))?(((((map__37141_37484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37141_37484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37141_37484):map__37141_37484);
var doc_37486 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37141_37485__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37141_37485__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_37483], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_37487], 0));

if(cljs.core.truth_(doc_37486)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_37486], 0));
} else {
}


var G__37492 = seq__37104_37476;
var G__37493 = chunk__37105_37477;
var G__37494 = count__37106_37478;
var G__37495 = (i__37107_37479 + (1));
seq__37104_37476 = G__37492;
chunk__37105_37477 = G__37493;
count__37106_37478 = G__37494;
i__37107_37479 = G__37495;
continue;
} else {
var temp__5735__auto___37499 = cljs.core.seq(seq__37104_37476);
if(temp__5735__auto___37499){
var seq__37104_37500__$1 = temp__5735__auto___37499;
if(cljs.core.chunked_seq_QMARK_(seq__37104_37500__$1)){
var c__4556__auto___37502 = cljs.core.chunk_first(seq__37104_37500__$1);
var G__37503 = cljs.core.chunk_rest(seq__37104_37500__$1);
var G__37504 = c__4556__auto___37502;
var G__37505 = cljs.core.count(c__4556__auto___37502);
var G__37506 = (0);
seq__37104_37476 = G__37503;
chunk__37105_37477 = G__37504;
count__37106_37478 = G__37505;
i__37107_37479 = G__37506;
continue;
} else {
var vec__37145_37509 = cljs.core.first(seq__37104_37500__$1);
var name_37510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37145_37509,(0),null);
var map__37149_37511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37145_37509,(1),null);
var map__37149_37512__$1 = (((((!((map__37149_37511 == null))))?(((((map__37149_37511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37149_37511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37149_37511):map__37149_37511);
var doc_37513 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37149_37512__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_37514 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37149_37512__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_37510], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_37514], 0));

if(cljs.core.truth_(doc_37513)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_37513], 0));
} else {
}


var G__37519 = cljs.core.next(seq__37104_37500__$1);
var G__37520 = null;
var G__37521 = (0);
var G__37522 = (0);
seq__37104_37476 = G__37519;
chunk__37105_37477 = G__37520;
count__37106_37478 = G__37521;
i__37107_37479 = G__37522;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__37154 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37155 = null;
var count__37156 = (0);
var i__37157 = (0);
while(true){
if((i__37157 < count__37156)){
var role = chunk__37155.cljs$core$IIndexed$_nth$arity$2(null,i__37157);
var temp__5735__auto___37527__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___37527__$1)){
var spec_37529 = temp__5735__auto___37527__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_37529)], 0));
} else {
}


var G__37530 = seq__37154;
var G__37531 = chunk__37155;
var G__37532 = count__37156;
var G__37533 = (i__37157 + (1));
seq__37154 = G__37530;
chunk__37155 = G__37531;
count__37156 = G__37532;
i__37157 = G__37533;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__37154);
if(temp__5735__auto____$1){
var seq__37154__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__37154__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37154__$1);
var G__37535 = cljs.core.chunk_rest(seq__37154__$1);
var G__37536 = c__4556__auto__;
var G__37537 = cljs.core.count(c__4556__auto__);
var G__37538 = (0);
seq__37154 = G__37535;
chunk__37155 = G__37536;
count__37156 = G__37537;
i__37157 = G__37538;
continue;
} else {
var role = cljs.core.first(seq__37154__$1);
var temp__5735__auto___37539__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___37539__$2)){
var spec_37540 = temp__5735__auto___37539__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_37540)], 0));
} else {
}


var G__37542 = cljs.core.next(seq__37154__$1);
var G__37543 = null;
var G__37544 = (0);
var G__37545 = (0);
seq__37154 = G__37542;
chunk__37155 = G__37543;
count__37156 = G__37544;
i__37157 = G__37545;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__37554 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__37555 = cljs.core.ex_cause(t);
via = G__37554;
t = G__37555;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__37199 = datafied_throwable;
var map__37199__$1 = (((((!((map__37199 == null))))?(((((map__37199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37199):map__37199);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37199__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37199__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37199__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__37200 = cljs.core.last(via);
var map__37200__$1 = (((((!((map__37200 == null))))?(((((map__37200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37200):map__37200);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37200__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37200__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37200__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__37202 = data;
var map__37202__$1 = (((((!((map__37202 == null))))?(((((map__37202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37202.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37202):map__37202);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37202__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37202__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37202__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__37204 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__37204__$1 = (((((!((map__37204 == null))))?(((((map__37204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37204):map__37204);
var top_data = map__37204__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37204__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__37232 = phase;
var G__37232__$1 = (((G__37232 instanceof cljs.core.Keyword))?G__37232.fqn:null);
switch (G__37232__$1) {
case "read-source":
var map__37234 = data;
var map__37234__$1 = (((((!((map__37234 == null))))?(((((map__37234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37234):map__37234);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37234__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37234__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__37236 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__37236__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37236,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37236);
var G__37236__$2 = (cljs.core.truth_((function (){var fexpr__37242 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37242.cljs$core$IFn$_invoke$arity$1 ? fexpr__37242.cljs$core$IFn$_invoke$arity$1(source) : fexpr__37242.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37236__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37236__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37236__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37236__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__37247 = top_data;
var G__37247__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37247,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__37247);
var G__37247__$2 = (cljs.core.truth_((function (){var fexpr__37248 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37248.cljs$core$IFn$_invoke$arity$1 ? fexpr__37248.cljs$core$IFn$_invoke$arity$1(source) : fexpr__37248.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37247__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__37247__$1);
var G__37247__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37247__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37247__$2);
var G__37247__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37247__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37247__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37247__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37247__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__37254 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37254,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37254,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37254,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37254,(3),null);
var G__37262 = top_data;
var G__37262__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37262,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__37262);
var G__37262__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37262__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__37262__$1);
var G__37262__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37262__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__37262__$2);
var G__37262__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37262__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__37262__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37262__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__37262__$4;
}

break;
case "execution":
var vec__37282 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37282,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37282,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37282,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37282,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__37195_SHARP_){
var or__4126__auto__ = (p1__37195_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__37302 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__37302.cljs$core$IFn$_invoke$arity$1 ? fexpr__37302.cljs$core$IFn$_invoke$arity$1(p1__37195_SHARP_) : fexpr__37302.call(null,p1__37195_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__37304 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__37304__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37304,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__37304);
var G__37304__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37304__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__37304__$1);
var G__37304__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37304__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__37304__$2);
var G__37304__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37304__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__37304__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37304__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__37304__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37232__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__37338){
var map__37340 = p__37338;
var map__37340__$1 = (((((!((map__37340 == null))))?(((((map__37340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37340):map__37340);
var triage_data = map__37340__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37340__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37340__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37340__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37340__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37340__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37340__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37340__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37340__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__37361 = phase;
var G__37361__$1 = (((G__37361 instanceof cljs.core.Keyword))?G__37361.fqn:null);
switch (G__37361__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__37362 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__37363 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37364 = loc;
var G__37365 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37366_37716 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37367_37717 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37368_37718 = true;
var _STAR_print_fn_STAR__temp_val__37369_37719 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37368_37718);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37369_37719);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37333_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37333_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37367_37717);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37366_37716);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__37362,G__37363,G__37364,G__37365) : format.call(null,G__37362,G__37363,G__37364,G__37365));

break;
case "macroexpansion":
var G__37372 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__37373 = cause_type;
var G__37374 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37375 = loc;
var G__37376 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37372,G__37373,G__37374,G__37375,G__37376) : format.call(null,G__37372,G__37373,G__37374,G__37375,G__37376));

break;
case "compile-syntax-check":
var G__37377 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__37378 = cause_type;
var G__37379 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37380 = loc;
var G__37381 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37377,G__37378,G__37379,G__37380,G__37381) : format.call(null,G__37377,G__37378,G__37379,G__37380,G__37381));

break;
case "compilation":
var G__37382 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__37383 = cause_type;
var G__37384 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37385 = loc;
var G__37386 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37382,G__37383,G__37384,G__37385,G__37386) : format.call(null,G__37382,G__37383,G__37384,G__37385,G__37386));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__37388 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__37389 = symbol;
var G__37390 = loc;
var G__37391 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__37392_37745 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__37393_37746 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__37394_37747 = true;
var _STAR_print_fn_STAR__temp_val__37395_37748 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__37394_37747);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__37395_37748);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__37335_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__37335_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__37393_37746);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__37392_37745);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__37388,G__37389,G__37390,G__37391) : format.call(null,G__37388,G__37389,G__37390,G__37391));
} else {
var G__37405 = "Execution error%s at %s(%s).\n%s\n";
var G__37406 = cause_type;
var G__37407 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__37408 = loc;
var G__37409 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__37405,G__37406,G__37407,G__37408,G__37409) : format.call(null,G__37405,G__37406,G__37407,G__37408,G__37409));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37361__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
