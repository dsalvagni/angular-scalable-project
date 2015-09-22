!function(e,t,n){function r(e){var t;if(t=e.match(a)){var n=new Date(0),r=0,i=0;return t[9]&&(r=o(t[9]+t[10]),i=o(t[9]+t[11])),n.setUTCFullYear(o(t[1]),o(t[2])-1,o(t[3])),n.setUTCHours(o(t[4]||0)-r,o(t[5]||0)-i,o(t[6]||0),o(t[7]||0)),n}return e}function o(e){return parseInt(e,10)}function i(e,t,n){var r="";for(0>e&&(r="-",e=-e),e=""+e;e.length<t;)e="0"+e;return n&&(e=e.substr(e.length-t)),r+e}function s(e,r,o,i){function s(e,n,r,o){return t.isFunction(e)?e:function(){return t.isNumber(e)?[e,n,r,o]:[200,e,n,r]}}function a(e,s,u,a,f,p,m){function w(e){return t.isString(e)||t.isFunction(e)||e instanceof RegExp?e:t.toJson(e)}function v(t){function o(){var n=t.response(e,s,u,f);E.$$respHeaders=n[2],a($(n[0]),$(n[1]),E.getAllResponseHeaders(),$(n[3]||""))}function c(){for(var e=0,t=h.length;t>e;e++)if(h[e]===o){h.splice(e,1),a(-1,n,"");break}}return!i&&p&&(p.then?p.then(c):r(c,p)),o}var E=new c,D=d[0],k=!1;if(D&&D.match(e,s)){if(!D.matchData(u))throw new Error("Expected "+D+" with different data\nEXPECTED: "+w(D.data)+"\nGOT:      "+u);if(!D.matchHeaders(f))throw new Error("Expected "+D+" with different headers\nEXPECTED: "+w(D.headers)+"\nGOT:      "+w(f));if(d.shift(),D.response)return void h.push(v(D));k=!0}for(var T,y=-1;T=l[++y];)if(T.match(e,s,u,f||{})){if(T.response)(i?i.defer:g)(v(T));else{if(!T.passThrough)throw new Error("No response defined !");o(e,s,u,a,f,p,m)}return}throw k?new Error("No response defined !"):new Error("Unexpected request: "+e+" "+s+"\n"+(D?"Expected "+D:"No more request expected"))}function f(e){t.forEach(["GET","DELETE","JSONP","HEAD"],function(t){a[e+t]=function(r,o){return a[e](t,r,n,o)}}),t.forEach(["PUT","POST","PATCH"],function(t){a[e+t]=function(n,r,o){return a[e](t,n,r,o)}})}var l=[],d=[],h=[],g=t.bind(h,h.push),$=t.copy;return a.when=function(e,t,r,o){var c=new u(e,t,r,o),a={respond:function(e,t,r,o){return c.passThrough=n,c.response=s(e,t,r,o),a}};return i&&(a.passThrough=function(){return c.response=n,c.passThrough=!0,a}),l.push(c),a},f("when"),a.expect=function(e,t,n,r){var o=new u(e,t,n,r),i={respond:function(e,t,n,r){return o.response=s(e,t,n,r),i}};return d.push(o),i},f("expect"),a.flush=function(n,r){if(r!==!1&&e.$digest(),!h.length)throw new Error("No pending request to flush !");if(t.isDefined(n)&&null!==n)for(;n--;){if(!h.length)throw new Error("No more pending request to flush !");h.shift()()}else for(;h.length;)h.shift()();a.verifyNoOutstandingExpectation(r)},a.verifyNoOutstandingExpectation=function(t){if(t!==!1&&e.$digest(),d.length)throw new Error("Unsatisfied requests: "+d.join(", "))},a.verifyNoOutstandingRequest=function(){if(h.length)throw new Error("Unflushed requests: "+h.length)},a.resetExpectations=function(){d.length=0,h.length=0},a}function u(e,n,r,o){this.data=r,this.headers=o,this.match=function(n,r,o,i){return e!=n?!1:this.matchUrl(r)?t.isDefined(o)&&!this.matchData(o)?!1:t.isDefined(i)&&!this.matchHeaders(i)?!1:!0:!1},this.matchUrl=function(e){return n?t.isFunction(n.test)?n.test(e):t.isFunction(n)?n(e):n==e:!0},this.matchHeaders=function(e){return t.isUndefined(o)?!0:t.isFunction(o)?o(e):t.equals(o,e)},this.matchData=function(e){return t.isUndefined(r)?!0:r&&t.isFunction(r.test)?r.test(e):r&&t.isFunction(r)?r(e):r&&!t.isString(r)?t.equals(t.fromJson(t.toJson(r)),t.fromJson(e)):r==e},this.toString=function(){return e+" "+n}}function c(){c.$$lastInstance=this,this.open=function(e,t,n){this.$$method=e,this.$$url=t,this.$$async=n,this.$$reqHeaders={},this.$$respHeaders={}},this.send=function(e){this.$$data=e},this.setRequestHeader=function(e,t){this.$$reqHeaders[e]=t},this.getResponseHeader=function(e){var r=this.$$respHeaders[e];return r?r:(e=t.lowercase(e),(r=this.$$respHeaders[e])?r:(r=n,t.forEach(this.$$respHeaders,function(n,o){r||t.lowercase(o)!=e||(r=n)}),r))},this.getAllResponseHeaders=function(){var e=[];return t.forEach(this.$$respHeaders,function(t,n){e.push(n+": "+t)}),e.join("\n")},this.abort=t.noop}t.mock={},t.mock.$BrowserProvider=function(){this.$get=function(){return new t.mock.$Browser}},t.mock.$Browser=function(){var e=this;this.isMock=!0,e.$$url="http://server/",e.$$lastUrl=e.$$url,e.pollFns=[],e.$$completeOutstandingRequest=t.noop,e.$$incOutstandingRequestCount=t.noop,e.onUrlChange=function(t){return e.pollFns.push(function(){(e.$$lastUrl!==e.$$url||e.$$state!==e.$$lastState)&&(e.$$lastUrl=e.$$url,e.$$lastState=e.$$state,t(e.$$url,e.$$state))}),t},e.$$applicationDestroyed=t.noop,e.$$checkUrlChange=t.noop,e.deferredFns=[],e.deferredNextId=0,e.defer=function(t,n){return n=n||0,e.deferredFns.push({time:e.defer.now+n,fn:t,id:e.deferredNextId}),e.deferredFns.sort(function(e,t){return e.time-t.time}),e.deferredNextId++},e.defer.now=0,e.defer.cancel=function(n){var r;return t.forEach(e.deferredFns,function(e,t){e.id===n&&(r=t)}),t.isDefined(r)?(e.deferredFns.splice(r,1),!0):!1},e.defer.flush=function(n){if(t.isDefined(n))e.defer.now+=n;else{if(!e.deferredFns.length)throw new Error("No deferred tasks to be flushed");e.defer.now=e.deferredFns[e.deferredFns.length-1].time}for(;e.deferredFns.length&&e.deferredFns[0].time<=e.defer.now;)e.deferredFns.shift().fn()},e.$$baseHref="/",e.baseHref=function(){return this.$$baseHref}},t.mock.$Browser.prototype={poll:function(){t.forEach(this.pollFns,function(e){e()})},url:function(e,n,r){return t.isUndefined(r)&&(r=null),e?(this.$$url=e,this.$$state=t.copy(r),this):this.$$url},state:function(){return this.$$state},notifyWhenNoOutstandingRequests:function(e){e()}},t.mock.$ExceptionHandlerProvider=function(){var e;this.mode=function(t){switch(t){case"log":case"rethrow":var n=[];e=function(e){if(1==arguments.length?n.push(e):n.push([].slice.call(arguments,0)),"rethrow"===t)throw e},e.errors=n;break;default:throw new Error("Unknown mode '"+t+"', only 'log'/'rethrow' modes are allowed!")}},this.$get=function(){return e},this.mode("rethrow")},t.mock.$LogProvider=function(){function e(e,t,n){return e.concat(Array.prototype.slice.call(t,n))}var n=!0;this.debugEnabled=function(e){return t.isDefined(e)?(n=e,this):n},this.$get=function(){var r={log:function(){r.log.logs.push(e([],arguments,0))},warn:function(){r.warn.logs.push(e([],arguments,0))},info:function(){r.info.logs.push(e([],arguments,0))},error:function(){r.error.logs.push(e([],arguments,0))},debug:function(){n&&r.debug.logs.push(e([],arguments,0))}};return r.reset=function(){r.log.logs=[],r.info.logs=[],r.warn.logs=[],r.error.logs=[],r.debug.logs=[]},r.assertEmpty=function(){var e=[];if(t.forEach(["error","warn","info","log","debug"],function(n){t.forEach(r[n].logs,function(r){t.forEach(r,function(t){e.push("MOCK $log ("+n+"): "+String(t)+"\n"+(t.stack||""))})})}),e.length)throw e.unshift("Expected $log to be empty! Either a message was logged unexpectedly, or an expected log message was not checked and removed:"),e.push(""),new Error(e.join("\n---------\n"))},r.reset(),r}},t.mock.$IntervalProvider=function(){this.$get=["$browser","$rootScope","$q","$$q",function(e,n,r,o){var i=[],s=0,u=0,c=function(c,a,f,l){function d(){if(m.notify($++),f>0&&$>=f){var r;m.resolve($),t.forEach(i,function(e,t){e.id===w.$$intervalId&&(r=t)}),t.isDefined(r)&&i.splice(r,1)}p?e.defer.flush():n.$apply()}var h=arguments.length>4,g=h?Array.prototype.slice.call(arguments,4):[],$=0,p=t.isDefined(l)&&!l,m=(p?o:r).defer(),w=m.promise;return f=t.isDefined(f)?f:0,w.then(null,null,h?function(){c.apply(null,g)}:c),w.$$intervalId=s,i.push({nextTime:u+a,delay:a,fn:d,id:s,deferred:m}),i.sort(function(e,t){return e.nextTime-t.nextTime}),s++,w};return c.cancel=function(e){if(!e)return!1;var n;return t.forEach(i,function(t,r){t.id===e.$$intervalId&&(n=r)}),t.isDefined(n)?(i[n].deferred.reject("canceled"),i.splice(n,1),!0):!1},c.flush=function(e){for(u+=e;i.length&&i[0].nextTime<=u;){var t=i[0];t.fn(),t.nextTime+=t.delay,i.sort(function(e,t){return e.nextTime-t.nextTime})}return e},c}]};var a=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?:\:?(\d\d)(?:\:?(\d\d)(?:\.(\d{3}))?)?)?(Z|([+-])(\d\d):?(\d\d)))?$/;if(t.mock.TzDate=function(e,n){var o=new Date(0);if(t.isString(n)){var s=n;if(o.origDate=r(n),n=o.origDate.getTime(),isNaN(n))throw{name:"Illegal Argument",message:"Arg '"+s+"' passed into TzDate constructor is not a valid date string"}}else o.origDate=new Date(n);var u=new Date(n).getTimezoneOffset();o.offsetDiff=60*u*1e3-1e3*e*60*60,o.date=new Date(n+o.offsetDiff),o.getTime=function(){return o.date.getTime()-o.offsetDiff},o.toLocaleDateString=function(){return o.date.toLocaleDateString()},o.getFullYear=function(){return o.date.getFullYear()},o.getMonth=function(){return o.date.getMonth()},o.getDate=function(){return o.date.getDate()},o.getHours=function(){return o.date.getHours()},o.getMinutes=function(){return o.date.getMinutes()},o.getSeconds=function(){return o.date.getSeconds()},o.getMilliseconds=function(){return o.date.getMilliseconds()},o.getTimezoneOffset=function(){return 60*e},o.getUTCFullYear=function(){return o.origDate.getUTCFullYear()},o.getUTCMonth=function(){return o.origDate.getUTCMonth()},o.getUTCDate=function(){return o.origDate.getUTCDate()},o.getUTCHours=function(){return o.origDate.getUTCHours()},o.getUTCMinutes=function(){return o.origDate.getUTCMinutes()},o.getUTCSeconds=function(){return o.origDate.getUTCSeconds()},o.getUTCMilliseconds=function(){return o.origDate.getUTCMilliseconds()},o.getDay=function(){return o.date.getDay()},o.toISOString&&(o.toISOString=function(){return i(o.origDate.getUTCFullYear(),4)+"-"+i(o.origDate.getUTCMonth()+1,2)+"-"+i(o.origDate.getUTCDate(),2)+"T"+i(o.origDate.getUTCHours(),2)+":"+i(o.origDate.getUTCMinutes(),2)+":"+i(o.origDate.getUTCSeconds(),2)+"."+i(o.origDate.getUTCMilliseconds(),3)+"Z"});var c=["getUTCDay","getYear","setDate","setFullYear","setHours","setMilliseconds","setMinutes","setMonth","setSeconds","setTime","setUTCDate","setUTCFullYear","setUTCHours","setUTCMilliseconds","setUTCMinutes","setUTCMonth","setUTCSeconds","setYear","toDateString","toGMTString","toJSON","toLocaleFormat","toLocaleString","toLocaleTimeString","toSource","toString","toTimeString","toUTCString","valueOf"];return t.forEach(c,function(e){o[e]=function(){throw new Error("Method '"+e+"' is not implemented in the TzDate mock")}}),o},t.mock.TzDate.prototype=Date.prototype,t.mock.animate=t.module("ngAnimateMock",["ng"]).config(["$provide",function(e){e.factory("$$forceReflow",function(){function e(){e.totalReflows++}return e.totalReflows=0,e}),e.factory("$$animateAsyncRun",function(){var e=[],t=function(){return function(t){e.push(t)}};return t.flush=function(){if(0===e.length)return!1;for(var t=0;t<e.length;t++)e[t]();return e=[],!0},t}),e.decorator("$animate",["$delegate","$timeout","$browser","$$rAF","$$forceReflow","$$animateAsyncRun","$rootScope",function(e,n,r,o,i,s,u){var c={queue:[],cancel:e.cancel,on:e.on,off:e.off,pin:e.pin,get reflows(){return i.totalReflows},enabled:e.enabled,flush:function(){u.$digest();var e,t=!1;do e=!1,o.queue.length&&(o.flush(),e=t=!0),s.flush()&&(e=t=!0);while(e);if(!t)throw new Error("No pending animations ready to be closed or flushed");u.$digest()}};return t.forEach(["animate","enter","leave","move","addClass","removeClass","setClass"],function(t){c[t]=function(){return c.queue.push({event:t,element:arguments[0],options:arguments[arguments.length-1],args:arguments}),e[t].apply(e,arguments)}}),c}])}]),t.mock.dump=function(e){function n(e){var o;return t.isElement(e)?(e=t.element(e),o=t.element("<div></div>"),t.forEach(e,function(e){o.append(t.element(e).clone())}),o=o.html()):t.isArray(e)?(o=[],t.forEach(e,function(e){o.push(n(e))}),o="[ "+o.join(", ")+" ]"):o=t.isObject(e)?t.isFunction(e.$eval)&&t.isFunction(e.$apply)?r(e):e instanceof Error?e.stack||""+e.name+": "+e.message:t.toJson(e,!0):String(e),o}function r(e,n){n=n||"  ";var o=[n+"Scope("+e.$id+"): {"];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&!i.match(/^(\$|this)/)&&o.push("  "+i+": "+t.toJson(e[i]));for(var s=e.$$childHead;s;)o.push(r(s,n+"  ")),s=s.$$nextSibling;return o.push("}"),o.join("\n"+n)}return n(e)},t.mock.$HttpBackendProvider=function(){this.$get=["$rootScope","$timeout",s]},t.mock.$TimeoutDecorator=["$delegate","$browser",function(e,n){function r(e){var n=[];return t.forEach(e,function(e){n.push("{id: "+e.id+", time: "+e.time+"}")}),n.join(", ")}return e.flush=function(e){n.defer.flush(e)},e.verifyNoPendingTasks=function(){if(n.deferredFns.length)throw new Error("Deferred tasks to flush ("+n.deferredFns.length+"): "+r(n.deferredFns))},e}],t.mock.$RAFDecorator=["$delegate",function(e){var t=function(e){var n=t.queue.length;return t.queue.push(e),function(){t.queue.splice(n,1)}};return t.queue=[],t.supported=e.supported,t.flush=function(){if(0===t.queue.length)throw new Error("No rAF callbacks present");for(var e=t.queue.length,n=0;e>n;n++)t.queue[n]();t.queue=t.queue.slice(n)},t}],t.mock.$RootElementProvider=function(){this.$get=function(){return t.element("<div ng-app></div>")}},t.mock.$ControllerDecorator=["$delegate",function(e){return function(n,r,o,i){if(o&&"object"==typeof o){var s=e(n,r,!0,i);return t.extend(s.instance,o),s()}return e(n,r,o,i)}}],t.module("ngMock",["ng"]).provider({$browser:t.mock.$BrowserProvider,$exceptionHandler:t.mock.$ExceptionHandlerProvider,$log:t.mock.$LogProvider,$interval:t.mock.$IntervalProvider,$httpBackend:t.mock.$HttpBackendProvider,$rootElement:t.mock.$RootElementProvider}).config(["$provide",function(e){e.decorator("$timeout",t.mock.$TimeoutDecorator),e.decorator("$$rAF",t.mock.$RAFDecorator),e.decorator("$rootScope",t.mock.$RootScopeDecorator),e.decorator("$controller",t.mock.$ControllerDecorator)}]),t.module("ngMockE2E",["ng"]).config(["$provide",function(e){e.decorator("$httpBackend",t.mock.e2e.$httpBackendDecorator)}]),t.mock.e2e={},t.mock.e2e.$httpBackendDecorator=["$rootScope","$timeout","$delegate","$browser",s],t.mock.$RootScopeDecorator=["$delegate",function(e){function t(){for(var e,t=0,n=[this.$$childHead];n.length;)for(e=n.shift();e;)t+=1,n.push(e.$$childHead),e=e.$$nextSibling;return t}function n(){for(var e,t=this.$$watchers?this.$$watchers.length:0,n=[this.$$childHead];n.length;)for(e=n.shift();e;)t+=e.$$watchers?e.$$watchers.length:0,n.push(e.$$childHead),e=e.$$nextSibling;return t}var r=Object.getPrototypeOf(e);return r.$countChildScopes=t,r.$countWatchers=n,e}],e.jasmine||e.mocha){var f=null,l=[],d=function(){return!!f};t.mock.$$annotate=t.injector.$$annotate,t.injector.$$annotate=function(e){return"function"!=typeof e||e.$inject||l.push(e),t.mock.$$annotate.apply(this,arguments)},(e.beforeEach||e.setup)(function(){l=[],f=this}),(e.afterEach||e.teardown)(function(){var e=f.$injector;l.forEach(function(e){delete e.$inject}),t.forEach(f.$modules,function(e){e&&e.$$hashKey&&(e.$$hashKey=n)}),f.$injector=null,f.$modules=null,f=null,e&&e.get("$rootElement").off(),t.forEach(t.element.fragments,function(e,n){delete t.element.fragments[n]}),c.$$lastInstance=null,t.forEach(t.callbacks,function(e,n){delete t.callbacks[n]}),t.callbacks.counter=0}),e.module=t.mock.module=function(){function e(){if(f.$injector)throw new Error("Injector already created, can not register a module!");var e=f.$modules||(f.$modules=[]);t.forEach(n,function(n){t.isObject(n)&&!t.isArray(n)?e.push(function(e){t.forEach(n,function(t,n){e.value(n,t)})}):e.push(n)})}var n=Array.prototype.slice.call(arguments,0);return d()?e():e};var h=function(e,t){this.message=e.message,this.name=e.name,e.line&&(this.line=e.line),e.sourceId&&(this.sourceId=e.sourceId),e.stack&&t&&(this.stack=e.stack+"\n"+t.stack),e.stackArray&&(this.stackArray=e.stackArray)};h.prototype.toString=Error.prototype.toString,e.inject=t.mock.inject=function(){function e(){var e=f.$modules||[],o=!!f.$injectorStrict;e.unshift("ngMock"),e.unshift("ng");var i=f.$injector;i||(o&&t.forEach(e,function(e){"function"==typeof e&&t.injector.$$annotate(e)}),i=f.$injector=t.injector(e,o),f.$injectorStrict=o);for(var s=0,u=n.length;u>s;s++){f.$injectorStrict&&i.annotate(n[s]);try{i.invoke(n[s]||t.noop,this)}catch(c){if(c.stack&&r)throw new h(c,r);throw c}finally{r=null}}}var n=Array.prototype.slice.call(arguments,0),r=new Error("Declaration Location");return d()?e.call(f):e},t.mock.inject.strictDi=function(e){function t(){if(e!==f.$injectorStrict){if(f.$injector)throw new Error("Injector already created, can not modify strict annotations");f.$injectorStrict=e}}return e=arguments.length?!!e:!0,d()?t():t}}}(window,window.angular);