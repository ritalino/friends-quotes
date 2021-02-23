goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_37259 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_37259(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_37272 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_37272(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__36343 = coll;
var G__36344 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__36343,G__36344) : shadow.dom.lazy_native_coll_seq.call(null,G__36343,G__36344));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__36357 = arguments.length;
switch (G__36357) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__36359 = arguments.length;
switch (G__36359) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__36365 = arguments.length;
switch (G__36365) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__36376 = arguments.length;
switch (G__36376) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__36399 = arguments.length;
switch (G__36399) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__36407 = arguments.length;
switch (G__36407) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e36418){if((e36418 instanceof Object)){
var e = e36418;
return console.log("didnt support attachEvent",el,e);
} else {
throw e36418;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__36424 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__36425 = null;
var count__36426 = (0);
var i__36427 = (0);
while(true){
if((i__36427 < count__36426)){
var el = chunk__36425.cljs$core$IIndexed$_nth$arity$2(null,i__36427);
var handler_37396__$1 = ((function (seq__36424,chunk__36425,count__36426,i__36427,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36424,chunk__36425,count__36426,i__36427,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37396__$1);


var G__37397 = seq__36424;
var G__37398 = chunk__36425;
var G__37399 = count__36426;
var G__37400 = (i__36427 + (1));
seq__36424 = G__37397;
chunk__36425 = G__37398;
count__36426 = G__37399;
i__36427 = G__37400;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36424);
if(temp__5735__auto__){
var seq__36424__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36424__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36424__$1);
var G__37401 = cljs.core.chunk_rest(seq__36424__$1);
var G__37402 = c__4556__auto__;
var G__37403 = cljs.core.count(c__4556__auto__);
var G__37404 = (0);
seq__36424 = G__37401;
chunk__36425 = G__37402;
count__36426 = G__37403;
i__36427 = G__37404;
continue;
} else {
var el = cljs.core.first(seq__36424__$1);
var handler_37410__$1 = ((function (seq__36424,chunk__36425,count__36426,i__36427,el,seq__36424__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36424,chunk__36425,count__36426,i__36427,el,seq__36424__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37410__$1);


var G__37411 = cljs.core.next(seq__36424__$1);
var G__37412 = null;
var G__37413 = (0);
var G__37414 = (0);
seq__36424 = G__37411;
chunk__36425 = G__37412;
count__36426 = G__37413;
i__36427 = G__37414;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__36440 = arguments.length;
switch (G__36440) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__36456 = cljs.core.seq(events);
var chunk__36457 = null;
var count__36458 = (0);
var i__36459 = (0);
while(true){
if((i__36459 < count__36458)){
var vec__36470 = chunk__36457.cljs$core$IIndexed$_nth$arity$2(null,i__36459);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36470,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36470,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37418 = seq__36456;
var G__37419 = chunk__36457;
var G__37420 = count__36458;
var G__37421 = (i__36459 + (1));
seq__36456 = G__37418;
chunk__36457 = G__37419;
count__36458 = G__37420;
i__36459 = G__37421;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36456);
if(temp__5735__auto__){
var seq__36456__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36456__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36456__$1);
var G__37427 = cljs.core.chunk_rest(seq__36456__$1);
var G__37428 = c__4556__auto__;
var G__37429 = cljs.core.count(c__4556__auto__);
var G__37430 = (0);
seq__36456 = G__37427;
chunk__36457 = G__37428;
count__36458 = G__37429;
i__36459 = G__37430;
continue;
} else {
var vec__36474 = cljs.core.first(seq__36456__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36474,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36474,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37440 = cljs.core.next(seq__36456__$1);
var G__37441 = null;
var G__37442 = (0);
var G__37443 = (0);
seq__36456 = G__37440;
chunk__36457 = G__37441;
count__36458 = G__37442;
i__36459 = G__37443;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__36478 = cljs.core.seq(styles);
var chunk__36479 = null;
var count__36480 = (0);
var i__36481 = (0);
while(true){
if((i__36481 < count__36480)){
var vec__36493 = chunk__36479.cljs$core$IIndexed$_nth$arity$2(null,i__36481);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36493,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36493,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37459 = seq__36478;
var G__37460 = chunk__36479;
var G__37461 = count__36480;
var G__37462 = (i__36481 + (1));
seq__36478 = G__37459;
chunk__36479 = G__37460;
count__36480 = G__37461;
i__36481 = G__37462;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36478);
if(temp__5735__auto__){
var seq__36478__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36478__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36478__$1);
var G__37464 = cljs.core.chunk_rest(seq__36478__$1);
var G__37465 = c__4556__auto__;
var G__37466 = cljs.core.count(c__4556__auto__);
var G__37467 = (0);
seq__36478 = G__37464;
chunk__36479 = G__37465;
count__36480 = G__37466;
i__36481 = G__37467;
continue;
} else {
var vec__36503 = cljs.core.first(seq__36478__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36503,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36503,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37469 = cljs.core.next(seq__36478__$1);
var G__37470 = null;
var G__37471 = (0);
var G__37472 = (0);
seq__36478 = G__37469;
chunk__36479 = G__37470;
count__36480 = G__37471;
i__36481 = G__37472;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__36519_37473 = key;
var G__36519_37474__$1 = (((G__36519_37473 instanceof cljs.core.Keyword))?G__36519_37473.fqn:null);
switch (G__36519_37474__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_37498 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_37498,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_37498,"aria-");
}
})())){
el.setAttribute(ks_37498,value);
} else {
(el[ks_37498] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__36551){
var map__36552 = p__36551;
var map__36552__$1 = (((((!((map__36552 == null))))?(((((map__36552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36552):map__36552);
var props = map__36552__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36552__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__36564 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36564,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36564,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36564,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__36571 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__36571,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__36571;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__36583 = arguments.length;
switch (G__36583) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__36600){
var vec__36601 = p__36600;
var seq__36602 = cljs.core.seq(vec__36601);
var first__36603 = cljs.core.first(seq__36602);
var seq__36602__$1 = cljs.core.next(seq__36602);
var nn = first__36603;
var first__36603__$1 = cljs.core.first(seq__36602__$1);
var seq__36602__$2 = cljs.core.next(seq__36602__$1);
var np = first__36603__$1;
var nc = seq__36602__$2;
var node = vec__36601;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36605 = nn;
var G__36606 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36605,G__36606) : create_fn.call(null,G__36605,G__36606));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36608 = nn;
var G__36609 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36608,G__36609) : create_fn.call(null,G__36608,G__36609));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__36614 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36614,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36614,(1),null);
var seq__36618_37558 = cljs.core.seq(node_children);
var chunk__36620_37559 = null;
var count__36621_37560 = (0);
var i__36622_37561 = (0);
while(true){
if((i__36622_37561 < count__36621_37560)){
var child_struct_37563 = chunk__36620_37559.cljs$core$IIndexed$_nth$arity$2(null,i__36622_37561);
var children_37564 = shadow.dom.dom_node(child_struct_37563);
if(cljs.core.seq_QMARK_(children_37564)){
var seq__36669_37565 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37564));
var chunk__36671_37566 = null;
var count__36672_37567 = (0);
var i__36673_37568 = (0);
while(true){
if((i__36673_37568 < count__36672_37567)){
var child_37572 = chunk__36671_37566.cljs$core$IIndexed$_nth$arity$2(null,i__36673_37568);
if(cljs.core.truth_(child_37572)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37572);


var G__37574 = seq__36669_37565;
var G__37575 = chunk__36671_37566;
var G__37576 = count__36672_37567;
var G__37577 = (i__36673_37568 + (1));
seq__36669_37565 = G__37574;
chunk__36671_37566 = G__37575;
count__36672_37567 = G__37576;
i__36673_37568 = G__37577;
continue;
} else {
var G__37581 = seq__36669_37565;
var G__37582 = chunk__36671_37566;
var G__37583 = count__36672_37567;
var G__37584 = (i__36673_37568 + (1));
seq__36669_37565 = G__37581;
chunk__36671_37566 = G__37582;
count__36672_37567 = G__37583;
i__36673_37568 = G__37584;
continue;
}
} else {
var temp__5735__auto___37586 = cljs.core.seq(seq__36669_37565);
if(temp__5735__auto___37586){
var seq__36669_37587__$1 = temp__5735__auto___37586;
if(cljs.core.chunked_seq_QMARK_(seq__36669_37587__$1)){
var c__4556__auto___37588 = cljs.core.chunk_first(seq__36669_37587__$1);
var G__37590 = cljs.core.chunk_rest(seq__36669_37587__$1);
var G__37591 = c__4556__auto___37588;
var G__37592 = cljs.core.count(c__4556__auto___37588);
var G__37593 = (0);
seq__36669_37565 = G__37590;
chunk__36671_37566 = G__37591;
count__36672_37567 = G__37592;
i__36673_37568 = G__37593;
continue;
} else {
var child_37595 = cljs.core.first(seq__36669_37587__$1);
if(cljs.core.truth_(child_37595)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37595);


var G__37598 = cljs.core.next(seq__36669_37587__$1);
var G__37599 = null;
var G__37600 = (0);
var G__37601 = (0);
seq__36669_37565 = G__37598;
chunk__36671_37566 = G__37599;
count__36672_37567 = G__37600;
i__36673_37568 = G__37601;
continue;
} else {
var G__37602 = cljs.core.next(seq__36669_37587__$1);
var G__37603 = null;
var G__37604 = (0);
var G__37605 = (0);
seq__36669_37565 = G__37602;
chunk__36671_37566 = G__37603;
count__36672_37567 = G__37604;
i__36673_37568 = G__37605;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37564);
}


var G__37607 = seq__36618_37558;
var G__37608 = chunk__36620_37559;
var G__37609 = count__36621_37560;
var G__37610 = (i__36622_37561 + (1));
seq__36618_37558 = G__37607;
chunk__36620_37559 = G__37608;
count__36621_37560 = G__37609;
i__36622_37561 = G__37610;
continue;
} else {
var temp__5735__auto___37613 = cljs.core.seq(seq__36618_37558);
if(temp__5735__auto___37613){
var seq__36618_37615__$1 = temp__5735__auto___37613;
if(cljs.core.chunked_seq_QMARK_(seq__36618_37615__$1)){
var c__4556__auto___37619 = cljs.core.chunk_first(seq__36618_37615__$1);
var G__37621 = cljs.core.chunk_rest(seq__36618_37615__$1);
var G__37622 = c__4556__auto___37619;
var G__37623 = cljs.core.count(c__4556__auto___37619);
var G__37624 = (0);
seq__36618_37558 = G__37621;
chunk__36620_37559 = G__37622;
count__36621_37560 = G__37623;
i__36622_37561 = G__37624;
continue;
} else {
var child_struct_37625 = cljs.core.first(seq__36618_37615__$1);
var children_37626 = shadow.dom.dom_node(child_struct_37625);
if(cljs.core.seq_QMARK_(children_37626)){
var seq__36684_37627 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37626));
var chunk__36686_37628 = null;
var count__36687_37629 = (0);
var i__36688_37630 = (0);
while(true){
if((i__36688_37630 < count__36687_37629)){
var child_37631 = chunk__36686_37628.cljs$core$IIndexed$_nth$arity$2(null,i__36688_37630);
if(cljs.core.truth_(child_37631)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37631);


var G__37633 = seq__36684_37627;
var G__37634 = chunk__36686_37628;
var G__37635 = count__36687_37629;
var G__37636 = (i__36688_37630 + (1));
seq__36684_37627 = G__37633;
chunk__36686_37628 = G__37634;
count__36687_37629 = G__37635;
i__36688_37630 = G__37636;
continue;
} else {
var G__37638 = seq__36684_37627;
var G__37639 = chunk__36686_37628;
var G__37640 = count__36687_37629;
var G__37641 = (i__36688_37630 + (1));
seq__36684_37627 = G__37638;
chunk__36686_37628 = G__37639;
count__36687_37629 = G__37640;
i__36688_37630 = G__37641;
continue;
}
} else {
var temp__5735__auto___37643__$1 = cljs.core.seq(seq__36684_37627);
if(temp__5735__auto___37643__$1){
var seq__36684_37645__$1 = temp__5735__auto___37643__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36684_37645__$1)){
var c__4556__auto___37646 = cljs.core.chunk_first(seq__36684_37645__$1);
var G__37648 = cljs.core.chunk_rest(seq__36684_37645__$1);
var G__37649 = c__4556__auto___37646;
var G__37650 = cljs.core.count(c__4556__auto___37646);
var G__37651 = (0);
seq__36684_37627 = G__37648;
chunk__36686_37628 = G__37649;
count__36687_37629 = G__37650;
i__36688_37630 = G__37651;
continue;
} else {
var child_37652 = cljs.core.first(seq__36684_37645__$1);
if(cljs.core.truth_(child_37652)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37652);


var G__37653 = cljs.core.next(seq__36684_37645__$1);
var G__37654 = null;
var G__37655 = (0);
var G__37656 = (0);
seq__36684_37627 = G__37653;
chunk__36686_37628 = G__37654;
count__36687_37629 = G__37655;
i__36688_37630 = G__37656;
continue;
} else {
var G__37657 = cljs.core.next(seq__36684_37645__$1);
var G__37658 = null;
var G__37659 = (0);
var G__37660 = (0);
seq__36684_37627 = G__37657;
chunk__36686_37628 = G__37658;
count__36687_37629 = G__37659;
i__36688_37630 = G__37660;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37626);
}


var G__37662 = cljs.core.next(seq__36618_37615__$1);
var G__37663 = null;
var G__37664 = (0);
var G__37665 = (0);
seq__36618_37558 = G__37662;
chunk__36620_37559 = G__37663;
count__36621_37560 = G__37664;
i__36622_37561 = G__37665;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__36727 = cljs.core.seq(node);
var chunk__36728 = null;
var count__36729 = (0);
var i__36730 = (0);
while(true){
if((i__36730 < count__36729)){
var n = chunk__36728.cljs$core$IIndexed$_nth$arity$2(null,i__36730);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37677 = seq__36727;
var G__37678 = chunk__36728;
var G__37679 = count__36729;
var G__37680 = (i__36730 + (1));
seq__36727 = G__37677;
chunk__36728 = G__37678;
count__36729 = G__37679;
i__36730 = G__37680;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36727);
if(temp__5735__auto__){
var seq__36727__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36727__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36727__$1);
var G__37681 = cljs.core.chunk_rest(seq__36727__$1);
var G__37682 = c__4556__auto__;
var G__37683 = cljs.core.count(c__4556__auto__);
var G__37684 = (0);
seq__36727 = G__37681;
chunk__36728 = G__37682;
count__36729 = G__37683;
i__36730 = G__37684;
continue;
} else {
var n = cljs.core.first(seq__36727__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37688 = cljs.core.next(seq__36727__$1);
var G__37689 = null;
var G__37690 = (0);
var G__37691 = (0);
seq__36727 = G__37688;
chunk__36728 = G__37689;
count__36729 = G__37690;
i__36730 = G__37691;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__36747 = arguments.length;
switch (G__36747) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__36752 = arguments.length;
switch (G__36752) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__36766 = arguments.length;
switch (G__36766) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___37728 = arguments.length;
var i__4737__auto___37729 = (0);
while(true){
if((i__4737__auto___37729 < len__4736__auto___37728)){
args__4742__auto__.push((arguments[i__4737__auto___37729]));

var G__37730 = (i__4737__auto___37729 + (1));
i__4737__auto___37729 = G__37730;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__36788_37732 = cljs.core.seq(nodes);
var chunk__36789_37733 = null;
var count__36790_37734 = (0);
var i__36791_37735 = (0);
while(true){
if((i__36791_37735 < count__36790_37734)){
var node_37736 = chunk__36789_37733.cljs$core$IIndexed$_nth$arity$2(null,i__36791_37735);
fragment.appendChild(shadow.dom._to_dom(node_37736));


var G__37737 = seq__36788_37732;
var G__37738 = chunk__36789_37733;
var G__37739 = count__36790_37734;
var G__37740 = (i__36791_37735 + (1));
seq__36788_37732 = G__37737;
chunk__36789_37733 = G__37738;
count__36790_37734 = G__37739;
i__36791_37735 = G__37740;
continue;
} else {
var temp__5735__auto___37742 = cljs.core.seq(seq__36788_37732);
if(temp__5735__auto___37742){
var seq__36788_37743__$1 = temp__5735__auto___37742;
if(cljs.core.chunked_seq_QMARK_(seq__36788_37743__$1)){
var c__4556__auto___37749 = cljs.core.chunk_first(seq__36788_37743__$1);
var G__37750 = cljs.core.chunk_rest(seq__36788_37743__$1);
var G__37751 = c__4556__auto___37749;
var G__37752 = cljs.core.count(c__4556__auto___37749);
var G__37753 = (0);
seq__36788_37732 = G__37750;
chunk__36789_37733 = G__37751;
count__36790_37734 = G__37752;
i__36791_37735 = G__37753;
continue;
} else {
var node_37754 = cljs.core.first(seq__36788_37743__$1);
fragment.appendChild(shadow.dom._to_dom(node_37754));


var G__37755 = cljs.core.next(seq__36788_37743__$1);
var G__37756 = null;
var G__37757 = (0);
var G__37758 = (0);
seq__36788_37732 = G__37755;
chunk__36789_37733 = G__37756;
count__36790_37734 = G__37757;
i__36791_37735 = G__37758;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq36786){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36786));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__36814_37763 = cljs.core.seq(scripts);
var chunk__36815_37764 = null;
var count__36816_37765 = (0);
var i__36817_37766 = (0);
while(true){
if((i__36817_37766 < count__36816_37765)){
var vec__36828_37771 = chunk__36815_37764.cljs$core$IIndexed$_nth$arity$2(null,i__36817_37766);
var script_tag_37772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36828_37771,(0),null);
var script_body_37773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36828_37771,(1),null);
eval(script_body_37773);


var G__37775 = seq__36814_37763;
var G__37776 = chunk__36815_37764;
var G__37777 = count__36816_37765;
var G__37778 = (i__36817_37766 + (1));
seq__36814_37763 = G__37775;
chunk__36815_37764 = G__37776;
count__36816_37765 = G__37777;
i__36817_37766 = G__37778;
continue;
} else {
var temp__5735__auto___37779 = cljs.core.seq(seq__36814_37763);
if(temp__5735__auto___37779){
var seq__36814_37781__$1 = temp__5735__auto___37779;
if(cljs.core.chunked_seq_QMARK_(seq__36814_37781__$1)){
var c__4556__auto___37782 = cljs.core.chunk_first(seq__36814_37781__$1);
var G__37783 = cljs.core.chunk_rest(seq__36814_37781__$1);
var G__37784 = c__4556__auto___37782;
var G__37785 = cljs.core.count(c__4556__auto___37782);
var G__37786 = (0);
seq__36814_37763 = G__37783;
chunk__36815_37764 = G__37784;
count__36816_37765 = G__37785;
i__36817_37766 = G__37786;
continue;
} else {
var vec__36836_37790 = cljs.core.first(seq__36814_37781__$1);
var script_tag_37791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36836_37790,(0),null);
var script_body_37792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36836_37790,(1),null);
eval(script_body_37792);


var G__37795 = cljs.core.next(seq__36814_37781__$1);
var G__37796 = null;
var G__37797 = (0);
var G__37798 = (0);
seq__36814_37763 = G__37795;
chunk__36815_37764 = G__37796;
count__36816_37765 = G__37797;
i__36817_37766 = G__37798;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__36841){
var vec__36842 = p__36841;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36842,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36842,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__36852 = arguments.length;
switch (G__36852) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__36868 = cljs.core.seq(style_keys);
var chunk__36869 = null;
var count__36870 = (0);
var i__36871 = (0);
while(true){
if((i__36871 < count__36870)){
var it = chunk__36869.cljs$core$IIndexed$_nth$arity$2(null,i__36871);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37815 = seq__36868;
var G__37816 = chunk__36869;
var G__37817 = count__36870;
var G__37818 = (i__36871 + (1));
seq__36868 = G__37815;
chunk__36869 = G__37816;
count__36870 = G__37817;
i__36871 = G__37818;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36868);
if(temp__5735__auto__){
var seq__36868__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36868__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__36868__$1);
var G__37820 = cljs.core.chunk_rest(seq__36868__$1);
var G__37821 = c__4556__auto__;
var G__37822 = cljs.core.count(c__4556__auto__);
var G__37823 = (0);
seq__36868 = G__37820;
chunk__36869 = G__37821;
count__36870 = G__37822;
i__36871 = G__37823;
continue;
} else {
var it = cljs.core.first(seq__36868__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37826 = cljs.core.next(seq__36868__$1);
var G__37827 = null;
var G__37828 = (0);
var G__37829 = (0);
seq__36868 = G__37826;
chunk__36869 = G__37827;
count__36870 = G__37828;
i__36871 = G__37829;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k36884,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__36893 = k36884;
var G__36893__$1 = (((G__36893 instanceof cljs.core.Keyword))?G__36893.fqn:null);
switch (G__36893__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36884,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__36895){
var vec__36896 = p__36895;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36896,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36896,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36883){
var self__ = this;
var G__36883__$1 = this;
return (new cljs.core.RecordIter((0),G__36883__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36885,other36886){
var self__ = this;
var this36885__$1 = this;
return (((!((other36886 == null)))) && ((this36885__$1.constructor === other36886.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36885__$1.x,other36886.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36885__$1.y,other36886.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36885__$1.__extmap,other36886.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__36883){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__36917 = cljs.core.keyword_identical_QMARK_;
var expr__36918 = k__4388__auto__;
if(cljs.core.truth_((pred__36917.cljs$core$IFn$_invoke$arity$2 ? pred__36917.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__36918) : pred__36917.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__36918)))){
return (new shadow.dom.Coordinate(G__36883,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36917.cljs$core$IFn$_invoke$arity$2 ? pred__36917.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__36918) : pred__36917.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__36918)))){
return (new shadow.dom.Coordinate(self__.x,G__36883,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__36883),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__36883){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__36883,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__36888){
var extmap__4419__auto__ = (function (){var G__36920 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36888,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__36888)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36920);
} else {
return G__36920;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__36888),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__36888),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k36924,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__36930 = k36924;
var G__36930__$1 = (((G__36930 instanceof cljs.core.Keyword))?G__36930.fqn:null);
switch (G__36930__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36924,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__36933){
var vec__36934 = p__36933;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36934,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36934,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36923){
var self__ = this;
var G__36923__$1 = this;
return (new cljs.core.RecordIter((0),G__36923__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36925,other36926){
var self__ = this;
var this36925__$1 = this;
return (((!((other36926 == null)))) && ((this36925__$1.constructor === other36926.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36925__$1.w,other36926.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36925__$1.h,other36926.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36925__$1.__extmap,other36926.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__36923){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__36962 = cljs.core.keyword_identical_QMARK_;
var expr__36963 = k__4388__auto__;
if(cljs.core.truth_((pred__36962.cljs$core$IFn$_invoke$arity$2 ? pred__36962.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__36963) : pred__36962.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__36963)))){
return (new shadow.dom.Size(G__36923,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36962.cljs$core$IFn$_invoke$arity$2 ? pred__36962.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__36963) : pred__36962.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__36963)))){
return (new shadow.dom.Size(self__.w,G__36923,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__36923),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__36923){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__36923,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__36927){
var extmap__4419__auto__ = (function (){var G__36975 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36927,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__36927)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36975);
} else {
return G__36975;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__36927),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__36927),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__37932 = (i + (1));
var G__37933 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__37932;
ret = G__37933;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37000){
var vec__37002 = p__37000;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37002,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37002,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__37007 = arguments.length;
switch (G__37007) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__37939 = ps;
var G__37940 = (i + (1));
el__$1 = G__37939;
i = G__37940;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__37017 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37017,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37017,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37017,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__37020_37954 = cljs.core.seq(props);
var chunk__37021_37955 = null;
var count__37022_37956 = (0);
var i__37023_37957 = (0);
while(true){
if((i__37023_37957 < count__37022_37956)){
var vec__37037_37958 = chunk__37021_37955.cljs$core$IIndexed$_nth$arity$2(null,i__37023_37957);
var k_37959 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37037_37958,(0),null);
var v_37960 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37037_37958,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_37959);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37959),v_37960);


var G__37962 = seq__37020_37954;
var G__37963 = chunk__37021_37955;
var G__37964 = count__37022_37956;
var G__37965 = (i__37023_37957 + (1));
seq__37020_37954 = G__37962;
chunk__37021_37955 = G__37963;
count__37022_37956 = G__37964;
i__37023_37957 = G__37965;
continue;
} else {
var temp__5735__auto___37966 = cljs.core.seq(seq__37020_37954);
if(temp__5735__auto___37966){
var seq__37020_37967__$1 = temp__5735__auto___37966;
if(cljs.core.chunked_seq_QMARK_(seq__37020_37967__$1)){
var c__4556__auto___37968 = cljs.core.chunk_first(seq__37020_37967__$1);
var G__37969 = cljs.core.chunk_rest(seq__37020_37967__$1);
var G__37970 = c__4556__auto___37968;
var G__37971 = cljs.core.count(c__4556__auto___37968);
var G__37972 = (0);
seq__37020_37954 = G__37969;
chunk__37021_37955 = G__37970;
count__37022_37956 = G__37971;
i__37023_37957 = G__37972;
continue;
} else {
var vec__37049_37973 = cljs.core.first(seq__37020_37967__$1);
var k_37974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37049_37973,(0),null);
var v_37975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37049_37973,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_37974);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37974),v_37975);


var G__37977 = cljs.core.next(seq__37020_37967__$1);
var G__37978 = null;
var G__37979 = (0);
var G__37980 = (0);
seq__37020_37954 = G__37977;
chunk__37021_37955 = G__37978;
count__37022_37956 = G__37979;
i__37023_37957 = G__37980;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__37062 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37062,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37062,(1),null);
var seq__37065_37984 = cljs.core.seq(node_children);
var chunk__37067_37985 = null;
var count__37068_37986 = (0);
var i__37069_37987 = (0);
while(true){
if((i__37069_37987 < count__37068_37986)){
var child_struct_37990 = chunk__37067_37985.cljs$core$IIndexed$_nth$arity$2(null,i__37069_37987);
if((!((child_struct_37990 == null)))){
if(typeof child_struct_37990 === 'string'){
var text_37992 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37992),child_struct_37990].join(''));
} else {
var children_37993 = shadow.dom.svg_node(child_struct_37990);
if(cljs.core.seq_QMARK_(children_37993)){
var seq__37108_37994 = cljs.core.seq(children_37993);
var chunk__37110_37995 = null;
var count__37111_37996 = (0);
var i__37112_37997 = (0);
while(true){
if((i__37112_37997 < count__37111_37996)){
var child_37998 = chunk__37110_37995.cljs$core$IIndexed$_nth$arity$2(null,i__37112_37997);
if(cljs.core.truth_(child_37998)){
node.appendChild(child_37998);


var G__37999 = seq__37108_37994;
var G__38000 = chunk__37110_37995;
var G__38001 = count__37111_37996;
var G__38002 = (i__37112_37997 + (1));
seq__37108_37994 = G__37999;
chunk__37110_37995 = G__38000;
count__37111_37996 = G__38001;
i__37112_37997 = G__38002;
continue;
} else {
var G__38006 = seq__37108_37994;
var G__38007 = chunk__37110_37995;
var G__38008 = count__37111_37996;
var G__38009 = (i__37112_37997 + (1));
seq__37108_37994 = G__38006;
chunk__37110_37995 = G__38007;
count__37111_37996 = G__38008;
i__37112_37997 = G__38009;
continue;
}
} else {
var temp__5735__auto___38010 = cljs.core.seq(seq__37108_37994);
if(temp__5735__auto___38010){
var seq__37108_38011__$1 = temp__5735__auto___38010;
if(cljs.core.chunked_seq_QMARK_(seq__37108_38011__$1)){
var c__4556__auto___38012 = cljs.core.chunk_first(seq__37108_38011__$1);
var G__38013 = cljs.core.chunk_rest(seq__37108_38011__$1);
var G__38014 = c__4556__auto___38012;
var G__38015 = cljs.core.count(c__4556__auto___38012);
var G__38016 = (0);
seq__37108_37994 = G__38013;
chunk__37110_37995 = G__38014;
count__37111_37996 = G__38015;
i__37112_37997 = G__38016;
continue;
} else {
var child_38018 = cljs.core.first(seq__37108_38011__$1);
if(cljs.core.truth_(child_38018)){
node.appendChild(child_38018);


var G__38021 = cljs.core.next(seq__37108_38011__$1);
var G__38022 = null;
var G__38023 = (0);
var G__38024 = (0);
seq__37108_37994 = G__38021;
chunk__37110_37995 = G__38022;
count__37111_37996 = G__38023;
i__37112_37997 = G__38024;
continue;
} else {
var G__38026 = cljs.core.next(seq__37108_38011__$1);
var G__38027 = null;
var G__38028 = (0);
var G__38029 = (0);
seq__37108_37994 = G__38026;
chunk__37110_37995 = G__38027;
count__37111_37996 = G__38028;
i__37112_37997 = G__38029;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37993);
}
}


var G__38031 = seq__37065_37984;
var G__38032 = chunk__37067_37985;
var G__38033 = count__37068_37986;
var G__38034 = (i__37069_37987 + (1));
seq__37065_37984 = G__38031;
chunk__37067_37985 = G__38032;
count__37068_37986 = G__38033;
i__37069_37987 = G__38034;
continue;
} else {
var G__38036 = seq__37065_37984;
var G__38037 = chunk__37067_37985;
var G__38038 = count__37068_37986;
var G__38039 = (i__37069_37987 + (1));
seq__37065_37984 = G__38036;
chunk__37067_37985 = G__38037;
count__37068_37986 = G__38038;
i__37069_37987 = G__38039;
continue;
}
} else {
var temp__5735__auto___38040 = cljs.core.seq(seq__37065_37984);
if(temp__5735__auto___38040){
var seq__37065_38041__$1 = temp__5735__auto___38040;
if(cljs.core.chunked_seq_QMARK_(seq__37065_38041__$1)){
var c__4556__auto___38042 = cljs.core.chunk_first(seq__37065_38041__$1);
var G__38043 = cljs.core.chunk_rest(seq__37065_38041__$1);
var G__38044 = c__4556__auto___38042;
var G__38045 = cljs.core.count(c__4556__auto___38042);
var G__38046 = (0);
seq__37065_37984 = G__38043;
chunk__37067_37985 = G__38044;
count__37068_37986 = G__38045;
i__37069_37987 = G__38046;
continue;
} else {
var child_struct_38047 = cljs.core.first(seq__37065_38041__$1);
if((!((child_struct_38047 == null)))){
if(typeof child_struct_38047 === 'string'){
var text_38050 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38050),child_struct_38047].join(''));
} else {
var children_38051 = shadow.dom.svg_node(child_struct_38047);
if(cljs.core.seq_QMARK_(children_38051)){
var seq__37131_38053 = cljs.core.seq(children_38051);
var chunk__37133_38054 = null;
var count__37134_38055 = (0);
var i__37135_38056 = (0);
while(true){
if((i__37135_38056 < count__37134_38055)){
var child_38062 = chunk__37133_38054.cljs$core$IIndexed$_nth$arity$2(null,i__37135_38056);
if(cljs.core.truth_(child_38062)){
node.appendChild(child_38062);


var G__38063 = seq__37131_38053;
var G__38064 = chunk__37133_38054;
var G__38065 = count__37134_38055;
var G__38066 = (i__37135_38056 + (1));
seq__37131_38053 = G__38063;
chunk__37133_38054 = G__38064;
count__37134_38055 = G__38065;
i__37135_38056 = G__38066;
continue;
} else {
var G__38067 = seq__37131_38053;
var G__38068 = chunk__37133_38054;
var G__38069 = count__37134_38055;
var G__38070 = (i__37135_38056 + (1));
seq__37131_38053 = G__38067;
chunk__37133_38054 = G__38068;
count__37134_38055 = G__38069;
i__37135_38056 = G__38070;
continue;
}
} else {
var temp__5735__auto___38071__$1 = cljs.core.seq(seq__37131_38053);
if(temp__5735__auto___38071__$1){
var seq__37131_38072__$1 = temp__5735__auto___38071__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37131_38072__$1)){
var c__4556__auto___38073 = cljs.core.chunk_first(seq__37131_38072__$1);
var G__38074 = cljs.core.chunk_rest(seq__37131_38072__$1);
var G__38075 = c__4556__auto___38073;
var G__38077 = cljs.core.count(c__4556__auto___38073);
var G__38079 = (0);
seq__37131_38053 = G__38074;
chunk__37133_38054 = G__38075;
count__37134_38055 = G__38077;
i__37135_38056 = G__38079;
continue;
} else {
var child_38082 = cljs.core.first(seq__37131_38072__$1);
if(cljs.core.truth_(child_38082)){
node.appendChild(child_38082);


var G__38083 = cljs.core.next(seq__37131_38072__$1);
var G__38084 = null;
var G__38085 = (0);
var G__38086 = (0);
seq__37131_38053 = G__38083;
chunk__37133_38054 = G__38084;
count__37134_38055 = G__38085;
i__37135_38056 = G__38086;
continue;
} else {
var G__38089 = cljs.core.next(seq__37131_38072__$1);
var G__38090 = null;
var G__38091 = (0);
var G__38092 = (0);
seq__37131_38053 = G__38089;
chunk__37133_38054 = G__38090;
count__37134_38055 = G__38091;
i__37135_38056 = G__38092;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38051);
}
}


var G__38095 = cljs.core.next(seq__37065_38041__$1);
var G__38096 = null;
var G__38097 = (0);
var G__38098 = (0);
seq__37065_37984 = G__38095;
chunk__37067_37985 = G__38096;
count__37068_37986 = G__38097;
i__37069_37987 = G__38098;
continue;
} else {
var G__38099 = cljs.core.next(seq__37065_38041__$1);
var G__38100 = null;
var G__38101 = (0);
var G__38102 = (0);
seq__37065_37984 = G__38099;
chunk__37067_37985 = G__38100;
count__37068_37986 = G__38101;
i__37069_37987 = G__38102;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___38106 = arguments.length;
var i__4737__auto___38107 = (0);
while(true){
if((i__4737__auto___38107 < len__4736__auto___38106)){
args__4742__auto__.push((arguments[i__4737__auto___38107]));

var G__38111 = (i__4737__auto___38107 + (1));
i__4737__auto___38107 = G__38111;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq37162){
var G__37164 = cljs.core.first(seq37162);
var seq37162__$1 = cljs.core.next(seq37162);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37164,seq37162__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__37173 = arguments.length;
switch (G__37173) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__33713__auto___38123 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33714__auto__ = (function (){var switch__33516__auto__ = (function (state_37186){
var state_val_37187 = (state_37186[(1)]);
if((state_val_37187 === (1))){
var state_37186__$1 = state_37186;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37186__$1,(2),once_or_cleanup);
} else {
if((state_val_37187 === (2))){
var inst_37183 = (state_37186[(2)]);
var inst_37184 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_37186__$1 = (function (){var statearr_37191 = state_37186;
(statearr_37191[(7)] = inst_37183);

return statearr_37191;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37186__$1,inst_37184);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__33517__auto__ = null;
var shadow$dom$state_machine__33517__auto____0 = (function (){
var statearr_37196 = [null,null,null,null,null,null,null,null];
(statearr_37196[(0)] = shadow$dom$state_machine__33517__auto__);

(statearr_37196[(1)] = (1));

return statearr_37196;
});
var shadow$dom$state_machine__33517__auto____1 = (function (state_37186){
while(true){
var ret_value__33518__auto__ = (function (){try{while(true){
var result__33519__auto__ = switch__33516__auto__(state_37186);
if(cljs.core.keyword_identical_QMARK_(result__33519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33519__auto__;
}
break;
}
}catch (e37197){var ex__33520__auto__ = e37197;
var statearr_37198_38125 = state_37186;
(statearr_37198_38125[(2)] = ex__33520__auto__);


if(cljs.core.seq((state_37186[(4)]))){
var statearr_37201_38126 = state_37186;
(statearr_37201_38126[(1)] = cljs.core.first((state_37186[(4)])));

} else {
throw ex__33520__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38128 = state_37186;
state_37186 = G__38128;
continue;
} else {
return ret_value__33518__auto__;
}
break;
}
});
shadow$dom$state_machine__33517__auto__ = function(state_37186){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33517__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33517__auto____1.call(this,state_37186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33517__auto____0;
shadow$dom$state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33517__auto____1;
return shadow$dom$state_machine__33517__auto__;
})()
})();
var state__33715__auto__ = (function (){var statearr_37208 = f__33714__auto__();
(statearr_37208[(6)] = c__33713__auto___38123);

return statearr_37208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33715__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
