goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__28194 = e.target.readyState;
var fexpr__28193 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__28193.cljs$core$IFn$_invoke$arity$1 ? fexpr__28193.cljs$core$IFn$_invoke$arity$1(G__28194) : fexpr__28193.call(null,G__28194));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__28203,handler){
var map__28204 = p__28203;
var map__28204__$1 = (((((!((map__28204 == null))))?(((((map__28204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28204):map__28204);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28204__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28204__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28204__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28204__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28204__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28204__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28204__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__28201_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__28201_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___28290 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___28290)){
var response_type_28291 = temp__5735__auto___28290;
(this$__$1.responseType = cljs.core.name(response_type_28291));
} else {
}

var seq__28218_28292 = cljs.core.seq(headers);
var chunk__28219_28293 = null;
var count__28220_28294 = (0);
var i__28221_28295 = (0);
while(true){
if((i__28221_28295 < count__28220_28294)){
var vec__28242_28300 = chunk__28219_28293.cljs$core$IIndexed$_nth$arity$2(null,i__28221_28295);
var k_28301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28242_28300,(0),null);
var v_28302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28242_28300,(1),null);
this$__$1.setRequestHeader(k_28301,v_28302);


var G__28303 = seq__28218_28292;
var G__28304 = chunk__28219_28293;
var G__28305 = count__28220_28294;
var G__28306 = (i__28221_28295 + (1));
seq__28218_28292 = G__28303;
chunk__28219_28293 = G__28304;
count__28220_28294 = G__28305;
i__28221_28295 = G__28306;
continue;
} else {
var temp__5735__auto___28307 = cljs.core.seq(seq__28218_28292);
if(temp__5735__auto___28307){
var seq__28218_28308__$1 = temp__5735__auto___28307;
if(cljs.core.chunked_seq_QMARK_(seq__28218_28308__$1)){
var c__4556__auto___28309 = cljs.core.chunk_first(seq__28218_28308__$1);
var G__28310 = cljs.core.chunk_rest(seq__28218_28308__$1);
var G__28311 = c__4556__auto___28309;
var G__28312 = cljs.core.count(c__4556__auto___28309);
var G__28313 = (0);
seq__28218_28292 = G__28310;
chunk__28219_28293 = G__28311;
count__28220_28294 = G__28312;
i__28221_28295 = G__28313;
continue;
} else {
var vec__28251_28314 = cljs.core.first(seq__28218_28308__$1);
var k_28315 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28251_28314,(0),null);
var v_28316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28251_28314,(1),null);
this$__$1.setRequestHeader(k_28315,v_28316);


var G__28317 = cljs.core.next(seq__28218_28308__$1);
var G__28318 = null;
var G__28319 = (0);
var G__28320 = (0);
seq__28218_28292 = G__28317;
chunk__28219_28293 = G__28318;
count__28220_28294 = G__28319;
i__28221_28295 = G__28320;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4126__auto__ = body;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
