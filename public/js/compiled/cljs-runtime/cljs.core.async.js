goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33819 = arguments.length;
switch (G__33819) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33820 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33820 = (function (f,blockable,meta33821){
this.f = f;
this.blockable = blockable;
this.meta33821 = meta33821;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33822,meta33821__$1){
var self__ = this;
var _33822__$1 = this;
return (new cljs.core.async.t_cljs$core$async33820(self__.f,self__.blockable,meta33821__$1));
}));

(cljs.core.async.t_cljs$core$async33820.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33822){
var self__ = this;
var _33822__$1 = this;
return self__.meta33821;
}));

(cljs.core.async.t_cljs$core$async33820.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33820.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33820.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33820.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33820.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33821","meta33821",2107366783,null)], null);
}));

(cljs.core.async.t_cljs$core$async33820.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33820.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33820");

(cljs.core.async.t_cljs$core$async33820.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33820");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33820.
 */
cljs.core.async.__GT_t_cljs$core$async33820 = (function cljs$core$async$__GT_t_cljs$core$async33820(f__$1,blockable__$1,meta33821){
return (new cljs.core.async.t_cljs$core$async33820(f__$1,blockable__$1,meta33821));
});

}

return (new cljs.core.async.t_cljs$core$async33820(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33838 = arguments.length;
switch (G__33838) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33844 = arguments.length;
switch (G__33844) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33862 = arguments.length;
switch (G__33862) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_36309 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36309) : fn1.call(null,val_36309));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36309) : fn1.call(null,val_36309));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33881 = arguments.length;
switch (G__33881) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___36327 = n;
var x_36328 = (0);
while(true){
if((x_36328 < n__4613__auto___36327)){
(a[x_36328] = x_36328);

var G__36329 = (x_36328 + (1));
x_36328 = G__36329;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33890 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33890 = (function (flag,meta33891){
this.flag = flag;
this.meta33891 = meta33891;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33892,meta33891__$1){
var self__ = this;
var _33892__$1 = this;
return (new cljs.core.async.t_cljs$core$async33890(self__.flag,meta33891__$1));
}));

(cljs.core.async.t_cljs$core$async33890.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33892){
var self__ = this;
var _33892__$1 = this;
return self__.meta33891;
}));

(cljs.core.async.t_cljs$core$async33890.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33890.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33890.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33890.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33890.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33891","meta33891",554769935,null)], null);
}));

(cljs.core.async.t_cljs$core$async33890.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33890.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33890");

(cljs.core.async.t_cljs$core$async33890.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33890");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33890.
 */
cljs.core.async.__GT_t_cljs$core$async33890 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33890(flag__$1,meta33891){
return (new cljs.core.async.t_cljs$core$async33890(flag__$1,meta33891));
});

}

return (new cljs.core.async.t_cljs$core$async33890(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33914 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33914 = (function (flag,cb,meta33915){
this.flag = flag;
this.cb = cb;
this.meta33915 = meta33915;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33916,meta33915__$1){
var self__ = this;
var _33916__$1 = this;
return (new cljs.core.async.t_cljs$core$async33914(self__.flag,self__.cb,meta33915__$1));
}));

(cljs.core.async.t_cljs$core$async33914.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33916){
var self__ = this;
var _33916__$1 = this;
return self__.meta33915;
}));

(cljs.core.async.t_cljs$core$async33914.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33914.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33914.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33914.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33914.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33915","meta33915",-1662162660,null)], null);
}));

(cljs.core.async.t_cljs$core$async33914.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33914.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33914");

(cljs.core.async.t_cljs$core$async33914.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33914");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33914.
 */
cljs.core.async.__GT_t_cljs$core$async33914 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33914(flag__$1,cb__$1,meta33915){
return (new cljs.core.async.t_cljs$core$async33914(flag__$1,cb__$1,meta33915));
});

}

return (new cljs.core.async.t_cljs$core$async33914(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33922_SHARP_){
var G__33934 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33922_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33934) : fret.call(null,G__33934));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33923_SHARP_){
var G__33940 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33923_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33940) : fret.call(null,G__33940));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36351 = (i + (1));
i = G__36351;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36353 = arguments.length;
var i__4737__auto___36354 = (0);
while(true){
if((i__4737__auto___36354 < len__4736__auto___36353)){
args__4742__auto__.push((arguments[i__4737__auto___36354]));

var G__36356 = (i__4737__auto___36354 + (1));
i__4737__auto___36354 = G__36356;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33957){
var map__33958 = p__33957;
var map__33958__$1 = (((((!((map__33958 == null))))?(((((map__33958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33958):map__33958);
var opts = map__33958__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33952){
var G__33953 = cljs.core.first(seq33952);
var seq33952__$1 = cljs.core.next(seq33952);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33953,seq33952__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33999 = arguments.length;
switch (G__33999) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33713__auto___36361 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33714__auto__ = (function (){var switch__33516__auto__ = (function (state_34042){
var state_val_34043 = (state_34042[(1)]);
if((state_val_34043 === (7))){
var inst_34037 = (state_34042[(2)]);
var state_34042__$1 = state_34042;
var statearr_34046_36362 = state_34042__$1;
(statearr_34046_36362[(2)] = inst_34037);

(statearr_34046_36362[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34043 === (1))){
var state_34042__$1 = state_34042;
var statearr_34047_36363 = state_34042__$1;
(statearr_34047_36363[(2)] = null);

(statearr_34047_36363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34043 === (4))){
var inst_34020 = (state_34042[(7)]);
var inst_34020__$1 = (state_34042[(2)]);
var inst_34021 = (inst_34020__$1 == null);
var state_34042__$1 = (function (){var statearr_34050 = state_34042;
(statearr_34050[(7)] = inst_34020__$1);

return statearr_34050;
})();
if(cljs.core.truth_(inst_34021)){
var statearr_34058_36366 = state_34042__$1;
(statearr_34058_36366[(1)] = (5));

} else {
var statearr_34059_36367 = state_34042__$1;
(statearr_34059_36367[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34043 === (13))){
var state_34042__$1 = state_34042;
var statearr_34073_36368 = state_34042__$1;
(statearr_34073_36368[(2)] = null);

(statearr_34073_36368[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34043 === (6))){
var inst_34020 = (state_34042[(7)]);
var state_34042__$1 = state_34042;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34042__$1,(11),to,inst_34020);
} else {
if((state_val_34043 === (3))){
var inst_34040 = (state_34042[(2)]);
var state_34042__$1 = state_34042;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34042__$1,inst_34040);
} else {
if((state_val_34043 === (12))){
var state_34042__$1 = state_34042;
var statearr_34100_36369 = state_34042__$1;
(statearr_34100_36369[(2)] = null);

(statearr_34100_36369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34043 === (2))){
var state_34042__$1 = state_34042;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34042__$1,(4),from);
} else {
if((state_val_34043 === (11))){
var inst_34030 = (state_34042[(2)]);
var state_34042__$1 = state_34042;
if(cljs.core.truth_(inst_34030)){
var statearr_34113_36374 = state_34042__$1;
(statearr_34113_36374[(1)] = (12));

} else {
var statearr_34114_36375 = state_34042__$1;
(statearr_34114_36375[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34043 === (9))){
var state_34042__$1 = state_34042;
var statearr_34119_36377 = state_34042__$1;
(statearr_34119_36377[(2)] = null);

(statearr_34119_36377[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34043 === (5))){
var state_34042__$1 = state_34042;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34120_36378 = state_34042__$1;
(statearr_34120_36378[(1)] = (8));

} else {
var statearr_34121_36379 = state_34042__$1;
(statearr_34121_36379[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34043 === (14))){
var inst_34035 = (state_34042[(2)]);
var state_34042__$1 = state_34042;
var statearr_34122_36380 = state_34042__$1;
(statearr_34122_36380[(2)] = inst_34035);

(statearr_34122_36380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34043 === (10))){
var inst_34027 = (state_34042[(2)]);
var state_34042__$1 = state_34042;
var statearr_34124_36381 = state_34042__$1;
(statearr_34124_36381[(2)] = inst_34027);

(statearr_34124_36381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34043 === (8))){
var inst_34024 = cljs.core.async.close_BANG_(to);
var state_34042__$1 = state_34042;
var statearr_34125_36382 = state_34042__$1;
(statearr_34125_36382[(2)] = inst_34024);

(statearr_34125_36382[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33517__auto__ = null;
var cljs$core$async$state_machine__33517__auto____0 = (function (){
var statearr_34128 = [null,null,null,null,null,null,null,null];
(statearr_34128[(0)] = cljs$core$async$state_machine__33517__auto__);

(statearr_34128[(1)] = (1));

return statearr_34128;
});
var cljs$core$async$state_machine__33517__auto____1 = (function (state_34042){
while(true){
var ret_value__33518__auto__ = (function (){try{while(true){
var result__33519__auto__ = switch__33516__auto__(state_34042);
if(cljs.core.keyword_identical_QMARK_(result__33519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33519__auto__;
}
break;
}
}catch (e34129){var ex__33520__auto__ = e34129;
var statearr_34130_36384 = state_34042;
(statearr_34130_36384[(2)] = ex__33520__auto__);


if(cljs.core.seq((state_34042[(4)]))){
var statearr_34131_36385 = state_34042;
(statearr_34131_36385[(1)] = cljs.core.first((state_34042[(4)])));

} else {
throw ex__33520__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36398 = state_34042;
state_34042 = G__36398;
continue;
} else {
return ret_value__33518__auto__;
}
break;
}
});
cljs$core$async$state_machine__33517__auto__ = function(state_34042){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33517__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33517__auto____1.call(this,state_34042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33517__auto____0;
cljs$core$async$state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33517__auto____1;
return cljs$core$async$state_machine__33517__auto__;
})()
})();
var state__33715__auto__ = (function (){var statearr_34136 = f__33714__auto__();
(statearr_34136[(6)] = c__33713__auto___36361);

return statearr_34136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33715__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__34138){
var vec__34140 = p__34138;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34140,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34140,(1),null);
var job = vec__34140;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33713__auto___36400 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33714__auto__ = (function (){var switch__33516__auto__ = (function (state_34147){
var state_val_34148 = (state_34147[(1)]);
if((state_val_34148 === (1))){
var state_34147__$1 = state_34147;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34147__$1,(2),res,v);
} else {
if((state_val_34148 === (2))){
var inst_34144 = (state_34147[(2)]);
var inst_34145 = cljs.core.async.close_BANG_(res);
var state_34147__$1 = (function (){var statearr_34150 = state_34147;
(statearr_34150[(7)] = inst_34144);

return statearr_34150;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34147__$1,inst_34145);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33517__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33517__auto____0 = (function (){
var statearr_34151 = [null,null,null,null,null,null,null,null];
(statearr_34151[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33517__auto__);

(statearr_34151[(1)] = (1));

return statearr_34151;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33517__auto____1 = (function (state_34147){
while(true){
var ret_value__33518__auto__ = (function (){try{while(true){
var result__33519__auto__ = switch__33516__auto__(state_34147);
if(cljs.core.keyword_identical_QMARK_(result__33519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33519__auto__;
}
break;
}
}catch (e34152){var ex__33520__auto__ = e34152;
var statearr_34153_36402 = state_34147;
(statearr_34153_36402[(2)] = ex__33520__auto__);


if(cljs.core.seq((state_34147[(4)]))){
var statearr_34154_36404 = state_34147;
(statearr_34154_36404[(1)] = cljs.core.first((state_34147[(4)])));

} else {
throw ex__33520__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36405 = state_34147;
state_34147 = G__36405;
continue;
} else {
return ret_value__33518__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33517__auto__ = function(state_34147){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33517__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33517__auto____1.call(this,state_34147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33517__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33517__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33517__auto__;
})()
})();
var state__33715__auto__ = (function (){var statearr_34155 = f__33714__auto__();
(statearr_34155[(6)] = c__33713__auto___36400);

return statearr_34155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33715__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__34156){
var vec__34157 = p__34156;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34157,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34157,(1),null);
var job = vec__34157;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___36408 = n;
var __36409 = (0);
while(true){
if((__36409 < n__4613__auto___36408)){
var G__34160_36410 = type;
var G__34160_36411__$1 = (((G__34160_36410 instanceof cljs.core.Keyword))?G__34160_36410.fqn:null);
switch (G__34160_36411__$1) {
case "compute":
var c__33713__auto___36413 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36409,c__33713__auto___36413,G__34160_36410,G__34160_36411__$1,n__4613__auto___36408,jobs,results,process,async){
return (function (){
var f__33714__auto__ = (function (){var switch__33516__auto__ = ((function (__36409,c__33713__auto___36413,G__34160_36410,G__34160_36411__$1,n__4613__auto___36408,jobs,results,process,async){
return (function (state_34173){
var state_val_34174 = (state_34173[(1)]);
if((state_val_34174 === (1))){
var state_34173__$1 = state_34173;
var statearr_34175_36414 = state_34173__$1;
(statearr_34175_36414[(2)] = null);

(statearr_34175_36414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34174 === (2))){
var state_34173__$1 = state_34173;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34173__$1,(4),jobs);
} else {
if((state_val_34174 === (3))){
var inst_34171 = (state_34173[(2)]);
var state_34173__$1 = state_34173;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34173__$1,inst_34171);
} else {
if((state_val_34174 === (4))){
var inst_34163 = (state_34173[(2)]);
var inst_34164 = process(inst_34163);
var state_34173__$1 = state_34173;
if(cljs.core.truth_(inst_34164)){
var statearr_34176_36415 = state_34173__$1;
(statearr_34176_36415[(1)] = (5));

} else {
var statearr_34177_36416 = state_34173__$1;
(statearr_34177_36416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34174 === (5))){
var state_34173__$1 = state_34173;
var statearr_34178_36417 = state_34173__$1;
(statearr_34178_36417[(2)] = null);

(statearr_34178_36417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34174 === (6))){
var state_34173__$1 = state_34173;
var statearr_34179_36419 = state_34173__$1;
(statearr_34179_36419[(2)] = null);

(statearr_34179_36419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34174 === (7))){
var inst_34169 = (state_34173[(2)]);
var state_34173__$1 = state_34173;
var statearr_34180_36420 = state_34173__$1;
(statearr_34180_36420[(2)] = inst_34169);

(statearr_34180_36420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__36409,c__33713__auto___36413,G__34160_36410,G__34160_36411__$1,n__4613__auto___36408,jobs,results,process,async))
;
return ((function (__36409,switch__33516__auto__,c__33713__auto___36413,G__34160_36410,G__34160_36411__$1,n__4613__auto___36408,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33517__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33517__auto____0 = (function (){
var statearr_34181 = [null,null,null,null,null,null,null];
(statearr_34181[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33517__auto__);

(statearr_34181[(1)] = (1));

return statearr_34181;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33517__auto____1 = (function (state_34173){
while(true){
var ret_value__33518__auto__ = (function (){try{while(true){
var result__33519__auto__ = switch__33516__auto__(state_34173);
if(cljs.core.keyword_identical_QMARK_(result__33519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33519__auto__;
}
break;
}
}catch (e34182){var ex__33520__auto__ = e34182;
var statearr_34183_36421 = state_34173;
(statearr_34183_36421[(2)] = ex__33520__auto__);


if(cljs.core.seq((state_34173[(4)]))){
var statearr_34184_36422 = state_34173;
(statearr_34184_36422[(1)] = cljs.core.first((state_34173[(4)])));

} else {
throw ex__33520__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36423 = state_34173;
state_34173 = G__36423;
continue;
} else {
return ret_value__33518__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33517__auto__ = function(state_34173){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33517__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33517__auto____1.call(this,state_34173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33517__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33517__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33517__auto__;
})()
;})(__36409,switch__33516__auto__,c__33713__auto___36413,G__34160_36410,G__34160_36411__$1,n__4613__auto___36408,jobs,results,process,async))
})();
var state__33715__auto__ = (function (){var statearr_34185 = f__33714__auto__();
(statearr_34185[(6)] = c__33713__auto___36413);

return statearr_34185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33715__auto__);
});})(__36409,c__33713__auto___36413,G__34160_36410,G__34160_36411__$1,n__4613__auto___36408,jobs,results,process,async))
);


break;
case "async":
var c__33713__auto___36428 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36409,c__33713__auto___36428,G__34160_36410,G__34160_36411__$1,n__4613__auto___36408,jobs,results,process,async){
return (function (){
var f__33714__auto__ = (function (){var switch__33516__auto__ = ((function (__36409,c__33713__auto___36428,G__34160_36410,G__34160_36411__$1,n__4613__auto___36408,jobs,results,process,async){
return (function (state_34199){
var state_val_34200 = (state_34199[(1)]);
if((state_val_34200 === (1))){
var state_34199__$1 = state_34199;
var statearr_34201_36429 = state_34199__$1;
(statearr_34201_36429[(2)] = null);

(statearr_34201_36429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34200 === (2))){
var state_34199__$1 = state_34199;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34199__$1,(4),jobs);
} else {
if((state_val_34200 === (3))){
var inst_34197 = (state_34199[(2)]);
var state_34199__$1 = state_34199;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34199__$1,inst_34197);
} else {
if((state_val_34200 === (4))){
var inst_34188 = (state_34199[(2)]);
var inst_34189 = async(inst_34188);
var state_34199__$1 = state_34199;
if(cljs.core.truth_(inst_34189)){
var statearr_34202_36432 = state_34199__$1;
(statearr_34202_36432[(1)] = (5));

} else {
var statearr_34203_36433 = state_34199__$1;
(statearr_34203_36433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34200 === (5))){
var state_34199__$1 = state_34199;
var statearr_34204_36434 = state_34199__$1;
(statearr_34204_36434[(2)] = null);

(statearr_34204_36434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34200 === (6))){
var state_34199__$1 = state_34199;
var statearr_34205_36435 = state_34199__$1;
(statearr_34205_36435[(2)] = null);

(statearr_34205_36435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34200 === (7))){
var inst_34195 = (state_34199[(2)]);
var state_34199__$1 = state_34199;
var statearr_34206_36437 = state_34199__$1;
(statearr_34206_36437[(2)] = inst_34195);

(statearr_34206_36437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__36409,c__33713__auto___36428,G__34160_36410,G__34160_36411__$1,n__4613__auto___36408,jobs,results,process,async))
;
return ((function (__36409,switch__33516__auto__,c__33713__auto___36428,G__34160_36410,G__34160_36411__$1,n__4613__auto___36408,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33517__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33517__auto____0 = (function (){
var statearr_34207 = [null,null,null,null,null,null,null];
(statearr_34207[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33517__auto__);

(statearr_34207[(1)] = (1));

return statearr_34207;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33517__auto____1 = (function (state_34199){
while(true){
var ret_value__33518__auto__ = (function (){try{while(true){
var result__33519__auto__ = switch__33516__auto__(state_34199);
if(cljs.core.keyword_identical_QMARK_(result__33519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33519__auto__;
}
break;
}
}catch (e34208){var ex__33520__auto__ = e34208;
var statearr_34209_36439 = state_34199;
(statearr_34209_36439[(2)] = ex__33520__auto__);


if(cljs.core.seq((state_34199[(4)]))){
var statearr_34211_36441 = state_34199;
(statearr_34211_36441[(1)] = cljs.core.first((state_34199[(4)])));

} else {
throw ex__33520__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36442 = state_34199;
state_34199 = G__36442;
continue;
} else {
return ret_value__33518__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33517__auto__ = function(state_34199){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33517__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33517__auto____1.call(this,state_34199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33517__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33517__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33517__auto__;
})()
;})(__36409,switch__33516__auto__,c__33713__auto___36428,G__34160_36410,G__34160_36411__$1,n__4613__auto___36408,jobs,results,process,async))
})();
var state__33715__auto__ = (function (){var statearr_34212 = f__33714__auto__();
(statearr_34212[(6)] = c__33713__auto___36428);

return statearr_34212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33715__auto__);
});})(__36409,c__33713__auto___36428,G__34160_36410,G__34160_36411__$1,n__4613__auto___36408,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34160_36411__$1)].join('')));

}

var G__36443 = (__36409 + (1));
__36409 = G__36443;
continue;
} else {
}
break;
}

var c__33713__auto___36453 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33714__auto__ = (function (){var switch__33516__auto__ = (function (state_34245){
var state_val_34246 = (state_34245[(1)]);
if((state_val_34246 === (7))){
var inst_34236 = (state_34245[(2)]);
var state_34245__$1 = state_34245;
var statearr_34259_36454 = state_34245__$1;
(statearr_34259_36454[(2)] = inst_34236);

(statearr_34259_36454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34246 === (1))){
var state_34245__$1 = state_34245;
var statearr_34261_36455 = state_34245__$1;
(statearr_34261_36455[(2)] = null);

(statearr_34261_36455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34246 === (4))){
var inst_34215 = (state_34245[(7)]);
var inst_34215__$1 = (state_34245[(2)]);
var inst_34216 = (inst_34215__$1 == null);
var state_34245__$1 = (function (){var statearr_34264 = state_34245;
(statearr_34264[(7)] = inst_34215__$1);

return statearr_34264;
})();
if(cljs.core.truth_(inst_34216)){
var statearr_34266_36460 = state_34245__$1;
(statearr_34266_36460[(1)] = (5));

} else {
var statearr_34267_36462 = state_34245__$1;
(statearr_34267_36462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34246 === (6))){
var inst_34220 = (state_34245[(8)]);
var inst_34215 = (state_34245[(7)]);
var inst_34220__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34225 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34227 = [inst_34215,inst_34220__$1];
var inst_34228 = (new cljs.core.PersistentVector(null,2,(5),inst_34225,inst_34227,null));
var state_34245__$1 = (function (){var statearr_34269 = state_34245;
(statearr_34269[(8)] = inst_34220__$1);

return statearr_34269;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34245__$1,(8),jobs,inst_34228);
} else {
if((state_val_34246 === (3))){
var inst_34238 = (state_34245[(2)]);
var state_34245__$1 = state_34245;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34245__$1,inst_34238);
} else {
if((state_val_34246 === (2))){
var state_34245__$1 = state_34245;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34245__$1,(4),from);
} else {
if((state_val_34246 === (9))){
var inst_34233 = (state_34245[(2)]);
var state_34245__$1 = (function (){var statearr_34272 = state_34245;
(statearr_34272[(9)] = inst_34233);

return statearr_34272;
})();
var statearr_34273_36469 = state_34245__$1;
(statearr_34273_36469[(2)] = null);

(statearr_34273_36469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34246 === (5))){
var inst_34218 = cljs.core.async.close_BANG_(jobs);
var state_34245__$1 = state_34245;
var statearr_34275_36473 = state_34245__$1;
(statearr_34275_36473[(2)] = inst_34218);

(statearr_34275_36473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34246 === (8))){
var inst_34220 = (state_34245[(8)]);
var inst_34230 = (state_34245[(2)]);
var state_34245__$1 = (function (){var statearr_34278 = state_34245;
(statearr_34278[(10)] = inst_34230);

return statearr_34278;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34245__$1,(9),results,inst_34220);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33517__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33517__auto____0 = (function (){
var statearr_34281 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34281[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33517__auto__);

(statearr_34281[(1)] = (1));

return statearr_34281;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33517__auto____1 = (function (state_34245){
while(true){
var ret_value__33518__auto__ = (function (){try{while(true){
var result__33519__auto__ = switch__33516__auto__(state_34245);
if(cljs.core.keyword_identical_QMARK_(result__33519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33519__auto__;
}
break;
}
}catch (e34282){var ex__33520__auto__ = e34282;
var statearr_34283_36477 = state_34245;
(statearr_34283_36477[(2)] = ex__33520__auto__);


if(cljs.core.seq((state_34245[(4)]))){
var statearr_34287_36482 = state_34245;
(statearr_34287_36482[(1)] = cljs.core.first((state_34245[(4)])));

} else {
throw ex__33520__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36486 = state_34245;
state_34245 = G__36486;
continue;
} else {
return ret_value__33518__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33517__auto__ = function(state_34245){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33517__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33517__auto____1.call(this,state_34245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33517__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33517__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33517__auto__;
})()
})();
var state__33715__auto__ = (function (){var statearr_34288 = f__33714__auto__();
(statearr_34288[(6)] = c__33713__auto___36453);

return statearr_34288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33715__auto__);
}));


var c__33713__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33714__auto__ = (function (){var switch__33516__auto__ = (function (state_34359){
var state_val_34360 = (state_34359[(1)]);
if((state_val_34360 === (7))){
var inst_34355 = (state_34359[(2)]);
var state_34359__$1 = state_34359;
var statearr_34361_36490 = state_34359__$1;
(statearr_34361_36490[(2)] = inst_34355);

(statearr_34361_36490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (20))){
var state_34359__$1 = state_34359;
var statearr_34362_36496 = state_34359__$1;
(statearr_34362_36496[(2)] = null);

(statearr_34362_36496[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (1))){
var state_34359__$1 = state_34359;
var statearr_34372_36499 = state_34359__$1;
(statearr_34372_36499[(2)] = null);

(statearr_34372_36499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (4))){
var inst_34295 = (state_34359[(7)]);
var inst_34295__$1 = (state_34359[(2)]);
var inst_34296 = (inst_34295__$1 == null);
var state_34359__$1 = (function (){var statearr_34380 = state_34359;
(statearr_34380[(7)] = inst_34295__$1);

return statearr_34380;
})();
if(cljs.core.truth_(inst_34296)){
var statearr_34382_36502 = state_34359__$1;
(statearr_34382_36502[(1)] = (5));

} else {
var statearr_34387_36508 = state_34359__$1;
(statearr_34387_36508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (15))){
var inst_34321 = (state_34359[(8)]);
var state_34359__$1 = state_34359;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34359__$1,(18),to,inst_34321);
} else {
if((state_val_34360 === (21))){
var inst_34350 = (state_34359[(2)]);
var state_34359__$1 = state_34359;
var statearr_34388_36513 = state_34359__$1;
(statearr_34388_36513[(2)] = inst_34350);

(statearr_34388_36513[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (13))){
var inst_34352 = (state_34359[(2)]);
var state_34359__$1 = (function (){var statearr_34391 = state_34359;
(statearr_34391[(9)] = inst_34352);

return statearr_34391;
})();
var statearr_34398_36516 = state_34359__$1;
(statearr_34398_36516[(2)] = null);

(statearr_34398_36516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (6))){
var inst_34295 = (state_34359[(7)]);
var state_34359__$1 = state_34359;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34359__$1,(11),inst_34295);
} else {
if((state_val_34360 === (17))){
var inst_34340 = (state_34359[(2)]);
var state_34359__$1 = state_34359;
if(cljs.core.truth_(inst_34340)){
var statearr_34407_36522 = state_34359__$1;
(statearr_34407_36522[(1)] = (19));

} else {
var statearr_34409_36523 = state_34359__$1;
(statearr_34409_36523[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (3))){
var inst_34357 = (state_34359[(2)]);
var state_34359__$1 = state_34359;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34359__$1,inst_34357);
} else {
if((state_val_34360 === (12))){
var inst_34312 = (state_34359[(10)]);
var state_34359__$1 = state_34359;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34359__$1,(14),inst_34312);
} else {
if((state_val_34360 === (2))){
var state_34359__$1 = state_34359;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34359__$1,(4),results);
} else {
if((state_val_34360 === (19))){
var state_34359__$1 = state_34359;
var statearr_34423_36524 = state_34359__$1;
(statearr_34423_36524[(2)] = null);

(statearr_34423_36524[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (11))){
var inst_34312 = (state_34359[(2)]);
var state_34359__$1 = (function (){var statearr_34424 = state_34359;
(statearr_34424[(10)] = inst_34312);

return statearr_34424;
})();
var statearr_34425_36527 = state_34359__$1;
(statearr_34425_36527[(2)] = null);

(statearr_34425_36527[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (9))){
var state_34359__$1 = state_34359;
var statearr_34426_36528 = state_34359__$1;
(statearr_34426_36528[(2)] = null);

(statearr_34426_36528[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (5))){
var state_34359__$1 = state_34359;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34427_36529 = state_34359__$1;
(statearr_34427_36529[(1)] = (8));

} else {
var statearr_34428_36531 = state_34359__$1;
(statearr_34428_36531[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (14))){
var inst_34321 = (state_34359[(8)]);
var inst_34321__$1 = (state_34359[(2)]);
var inst_34333 = (inst_34321__$1 == null);
var inst_34334 = cljs.core.not(inst_34333);
var state_34359__$1 = (function (){var statearr_34432 = state_34359;
(statearr_34432[(8)] = inst_34321__$1);

return statearr_34432;
})();
if(inst_34334){
var statearr_34433_36532 = state_34359__$1;
(statearr_34433_36532[(1)] = (15));

} else {
var statearr_34435_36533 = state_34359__$1;
(statearr_34435_36533[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (16))){
var state_34359__$1 = state_34359;
var statearr_34437_36534 = state_34359__$1;
(statearr_34437_36534[(2)] = false);

(statearr_34437_36534[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (10))){
var inst_34302 = (state_34359[(2)]);
var state_34359__$1 = state_34359;
var statearr_34440_36535 = state_34359__$1;
(statearr_34440_36535[(2)] = inst_34302);

(statearr_34440_36535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (18))){
var inst_34337 = (state_34359[(2)]);
var state_34359__$1 = state_34359;
var statearr_34442_36536 = state_34359__$1;
(statearr_34442_36536[(2)] = inst_34337);

(statearr_34442_36536[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34360 === (8))){
var inst_34299 = cljs.core.async.close_BANG_(to);
var state_34359__$1 = state_34359;
var statearr_34443_36537 = state_34359__$1;
(statearr_34443_36537[(2)] = inst_34299);

(statearr_34443_36537[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33517__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33517__auto____0 = (function (){
var statearr_34444 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34444[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33517__auto__);

(statearr_34444[(1)] = (1));

return statearr_34444;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33517__auto____1 = (function (state_34359){
while(true){
var ret_value__33518__auto__ = (function (){try{while(true){
var result__33519__auto__ = switch__33516__auto__(state_34359);
if(cljs.core.keyword_identical_QMARK_(result__33519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33519__auto__;
}
break;
}
}catch (e34445){var ex__33520__auto__ = e34445;
var statearr_34446_36538 = state_34359;
(statearr_34446_36538[(2)] = ex__33520__auto__);


if(cljs.core.seq((state_34359[(4)]))){
var statearr_34447_36539 = state_34359;
(statearr_34447_36539[(1)] = cljs.core.first((state_34359[(4)])));

} else {
throw ex__33520__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36547 = state_34359;
state_34359 = G__36547;
continue;
} else {
return ret_value__33518__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33517__auto__ = function(state_34359){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33517__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33517__auto____1.call(this,state_34359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33517__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33517__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33517__auto__;
})()
})();
var state__33715__auto__ = (function (){var statearr_34454 = f__33714__auto__();
(statearr_34454[(6)] = c__33713__auto__);

return statearr_34454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33715__auto__);
}));

return c__33713__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__34462 = arguments.length;
switch (G__34462) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__34483 = arguments.length;
switch (G__34483) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__34486 = arguments.length;
switch (G__34486) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33713__auto___36582 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33714__auto__ = (function (){var switch__33516__auto__ = (function (state_34519){
var state_val_34520 = (state_34519[(1)]);
if((state_val_34520 === (7))){
var inst_34514 = (state_34519[(2)]);
var state_34519__$1 = state_34519;
var statearr_34521_36584 = state_34519__$1;
(statearr_34521_36584[(2)] = inst_34514);

(statearr_34521_36584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (1))){
var state_34519__$1 = state_34519;
var statearr_34523_36586 = state_34519__$1;
(statearr_34523_36586[(2)] = null);

(statearr_34523_36586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (4))){
var inst_34493 = (state_34519[(7)]);
var inst_34493__$1 = (state_34519[(2)]);
var inst_34494 = (inst_34493__$1 == null);
var state_34519__$1 = (function (){var statearr_34524 = state_34519;
(statearr_34524[(7)] = inst_34493__$1);

return statearr_34524;
})();
if(cljs.core.truth_(inst_34494)){
var statearr_34525_36587 = state_34519__$1;
(statearr_34525_36587[(1)] = (5));

} else {
var statearr_34528_36588 = state_34519__$1;
(statearr_34528_36588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (13))){
var state_34519__$1 = state_34519;
var statearr_34532_36589 = state_34519__$1;
(statearr_34532_36589[(2)] = null);

(statearr_34532_36589[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (6))){
var inst_34493 = (state_34519[(7)]);
var inst_34499 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34493) : p.call(null,inst_34493));
var state_34519__$1 = state_34519;
if(cljs.core.truth_(inst_34499)){
var statearr_34533_36590 = state_34519__$1;
(statearr_34533_36590[(1)] = (9));

} else {
var statearr_34535_36593 = state_34519__$1;
(statearr_34535_36593[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (3))){
var inst_34516 = (state_34519[(2)]);
var state_34519__$1 = state_34519;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34519__$1,inst_34516);
} else {
if((state_val_34520 === (12))){
var state_34519__$1 = state_34519;
var statearr_34536_36594 = state_34519__$1;
(statearr_34536_36594[(2)] = null);

(statearr_34536_36594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (2))){
var state_34519__$1 = state_34519;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34519__$1,(4),ch);
} else {
if((state_val_34520 === (11))){
var inst_34493 = (state_34519[(7)]);
var inst_34504 = (state_34519[(2)]);
var state_34519__$1 = state_34519;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34519__$1,(8),inst_34504,inst_34493);
} else {
if((state_val_34520 === (9))){
var state_34519__$1 = state_34519;
var statearr_34538_36604 = state_34519__$1;
(statearr_34538_36604[(2)] = tc);

(statearr_34538_36604[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (5))){
var inst_34496 = cljs.core.async.close_BANG_(tc);
var inst_34497 = cljs.core.async.close_BANG_(fc);
var state_34519__$1 = (function (){var statearr_34545 = state_34519;
(statearr_34545[(8)] = inst_34496);

return statearr_34545;
})();
var statearr_34546_36607 = state_34519__$1;
(statearr_34546_36607[(2)] = inst_34497);

(statearr_34546_36607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (14))){
var inst_34512 = (state_34519[(2)]);
var state_34519__$1 = state_34519;
var statearr_34549_36612 = state_34519__$1;
(statearr_34549_36612[(2)] = inst_34512);

(statearr_34549_36612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (10))){
var state_34519__$1 = state_34519;
var statearr_34550_36613 = state_34519__$1;
(statearr_34550_36613[(2)] = fc);

(statearr_34550_36613[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (8))){
var inst_34506 = (state_34519[(2)]);
var state_34519__$1 = state_34519;
if(cljs.core.truth_(inst_34506)){
var statearr_34551_36617 = state_34519__$1;
(statearr_34551_36617[(1)] = (12));

} else {
var statearr_34552_36619 = state_34519__$1;
(statearr_34552_36619[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33517__auto__ = null;
var cljs$core$async$state_machine__33517__auto____0 = (function (){
var statearr_34554 = [null,null,null,null,null,null,null,null,null];
(statearr_34554[(0)] = cljs$core$async$state_machine__33517__auto__);

(statearr_34554[(1)] = (1));

return statearr_34554;
});
var cljs$core$async$state_machine__33517__auto____1 = (function (state_34519){
while(true){
var ret_value__33518__auto__ = (function (){try{while(true){
var result__33519__auto__ = switch__33516__auto__(state_34519);
if(cljs.core.keyword_identical_QMARK_(result__33519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33519__auto__;
}
break;
}
}catch (e34556){var ex__33520__auto__ = e34556;
var statearr_34557_36633 = state_34519;
(statearr_34557_36633[(2)] = ex__33520__auto__);


if(cljs.core.seq((state_34519[(4)]))){
var statearr_34558_36634 = state_34519;
(statearr_34558_36634[(1)] = cljs.core.first((state_34519[(4)])));

} else {
throw ex__33520__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36635 = state_34519;
state_34519 = G__36635;
continue;
} else {
return ret_value__33518__auto__;
}
break;
}
});
cljs$core$async$state_machine__33517__auto__ = function(state_34519){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33517__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33517__auto____1.call(this,state_34519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33517__auto____0;
cljs$core$async$state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33517__auto____1;
return cljs$core$async$state_machine__33517__auto__;
})()
})();
var state__33715__auto__ = (function (){var statearr_34560 = f__33714__auto__();
(statearr_34560[(6)] = c__33713__auto___36582);

return statearr_34560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33715__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33713__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33714__auto__ = (function (){var switch__33516__auto__ = (function (state_34586){
var state_val_34588 = (state_34586[(1)]);
if((state_val_34588 === (7))){
var inst_34582 = (state_34586[(2)]);
var state_34586__$1 = state_34586;
var statearr_34589_36636 = state_34586__$1;
(statearr_34589_36636[(2)] = inst_34582);

(statearr_34589_36636[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34588 === (1))){
var inst_34563 = init;
var inst_34564 = inst_34563;
var state_34586__$1 = (function (){var statearr_34590 = state_34586;
(statearr_34590[(7)] = inst_34564);

return statearr_34590;
})();
var statearr_34591_36637 = state_34586__$1;
(statearr_34591_36637[(2)] = null);

(statearr_34591_36637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34588 === (4))){
var inst_34568 = (state_34586[(8)]);
var inst_34568__$1 = (state_34586[(2)]);
var inst_34570 = (inst_34568__$1 == null);
var state_34586__$1 = (function (){var statearr_34592 = state_34586;
(statearr_34592[(8)] = inst_34568__$1);

return statearr_34592;
})();
if(cljs.core.truth_(inst_34570)){
var statearr_34593_36639 = state_34586__$1;
(statearr_34593_36639[(1)] = (5));

} else {
var statearr_34594_36640 = state_34586__$1;
(statearr_34594_36640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34588 === (6))){
var inst_34564 = (state_34586[(7)]);
var inst_34573 = (state_34586[(9)]);
var inst_34568 = (state_34586[(8)]);
var inst_34573__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34564,inst_34568) : f.call(null,inst_34564,inst_34568));
var inst_34574 = cljs.core.reduced_QMARK_(inst_34573__$1);
var state_34586__$1 = (function (){var statearr_34595 = state_34586;
(statearr_34595[(9)] = inst_34573__$1);

return statearr_34595;
})();
if(inst_34574){
var statearr_34596_36641 = state_34586__$1;
(statearr_34596_36641[(1)] = (8));

} else {
var statearr_34597_36642 = state_34586__$1;
(statearr_34597_36642[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34588 === (3))){
var inst_34584 = (state_34586[(2)]);
var state_34586__$1 = state_34586;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34586__$1,inst_34584);
} else {
if((state_val_34588 === (2))){
var state_34586__$1 = state_34586;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34586__$1,(4),ch);
} else {
if((state_val_34588 === (9))){
var inst_34573 = (state_34586[(9)]);
var inst_34564 = inst_34573;
var state_34586__$1 = (function (){var statearr_34600 = state_34586;
(statearr_34600[(7)] = inst_34564);

return statearr_34600;
})();
var statearr_34601_36657 = state_34586__$1;
(statearr_34601_36657[(2)] = null);

(statearr_34601_36657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34588 === (5))){
var inst_34564 = (state_34586[(7)]);
var state_34586__$1 = state_34586;
var statearr_34602_36658 = state_34586__$1;
(statearr_34602_36658[(2)] = inst_34564);

(statearr_34602_36658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34588 === (10))){
var inst_34580 = (state_34586[(2)]);
var state_34586__$1 = state_34586;
var statearr_34603_36660 = state_34586__$1;
(statearr_34603_36660[(2)] = inst_34580);

(statearr_34603_36660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34588 === (8))){
var inst_34573 = (state_34586[(9)]);
var inst_34576 = cljs.core.deref(inst_34573);
var state_34586__$1 = state_34586;
var statearr_34604_36661 = state_34586__$1;
(statearr_34604_36661[(2)] = inst_34576);

(statearr_34604_36661[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__33517__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33517__auto____0 = (function (){
var statearr_34607 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34607[(0)] = cljs$core$async$reduce_$_state_machine__33517__auto__);

(statearr_34607[(1)] = (1));

return statearr_34607;
});
var cljs$core$async$reduce_$_state_machine__33517__auto____1 = (function (state_34586){
while(true){
var ret_value__33518__auto__ = (function (){try{while(true){
var result__33519__auto__ = switch__33516__auto__(state_34586);
if(cljs.core.keyword_identical_QMARK_(result__33519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33519__auto__;
}
break;
}
}catch (e34609){var ex__33520__auto__ = e34609;
var statearr_34610_36662 = state_34586;
(statearr_34610_36662[(2)] = ex__33520__auto__);


if(cljs.core.seq((state_34586[(4)]))){
var statearr_34611_36665 = state_34586;
(statearr_34611_36665[(1)] = cljs.core.first((state_34586[(4)])));

} else {
throw ex__33520__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36666 = state_34586;
state_34586 = G__36666;
continue;
} else {
return ret_value__33518__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33517__auto__ = function(state_34586){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33517__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33517__auto____1.call(this,state_34586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33517__auto____0;
cljs$core$async$reduce_$_state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33517__auto____1;
return cljs$core$async$reduce_$_state_machine__33517__auto__;
})()
})();
var state__33715__auto__ = (function (){var statearr_34613 = f__33714__auto__();
(statearr_34613[(6)] = c__33713__auto__);

return statearr_34613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33715__auto__);
}));

return c__33713__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33713__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33714__auto__ = (function (){var switch__33516__auto__ = (function (state_34639){
var state_val_34640 = (state_34639[(1)]);
if((state_val_34640 === (1))){
var inst_34630 = cljs.core.async.reduce(f__$1,init,ch);
var state_34639__$1 = state_34639;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34639__$1,(2),inst_34630);
} else {
if((state_val_34640 === (2))){
var inst_34632 = (state_34639[(2)]);
var inst_34633 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34632) : f__$1.call(null,inst_34632));
var state_34639__$1 = state_34639;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34639__$1,inst_34633);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33517__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33517__auto____0 = (function (){
var statearr_34642 = [null,null,null,null,null,null,null];
(statearr_34642[(0)] = cljs$core$async$transduce_$_state_machine__33517__auto__);

(statearr_34642[(1)] = (1));

return statearr_34642;
});
var cljs$core$async$transduce_$_state_machine__33517__auto____1 = (function (state_34639){
while(true){
var ret_value__33518__auto__ = (function (){try{while(true){
var result__33519__auto__ = switch__33516__auto__(state_34639);
if(cljs.core.keyword_identical_QMARK_(result__33519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33519__auto__;
}
break;
}
}catch (e34643){var ex__33520__auto__ = e34643;
var statearr_34644_36677 = state_34639;
(statearr_34644_36677[(2)] = ex__33520__auto__);


if(cljs.core.seq((state_34639[(4)]))){
var statearr_34645_36678 = state_34639;
(statearr_34645_36678[(1)] = cljs.core.first((state_34639[(4)])));

} else {
throw ex__33520__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36679 = state_34639;
state_34639 = G__36679;
continue;
} else {
return ret_value__33518__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33517__auto__ = function(state_34639){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33517__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33517__auto____1.call(this,state_34639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33517__auto____0;
cljs$core$async$transduce_$_state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33517__auto____1;
return cljs$core$async$transduce_$_state_machine__33517__auto__;
})()
})();
var state__33715__auto__ = (function (){var statearr_34646 = f__33714__auto__();
(statearr_34646[(6)] = c__33713__auto__);

return statearr_34646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33715__auto__);
}));

return c__33713__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__34649 = arguments.length;
switch (G__34649) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33713__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33714__auto__ = (function (){var switch__33516__auto__ = (function (state_34675){
var state_val_34676 = (state_34675[(1)]);
if((state_val_34676 === (7))){
var inst_34656 = (state_34675[(2)]);
var state_34675__$1 = state_34675;
var statearr_34677_36682 = state_34675__$1;
(statearr_34677_36682[(2)] = inst_34656);

(statearr_34677_36682[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (1))){
var inst_34650 = cljs.core.seq(coll);
var inst_34651 = inst_34650;
var state_34675__$1 = (function (){var statearr_34678 = state_34675;
(statearr_34678[(7)] = inst_34651);

return statearr_34678;
})();
var statearr_34679_36683 = state_34675__$1;
(statearr_34679_36683[(2)] = null);

(statearr_34679_36683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (4))){
var inst_34651 = (state_34675[(7)]);
var inst_34654 = cljs.core.first(inst_34651);
var state_34675__$1 = state_34675;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34675__$1,(7),ch,inst_34654);
} else {
if((state_val_34676 === (13))){
var inst_34669 = (state_34675[(2)]);
var state_34675__$1 = state_34675;
var statearr_34680_36690 = state_34675__$1;
(statearr_34680_36690[(2)] = inst_34669);

(statearr_34680_36690[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (6))){
var inst_34659 = (state_34675[(2)]);
var state_34675__$1 = state_34675;
if(cljs.core.truth_(inst_34659)){
var statearr_34682_36691 = state_34675__$1;
(statearr_34682_36691[(1)] = (8));

} else {
var statearr_34683_36692 = state_34675__$1;
(statearr_34683_36692[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (3))){
var inst_34673 = (state_34675[(2)]);
var state_34675__$1 = state_34675;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34675__$1,inst_34673);
} else {
if((state_val_34676 === (12))){
var state_34675__$1 = state_34675;
var statearr_34684_36693 = state_34675__$1;
(statearr_34684_36693[(2)] = null);

(statearr_34684_36693[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (2))){
var inst_34651 = (state_34675[(7)]);
var state_34675__$1 = state_34675;
if(cljs.core.truth_(inst_34651)){
var statearr_34685_36694 = state_34675__$1;
(statearr_34685_36694[(1)] = (4));

} else {
var statearr_34686_36695 = state_34675__$1;
(statearr_34686_36695[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (11))){
var inst_34666 = cljs.core.async.close_BANG_(ch);
var state_34675__$1 = state_34675;
var statearr_34687_36700 = state_34675__$1;
(statearr_34687_36700[(2)] = inst_34666);

(statearr_34687_36700[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (9))){
var state_34675__$1 = state_34675;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34688_36702 = state_34675__$1;
(statearr_34688_36702[(1)] = (11));

} else {
var statearr_34689_36703 = state_34675__$1;
(statearr_34689_36703[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (5))){
var inst_34651 = (state_34675[(7)]);
var state_34675__$1 = state_34675;
var statearr_34690_36704 = state_34675__$1;
(statearr_34690_36704[(2)] = inst_34651);

(statearr_34690_36704[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (10))){
var inst_34671 = (state_34675[(2)]);
var state_34675__$1 = state_34675;
var statearr_34692_36705 = state_34675__$1;
(statearr_34692_36705[(2)] = inst_34671);

(statearr_34692_36705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34676 === (8))){
var inst_34651 = (state_34675[(7)]);
var inst_34662 = cljs.core.next(inst_34651);
var inst_34651__$1 = inst_34662;
var state_34675__$1 = (function (){var statearr_34693 = state_34675;
(statearr_34693[(7)] = inst_34651__$1);

return statearr_34693;
})();
var statearr_34694_36707 = state_34675__$1;
(statearr_34694_36707[(2)] = null);

(statearr_34694_36707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33517__auto__ = null;
var cljs$core$async$state_machine__33517__auto____0 = (function (){
var statearr_34695 = [null,null,null,null,null,null,null,null];
(statearr_34695[(0)] = cljs$core$async$state_machine__33517__auto__);

(statearr_34695[(1)] = (1));

return statearr_34695;
});
var cljs$core$async$state_machine__33517__auto____1 = (function (state_34675){
while(true){
var ret_value__33518__auto__ = (function (){try{while(true){
var result__33519__auto__ = switch__33516__auto__(state_34675);
if(cljs.core.keyword_identical_QMARK_(result__33519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33519__auto__;
}
break;
}
}catch (e34700){var ex__33520__auto__ = e34700;
var statearr_34701_36708 = state_34675;
(statearr_34701_36708[(2)] = ex__33520__auto__);


if(cljs.core.seq((state_34675[(4)]))){
var statearr_34706_36709 = state_34675;
(statearr_34706_36709[(1)] = cljs.core.first((state_34675[(4)])));

} else {
throw ex__33520__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36716 = state_34675;
state_34675 = G__36716;
continue;
} else {
return ret_value__33518__auto__;
}
break;
}
});
cljs$core$async$state_machine__33517__auto__ = function(state_34675){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33517__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33517__auto____1.call(this,state_34675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33517__auto____0;
cljs$core$async$state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33517__auto____1;
return cljs$core$async$state_machine__33517__auto__;
})()
})();
var state__33715__auto__ = (function (){var statearr_34711 = f__33714__auto__();
(statearr_34711[(6)] = c__33713__auto__);

return statearr_34711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33715__auto__);
}));

return c__33713__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__34722 = arguments.length;
switch (G__34722) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_36726 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_36726(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_36737 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_36737(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_36744 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_36744(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_36748 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_36748(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34727 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34727 = (function (ch,cs,meta34728){
this.ch = ch;
this.cs = cs;
this.meta34728 = meta34728;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34729,meta34728__$1){
var self__ = this;
var _34729__$1 = this;
return (new cljs.core.async.t_cljs$core$async34727(self__.ch,self__.cs,meta34728__$1));
}));

(cljs.core.async.t_cljs$core$async34727.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34729){
var self__ = this;
var _34729__$1 = this;
return self__.meta34728;
}));

(cljs.core.async.t_cljs$core$async34727.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34727.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34727.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34727.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34727.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34727.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34727.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34728","meta34728",-1346747444,null)], null);
}));

(cljs.core.async.t_cljs$core$async34727.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34727.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34727");

(cljs.core.async.t_cljs$core$async34727.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34727");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34727.
 */
cljs.core.async.__GT_t_cljs$core$async34727 = (function cljs$core$async$mult_$___GT_t_cljs$core$async34727(ch__$1,cs__$1,meta34728){
return (new cljs.core.async.t_cljs$core$async34727(ch__$1,cs__$1,meta34728));
});

}

return (new cljs.core.async.t_cljs$core$async34727(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__33713__auto___36763 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33714__auto__ = (function (){var switch__33516__auto__ = (function (state_34865){
var state_val_34866 = (state_34865[(1)]);
if((state_val_34866 === (7))){
var inst_34861 = (state_34865[(2)]);
var state_34865__$1 = state_34865;
var statearr_34868_36764 = state_34865__$1;
(statearr_34868_36764[(2)] = inst_34861);

(statearr_34868_36764[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (20))){
var inst_34765 = (state_34865[(7)]);
var inst_34777 = cljs.core.first(inst_34765);
var inst_34778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34777,(0),null);
var inst_34779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34777,(1),null);
var state_34865__$1 = (function (){var statearr_34869 = state_34865;
(statearr_34869[(8)] = inst_34778);

return statearr_34869;
})();
if(cljs.core.truth_(inst_34779)){
var statearr_34870_36768 = state_34865__$1;
(statearr_34870_36768[(1)] = (22));

} else {
var statearr_34871_36769 = state_34865__$1;
(statearr_34871_36769[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (27))){
var inst_34807 = (state_34865[(9)]);
var inst_34733 = (state_34865[(10)]);
var inst_34809 = (state_34865[(11)]);
var inst_34815 = (state_34865[(12)]);
var inst_34815__$1 = cljs.core._nth(inst_34807,inst_34809);
var inst_34816 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34815__$1,inst_34733,done);
var state_34865__$1 = (function (){var statearr_34873 = state_34865;
(statearr_34873[(12)] = inst_34815__$1);

return statearr_34873;
})();
if(cljs.core.truth_(inst_34816)){
var statearr_34874_36770 = state_34865__$1;
(statearr_34874_36770[(1)] = (30));

} else {
var statearr_34875_36771 = state_34865__$1;
(statearr_34875_36771[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (1))){
var state_34865__$1 = state_34865;
var statearr_34876_36772 = state_34865__$1;
(statearr_34876_36772[(2)] = null);

(statearr_34876_36772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (24))){
var inst_34765 = (state_34865[(7)]);
var inst_34784 = (state_34865[(2)]);
var inst_34785 = cljs.core.next(inst_34765);
var inst_34743 = inst_34785;
var inst_34744 = null;
var inst_34745 = (0);
var inst_34746 = (0);
var state_34865__$1 = (function (){var statearr_34877 = state_34865;
(statearr_34877[(13)] = inst_34784);

(statearr_34877[(14)] = inst_34743);

(statearr_34877[(15)] = inst_34746);

(statearr_34877[(16)] = inst_34745);

(statearr_34877[(17)] = inst_34744);

return statearr_34877;
})();
var statearr_34878_36774 = state_34865__$1;
(statearr_34878_36774[(2)] = null);

(statearr_34878_36774[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (39))){
var state_34865__$1 = state_34865;
var statearr_34883_36776 = state_34865__$1;
(statearr_34883_36776[(2)] = null);

(statearr_34883_36776[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (4))){
var inst_34733 = (state_34865[(10)]);
var inst_34733__$1 = (state_34865[(2)]);
var inst_34735 = (inst_34733__$1 == null);
var state_34865__$1 = (function (){var statearr_34884 = state_34865;
(statearr_34884[(10)] = inst_34733__$1);

return statearr_34884;
})();
if(cljs.core.truth_(inst_34735)){
var statearr_34885_36777 = state_34865__$1;
(statearr_34885_36777[(1)] = (5));

} else {
var statearr_34886_36778 = state_34865__$1;
(statearr_34886_36778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (15))){
var inst_34743 = (state_34865[(14)]);
var inst_34746 = (state_34865[(15)]);
var inst_34745 = (state_34865[(16)]);
var inst_34744 = (state_34865[(17)]);
var inst_34761 = (state_34865[(2)]);
var inst_34762 = (inst_34746 + (1));
var tmp34880 = inst_34743;
var tmp34881 = inst_34745;
var tmp34882 = inst_34744;
var inst_34743__$1 = tmp34880;
var inst_34744__$1 = tmp34882;
var inst_34745__$1 = tmp34881;
var inst_34746__$1 = inst_34762;
var state_34865__$1 = (function (){var statearr_34888 = state_34865;
(statearr_34888[(18)] = inst_34761);

(statearr_34888[(14)] = inst_34743__$1);

(statearr_34888[(15)] = inst_34746__$1);

(statearr_34888[(16)] = inst_34745__$1);

(statearr_34888[(17)] = inst_34744__$1);

return statearr_34888;
})();
var statearr_34889_36784 = state_34865__$1;
(statearr_34889_36784[(2)] = null);

(statearr_34889_36784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (21))){
var inst_34788 = (state_34865[(2)]);
var state_34865__$1 = state_34865;
var statearr_34893_36785 = state_34865__$1;
(statearr_34893_36785[(2)] = inst_34788);

(statearr_34893_36785[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (31))){
var inst_34815 = (state_34865[(12)]);
var inst_34819 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34815);
var state_34865__$1 = state_34865;
var statearr_34894_36787 = state_34865__$1;
(statearr_34894_36787[(2)] = inst_34819);

(statearr_34894_36787[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (32))){
var inst_34808 = (state_34865[(19)]);
var inst_34807 = (state_34865[(9)]);
var inst_34809 = (state_34865[(11)]);
var inst_34806 = (state_34865[(20)]);
var inst_34821 = (state_34865[(2)]);
var inst_34822 = (inst_34809 + (1));
var tmp34890 = inst_34808;
var tmp34891 = inst_34807;
var tmp34892 = inst_34806;
var inst_34806__$1 = tmp34892;
var inst_34807__$1 = tmp34891;
var inst_34808__$1 = tmp34890;
var inst_34809__$1 = inst_34822;
var state_34865__$1 = (function (){var statearr_34895 = state_34865;
(statearr_34895[(19)] = inst_34808__$1);

(statearr_34895[(9)] = inst_34807__$1);

(statearr_34895[(21)] = inst_34821);

(statearr_34895[(11)] = inst_34809__$1);

(statearr_34895[(20)] = inst_34806__$1);

return statearr_34895;
})();
var statearr_34897_36793 = state_34865__$1;
(statearr_34897_36793[(2)] = null);

(statearr_34897_36793[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (40))){
var inst_34834 = (state_34865[(22)]);
var inst_34838 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34834);
var state_34865__$1 = state_34865;
var statearr_34898_36797 = state_34865__$1;
(statearr_34898_36797[(2)] = inst_34838);

(statearr_34898_36797[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (33))){
var inst_34825 = (state_34865[(23)]);
var inst_34827 = cljs.core.chunked_seq_QMARK_(inst_34825);
var state_34865__$1 = state_34865;
if(inst_34827){
var statearr_34899_36798 = state_34865__$1;
(statearr_34899_36798[(1)] = (36));

} else {
var statearr_34900_36799 = state_34865__$1;
(statearr_34900_36799[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (13))){
var inst_34755 = (state_34865[(24)]);
var inst_34758 = cljs.core.async.close_BANG_(inst_34755);
var state_34865__$1 = state_34865;
var statearr_34901_36800 = state_34865__$1;
(statearr_34901_36800[(2)] = inst_34758);

(statearr_34901_36800[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (22))){
var inst_34778 = (state_34865[(8)]);
var inst_34781 = cljs.core.async.close_BANG_(inst_34778);
var state_34865__$1 = state_34865;
var statearr_34902_36801 = state_34865__$1;
(statearr_34902_36801[(2)] = inst_34781);

(statearr_34902_36801[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (36))){
var inst_34825 = (state_34865[(23)]);
var inst_34829 = cljs.core.chunk_first(inst_34825);
var inst_34830 = cljs.core.chunk_rest(inst_34825);
var inst_34831 = cljs.core.count(inst_34829);
var inst_34806 = inst_34830;
var inst_34807 = inst_34829;
var inst_34808 = inst_34831;
var inst_34809 = (0);
var state_34865__$1 = (function (){var statearr_34904 = state_34865;
(statearr_34904[(19)] = inst_34808);

(statearr_34904[(9)] = inst_34807);

(statearr_34904[(11)] = inst_34809);

(statearr_34904[(20)] = inst_34806);

return statearr_34904;
})();
var statearr_34905_36809 = state_34865__$1;
(statearr_34905_36809[(2)] = null);

(statearr_34905_36809[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (41))){
var inst_34825 = (state_34865[(23)]);
var inst_34840 = (state_34865[(2)]);
var inst_34841 = cljs.core.next(inst_34825);
var inst_34806 = inst_34841;
var inst_34807 = null;
var inst_34808 = (0);
var inst_34809 = (0);
var state_34865__$1 = (function (){var statearr_34906 = state_34865;
(statearr_34906[(19)] = inst_34808);

(statearr_34906[(9)] = inst_34807);

(statearr_34906[(25)] = inst_34840);

(statearr_34906[(11)] = inst_34809);

(statearr_34906[(20)] = inst_34806);

return statearr_34906;
})();
var statearr_34907_36813 = state_34865__$1;
(statearr_34907_36813[(2)] = null);

(statearr_34907_36813[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (43))){
var state_34865__$1 = state_34865;
var statearr_34908_36818 = state_34865__$1;
(statearr_34908_36818[(2)] = null);

(statearr_34908_36818[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (29))){
var inst_34849 = (state_34865[(2)]);
var state_34865__$1 = state_34865;
var statearr_34909_36822 = state_34865__$1;
(statearr_34909_36822[(2)] = inst_34849);

(statearr_34909_36822[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (44))){
var inst_34858 = (state_34865[(2)]);
var state_34865__$1 = (function (){var statearr_34911 = state_34865;
(statearr_34911[(26)] = inst_34858);

return statearr_34911;
})();
var statearr_34912_36823 = state_34865__$1;
(statearr_34912_36823[(2)] = null);

(statearr_34912_36823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (6))){
var inst_34798 = (state_34865[(27)]);
var inst_34797 = cljs.core.deref(cs);
var inst_34798__$1 = cljs.core.keys(inst_34797);
var inst_34799 = cljs.core.count(inst_34798__$1);
var inst_34800 = cljs.core.reset_BANG_(dctr,inst_34799);
var inst_34805 = cljs.core.seq(inst_34798__$1);
var inst_34806 = inst_34805;
var inst_34807 = null;
var inst_34808 = (0);
var inst_34809 = (0);
var state_34865__$1 = (function (){var statearr_34913 = state_34865;
(statearr_34913[(27)] = inst_34798__$1);

(statearr_34913[(19)] = inst_34808);

(statearr_34913[(28)] = inst_34800);

(statearr_34913[(9)] = inst_34807);

(statearr_34913[(11)] = inst_34809);

(statearr_34913[(20)] = inst_34806);

return statearr_34913;
})();
var statearr_34914_36827 = state_34865__$1;
(statearr_34914_36827[(2)] = null);

(statearr_34914_36827[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (28))){
var inst_34825 = (state_34865[(23)]);
var inst_34806 = (state_34865[(20)]);
var inst_34825__$1 = cljs.core.seq(inst_34806);
var state_34865__$1 = (function (){var statearr_34915 = state_34865;
(statearr_34915[(23)] = inst_34825__$1);

return statearr_34915;
})();
if(inst_34825__$1){
var statearr_34916_36834 = state_34865__$1;
(statearr_34916_36834[(1)] = (33));

} else {
var statearr_34917_36835 = state_34865__$1;
(statearr_34917_36835[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (25))){
var inst_34808 = (state_34865[(19)]);
var inst_34809 = (state_34865[(11)]);
var inst_34812 = (inst_34809 < inst_34808);
var inst_34813 = inst_34812;
var state_34865__$1 = state_34865;
if(cljs.core.truth_(inst_34813)){
var statearr_34918_36839 = state_34865__$1;
(statearr_34918_36839[(1)] = (27));

} else {
var statearr_34919_36840 = state_34865__$1;
(statearr_34919_36840[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (34))){
var state_34865__$1 = state_34865;
var statearr_34921_36845 = state_34865__$1;
(statearr_34921_36845[(2)] = null);

(statearr_34921_36845[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (17))){
var state_34865__$1 = state_34865;
var statearr_34922_36846 = state_34865__$1;
(statearr_34922_36846[(2)] = null);

(statearr_34922_36846[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (3))){
var inst_34863 = (state_34865[(2)]);
var state_34865__$1 = state_34865;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34865__$1,inst_34863);
} else {
if((state_val_34866 === (12))){
var inst_34793 = (state_34865[(2)]);
var state_34865__$1 = state_34865;
var statearr_34923_36847 = state_34865__$1;
(statearr_34923_36847[(2)] = inst_34793);

(statearr_34923_36847[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (2))){
var state_34865__$1 = state_34865;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34865__$1,(4),ch);
} else {
if((state_val_34866 === (23))){
var state_34865__$1 = state_34865;
var statearr_34924_36848 = state_34865__$1;
(statearr_34924_36848[(2)] = null);

(statearr_34924_36848[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (35))){
var inst_34847 = (state_34865[(2)]);
var state_34865__$1 = state_34865;
var statearr_34925_36849 = state_34865__$1;
(statearr_34925_36849[(2)] = inst_34847);

(statearr_34925_36849[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (19))){
var inst_34765 = (state_34865[(7)]);
var inst_34769 = cljs.core.chunk_first(inst_34765);
var inst_34770 = cljs.core.chunk_rest(inst_34765);
var inst_34771 = cljs.core.count(inst_34769);
var inst_34743 = inst_34770;
var inst_34744 = inst_34769;
var inst_34745 = inst_34771;
var inst_34746 = (0);
var state_34865__$1 = (function (){var statearr_34927 = state_34865;
(statearr_34927[(14)] = inst_34743);

(statearr_34927[(15)] = inst_34746);

(statearr_34927[(16)] = inst_34745);

(statearr_34927[(17)] = inst_34744);

return statearr_34927;
})();
var statearr_34928_36851 = state_34865__$1;
(statearr_34928_36851[(2)] = null);

(statearr_34928_36851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (11))){
var inst_34743 = (state_34865[(14)]);
var inst_34765 = (state_34865[(7)]);
var inst_34765__$1 = cljs.core.seq(inst_34743);
var state_34865__$1 = (function (){var statearr_34929 = state_34865;
(statearr_34929[(7)] = inst_34765__$1);

return statearr_34929;
})();
if(inst_34765__$1){
var statearr_34930_36853 = state_34865__$1;
(statearr_34930_36853[(1)] = (16));

} else {
var statearr_34931_36854 = state_34865__$1;
(statearr_34931_36854[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (9))){
var inst_34795 = (state_34865[(2)]);
var state_34865__$1 = state_34865;
var statearr_34932_36855 = state_34865__$1;
(statearr_34932_36855[(2)] = inst_34795);

(statearr_34932_36855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (5))){
var inst_34741 = cljs.core.deref(cs);
var inst_34742 = cljs.core.seq(inst_34741);
var inst_34743 = inst_34742;
var inst_34744 = null;
var inst_34745 = (0);
var inst_34746 = (0);
var state_34865__$1 = (function (){var statearr_34933 = state_34865;
(statearr_34933[(14)] = inst_34743);

(statearr_34933[(15)] = inst_34746);

(statearr_34933[(16)] = inst_34745);

(statearr_34933[(17)] = inst_34744);

return statearr_34933;
})();
var statearr_34934_36856 = state_34865__$1;
(statearr_34934_36856[(2)] = null);

(statearr_34934_36856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (14))){
var state_34865__$1 = state_34865;
var statearr_34935_36857 = state_34865__$1;
(statearr_34935_36857[(2)] = null);

(statearr_34935_36857[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (45))){
var inst_34855 = (state_34865[(2)]);
var state_34865__$1 = state_34865;
var statearr_34936_36858 = state_34865__$1;
(statearr_34936_36858[(2)] = inst_34855);

(statearr_34936_36858[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (26))){
var inst_34798 = (state_34865[(27)]);
var inst_34851 = (state_34865[(2)]);
var inst_34852 = cljs.core.seq(inst_34798);
var state_34865__$1 = (function (){var statearr_34938 = state_34865;
(statearr_34938[(29)] = inst_34851);

return statearr_34938;
})();
if(inst_34852){
var statearr_34939_36859 = state_34865__$1;
(statearr_34939_36859[(1)] = (42));

} else {
var statearr_34940_36860 = state_34865__$1;
(statearr_34940_36860[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (16))){
var inst_34765 = (state_34865[(7)]);
var inst_34767 = cljs.core.chunked_seq_QMARK_(inst_34765);
var state_34865__$1 = state_34865;
if(inst_34767){
var statearr_34941_36861 = state_34865__$1;
(statearr_34941_36861[(1)] = (19));

} else {
var statearr_34942_36862 = state_34865__$1;
(statearr_34942_36862[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (38))){
var inst_34844 = (state_34865[(2)]);
var state_34865__$1 = state_34865;
var statearr_34943_36863 = state_34865__$1;
(statearr_34943_36863[(2)] = inst_34844);

(statearr_34943_36863[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (30))){
var state_34865__$1 = state_34865;
var statearr_34944_36864 = state_34865__$1;
(statearr_34944_36864[(2)] = null);

(statearr_34944_36864[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (10))){
var inst_34746 = (state_34865[(15)]);
var inst_34744 = (state_34865[(17)]);
var inst_34754 = cljs.core._nth(inst_34744,inst_34746);
var inst_34755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34754,(0),null);
var inst_34756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34754,(1),null);
var state_34865__$1 = (function (){var statearr_34945 = state_34865;
(statearr_34945[(24)] = inst_34755);

return statearr_34945;
})();
if(cljs.core.truth_(inst_34756)){
var statearr_34946_36865 = state_34865__$1;
(statearr_34946_36865[(1)] = (13));

} else {
var statearr_34948_36866 = state_34865__$1;
(statearr_34948_36866[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (18))){
var inst_34791 = (state_34865[(2)]);
var state_34865__$1 = state_34865;
var statearr_34949_36867 = state_34865__$1;
(statearr_34949_36867[(2)] = inst_34791);

(statearr_34949_36867[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (42))){
var state_34865__$1 = state_34865;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34865__$1,(45),dchan);
} else {
if((state_val_34866 === (37))){
var inst_34733 = (state_34865[(10)]);
var inst_34834 = (state_34865[(22)]);
var inst_34825 = (state_34865[(23)]);
var inst_34834__$1 = cljs.core.first(inst_34825);
var inst_34835 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34834__$1,inst_34733,done);
var state_34865__$1 = (function (){var statearr_34950 = state_34865;
(statearr_34950[(22)] = inst_34834__$1);

return statearr_34950;
})();
if(cljs.core.truth_(inst_34835)){
var statearr_34951_36873 = state_34865__$1;
(statearr_34951_36873[(1)] = (39));

} else {
var statearr_34952_36874 = state_34865__$1;
(statearr_34952_36874[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34866 === (8))){
var inst_34746 = (state_34865[(15)]);
var inst_34745 = (state_34865[(16)]);
var inst_34748 = (inst_34746 < inst_34745);
var inst_34749 = inst_34748;
var state_34865__$1 = state_34865;
if(cljs.core.truth_(inst_34749)){
var statearr_34953_36875 = state_34865__$1;
(statearr_34953_36875[(1)] = (10));

} else {
var statearr_34954_36876 = state_34865__$1;
(statearr_34954_36876[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__33517__auto__ = null;
var cljs$core$async$mult_$_state_machine__33517__auto____0 = (function (){
var statearr_34956 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34956[(0)] = cljs$core$async$mult_$_state_machine__33517__auto__);

(statearr_34956[(1)] = (1));

return statearr_34956;
});
var cljs$core$async$mult_$_state_machine__33517__auto____1 = (function (state_34865){
while(true){
var ret_value__33518__auto__ = (function (){try{while(true){
var result__33519__auto__ = switch__33516__auto__(state_34865);
if(cljs.core.keyword_identical_QMARK_(result__33519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33519__auto__;
}
break;
}
}catch (e34957){var ex__33520__auto__ = e34957;
var statearr_34958_36880 = state_34865;
(statearr_34958_36880[(2)] = ex__33520__auto__);


if(cljs.core.seq((state_34865[(4)]))){
var statearr_34959_36881 = state_34865;
(statearr_34959_36881[(1)] = cljs.core.first((state_34865[(4)])));

} else {
throw ex__33520__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36882 = state_34865;
state_34865 = G__36882;
continue;
} else {
return ret_value__33518__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33517__auto__ = function(state_34865){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33517__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33517__auto____1.call(this,state_34865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33517__auto____0;
cljs$core$async$mult_$_state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33517__auto____1;
return cljs$core$async$mult_$_state_machine__33517__auto__;
})()
})();
var state__33715__auto__ = (function (){var statearr_34960 = f__33714__auto__();
(statearr_34960[(6)] = c__33713__auto___36763);

return statearr_34960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33715__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34963 = arguments.length;
switch (G__34963) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_36892 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_36892(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_36894 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_36894(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_36899 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_36899(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_36900 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_36900(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_36902 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_36902(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36903 = arguments.length;
var i__4737__auto___36904 = (0);
while(true){
if((i__4737__auto___36904 < len__4736__auto___36903)){
args__4742__auto__.push((arguments[i__4737__auto___36904]));

var G__36905 = (i__4737__auto___36904 + (1));
i__4737__auto___36904 = G__36905;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34973){
var map__34974 = p__34973;
var map__34974__$1 = (((((!((map__34974 == null))))?(((((map__34974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34974):map__34974);
var opts = map__34974__$1;
var statearr_34976_36910 = state;
(statearr_34976_36910[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_34977_36911 = state;
(statearr_34977_36911[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_34978_36916 = state;
(statearr_34978_36916[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34968){
var G__34969 = cljs.core.first(seq34968);
var seq34968__$1 = cljs.core.next(seq34968);
var G__34970 = cljs.core.first(seq34968__$1);
var seq34968__$2 = cljs.core.next(seq34968__$1);
var G__34971 = cljs.core.first(seq34968__$2);
var seq34968__$3 = cljs.core.next(seq34968__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34969,G__34970,G__34971,seq34968__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34981 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34981 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34982){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34982 = meta34982;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34983,meta34982__$1){
var self__ = this;
var _34983__$1 = this;
return (new cljs.core.async.t_cljs$core$async34981(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34982__$1));
}));

(cljs.core.async.t_cljs$core$async34981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34983){
var self__ = this;
var _34983__$1 = this;
return self__.meta34982;
}));

(cljs.core.async.t_cljs$core$async34981.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34981.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async34981.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34981.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34981.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34981.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34981.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34981.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34981.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34982","meta34982",-94845871,null)], null);
}));

(cljs.core.async.t_cljs$core$async34981.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34981.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34981");

(cljs.core.async.t_cljs$core$async34981.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34981");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34981.
 */
cljs.core.async.__GT_t_cljs$core$async34981 = (function cljs$core$async$mix_$___GT_t_cljs$core$async34981(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34982){
return (new cljs.core.async.t_cljs$core$async34981(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34982));
});

}

return (new cljs.core.async.t_cljs$core$async34981(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33713__auto___36928 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33714__auto__ = (function (){var switch__33516__auto__ = (function (state_35091){
var state_val_35092 = (state_35091[(1)]);
if((state_val_35092 === (7))){
var inst_35004 = (state_35091[(2)]);
var state_35091__$1 = state_35091;
var statearr_35093_36929 = state_35091__$1;
(statearr_35093_36929[(2)] = inst_35004);

(statearr_35093_36929[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (20))){
var inst_35016 = (state_35091[(7)]);
var state_35091__$1 = state_35091;
var statearr_35094_36931 = state_35091__$1;
(statearr_35094_36931[(2)] = inst_35016);

(statearr_35094_36931[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (27))){
var state_35091__$1 = state_35091;
var statearr_35095_36932 = state_35091__$1;
(statearr_35095_36932[(2)] = null);

(statearr_35095_36932[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (1))){
var inst_34991 = (state_35091[(8)]);
var inst_34991__$1 = calc_state();
var inst_34993 = (inst_34991__$1 == null);
var inst_34994 = cljs.core.not(inst_34993);
var state_35091__$1 = (function (){var statearr_35096 = state_35091;
(statearr_35096[(8)] = inst_34991__$1);

return statearr_35096;
})();
if(inst_34994){
var statearr_35097_36937 = state_35091__$1;
(statearr_35097_36937[(1)] = (2));

} else {
var statearr_35098_36938 = state_35091__$1;
(statearr_35098_36938[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (24))){
var inst_35063 = (state_35091[(9)]);
var inst_35040 = (state_35091[(10)]);
var inst_35049 = (state_35091[(11)]);
var inst_35063__$1 = (inst_35040.cljs$core$IFn$_invoke$arity$1 ? inst_35040.cljs$core$IFn$_invoke$arity$1(inst_35049) : inst_35040.call(null,inst_35049));
var state_35091__$1 = (function (){var statearr_35099 = state_35091;
(statearr_35099[(9)] = inst_35063__$1);

return statearr_35099;
})();
if(cljs.core.truth_(inst_35063__$1)){
var statearr_35100_36939 = state_35091__$1;
(statearr_35100_36939[(1)] = (29));

} else {
var statearr_35101_36940 = state_35091__$1;
(statearr_35101_36940[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (4))){
var inst_35007 = (state_35091[(2)]);
var state_35091__$1 = state_35091;
if(cljs.core.truth_(inst_35007)){
var statearr_35105_36941 = state_35091__$1;
(statearr_35105_36941[(1)] = (8));

} else {
var statearr_35112_36942 = state_35091__$1;
(statearr_35112_36942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (15))){
var inst_35034 = (state_35091[(2)]);
var state_35091__$1 = state_35091;
if(cljs.core.truth_(inst_35034)){
var statearr_35113_36943 = state_35091__$1;
(statearr_35113_36943[(1)] = (19));

} else {
var statearr_35114_36944 = state_35091__$1;
(statearr_35114_36944[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (21))){
var inst_35039 = (state_35091[(12)]);
var inst_35039__$1 = (state_35091[(2)]);
var inst_35040 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35039__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35041 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35039__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35042 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35039__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35091__$1 = (function (){var statearr_35115 = state_35091;
(statearr_35115[(12)] = inst_35039__$1);

(statearr_35115[(10)] = inst_35040);

(statearr_35115[(13)] = inst_35041);

return statearr_35115;
})();
return cljs.core.async.ioc_alts_BANG_(state_35091__$1,(22),inst_35042);
} else {
if((state_val_35092 === (31))){
var inst_35071 = (state_35091[(2)]);
var state_35091__$1 = state_35091;
if(cljs.core.truth_(inst_35071)){
var statearr_35117_36949 = state_35091__$1;
(statearr_35117_36949[(1)] = (32));

} else {
var statearr_35118_36950 = state_35091__$1;
(statearr_35118_36950[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (32))){
var inst_35048 = (state_35091[(14)]);
var state_35091__$1 = state_35091;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35091__$1,(35),out,inst_35048);
} else {
if((state_val_35092 === (33))){
var inst_35039 = (state_35091[(12)]);
var inst_35016 = inst_35039;
var state_35091__$1 = (function (){var statearr_35122 = state_35091;
(statearr_35122[(7)] = inst_35016);

return statearr_35122;
})();
var statearr_35123_36951 = state_35091__$1;
(statearr_35123_36951[(2)] = null);

(statearr_35123_36951[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (13))){
var inst_35016 = (state_35091[(7)]);
var inst_35023 = inst_35016.cljs$lang$protocol_mask$partition0$;
var inst_35024 = (inst_35023 & (64));
var inst_35025 = inst_35016.cljs$core$ISeq$;
var inst_35026 = (cljs.core.PROTOCOL_SENTINEL === inst_35025);
var inst_35027 = ((inst_35024) || (inst_35026));
var state_35091__$1 = state_35091;
if(cljs.core.truth_(inst_35027)){
var statearr_35125_36955 = state_35091__$1;
(statearr_35125_36955[(1)] = (16));

} else {
var statearr_35126_36956 = state_35091__$1;
(statearr_35126_36956[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (22))){
var inst_35048 = (state_35091[(14)]);
var inst_35049 = (state_35091[(11)]);
var inst_35047 = (state_35091[(2)]);
var inst_35048__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35047,(0),null);
var inst_35049__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35047,(1),null);
var inst_35050 = (inst_35048__$1 == null);
var inst_35051 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35049__$1,change);
var inst_35052 = ((inst_35050) || (inst_35051));
var state_35091__$1 = (function (){var statearr_35130 = state_35091;
(statearr_35130[(14)] = inst_35048__$1);

(statearr_35130[(11)] = inst_35049__$1);

return statearr_35130;
})();
if(cljs.core.truth_(inst_35052)){
var statearr_35131_36957 = state_35091__$1;
(statearr_35131_36957[(1)] = (23));

} else {
var statearr_35132_36958 = state_35091__$1;
(statearr_35132_36958[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (36))){
var inst_35039 = (state_35091[(12)]);
var inst_35016 = inst_35039;
var state_35091__$1 = (function (){var statearr_35134 = state_35091;
(statearr_35134[(7)] = inst_35016);

return statearr_35134;
})();
var statearr_35135_36959 = state_35091__$1;
(statearr_35135_36959[(2)] = null);

(statearr_35135_36959[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (29))){
var inst_35063 = (state_35091[(9)]);
var state_35091__$1 = state_35091;
var statearr_35136_36960 = state_35091__$1;
(statearr_35136_36960[(2)] = inst_35063);

(statearr_35136_36960[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (6))){
var state_35091__$1 = state_35091;
var statearr_35139_36961 = state_35091__$1;
(statearr_35139_36961[(2)] = false);

(statearr_35139_36961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (28))){
var inst_35059 = (state_35091[(2)]);
var inst_35060 = calc_state();
var inst_35016 = inst_35060;
var state_35091__$1 = (function (){var statearr_35141 = state_35091;
(statearr_35141[(7)] = inst_35016);

(statearr_35141[(15)] = inst_35059);

return statearr_35141;
})();
var statearr_35143_36965 = state_35091__$1;
(statearr_35143_36965[(2)] = null);

(statearr_35143_36965[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (25))){
var inst_35086 = (state_35091[(2)]);
var state_35091__$1 = state_35091;
var statearr_35144_36966 = state_35091__$1;
(statearr_35144_36966[(2)] = inst_35086);

(statearr_35144_36966[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (34))){
var inst_35084 = (state_35091[(2)]);
var state_35091__$1 = state_35091;
var statearr_35148_36967 = state_35091__$1;
(statearr_35148_36967[(2)] = inst_35084);

(statearr_35148_36967[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (17))){
var state_35091__$1 = state_35091;
var statearr_35149_36968 = state_35091__$1;
(statearr_35149_36968[(2)] = false);

(statearr_35149_36968[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (3))){
var state_35091__$1 = state_35091;
var statearr_35151_36969 = state_35091__$1;
(statearr_35151_36969[(2)] = false);

(statearr_35151_36969[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (12))){
var inst_35089 = (state_35091[(2)]);
var state_35091__$1 = state_35091;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35091__$1,inst_35089);
} else {
if((state_val_35092 === (2))){
var inst_34991 = (state_35091[(8)]);
var inst_34996 = inst_34991.cljs$lang$protocol_mask$partition0$;
var inst_34997 = (inst_34996 & (64));
var inst_34998 = inst_34991.cljs$core$ISeq$;
var inst_34999 = (cljs.core.PROTOCOL_SENTINEL === inst_34998);
var inst_35000 = ((inst_34997) || (inst_34999));
var state_35091__$1 = state_35091;
if(cljs.core.truth_(inst_35000)){
var statearr_35155_36970 = state_35091__$1;
(statearr_35155_36970[(1)] = (5));

} else {
var statearr_35156_36972 = state_35091__$1;
(statearr_35156_36972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (23))){
var inst_35048 = (state_35091[(14)]);
var inst_35054 = (inst_35048 == null);
var state_35091__$1 = state_35091;
if(cljs.core.truth_(inst_35054)){
var statearr_35158_36973 = state_35091__$1;
(statearr_35158_36973[(1)] = (26));

} else {
var statearr_35159_36974 = state_35091__$1;
(statearr_35159_36974[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (35))){
var inst_35074 = (state_35091[(2)]);
var state_35091__$1 = state_35091;
if(cljs.core.truth_(inst_35074)){
var statearr_35162_36976 = state_35091__$1;
(statearr_35162_36976[(1)] = (36));

} else {
var statearr_35164_36977 = state_35091__$1;
(statearr_35164_36977[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (19))){
var inst_35016 = (state_35091[(7)]);
var inst_35036 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_35016);
var state_35091__$1 = state_35091;
var statearr_35165_36978 = state_35091__$1;
(statearr_35165_36978[(2)] = inst_35036);

(statearr_35165_36978[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (11))){
var inst_35016 = (state_35091[(7)]);
var inst_35020 = (inst_35016 == null);
var inst_35021 = cljs.core.not(inst_35020);
var state_35091__$1 = state_35091;
if(inst_35021){
var statearr_35167_36979 = state_35091__$1;
(statearr_35167_36979[(1)] = (13));

} else {
var statearr_35168_36980 = state_35091__$1;
(statearr_35168_36980[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (9))){
var inst_34991 = (state_35091[(8)]);
var state_35091__$1 = state_35091;
var statearr_35171_36981 = state_35091__$1;
(statearr_35171_36981[(2)] = inst_34991);

(statearr_35171_36981[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (5))){
var state_35091__$1 = state_35091;
var statearr_35173_36982 = state_35091__$1;
(statearr_35173_36982[(2)] = true);

(statearr_35173_36982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (14))){
var state_35091__$1 = state_35091;
var statearr_35174_36983 = state_35091__$1;
(statearr_35174_36983[(2)] = false);

(statearr_35174_36983[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (26))){
var inst_35049 = (state_35091[(11)]);
var inst_35056 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_35049);
var state_35091__$1 = state_35091;
var statearr_35176_36984 = state_35091__$1;
(statearr_35176_36984[(2)] = inst_35056);

(statearr_35176_36984[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (16))){
var state_35091__$1 = state_35091;
var statearr_35179_36985 = state_35091__$1;
(statearr_35179_36985[(2)] = true);

(statearr_35179_36985[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (38))){
var inst_35080 = (state_35091[(2)]);
var state_35091__$1 = state_35091;
var statearr_35181_36986 = state_35091__$1;
(statearr_35181_36986[(2)] = inst_35080);

(statearr_35181_36986[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (30))){
var inst_35040 = (state_35091[(10)]);
var inst_35041 = (state_35091[(13)]);
var inst_35049 = (state_35091[(11)]);
var inst_35066 = cljs.core.empty_QMARK_(inst_35040);
var inst_35067 = (inst_35041.cljs$core$IFn$_invoke$arity$1 ? inst_35041.cljs$core$IFn$_invoke$arity$1(inst_35049) : inst_35041.call(null,inst_35049));
var inst_35068 = cljs.core.not(inst_35067);
var inst_35069 = ((inst_35066) && (inst_35068));
var state_35091__$1 = state_35091;
var statearr_35184_36987 = state_35091__$1;
(statearr_35184_36987[(2)] = inst_35069);

(statearr_35184_36987[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (10))){
var inst_34991 = (state_35091[(8)]);
var inst_35012 = (state_35091[(2)]);
var inst_35013 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35012,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35014 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35012,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35015 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35012,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35016 = inst_34991;
var state_35091__$1 = (function (){var statearr_35185 = state_35091;
(statearr_35185[(16)] = inst_35013);

(statearr_35185[(17)] = inst_35015);

(statearr_35185[(18)] = inst_35014);

(statearr_35185[(7)] = inst_35016);

return statearr_35185;
})();
var statearr_35188_36991 = state_35091__$1;
(statearr_35188_36991[(2)] = null);

(statearr_35188_36991[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (18))){
var inst_35031 = (state_35091[(2)]);
var state_35091__$1 = state_35091;
var statearr_35190_36992 = state_35091__$1;
(statearr_35190_36992[(2)] = inst_35031);

(statearr_35190_36992[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (37))){
var state_35091__$1 = state_35091;
var statearr_35192_36993 = state_35091__$1;
(statearr_35192_36993[(2)] = null);

(statearr_35192_36993[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35092 === (8))){
var inst_34991 = (state_35091[(8)]);
var inst_35009 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34991);
var state_35091__$1 = state_35091;
var statearr_35196_36994 = state_35091__$1;
(statearr_35196_36994[(2)] = inst_35009);

(statearr_35196_36994[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__33517__auto__ = null;
var cljs$core$async$mix_$_state_machine__33517__auto____0 = (function (){
var statearr_35198 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35198[(0)] = cljs$core$async$mix_$_state_machine__33517__auto__);

(statearr_35198[(1)] = (1));

return statearr_35198;
});
var cljs$core$async$mix_$_state_machine__33517__auto____1 = (function (state_35091){
while(true){
var ret_value__33518__auto__ = (function (){try{while(true){
var result__33519__auto__ = switch__33516__auto__(state_35091);
if(cljs.core.keyword_identical_QMARK_(result__33519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33519__auto__;
}
break;
}
}catch (e35200){var ex__33520__auto__ = e35200;
var statearr_35202_36999 = state_35091;
(statearr_35202_36999[(2)] = ex__33520__auto__);


if(cljs.core.seq((state_35091[(4)]))){
var statearr_35204_37001 = state_35091;
(statearr_35204_37001[(1)] = cljs.core.first((state_35091[(4)])));

} else {
throw ex__33520__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37005 = state_35091;
state_35091 = G__37005;
continue;
} else {
return ret_value__33518__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33517__auto__ = function(state_35091){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33517__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33517__auto____1.call(this,state_35091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33517__auto____0;
cljs$core$async$mix_$_state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33517__auto____1;
return cljs$core$async$mix_$_state_machine__33517__auto__;
})()
})();
var state__33715__auto__ = (function (){var statearr_35207 = f__33714__auto__();
(statearr_35207[(6)] = c__33713__auto___36928);

return statearr_35207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33715__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_37008 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_37008(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_37009 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_37009(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_37010 = (function() {
var G__37011 = null;
var G__37011__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__37011__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__37011 = function(p,v){
switch(arguments.length){
case 1:
return G__37011__1.call(this,p);
case 2:
return G__37011__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__37011.cljs$core$IFn$_invoke$arity$1 = G__37011__1;
G__37011.cljs$core$IFn$_invoke$arity$2 = G__37011__2;
return G__37011;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35238 = arguments.length;
switch (G__35238) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37010(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_37010(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__35250 = arguments.length;
switch (G__35250) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__35245_SHARP_){
if(cljs.core.truth_((p1__35245_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35245_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35245_SHARP_.call(null,topic)))){
return p1__35245_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35245_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35255 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35255 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35257){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35257 = meta35257;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35258,meta35257__$1){
var self__ = this;
var _35258__$1 = this;
return (new cljs.core.async.t_cljs$core$async35255(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35257__$1));
}));

(cljs.core.async.t_cljs$core$async35255.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35258){
var self__ = this;
var _35258__$1 = this;
return self__.meta35257;
}));

(cljs.core.async.t_cljs$core$async35255.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35255.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async35255.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35255.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async35255.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async35255.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async35255.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async35255.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35257","meta35257",-5166732,null)], null);
}));

(cljs.core.async.t_cljs$core$async35255.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35255.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35255");

(cljs.core.async.t_cljs$core$async35255.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35255");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35255.
 */
cljs.core.async.__GT_t_cljs$core$async35255 = (function cljs$core$async$__GT_t_cljs$core$async35255(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35257){
return (new cljs.core.async.t_cljs$core$async35255(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35257));
});

}

return (new cljs.core.async.t_cljs$core$async35255(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33713__auto___37024 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33714__auto__ = (function (){var switch__33516__auto__ = (function (state_35352){
var state_val_35355 = (state_35352[(1)]);
if((state_val_35355 === (7))){
var inst_35347 = (state_35352[(2)]);
var state_35352__$1 = state_35352;
var statearr_35358_37028 = state_35352__$1;
(statearr_35358_37028[(2)] = inst_35347);

(statearr_35358_37028[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35355 === (20))){
var state_35352__$1 = state_35352;
var statearr_35359_37029 = state_35352__$1;
(statearr_35359_37029[(2)] = null);

(statearr_35359_37029[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35355 === (1))){
var state_35352__$1 = state_35352;
var statearr_35363_37030 = state_35352__$1;
(statearr_35363_37030[(2)] = null);

(statearr_35363_37030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35355 === (24))){
var inst_35330 = (state_35352[(7)]);
var inst_35339 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35330);
var state_35352__$1 = state_35352;
var statearr_35364_37034 = state_35352__$1;
(statearr_35364_37034[(2)] = inst_35339);

(statearr_35364_37034[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35355 === (4))){
var inst_35275 = (state_35352[(8)]);
var inst_35275__$1 = (state_35352[(2)]);
var inst_35276 = (inst_35275__$1 == null);
var state_35352__$1 = (function (){var statearr_35368 = state_35352;
(statearr_35368[(8)] = inst_35275__$1);

return statearr_35368;
})();
if(cljs.core.truth_(inst_35276)){
var statearr_35369_37035 = state_35352__$1;
(statearr_35369_37035[(1)] = (5));

} else {
var statearr_35372_37036 = state_35352__$1;
(statearr_35372_37036[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35355 === (15))){
var inst_35324 = (state_35352[(2)]);
var state_35352__$1 = state_35352;
var statearr_35374_37040 = state_35352__$1;
(statearr_35374_37040[(2)] = inst_35324);

(statearr_35374_37040[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35355 === (21))){
var inst_35344 = (state_35352[(2)]);
var state_35352__$1 = (function (){var statearr_35380 = state_35352;
(statearr_35380[(9)] = inst_35344);

return statearr_35380;
})();
var statearr_35381_37044 = state_35352__$1;
(statearr_35381_37044[(2)] = null);

(statearr_35381_37044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35355 === (13))){
var inst_35303 = (state_35352[(10)]);
var inst_35305 = cljs.core.chunked_seq_QMARK_(inst_35303);
var state_35352__$1 = state_35352;
if(inst_35305){
var statearr_35389_37046 = state_35352__$1;
(statearr_35389_37046[(1)] = (16));

} else {
var statearr_35390_37047 = state_35352__$1;
(statearr_35390_37047[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35355 === (22))){
var inst_35336 = (state_35352[(2)]);
var state_35352__$1 = state_35352;
if(cljs.core.truth_(inst_35336)){
var statearr_35393_37048 = state_35352__$1;
(statearr_35393_37048[(1)] = (23));

} else {
var statearr_35394_37052 = state_35352__$1;
(statearr_35394_37052[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35355 === (6))){
var inst_35275 = (state_35352[(8)]);
var inst_35332 = (state_35352[(11)]);
var inst_35330 = (state_35352[(7)]);
var inst_35330__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35275) : topic_fn.call(null,inst_35275));
var inst_35331 = cljs.core.deref(mults);
var inst_35332__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35331,inst_35330__$1);
var state_35352__$1 = (function (){var statearr_35396 = state_35352;
(statearr_35396[(11)] = inst_35332__$1);

(statearr_35396[(7)] = inst_35330__$1);

return statearr_35396;
})();
if(cljs.core.truth_(inst_35332__$1)){
var statearr_35397_37057 = state_35352__$1;
(statearr_35397_37057[(1)] = (19));

} else {
var statearr_35398_37058 = state_35352__$1;
(statearr_35398_37058[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35355 === (25))){
var inst_35341 = (state_35352[(2)]);
var state_35352__$1 = state_35352;
var statearr_35405_37060 = state_35352__$1;
(statearr_35405_37060[(2)] = inst_35341);

(statearr_35405_37060[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35355 === (17))){
var inst_35303 = (state_35352[(10)]);
var inst_35314 = cljs.core.first(inst_35303);
var inst_35315 = cljs.core.async.muxch_STAR_(inst_35314);
var inst_35316 = cljs.core.async.close_BANG_(inst_35315);
var inst_35318 = cljs.core.next(inst_35303);
var inst_35287 = inst_35318;
var inst_35288 = null;
var inst_35289 = (0);
var inst_35290 = (0);
var state_35352__$1 = (function (){var statearr_35412 = state_35352;
(statearr_35412[(12)] = inst_35289);

(statearr_35412[(13)] = inst_35290);

(statearr_35412[(14)] = inst_35288);

(statearr_35412[(15)] = inst_35287);

(statearr_35412[(16)] = inst_35316);

return statearr_35412;
})();
var statearr_35413_37061 = state_35352__$1;
(statearr_35413_37061[(2)] = null);

(statearr_35413_37061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35355 === (3))){
var inst_35349 = (state_35352[(2)]);
var state_35352__$1 = state_35352;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35352__$1,inst_35349);
} else {
if((state_val_35355 === (12))){
var inst_35326 = (state_35352[(2)]);
var state_35352__$1 = state_35352;
var statearr_35420_37077 = state_35352__$1;
(statearr_35420_37077[(2)] = inst_35326);

(statearr_35420_37077[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35355 === (2))){
var state_35352__$1 = state_35352;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35352__$1,(4),ch);
} else {
if((state_val_35355 === (23))){
var state_35352__$1 = state_35352;
var statearr_35425_37081 = state_35352__$1;
(statearr_35425_37081[(2)] = null);

(statearr_35425_37081[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35355 === (19))){
var inst_35275 = (state_35352[(8)]);
var inst_35332 = (state_35352[(11)]);
var inst_35334 = cljs.core.async.muxch_STAR_(inst_35332);
var state_35352__$1 = state_35352;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35352__$1,(22),inst_35334,inst_35275);
} else {
if((state_val_35355 === (11))){
var inst_35303 = (state_35352[(10)]);
var inst_35287 = (state_35352[(15)]);
var inst_35303__$1 = cljs.core.seq(inst_35287);
var state_35352__$1 = (function (){var statearr_35432 = state_35352;
(statearr_35432[(10)] = inst_35303__$1);

return statearr_35432;
})();
if(inst_35303__$1){
var statearr_35433_37082 = state_35352__$1;
(statearr_35433_37082[(1)] = (13));

} else {
var statearr_35436_37083 = state_35352__$1;
(statearr_35436_37083[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35355 === (9))){
var inst_35328 = (state_35352[(2)]);
var state_35352__$1 = state_35352;
var statearr_35441_37084 = state_35352__$1;
(statearr_35441_37084[(2)] = inst_35328);

(statearr_35441_37084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35355 === (5))){
var inst_35284 = cljs.core.deref(mults);
var inst_35285 = cljs.core.vals(inst_35284);
var inst_35286 = cljs.core.seq(inst_35285);
var inst_35287 = inst_35286;
var inst_35288 = null;
var inst_35289 = (0);
var inst_35290 = (0);
var state_35352__$1 = (function (){var statearr_35444 = state_35352;
(statearr_35444[(12)] = inst_35289);

(statearr_35444[(13)] = inst_35290);

(statearr_35444[(14)] = inst_35288);

(statearr_35444[(15)] = inst_35287);

return statearr_35444;
})();
var statearr_35445_37089 = state_35352__$1;
(statearr_35445_37089[(2)] = null);

(statearr_35445_37089[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35355 === (14))){
var state_35352__$1 = state_35352;
var statearr_35452_37090 = state_35352__$1;
(statearr_35452_37090[(2)] = null);

(statearr_35452_37090[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35355 === (16))){
var inst_35303 = (state_35352[(10)]);
var inst_35307 = cljs.core.chunk_first(inst_35303);
var inst_35308 = cljs.core.chunk_rest(inst_35303);
var inst_35309 = cljs.core.count(inst_35307);
var inst_35287 = inst_35308;
var inst_35288 = inst_35307;
var inst_35289 = inst_35309;
var inst_35290 = (0);
var state_35352__$1 = (function (){var statearr_35456 = state_35352;
(statearr_35456[(12)] = inst_35289);

(statearr_35456[(13)] = inst_35290);

(statearr_35456[(14)] = inst_35288);

(statearr_35456[(15)] = inst_35287);

return statearr_35456;
})();
var statearr_35457_37097 = state_35352__$1;
(statearr_35457_37097[(2)] = null);

(statearr_35457_37097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35355 === (10))){
var inst_35289 = (state_35352[(12)]);
var inst_35290 = (state_35352[(13)]);
var inst_35288 = (state_35352[(14)]);
var inst_35287 = (state_35352[(15)]);
var inst_35296 = cljs.core._nth(inst_35288,inst_35290);
var inst_35297 = cljs.core.async.muxch_STAR_(inst_35296);
var inst_35298 = cljs.core.async.close_BANG_(inst_35297);
var inst_35299 = (inst_35290 + (1));
var tmp35448 = inst_35289;
var tmp35449 = inst_35288;
var tmp35450 = inst_35287;
var inst_35287__$1 = tmp35450;
var inst_35288__$1 = tmp35449;
var inst_35289__$1 = tmp35448;
var inst_35290__$1 = inst_35299;
var state_35352__$1 = (function (){var statearr_35462 = state_35352;
(statearr_35462[(17)] = inst_35298);

(statearr_35462[(12)] = inst_35289__$1);

(statearr_35462[(13)] = inst_35290__$1);

(statearr_35462[(14)] = inst_35288__$1);

(statearr_35462[(15)] = inst_35287__$1);

return statearr_35462;
})();
var statearr_35467_37098 = state_35352__$1;
(statearr_35467_37098[(2)] = null);

(statearr_35467_37098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35355 === (18))){
var inst_35321 = (state_35352[(2)]);
var state_35352__$1 = state_35352;
var statearr_35474_37100 = state_35352__$1;
(statearr_35474_37100[(2)] = inst_35321);

(statearr_35474_37100[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35355 === (8))){
var inst_35289 = (state_35352[(12)]);
var inst_35290 = (state_35352[(13)]);
var inst_35293 = (inst_35290 < inst_35289);
var inst_35294 = inst_35293;
var state_35352__$1 = state_35352;
if(cljs.core.truth_(inst_35294)){
var statearr_35476_37101 = state_35352__$1;
(statearr_35476_37101[(1)] = (10));

} else {
var statearr_35477_37102 = state_35352__$1;
(statearr_35477_37102[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33517__auto__ = null;
var cljs$core$async$state_machine__33517__auto____0 = (function (){
var statearr_35481 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35481[(0)] = cljs$core$async$state_machine__33517__auto__);

(statearr_35481[(1)] = (1));

return statearr_35481;
});
var cljs$core$async$state_machine__33517__auto____1 = (function (state_35352){
while(true){
var ret_value__33518__auto__ = (function (){try{while(true){
var result__33519__auto__ = switch__33516__auto__(state_35352);
if(cljs.core.keyword_identical_QMARK_(result__33519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33519__auto__;
}
break;
}
}catch (e35483){var ex__33520__auto__ = e35483;
var statearr_35487_37120 = state_35352;
(statearr_35487_37120[(2)] = ex__33520__auto__);


if(cljs.core.seq((state_35352[(4)]))){
var statearr_35489_37121 = state_35352;
(statearr_35489_37121[(1)] = cljs.core.first((state_35352[(4)])));

} else {
throw ex__33520__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37122 = state_35352;
state_35352 = G__37122;
continue;
} else {
return ret_value__33518__auto__;
}
break;
}
});
cljs$core$async$state_machine__33517__auto__ = function(state_35352){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33517__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33517__auto____1.call(this,state_35352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33517__auto____0;
cljs$core$async$state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33517__auto____1;
return cljs$core$async$state_machine__33517__auto__;
})()
})();
var state__33715__auto__ = (function (){var statearr_35494 = f__33714__auto__();
(statearr_35494[(6)] = c__33713__auto___37024);

return statearr_35494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33715__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__35505 = arguments.length;
switch (G__35505) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__35517 = arguments.length;
switch (G__35517) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__35533 = arguments.length;
switch (G__35533) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__33713__auto___37151 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33714__auto__ = (function (){var switch__33516__auto__ = (function (state_35598){
var state_val_35599 = (state_35598[(1)]);
if((state_val_35599 === (7))){
var state_35598__$1 = state_35598;
var statearr_35604_37152 = state_35598__$1;
(statearr_35604_37152[(2)] = null);

(statearr_35604_37152[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (1))){
var state_35598__$1 = state_35598;
var statearr_35605_37153 = state_35598__$1;
(statearr_35605_37153[(2)] = null);

(statearr_35605_37153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (4))){
var inst_35548 = (state_35598[(7)]);
var inst_35549 = (state_35598[(8)]);
var inst_35551 = (inst_35549 < inst_35548);
var state_35598__$1 = state_35598;
if(cljs.core.truth_(inst_35551)){
var statearr_35610_37158 = state_35598__$1;
(statearr_35610_37158[(1)] = (6));

} else {
var statearr_35611_37159 = state_35598__$1;
(statearr_35611_37159[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (15))){
var inst_35583 = (state_35598[(9)]);
var inst_35589 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_35583);
var state_35598__$1 = state_35598;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35598__$1,(17),out,inst_35589);
} else {
if((state_val_35599 === (13))){
var inst_35583 = (state_35598[(9)]);
var inst_35583__$1 = (state_35598[(2)]);
var inst_35584 = cljs.core.some(cljs.core.nil_QMARK_,inst_35583__$1);
var state_35598__$1 = (function (){var statearr_35616 = state_35598;
(statearr_35616[(9)] = inst_35583__$1);

return statearr_35616;
})();
if(cljs.core.truth_(inst_35584)){
var statearr_35617_37160 = state_35598__$1;
(statearr_35617_37160[(1)] = (14));

} else {
var statearr_35618_37161 = state_35598__$1;
(statearr_35618_37161[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (6))){
var state_35598__$1 = state_35598;
var statearr_35619_37163 = state_35598__$1;
(statearr_35619_37163[(2)] = null);

(statearr_35619_37163[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (17))){
var inst_35591 = (state_35598[(2)]);
var state_35598__$1 = (function (){var statearr_35621 = state_35598;
(statearr_35621[(10)] = inst_35591);

return statearr_35621;
})();
var statearr_35626_37167 = state_35598__$1;
(statearr_35626_37167[(2)] = null);

(statearr_35626_37167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (3))){
var inst_35596 = (state_35598[(2)]);
var state_35598__$1 = state_35598;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35598__$1,inst_35596);
} else {
if((state_val_35599 === (12))){
var _ = (function (){var statearr_35627 = state_35598;
(statearr_35627[(4)] = cljs.core.rest((state_35598[(4)])));

return statearr_35627;
})();
var state_35598__$1 = state_35598;
var ex35620 = (state_35598__$1[(2)]);
var statearr_35629_37168 = state_35598__$1;
(statearr_35629_37168[(5)] = ex35620);


if((ex35620 instanceof Object)){
var statearr_35630_37169 = state_35598__$1;
(statearr_35630_37169[(1)] = (11));

(statearr_35630_37169[(5)] = null);

} else {
throw ex35620;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (2))){
var inst_35547 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35548 = cnt;
var inst_35549 = (0);
var state_35598__$1 = (function (){var statearr_35631 = state_35598;
(statearr_35631[(7)] = inst_35548);

(statearr_35631[(8)] = inst_35549);

(statearr_35631[(11)] = inst_35547);

return statearr_35631;
})();
var statearr_35632_37171 = state_35598__$1;
(statearr_35632_37171[(2)] = null);

(statearr_35632_37171[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (11))){
var inst_35555 = (state_35598[(2)]);
var inst_35556 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_35598__$1 = (function (){var statearr_35633 = state_35598;
(statearr_35633[(12)] = inst_35555);

return statearr_35633;
})();
var statearr_35634_37174 = state_35598__$1;
(statearr_35634_37174[(2)] = inst_35556);

(statearr_35634_37174[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (9))){
var inst_35549 = (state_35598[(8)]);
var _ = (function (){var statearr_35635 = state_35598;
(statearr_35635[(4)] = cljs.core.cons((12),(state_35598[(4)])));

return statearr_35635;
})();
var inst_35566 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35549) : chs__$1.call(null,inst_35549));
var inst_35567 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35549) : done.call(null,inst_35549));
var inst_35568 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35566,inst_35567);
var ___$1 = (function (){var statearr_35636 = state_35598;
(statearr_35636[(4)] = cljs.core.rest((state_35598[(4)])));

return statearr_35636;
})();
var state_35598__$1 = state_35598;
var statearr_35637_37175 = state_35598__$1;
(statearr_35637_37175[(2)] = inst_35568);

(statearr_35637_37175[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (5))){
var inst_35578 = (state_35598[(2)]);
var state_35598__$1 = (function (){var statearr_35639 = state_35598;
(statearr_35639[(13)] = inst_35578);

return statearr_35639;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35598__$1,(13),dchan);
} else {
if((state_val_35599 === (14))){
var inst_35586 = cljs.core.async.close_BANG_(out);
var state_35598__$1 = state_35598;
var statearr_35641_37177 = state_35598__$1;
(statearr_35641_37177[(2)] = inst_35586);

(statearr_35641_37177[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (16))){
var inst_35594 = (state_35598[(2)]);
var state_35598__$1 = state_35598;
var statearr_35642_37178 = state_35598__$1;
(statearr_35642_37178[(2)] = inst_35594);

(statearr_35642_37178[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (10))){
var inst_35549 = (state_35598[(8)]);
var inst_35571 = (state_35598[(2)]);
var inst_35572 = (inst_35549 + (1));
var inst_35549__$1 = inst_35572;
var state_35598__$1 = (function (){var statearr_35643 = state_35598;
(statearr_35643[(14)] = inst_35571);

(statearr_35643[(8)] = inst_35549__$1);

return statearr_35643;
})();
var statearr_35644_37180 = state_35598__$1;
(statearr_35644_37180[(2)] = null);

(statearr_35644_37180[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35599 === (8))){
var inst_35576 = (state_35598[(2)]);
var state_35598__$1 = state_35598;
var statearr_35645_37181 = state_35598__$1;
(statearr_35645_37181[(2)] = inst_35576);

(statearr_35645_37181[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33517__auto__ = null;
var cljs$core$async$state_machine__33517__auto____0 = (function (){
var statearr_35646 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35646[(0)] = cljs$core$async$state_machine__33517__auto__);

(statearr_35646[(1)] = (1));

return statearr_35646;
});
var cljs$core$async$state_machine__33517__auto____1 = (function (state_35598){
while(true){
var ret_value__33518__auto__ = (function (){try{while(true){
var result__33519__auto__ = switch__33516__auto__(state_35598);
if(cljs.core.keyword_identical_QMARK_(result__33519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33519__auto__;
}
break;
}
}catch (e35647){var ex__33520__auto__ = e35647;
var statearr_35648_37188 = state_35598;
(statearr_35648_37188[(2)] = ex__33520__auto__);


if(cljs.core.seq((state_35598[(4)]))){
var statearr_35649_37189 = state_35598;
(statearr_35649_37189[(1)] = cljs.core.first((state_35598[(4)])));

} else {
throw ex__33520__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37190 = state_35598;
state_35598 = G__37190;
continue;
} else {
return ret_value__33518__auto__;
}
break;
}
});
cljs$core$async$state_machine__33517__auto__ = function(state_35598){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33517__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33517__auto____1.call(this,state_35598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33517__auto____0;
cljs$core$async$state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33517__auto____1;
return cljs$core$async$state_machine__33517__auto__;
})()
})();
var state__33715__auto__ = (function (){var statearr_35650 = f__33714__auto__();
(statearr_35650[(6)] = c__33713__auto___37151);

return statearr_35650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33715__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__35653 = arguments.length;
switch (G__35653) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33713__auto___37194 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33714__auto__ = (function (){var switch__33516__auto__ = (function (state_35685){
var state_val_35686 = (state_35685[(1)]);
if((state_val_35686 === (7))){
var inst_35665 = (state_35685[(7)]);
var inst_35664 = (state_35685[(8)]);
var inst_35664__$1 = (state_35685[(2)]);
var inst_35665__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35664__$1,(0),null);
var inst_35666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35664__$1,(1),null);
var inst_35667 = (inst_35665__$1 == null);
var state_35685__$1 = (function (){var statearr_35687 = state_35685;
(statearr_35687[(9)] = inst_35666);

(statearr_35687[(7)] = inst_35665__$1);

(statearr_35687[(8)] = inst_35664__$1);

return statearr_35687;
})();
if(cljs.core.truth_(inst_35667)){
var statearr_35688_37203 = state_35685__$1;
(statearr_35688_37203[(1)] = (8));

} else {
var statearr_35689_37206 = state_35685__$1;
(statearr_35689_37206[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (1))){
var inst_35654 = cljs.core.vec(chs);
var inst_35655 = inst_35654;
var state_35685__$1 = (function (){var statearr_35690 = state_35685;
(statearr_35690[(10)] = inst_35655);

return statearr_35690;
})();
var statearr_35691_37207 = state_35685__$1;
(statearr_35691_37207[(2)] = null);

(statearr_35691_37207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (4))){
var inst_35655 = (state_35685[(10)]);
var state_35685__$1 = state_35685;
return cljs.core.async.ioc_alts_BANG_(state_35685__$1,(7),inst_35655);
} else {
if((state_val_35686 === (6))){
var inst_35681 = (state_35685[(2)]);
var state_35685__$1 = state_35685;
var statearr_35693_37214 = state_35685__$1;
(statearr_35693_37214[(2)] = inst_35681);

(statearr_35693_37214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (3))){
var inst_35683 = (state_35685[(2)]);
var state_35685__$1 = state_35685;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35685__$1,inst_35683);
} else {
if((state_val_35686 === (2))){
var inst_35655 = (state_35685[(10)]);
var inst_35657 = cljs.core.count(inst_35655);
var inst_35658 = (inst_35657 > (0));
var state_35685__$1 = state_35685;
if(cljs.core.truth_(inst_35658)){
var statearr_35696_37229 = state_35685__$1;
(statearr_35696_37229[(1)] = (4));

} else {
var statearr_35697_37231 = state_35685__$1;
(statearr_35697_37231[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (11))){
var inst_35655 = (state_35685[(10)]);
var inst_35674 = (state_35685[(2)]);
var tmp35695 = inst_35655;
var inst_35655__$1 = tmp35695;
var state_35685__$1 = (function (){var statearr_35698 = state_35685;
(statearr_35698[(11)] = inst_35674);

(statearr_35698[(10)] = inst_35655__$1);

return statearr_35698;
})();
var statearr_35699_37233 = state_35685__$1;
(statearr_35699_37233[(2)] = null);

(statearr_35699_37233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (9))){
var inst_35665 = (state_35685[(7)]);
var state_35685__$1 = state_35685;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35685__$1,(11),out,inst_35665);
} else {
if((state_val_35686 === (5))){
var inst_35679 = cljs.core.async.close_BANG_(out);
var state_35685__$1 = state_35685;
var statearr_35702_37237 = state_35685__$1;
(statearr_35702_37237[(2)] = inst_35679);

(statearr_35702_37237[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (10))){
var inst_35677 = (state_35685[(2)]);
var state_35685__$1 = state_35685;
var statearr_35703_37246 = state_35685__$1;
(statearr_35703_37246[(2)] = inst_35677);

(statearr_35703_37246[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35686 === (8))){
var inst_35666 = (state_35685[(9)]);
var inst_35665 = (state_35685[(7)]);
var inst_35655 = (state_35685[(10)]);
var inst_35664 = (state_35685[(8)]);
var inst_35669 = (function (){var cs = inst_35655;
var vec__35660 = inst_35664;
var v = inst_35665;
var c = inst_35666;
return (function (p1__35651_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__35651_SHARP_);
});
})();
var inst_35670 = cljs.core.filterv(inst_35669,inst_35655);
var inst_35655__$1 = inst_35670;
var state_35685__$1 = (function (){var statearr_35704 = state_35685;
(statearr_35704[(10)] = inst_35655__$1);

return statearr_35704;
})();
var statearr_35705_37249 = state_35685__$1;
(statearr_35705_37249[(2)] = null);

(statearr_35705_37249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33517__auto__ = null;
var cljs$core$async$state_machine__33517__auto____0 = (function (){
var statearr_35707 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35707[(0)] = cljs$core$async$state_machine__33517__auto__);

(statearr_35707[(1)] = (1));

return statearr_35707;
});
var cljs$core$async$state_machine__33517__auto____1 = (function (state_35685){
while(true){
var ret_value__33518__auto__ = (function (){try{while(true){
var result__33519__auto__ = switch__33516__auto__(state_35685);
if(cljs.core.keyword_identical_QMARK_(result__33519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33519__auto__;
}
break;
}
}catch (e35709){var ex__33520__auto__ = e35709;
var statearr_35710_37269 = state_35685;
(statearr_35710_37269[(2)] = ex__33520__auto__);


if(cljs.core.seq((state_35685[(4)]))){
var statearr_35711_37270 = state_35685;
(statearr_35711_37270[(1)] = cljs.core.first((state_35685[(4)])));

} else {
throw ex__33520__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37271 = state_35685;
state_35685 = G__37271;
continue;
} else {
return ret_value__33518__auto__;
}
break;
}
});
cljs$core$async$state_machine__33517__auto__ = function(state_35685){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33517__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33517__auto____1.call(this,state_35685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33517__auto____0;
cljs$core$async$state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33517__auto____1;
return cljs$core$async$state_machine__33517__auto__;
})()
})();
var state__33715__auto__ = (function (){var statearr_35712 = f__33714__auto__();
(statearr_35712[(6)] = c__33713__auto___37194);

return statearr_35712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33715__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__35714 = arguments.length;
switch (G__35714) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33713__auto___37303 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33714__auto__ = (function (){var switch__33516__auto__ = (function (state_35740){
var state_val_35741 = (state_35740[(1)]);
if((state_val_35741 === (7))){
var inst_35720 = (state_35740[(7)]);
var inst_35720__$1 = (state_35740[(2)]);
var inst_35721 = (inst_35720__$1 == null);
var inst_35722 = cljs.core.not(inst_35721);
var state_35740__$1 = (function (){var statearr_35742 = state_35740;
(statearr_35742[(7)] = inst_35720__$1);

return statearr_35742;
})();
if(inst_35722){
var statearr_35743_37305 = state_35740__$1;
(statearr_35743_37305[(1)] = (8));

} else {
var statearr_35744_37310 = state_35740__$1;
(statearr_35744_37310[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35741 === (1))){
var inst_35715 = (0);
var state_35740__$1 = (function (){var statearr_35746 = state_35740;
(statearr_35746[(8)] = inst_35715);

return statearr_35746;
})();
var statearr_35750_37314 = state_35740__$1;
(statearr_35750_37314[(2)] = null);

(statearr_35750_37314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35741 === (4))){
var state_35740__$1 = state_35740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35740__$1,(7),ch);
} else {
if((state_val_35741 === (6))){
var inst_35734 = (state_35740[(2)]);
var state_35740__$1 = state_35740;
var statearr_35751_37315 = state_35740__$1;
(statearr_35751_37315[(2)] = inst_35734);

(statearr_35751_37315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35741 === (3))){
var inst_35736 = (state_35740[(2)]);
var inst_35737 = cljs.core.async.close_BANG_(out);
var state_35740__$1 = (function (){var statearr_35752 = state_35740;
(statearr_35752[(9)] = inst_35736);

return statearr_35752;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35740__$1,inst_35737);
} else {
if((state_val_35741 === (2))){
var inst_35715 = (state_35740[(8)]);
var inst_35717 = (inst_35715 < n);
var state_35740__$1 = state_35740;
if(cljs.core.truth_(inst_35717)){
var statearr_35754_37322 = state_35740__$1;
(statearr_35754_37322[(1)] = (4));

} else {
var statearr_35755_37324 = state_35740__$1;
(statearr_35755_37324[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35741 === (11))){
var inst_35715 = (state_35740[(8)]);
var inst_35726 = (state_35740[(2)]);
var inst_35727 = (inst_35715 + (1));
var inst_35715__$1 = inst_35727;
var state_35740__$1 = (function (){var statearr_35757 = state_35740;
(statearr_35757[(8)] = inst_35715__$1);

(statearr_35757[(10)] = inst_35726);

return statearr_35757;
})();
var statearr_35758_37334 = state_35740__$1;
(statearr_35758_37334[(2)] = null);

(statearr_35758_37334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35741 === (9))){
var state_35740__$1 = state_35740;
var statearr_35760_37336 = state_35740__$1;
(statearr_35760_37336[(2)] = null);

(statearr_35760_37336[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35741 === (5))){
var state_35740__$1 = state_35740;
var statearr_35761_37337 = state_35740__$1;
(statearr_35761_37337[(2)] = null);

(statearr_35761_37337[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35741 === (10))){
var inst_35731 = (state_35740[(2)]);
var state_35740__$1 = state_35740;
var statearr_35762_37342 = state_35740__$1;
(statearr_35762_37342[(2)] = inst_35731);

(statearr_35762_37342[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35741 === (8))){
var inst_35720 = (state_35740[(7)]);
var state_35740__$1 = state_35740;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35740__$1,(11),out,inst_35720);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33517__auto__ = null;
var cljs$core$async$state_machine__33517__auto____0 = (function (){
var statearr_35766 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35766[(0)] = cljs$core$async$state_machine__33517__auto__);

(statearr_35766[(1)] = (1));

return statearr_35766;
});
var cljs$core$async$state_machine__33517__auto____1 = (function (state_35740){
while(true){
var ret_value__33518__auto__ = (function (){try{while(true){
var result__33519__auto__ = switch__33516__auto__(state_35740);
if(cljs.core.keyword_identical_QMARK_(result__33519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33519__auto__;
}
break;
}
}catch (e35767){var ex__33520__auto__ = e35767;
var statearr_35768_37352 = state_35740;
(statearr_35768_37352[(2)] = ex__33520__auto__);


if(cljs.core.seq((state_35740[(4)]))){
var statearr_35769_37354 = state_35740;
(statearr_35769_37354[(1)] = cljs.core.first((state_35740[(4)])));

} else {
throw ex__33520__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37359 = state_35740;
state_35740 = G__37359;
continue;
} else {
return ret_value__33518__auto__;
}
break;
}
});
cljs$core$async$state_machine__33517__auto__ = function(state_35740){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33517__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33517__auto____1.call(this,state_35740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33517__auto____0;
cljs$core$async$state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33517__auto____1;
return cljs$core$async$state_machine__33517__auto__;
})()
})();
var state__33715__auto__ = (function (){var statearr_35770 = f__33714__auto__();
(statearr_35770[(6)] = c__33713__auto___37303);

return statearr_35770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33715__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35775 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35775 = (function (f,ch,meta35776){
this.f = f;
this.ch = ch;
this.meta35776 = meta35776;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35777,meta35776__$1){
var self__ = this;
var _35777__$1 = this;
return (new cljs.core.async.t_cljs$core$async35775(self__.f,self__.ch,meta35776__$1));
}));

(cljs.core.async.t_cljs$core$async35775.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35777){
var self__ = this;
var _35777__$1 = this;
return self__.meta35776;
}));

(cljs.core.async.t_cljs$core$async35775.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35775.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35775.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35775.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35775.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35785 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35785 = (function (f,ch,meta35776,_,fn1,meta35786){
this.f = f;
this.ch = ch;
this.meta35776 = meta35776;
this._ = _;
this.fn1 = fn1;
this.meta35786 = meta35786;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35787,meta35786__$1){
var self__ = this;
var _35787__$1 = this;
return (new cljs.core.async.t_cljs$core$async35785(self__.f,self__.ch,self__.meta35776,self__._,self__.fn1,meta35786__$1));
}));

(cljs.core.async.t_cljs$core$async35785.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35787){
var self__ = this;
var _35787__$1 = this;
return self__.meta35786;
}));

(cljs.core.async.t_cljs$core$async35785.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35785.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async35785.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35785.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__35774_SHARP_){
var G__35807 = (((p1__35774_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__35774_SHARP_) : self__.f.call(null,p1__35774_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__35807) : f1.call(null,G__35807));
});
}));

(cljs.core.async.t_cljs$core$async35785.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35776","meta35776",-968428596,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35775","cljs.core.async/t_cljs$core$async35775",-571104476,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35786","meta35786",-1643927031,null)], null);
}));

(cljs.core.async.t_cljs$core$async35785.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35785.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35785");

(cljs.core.async.t_cljs$core$async35785.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35785");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35785.
 */
cljs.core.async.__GT_t_cljs$core$async35785 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35785(f__$1,ch__$1,meta35776__$1,___$2,fn1__$1,meta35786){
return (new cljs.core.async.t_cljs$core$async35785(f__$1,ch__$1,meta35776__$1,___$2,fn1__$1,meta35786));
});

}

return (new cljs.core.async.t_cljs$core$async35785(self__.f,self__.ch,self__.meta35776,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__35814 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__35814) : self__.f.call(null,G__35814));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async35775.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35775.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async35775.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35776","meta35776",-968428596,null)], null);
}));

(cljs.core.async.t_cljs$core$async35775.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35775.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35775");

(cljs.core.async.t_cljs$core$async35775.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35775");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35775.
 */
cljs.core.async.__GT_t_cljs$core$async35775 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35775(f__$1,ch__$1,meta35776){
return (new cljs.core.async.t_cljs$core$async35775(f__$1,ch__$1,meta35776));
});

}

return (new cljs.core.async.t_cljs$core$async35775(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35819 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35819 = (function (f,ch,meta35820){
this.f = f;
this.ch = ch;
this.meta35820 = meta35820;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35821,meta35820__$1){
var self__ = this;
var _35821__$1 = this;
return (new cljs.core.async.t_cljs$core$async35819(self__.f,self__.ch,meta35820__$1));
}));

(cljs.core.async.t_cljs$core$async35819.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35821){
var self__ = this;
var _35821__$1 = this;
return self__.meta35820;
}));

(cljs.core.async.t_cljs$core$async35819.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35819.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35819.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35819.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35819.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35819.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async35819.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35820","meta35820",-1861473927,null)], null);
}));

(cljs.core.async.t_cljs$core$async35819.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35819.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35819");

(cljs.core.async.t_cljs$core$async35819.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35819");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35819.
 */
cljs.core.async.__GT_t_cljs$core$async35819 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35819(f__$1,ch__$1,meta35820){
return (new cljs.core.async.t_cljs$core$async35819(f__$1,ch__$1,meta35820));
});

}

return (new cljs.core.async.t_cljs$core$async35819(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35830 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35830 = (function (p,ch,meta35831){
this.p = p;
this.ch = ch;
this.meta35831 = meta35831;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35832,meta35831__$1){
var self__ = this;
var _35832__$1 = this;
return (new cljs.core.async.t_cljs$core$async35830(self__.p,self__.ch,meta35831__$1));
}));

(cljs.core.async.t_cljs$core$async35830.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35832){
var self__ = this;
var _35832__$1 = this;
return self__.meta35831;
}));

(cljs.core.async.t_cljs$core$async35830.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35830.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35830.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35830.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35830.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35830.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35830.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async35830.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35831","meta35831",944421005,null)], null);
}));

(cljs.core.async.t_cljs$core$async35830.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35830.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35830");

(cljs.core.async.t_cljs$core$async35830.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async35830");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35830.
 */
cljs.core.async.__GT_t_cljs$core$async35830 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35830(p__$1,ch__$1,meta35831){
return (new cljs.core.async.t_cljs$core$async35830(p__$1,ch__$1,meta35831));
});

}

return (new cljs.core.async.t_cljs$core$async35830(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__35837 = arguments.length;
switch (G__35837) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33713__auto___37491 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33714__auto__ = (function (){var switch__33516__auto__ = (function (state_35862){
var state_val_35863 = (state_35862[(1)]);
if((state_val_35863 === (7))){
var inst_35858 = (state_35862[(2)]);
var state_35862__$1 = state_35862;
var statearr_35864_37497 = state_35862__$1;
(statearr_35864_37497[(2)] = inst_35858);

(statearr_35864_37497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35863 === (1))){
var state_35862__$1 = state_35862;
var statearr_35865_37501 = state_35862__$1;
(statearr_35865_37501[(2)] = null);

(statearr_35865_37501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35863 === (4))){
var inst_35844 = (state_35862[(7)]);
var inst_35844__$1 = (state_35862[(2)]);
var inst_35845 = (inst_35844__$1 == null);
var state_35862__$1 = (function (){var statearr_35866 = state_35862;
(statearr_35866[(7)] = inst_35844__$1);

return statearr_35866;
})();
if(cljs.core.truth_(inst_35845)){
var statearr_35867_37515 = state_35862__$1;
(statearr_35867_37515[(1)] = (5));

} else {
var statearr_35868_37516 = state_35862__$1;
(statearr_35868_37516[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35863 === (6))){
var inst_35844 = (state_35862[(7)]);
var inst_35849 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35844) : p.call(null,inst_35844));
var state_35862__$1 = state_35862;
if(cljs.core.truth_(inst_35849)){
var statearr_35869_37517 = state_35862__$1;
(statearr_35869_37517[(1)] = (8));

} else {
var statearr_35870_37518 = state_35862__$1;
(statearr_35870_37518[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35863 === (3))){
var inst_35860 = (state_35862[(2)]);
var state_35862__$1 = state_35862;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35862__$1,inst_35860);
} else {
if((state_val_35863 === (2))){
var state_35862__$1 = state_35862;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35862__$1,(4),ch);
} else {
if((state_val_35863 === (11))){
var inst_35852 = (state_35862[(2)]);
var state_35862__$1 = state_35862;
var statearr_35875_37524 = state_35862__$1;
(statearr_35875_37524[(2)] = inst_35852);

(statearr_35875_37524[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35863 === (9))){
var state_35862__$1 = state_35862;
var statearr_35877_37525 = state_35862__$1;
(statearr_35877_37525[(2)] = null);

(statearr_35877_37525[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35863 === (5))){
var inst_35847 = cljs.core.async.close_BANG_(out);
var state_35862__$1 = state_35862;
var statearr_35878_37528 = state_35862__$1;
(statearr_35878_37528[(2)] = inst_35847);

(statearr_35878_37528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35863 === (10))){
var inst_35855 = (state_35862[(2)]);
var state_35862__$1 = (function (){var statearr_35879 = state_35862;
(statearr_35879[(8)] = inst_35855);

return statearr_35879;
})();
var statearr_35880_37534 = state_35862__$1;
(statearr_35880_37534[(2)] = null);

(statearr_35880_37534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35863 === (8))){
var inst_35844 = (state_35862[(7)]);
var state_35862__$1 = state_35862;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35862__$1,(11),out,inst_35844);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33517__auto__ = null;
var cljs$core$async$state_machine__33517__auto____0 = (function (){
var statearr_35883 = [null,null,null,null,null,null,null,null,null];
(statearr_35883[(0)] = cljs$core$async$state_machine__33517__auto__);

(statearr_35883[(1)] = (1));

return statearr_35883;
});
var cljs$core$async$state_machine__33517__auto____1 = (function (state_35862){
while(true){
var ret_value__33518__auto__ = (function (){try{while(true){
var result__33519__auto__ = switch__33516__auto__(state_35862);
if(cljs.core.keyword_identical_QMARK_(result__33519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33519__auto__;
}
break;
}
}catch (e35884){var ex__33520__auto__ = e35884;
var statearr_35885_37546 = state_35862;
(statearr_35885_37546[(2)] = ex__33520__auto__);


if(cljs.core.seq((state_35862[(4)]))){
var statearr_35886_37547 = state_35862;
(statearr_35886_37547[(1)] = cljs.core.first((state_35862[(4)])));

} else {
throw ex__33520__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37551 = state_35862;
state_35862 = G__37551;
continue;
} else {
return ret_value__33518__auto__;
}
break;
}
});
cljs$core$async$state_machine__33517__auto__ = function(state_35862){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33517__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33517__auto____1.call(this,state_35862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33517__auto____0;
cljs$core$async$state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33517__auto____1;
return cljs$core$async$state_machine__33517__auto__;
})()
})();
var state__33715__auto__ = (function (){var statearr_35889 = f__33714__auto__();
(statearr_35889[(6)] = c__33713__auto___37491);

return statearr_35889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33715__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35896 = arguments.length;
switch (G__35896) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33713__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33714__auto__ = (function (){var switch__33516__auto__ = (function (state_35962){
var state_val_35963 = (state_35962[(1)]);
if((state_val_35963 === (7))){
var inst_35958 = (state_35962[(2)]);
var state_35962__$1 = state_35962;
var statearr_35968_37556 = state_35962__$1;
(statearr_35968_37556[(2)] = inst_35958);

(statearr_35968_37556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35963 === (20))){
var inst_35924 = (state_35962[(7)]);
var inst_35935 = (state_35962[(2)]);
var inst_35936 = cljs.core.next(inst_35924);
var inst_35910 = inst_35936;
var inst_35911 = null;
var inst_35912 = (0);
var inst_35913 = (0);
var state_35962__$1 = (function (){var statearr_35969 = state_35962;
(statearr_35969[(8)] = inst_35912);

(statearr_35969[(9)] = inst_35935);

(statearr_35969[(10)] = inst_35913);

(statearr_35969[(11)] = inst_35910);

(statearr_35969[(12)] = inst_35911);

return statearr_35969;
})();
var statearr_35970_37569 = state_35962__$1;
(statearr_35970_37569[(2)] = null);

(statearr_35970_37569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35963 === (1))){
var state_35962__$1 = state_35962;
var statearr_35971_37573 = state_35962__$1;
(statearr_35971_37573[(2)] = null);

(statearr_35971_37573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35963 === (4))){
var inst_35899 = (state_35962[(13)]);
var inst_35899__$1 = (state_35962[(2)]);
var inst_35900 = (inst_35899__$1 == null);
var state_35962__$1 = (function (){var statearr_35972 = state_35962;
(statearr_35972[(13)] = inst_35899__$1);

return statearr_35972;
})();
if(cljs.core.truth_(inst_35900)){
var statearr_35973_37589 = state_35962__$1;
(statearr_35973_37589[(1)] = (5));

} else {
var statearr_35974_37594 = state_35962__$1;
(statearr_35974_37594[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35963 === (15))){
var state_35962__$1 = state_35962;
var statearr_35978_37596 = state_35962__$1;
(statearr_35978_37596[(2)] = null);

(statearr_35978_37596[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35963 === (21))){
var state_35962__$1 = state_35962;
var statearr_35980_37606 = state_35962__$1;
(statearr_35980_37606[(2)] = null);

(statearr_35980_37606[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35963 === (13))){
var inst_35912 = (state_35962[(8)]);
var inst_35913 = (state_35962[(10)]);
var inst_35910 = (state_35962[(11)]);
var inst_35911 = (state_35962[(12)]);
var inst_35920 = (state_35962[(2)]);
var inst_35921 = (inst_35913 + (1));
var tmp35975 = inst_35912;
var tmp35976 = inst_35910;
var tmp35977 = inst_35911;
var inst_35910__$1 = tmp35976;
var inst_35911__$1 = tmp35977;
var inst_35912__$1 = tmp35975;
var inst_35913__$1 = inst_35921;
var state_35962__$1 = (function (){var statearr_35982 = state_35962;
(statearr_35982[(8)] = inst_35912__$1);

(statearr_35982[(14)] = inst_35920);

(statearr_35982[(10)] = inst_35913__$1);

(statearr_35982[(11)] = inst_35910__$1);

(statearr_35982[(12)] = inst_35911__$1);

return statearr_35982;
})();
var statearr_35983_37632 = state_35962__$1;
(statearr_35983_37632[(2)] = null);

(statearr_35983_37632[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35963 === (22))){
var state_35962__$1 = state_35962;
var statearr_35984_37642 = state_35962__$1;
(statearr_35984_37642[(2)] = null);

(statearr_35984_37642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35963 === (6))){
var inst_35899 = (state_35962[(13)]);
var inst_35908 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35899) : f.call(null,inst_35899));
var inst_35909 = cljs.core.seq(inst_35908);
var inst_35910 = inst_35909;
var inst_35911 = null;
var inst_35912 = (0);
var inst_35913 = (0);
var state_35962__$1 = (function (){var statearr_35988 = state_35962;
(statearr_35988[(8)] = inst_35912);

(statearr_35988[(10)] = inst_35913);

(statearr_35988[(11)] = inst_35910);

(statearr_35988[(12)] = inst_35911);

return statearr_35988;
})();
var statearr_35989_37661 = state_35962__$1;
(statearr_35989_37661[(2)] = null);

(statearr_35989_37661[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35963 === (17))){
var inst_35924 = (state_35962[(7)]);
var inst_35928 = cljs.core.chunk_first(inst_35924);
var inst_35929 = cljs.core.chunk_rest(inst_35924);
var inst_35930 = cljs.core.count(inst_35928);
var inst_35910 = inst_35929;
var inst_35911 = inst_35928;
var inst_35912 = inst_35930;
var inst_35913 = (0);
var state_35962__$1 = (function (){var statearr_35990 = state_35962;
(statearr_35990[(8)] = inst_35912);

(statearr_35990[(10)] = inst_35913);

(statearr_35990[(11)] = inst_35910);

(statearr_35990[(12)] = inst_35911);

return statearr_35990;
})();
var statearr_35991_37666 = state_35962__$1;
(statearr_35991_37666[(2)] = null);

(statearr_35991_37666[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35963 === (3))){
var inst_35960 = (state_35962[(2)]);
var state_35962__$1 = state_35962;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35962__$1,inst_35960);
} else {
if((state_val_35963 === (12))){
var inst_35944 = (state_35962[(2)]);
var state_35962__$1 = state_35962;
var statearr_35992_37668 = state_35962__$1;
(statearr_35992_37668[(2)] = inst_35944);

(statearr_35992_37668[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35963 === (2))){
var state_35962__$1 = state_35962;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35962__$1,(4),in$);
} else {
if((state_val_35963 === (23))){
var inst_35956 = (state_35962[(2)]);
var state_35962__$1 = state_35962;
var statearr_35993_37672 = state_35962__$1;
(statearr_35993_37672[(2)] = inst_35956);

(statearr_35993_37672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35963 === (19))){
var inst_35939 = (state_35962[(2)]);
var state_35962__$1 = state_35962;
var statearr_35994_37676 = state_35962__$1;
(statearr_35994_37676[(2)] = inst_35939);

(statearr_35994_37676[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35963 === (11))){
var inst_35924 = (state_35962[(7)]);
var inst_35910 = (state_35962[(11)]);
var inst_35924__$1 = cljs.core.seq(inst_35910);
var state_35962__$1 = (function (){var statearr_35995 = state_35962;
(statearr_35995[(7)] = inst_35924__$1);

return statearr_35995;
})();
if(inst_35924__$1){
var statearr_35996_37685 = state_35962__$1;
(statearr_35996_37685[(1)] = (14));

} else {
var statearr_35997_37686 = state_35962__$1;
(statearr_35997_37686[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35963 === (9))){
var inst_35946 = (state_35962[(2)]);
var inst_35948 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_35962__$1 = (function (){var statearr_35998 = state_35962;
(statearr_35998[(15)] = inst_35946);

return statearr_35998;
})();
if(cljs.core.truth_(inst_35948)){
var statearr_35999_37698 = state_35962__$1;
(statearr_35999_37698[(1)] = (21));

} else {
var statearr_36000_37699 = state_35962__$1;
(statearr_36000_37699[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35963 === (5))){
var inst_35902 = cljs.core.async.close_BANG_(out);
var state_35962__$1 = state_35962;
var statearr_36001_37701 = state_35962__$1;
(statearr_36001_37701[(2)] = inst_35902);

(statearr_36001_37701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35963 === (14))){
var inst_35924 = (state_35962[(7)]);
var inst_35926 = cljs.core.chunked_seq_QMARK_(inst_35924);
var state_35962__$1 = state_35962;
if(inst_35926){
var statearr_36002_37702 = state_35962__$1;
(statearr_36002_37702[(1)] = (17));

} else {
var statearr_36003_37703 = state_35962__$1;
(statearr_36003_37703[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35963 === (16))){
var inst_35942 = (state_35962[(2)]);
var state_35962__$1 = state_35962;
var statearr_36004_37708 = state_35962__$1;
(statearr_36004_37708[(2)] = inst_35942);

(statearr_36004_37708[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35963 === (10))){
var inst_35913 = (state_35962[(10)]);
var inst_35911 = (state_35962[(12)]);
var inst_35918 = cljs.core._nth(inst_35911,inst_35913);
var state_35962__$1 = state_35962;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35962__$1,(13),out,inst_35918);
} else {
if((state_val_35963 === (18))){
var inst_35924 = (state_35962[(7)]);
var inst_35933 = cljs.core.first(inst_35924);
var state_35962__$1 = state_35962;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35962__$1,(20),out,inst_35933);
} else {
if((state_val_35963 === (8))){
var inst_35912 = (state_35962[(8)]);
var inst_35913 = (state_35962[(10)]);
var inst_35915 = (inst_35913 < inst_35912);
var inst_35916 = inst_35915;
var state_35962__$1 = state_35962;
if(cljs.core.truth_(inst_35916)){
var statearr_36005_37711 = state_35962__$1;
(statearr_36005_37711[(1)] = (10));

} else {
var statearr_36006_37713 = state_35962__$1;
(statearr_36006_37713[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33517__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33517__auto____0 = (function (){
var statearr_36007 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36007[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33517__auto__);

(statearr_36007[(1)] = (1));

return statearr_36007;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33517__auto____1 = (function (state_35962){
while(true){
var ret_value__33518__auto__ = (function (){try{while(true){
var result__33519__auto__ = switch__33516__auto__(state_35962);
if(cljs.core.keyword_identical_QMARK_(result__33519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33519__auto__;
}
break;
}
}catch (e36008){var ex__33520__auto__ = e36008;
var statearr_36009_37721 = state_35962;
(statearr_36009_37721[(2)] = ex__33520__auto__);


if(cljs.core.seq((state_35962[(4)]))){
var statearr_36010_37726 = state_35962;
(statearr_36010_37726[(1)] = cljs.core.first((state_35962[(4)])));

} else {
throw ex__33520__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37727 = state_35962;
state_35962 = G__37727;
continue;
} else {
return ret_value__33518__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33517__auto__ = function(state_35962){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33517__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33517__auto____1.call(this,state_35962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33517__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33517__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33517__auto__;
})()
})();
var state__33715__auto__ = (function (){var statearr_36011 = f__33714__auto__();
(statearr_36011[(6)] = c__33713__auto__);

return statearr_36011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33715__auto__);
}));

return c__33713__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36013 = arguments.length;
switch (G__36013) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__36015 = arguments.length;
switch (G__36015) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__36018 = arguments.length;
switch (G__36018) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33713__auto___37768 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33714__auto__ = (function (){var switch__33516__auto__ = (function (state_36045){
var state_val_36046 = (state_36045[(1)]);
if((state_val_36046 === (7))){
var inst_36040 = (state_36045[(2)]);
var state_36045__$1 = state_36045;
var statearr_36051_37774 = state_36045__$1;
(statearr_36051_37774[(2)] = inst_36040);

(statearr_36051_37774[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36046 === (1))){
var inst_36022 = null;
var state_36045__$1 = (function (){var statearr_36052 = state_36045;
(statearr_36052[(7)] = inst_36022);

return statearr_36052;
})();
var statearr_36053_37780 = state_36045__$1;
(statearr_36053_37780[(2)] = null);

(statearr_36053_37780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36046 === (4))){
var inst_36025 = (state_36045[(8)]);
var inst_36025__$1 = (state_36045[(2)]);
var inst_36026 = (inst_36025__$1 == null);
var inst_36027 = cljs.core.not(inst_36026);
var state_36045__$1 = (function (){var statearr_36054 = state_36045;
(statearr_36054[(8)] = inst_36025__$1);

return statearr_36054;
})();
if(inst_36027){
var statearr_36055_37793 = state_36045__$1;
(statearr_36055_37793[(1)] = (5));

} else {
var statearr_36056_37794 = state_36045__$1;
(statearr_36056_37794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36046 === (6))){
var state_36045__$1 = state_36045;
var statearr_36057_37800 = state_36045__$1;
(statearr_36057_37800[(2)] = null);

(statearr_36057_37800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36046 === (3))){
var inst_36042 = (state_36045[(2)]);
var inst_36043 = cljs.core.async.close_BANG_(out);
var state_36045__$1 = (function (){var statearr_36058 = state_36045;
(statearr_36058[(9)] = inst_36042);

return statearr_36058;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36045__$1,inst_36043);
} else {
if((state_val_36046 === (2))){
var state_36045__$1 = state_36045;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36045__$1,(4),ch);
} else {
if((state_val_36046 === (11))){
var inst_36025 = (state_36045[(8)]);
var inst_36034 = (state_36045[(2)]);
var inst_36022 = inst_36025;
var state_36045__$1 = (function (){var statearr_36059 = state_36045;
(statearr_36059[(10)] = inst_36034);

(statearr_36059[(7)] = inst_36022);

return statearr_36059;
})();
var statearr_36060_37808 = state_36045__$1;
(statearr_36060_37808[(2)] = null);

(statearr_36060_37808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36046 === (9))){
var inst_36025 = (state_36045[(8)]);
var state_36045__$1 = state_36045;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36045__$1,(11),out,inst_36025);
} else {
if((state_val_36046 === (5))){
var inst_36025 = (state_36045[(8)]);
var inst_36022 = (state_36045[(7)]);
var inst_36029 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36025,inst_36022);
var state_36045__$1 = state_36045;
if(inst_36029){
var statearr_36062_37809 = state_36045__$1;
(statearr_36062_37809[(1)] = (8));

} else {
var statearr_36063_37810 = state_36045__$1;
(statearr_36063_37810[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36046 === (10))){
var inst_36037 = (state_36045[(2)]);
var state_36045__$1 = state_36045;
var statearr_36064_37812 = state_36045__$1;
(statearr_36064_37812[(2)] = inst_36037);

(statearr_36064_37812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36046 === (8))){
var inst_36022 = (state_36045[(7)]);
var tmp36061 = inst_36022;
var inst_36022__$1 = tmp36061;
var state_36045__$1 = (function (){var statearr_36065 = state_36045;
(statearr_36065[(7)] = inst_36022__$1);

return statearr_36065;
})();
var statearr_36066_37814 = state_36045__$1;
(statearr_36066_37814[(2)] = null);

(statearr_36066_37814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33517__auto__ = null;
var cljs$core$async$state_machine__33517__auto____0 = (function (){
var statearr_36067 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36067[(0)] = cljs$core$async$state_machine__33517__auto__);

(statearr_36067[(1)] = (1));

return statearr_36067;
});
var cljs$core$async$state_machine__33517__auto____1 = (function (state_36045){
while(true){
var ret_value__33518__auto__ = (function (){try{while(true){
var result__33519__auto__ = switch__33516__auto__(state_36045);
if(cljs.core.keyword_identical_QMARK_(result__33519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33519__auto__;
}
break;
}
}catch (e36068){var ex__33520__auto__ = e36068;
var statearr_36069_37830 = state_36045;
(statearr_36069_37830[(2)] = ex__33520__auto__);


if(cljs.core.seq((state_36045[(4)]))){
var statearr_36070_37834 = state_36045;
(statearr_36070_37834[(1)] = cljs.core.first((state_36045[(4)])));

} else {
throw ex__33520__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37835 = state_36045;
state_36045 = G__37835;
continue;
} else {
return ret_value__33518__auto__;
}
break;
}
});
cljs$core$async$state_machine__33517__auto__ = function(state_36045){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33517__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33517__auto____1.call(this,state_36045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33517__auto____0;
cljs$core$async$state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33517__auto____1;
return cljs$core$async$state_machine__33517__auto__;
})()
})();
var state__33715__auto__ = (function (){var statearr_36085 = f__33714__auto__();
(statearr_36085[(6)] = c__33713__auto___37768);

return statearr_36085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33715__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36093 = arguments.length;
switch (G__36093) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33713__auto___37844 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33714__auto__ = (function (){var switch__33516__auto__ = (function (state_36153){
var state_val_36154 = (state_36153[(1)]);
if((state_val_36154 === (7))){
var inst_36147 = (state_36153[(2)]);
var state_36153__$1 = state_36153;
var statearr_36156_37845 = state_36153__$1;
(statearr_36156_37845[(2)] = inst_36147);

(statearr_36156_37845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36154 === (1))){
var inst_36108 = (new Array(n));
var inst_36109 = inst_36108;
var inst_36110 = (0);
var state_36153__$1 = (function (){var statearr_36157 = state_36153;
(statearr_36157[(7)] = inst_36109);

(statearr_36157[(8)] = inst_36110);

return statearr_36157;
})();
var statearr_36158_37846 = state_36153__$1;
(statearr_36158_37846[(2)] = null);

(statearr_36158_37846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36154 === (4))){
var inst_36119 = (state_36153[(9)]);
var inst_36119__$1 = (state_36153[(2)]);
var inst_36120 = (inst_36119__$1 == null);
var inst_36121 = cljs.core.not(inst_36120);
var state_36153__$1 = (function (){var statearr_36159 = state_36153;
(statearr_36159[(9)] = inst_36119__$1);

return statearr_36159;
})();
if(inst_36121){
var statearr_36160_37847 = state_36153__$1;
(statearr_36160_37847[(1)] = (5));

} else {
var statearr_36164_37848 = state_36153__$1;
(statearr_36164_37848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36154 === (15))){
var inst_36141 = (state_36153[(2)]);
var state_36153__$1 = state_36153;
var statearr_36165_37850 = state_36153__$1;
(statearr_36165_37850[(2)] = inst_36141);

(statearr_36165_37850[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36154 === (13))){
var state_36153__$1 = state_36153;
var statearr_36166_37853 = state_36153__$1;
(statearr_36166_37853[(2)] = null);

(statearr_36166_37853[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36154 === (6))){
var inst_36110 = (state_36153[(8)]);
var inst_36137 = (inst_36110 > (0));
var state_36153__$1 = state_36153;
if(cljs.core.truth_(inst_36137)){
var statearr_36167_37854 = state_36153__$1;
(statearr_36167_37854[(1)] = (12));

} else {
var statearr_36168_37855 = state_36153__$1;
(statearr_36168_37855[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36154 === (3))){
var inst_36149 = (state_36153[(2)]);
var state_36153__$1 = state_36153;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36153__$1,inst_36149);
} else {
if((state_val_36154 === (12))){
var inst_36109 = (state_36153[(7)]);
var inst_36139 = cljs.core.vec(inst_36109);
var state_36153__$1 = state_36153;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36153__$1,(15),out,inst_36139);
} else {
if((state_val_36154 === (2))){
var state_36153__$1 = state_36153;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36153__$1,(4),ch);
} else {
if((state_val_36154 === (11))){
var inst_36131 = (state_36153[(2)]);
var inst_36132 = (new Array(n));
var inst_36109 = inst_36132;
var inst_36110 = (0);
var state_36153__$1 = (function (){var statearr_36169 = state_36153;
(statearr_36169[(7)] = inst_36109);

(statearr_36169[(8)] = inst_36110);

(statearr_36169[(10)] = inst_36131);

return statearr_36169;
})();
var statearr_36170_37864 = state_36153__$1;
(statearr_36170_37864[(2)] = null);

(statearr_36170_37864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36154 === (9))){
var inst_36109 = (state_36153[(7)]);
var inst_36129 = cljs.core.vec(inst_36109);
var state_36153__$1 = state_36153;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36153__$1,(11),out,inst_36129);
} else {
if((state_val_36154 === (5))){
var inst_36109 = (state_36153[(7)]);
var inst_36124 = (state_36153[(11)]);
var inst_36119 = (state_36153[(9)]);
var inst_36110 = (state_36153[(8)]);
var inst_36123 = (inst_36109[inst_36110] = inst_36119);
var inst_36124__$1 = (inst_36110 + (1));
var inst_36125 = (inst_36124__$1 < n);
var state_36153__$1 = (function (){var statearr_36171 = state_36153;
(statearr_36171[(11)] = inst_36124__$1);

(statearr_36171[(12)] = inst_36123);

return statearr_36171;
})();
if(cljs.core.truth_(inst_36125)){
var statearr_36172_37868 = state_36153__$1;
(statearr_36172_37868[(1)] = (8));

} else {
var statearr_36173_37869 = state_36153__$1;
(statearr_36173_37869[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36154 === (14))){
var inst_36144 = (state_36153[(2)]);
var inst_36145 = cljs.core.async.close_BANG_(out);
var state_36153__$1 = (function (){var statearr_36175 = state_36153;
(statearr_36175[(13)] = inst_36144);

return statearr_36175;
})();
var statearr_36176_37870 = state_36153__$1;
(statearr_36176_37870[(2)] = inst_36145);

(statearr_36176_37870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36154 === (10))){
var inst_36135 = (state_36153[(2)]);
var state_36153__$1 = state_36153;
var statearr_36177_37871 = state_36153__$1;
(statearr_36177_37871[(2)] = inst_36135);

(statearr_36177_37871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36154 === (8))){
var inst_36109 = (state_36153[(7)]);
var inst_36124 = (state_36153[(11)]);
var tmp36174 = inst_36109;
var inst_36109__$1 = tmp36174;
var inst_36110 = inst_36124;
var state_36153__$1 = (function (){var statearr_36178 = state_36153;
(statearr_36178[(7)] = inst_36109__$1);

(statearr_36178[(8)] = inst_36110);

return statearr_36178;
})();
var statearr_36179_37880 = state_36153__$1;
(statearr_36179_37880[(2)] = null);

(statearr_36179_37880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33517__auto__ = null;
var cljs$core$async$state_machine__33517__auto____0 = (function (){
var statearr_36180 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36180[(0)] = cljs$core$async$state_machine__33517__auto__);

(statearr_36180[(1)] = (1));

return statearr_36180;
});
var cljs$core$async$state_machine__33517__auto____1 = (function (state_36153){
while(true){
var ret_value__33518__auto__ = (function (){try{while(true){
var result__33519__auto__ = switch__33516__auto__(state_36153);
if(cljs.core.keyword_identical_QMARK_(result__33519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33519__auto__;
}
break;
}
}catch (e36181){var ex__33520__auto__ = e36181;
var statearr_36182_37890 = state_36153;
(statearr_36182_37890[(2)] = ex__33520__auto__);


if(cljs.core.seq((state_36153[(4)]))){
var statearr_36183_37892 = state_36153;
(statearr_36183_37892[(1)] = cljs.core.first((state_36153[(4)])));

} else {
throw ex__33520__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37893 = state_36153;
state_36153 = G__37893;
continue;
} else {
return ret_value__33518__auto__;
}
break;
}
});
cljs$core$async$state_machine__33517__auto__ = function(state_36153){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33517__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33517__auto____1.call(this,state_36153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33517__auto____0;
cljs$core$async$state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33517__auto____1;
return cljs$core$async$state_machine__33517__auto__;
})()
})();
var state__33715__auto__ = (function (){var statearr_36184 = f__33714__auto__();
(statearr_36184[(6)] = c__33713__auto___37844);

return statearr_36184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33715__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36186 = arguments.length;
switch (G__36186) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33713__auto___37906 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33714__auto__ = (function (){var switch__33516__auto__ = (function (state_36228){
var state_val_36229 = (state_36228[(1)]);
if((state_val_36229 === (7))){
var inst_36224 = (state_36228[(2)]);
var state_36228__$1 = state_36228;
var statearr_36241_37907 = state_36228__$1;
(statearr_36241_37907[(2)] = inst_36224);

(statearr_36241_37907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36229 === (1))){
var inst_36187 = [];
var inst_36188 = inst_36187;
var inst_36189 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36228__$1 = (function (){var statearr_36242 = state_36228;
(statearr_36242[(7)] = inst_36188);

(statearr_36242[(8)] = inst_36189);

return statearr_36242;
})();
var statearr_36243_37911 = state_36228__$1;
(statearr_36243_37911[(2)] = null);

(statearr_36243_37911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36229 === (4))){
var inst_36192 = (state_36228[(9)]);
var inst_36192__$1 = (state_36228[(2)]);
var inst_36193 = (inst_36192__$1 == null);
var inst_36194 = cljs.core.not(inst_36193);
var state_36228__$1 = (function (){var statearr_36244 = state_36228;
(statearr_36244[(9)] = inst_36192__$1);

return statearr_36244;
})();
if(inst_36194){
var statearr_36245_37912 = state_36228__$1;
(statearr_36245_37912[(1)] = (5));

} else {
var statearr_36246_37913 = state_36228__$1;
(statearr_36246_37913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36229 === (15))){
var inst_36218 = (state_36228[(2)]);
var state_36228__$1 = state_36228;
var statearr_36247_37914 = state_36228__$1;
(statearr_36247_37914[(2)] = inst_36218);

(statearr_36247_37914[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36229 === (13))){
var state_36228__$1 = state_36228;
var statearr_36248_37915 = state_36228__$1;
(statearr_36248_37915[(2)] = null);

(statearr_36248_37915[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36229 === (6))){
var inst_36188 = (state_36228[(7)]);
var inst_36213 = inst_36188.length;
var inst_36214 = (inst_36213 > (0));
var state_36228__$1 = state_36228;
if(cljs.core.truth_(inst_36214)){
var statearr_36249_37917 = state_36228__$1;
(statearr_36249_37917[(1)] = (12));

} else {
var statearr_36250_37921 = state_36228__$1;
(statearr_36250_37921[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36229 === (3))){
var inst_36226 = (state_36228[(2)]);
var state_36228__$1 = state_36228;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36228__$1,inst_36226);
} else {
if((state_val_36229 === (12))){
var inst_36188 = (state_36228[(7)]);
var inst_36216 = cljs.core.vec(inst_36188);
var state_36228__$1 = state_36228;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36228__$1,(15),out,inst_36216);
} else {
if((state_val_36229 === (2))){
var state_36228__$1 = state_36228;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36228__$1,(4),ch);
} else {
if((state_val_36229 === (11))){
var inst_36196 = (state_36228[(10)]);
var inst_36192 = (state_36228[(9)]);
var inst_36206 = (state_36228[(2)]);
var inst_36207 = [];
var inst_36208 = inst_36207.push(inst_36192);
var inst_36188 = inst_36207;
var inst_36189 = inst_36196;
var state_36228__$1 = (function (){var statearr_36251 = state_36228;
(statearr_36251[(7)] = inst_36188);

(statearr_36251[(11)] = inst_36206);

(statearr_36251[(12)] = inst_36208);

(statearr_36251[(8)] = inst_36189);

return statearr_36251;
})();
var statearr_36252_37925 = state_36228__$1;
(statearr_36252_37925[(2)] = null);

(statearr_36252_37925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36229 === (9))){
var inst_36188 = (state_36228[(7)]);
var inst_36204 = cljs.core.vec(inst_36188);
var state_36228__$1 = state_36228;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36228__$1,(11),out,inst_36204);
} else {
if((state_val_36229 === (5))){
var inst_36196 = (state_36228[(10)]);
var inst_36192 = (state_36228[(9)]);
var inst_36189 = (state_36228[(8)]);
var inst_36196__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36192) : f.call(null,inst_36192));
var inst_36197 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36196__$1,inst_36189);
var inst_36198 = cljs.core.keyword_identical_QMARK_(inst_36189,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36199 = ((inst_36197) || (inst_36198));
var state_36228__$1 = (function (){var statearr_36253 = state_36228;
(statearr_36253[(10)] = inst_36196__$1);

return statearr_36253;
})();
if(cljs.core.truth_(inst_36199)){
var statearr_36254_37931 = state_36228__$1;
(statearr_36254_37931[(1)] = (8));

} else {
var statearr_36255_37934 = state_36228__$1;
(statearr_36255_37934[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36229 === (14))){
var inst_36221 = (state_36228[(2)]);
var inst_36222 = cljs.core.async.close_BANG_(out);
var state_36228__$1 = (function (){var statearr_36257 = state_36228;
(statearr_36257[(13)] = inst_36221);

return statearr_36257;
})();
var statearr_36258_37935 = state_36228__$1;
(statearr_36258_37935[(2)] = inst_36222);

(statearr_36258_37935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36229 === (10))){
var inst_36211 = (state_36228[(2)]);
var state_36228__$1 = state_36228;
var statearr_36260_37936 = state_36228__$1;
(statearr_36260_37936[(2)] = inst_36211);

(statearr_36260_37936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36229 === (8))){
var inst_36196 = (state_36228[(10)]);
var inst_36188 = (state_36228[(7)]);
var inst_36192 = (state_36228[(9)]);
var inst_36201 = inst_36188.push(inst_36192);
var tmp36256 = inst_36188;
var inst_36188__$1 = tmp36256;
var inst_36189 = inst_36196;
var state_36228__$1 = (function (){var statearr_36262 = state_36228;
(statearr_36262[(7)] = inst_36188__$1);

(statearr_36262[(14)] = inst_36201);

(statearr_36262[(8)] = inst_36189);

return statearr_36262;
})();
var statearr_36263_37938 = state_36228__$1;
(statearr_36263_37938[(2)] = null);

(statearr_36263_37938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33517__auto__ = null;
var cljs$core$async$state_machine__33517__auto____0 = (function (){
var statearr_36266 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36266[(0)] = cljs$core$async$state_machine__33517__auto__);

(statearr_36266[(1)] = (1));

return statearr_36266;
});
var cljs$core$async$state_machine__33517__auto____1 = (function (state_36228){
while(true){
var ret_value__33518__auto__ = (function (){try{while(true){
var result__33519__auto__ = switch__33516__auto__(state_36228);
if(cljs.core.keyword_identical_QMARK_(result__33519__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33519__auto__;
}
break;
}
}catch (e36268){var ex__33520__auto__ = e36268;
var statearr_36270_37941 = state_36228;
(statearr_36270_37941[(2)] = ex__33520__auto__);


if(cljs.core.seq((state_36228[(4)]))){
var statearr_36271_37942 = state_36228;
(statearr_36271_37942[(1)] = cljs.core.first((state_36228[(4)])));

} else {
throw ex__33520__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33518__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37946 = state_36228;
state_36228 = G__37946;
continue;
} else {
return ret_value__33518__auto__;
}
break;
}
});
cljs$core$async$state_machine__33517__auto__ = function(state_36228){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33517__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33517__auto____1.call(this,state_36228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33517__auto____0;
cljs$core$async$state_machine__33517__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33517__auto____1;
return cljs$core$async$state_machine__33517__auto__;
})()
})();
var state__33715__auto__ = (function (){var statearr_36272 = f__33714__auto__();
(statearr_36272[(6)] = c__33713__auto___37906);

return statearr_36272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33715__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
