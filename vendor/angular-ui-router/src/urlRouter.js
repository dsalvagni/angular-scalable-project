function $UrlRouterProvider(r,n){function e(r){var n=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(r.source);return null!=n?n[1].replace(/\\(.)/g,"$1"):""}function t(r,n){return r.replace(/\$(\$|\d{1,2})/,function(r,e){return n["$"===e?0:Number(e)]})}function i(r,n,e){if(!e)return!1;var t=r.invoke(n,n,{$match:e});return isDefined(t)?t:!0}function u(n,e,t,i){function u(r,n,e){return"/"===v?r:n?v.slice(0,-1)+r:e?v.slice(1)+r:r}function f(r){function e(r){var e=r(t,n);return e?(isString(e)&&n.replace().url(e),!0):!1}if(!r||!r.defaultPrevented){h&&n.url()===h;h=void 0;var i,u=c.length;for(i=0;u>i;i++)if(e(c[i]))return;a&&e(a)}}function s(){return o=o||e.$on("$locationChangeSuccess",f)}var h,v=i.baseHref(),d=n.url();return l||s(),{sync:function(){f()},listen:function(){return s()},update:function(r){return r?void(d=n.url()):void(n.url()!==d&&(n.url(d),n.replace()))},push:function(r,e,t){var i=r.format(e||{});null!==i&&e&&e["#"]&&(i+="#"+e["#"]),n.url(i),h=t&&t.$$avoidResync?n.url():void 0,t&&t.replace&&n.replace()},href:function(e,t,i){if(!e.validates(t))return null;var o=r.html5Mode();angular.isObject(o)&&(o=o.enabled);var c=e.format(t);if(i=i||{},o||null===c||(c="#"+r.hashPrefix()+c),null!==c&&t&&t["#"]&&(c+="#"+t["#"]),c=u(c,o,i.absolute),!i.absolute||!c)return c;var a=!o&&c?"/":"",l=n.port();return l=80===l||443===l?"":":"+l,[n.protocol(),"://",n.host(),l,a,c].join("")}}}var o,c=[],a=null,l=!1;this.rule=function(r){if(!isFunction(r))throw new Error("'rule' must be a function");return c.push(r),this},this.otherwise=function(r){if(isString(r)){var n=r;r=function(){return n}}else if(!isFunction(r))throw new Error("'rule' must be a function");return a=r,this},this.when=function(r,u){var o,c=isString(u);if(isString(r)&&(r=n.compile(r)),!c&&!isFunction(u)&&!isArray(u))throw new Error("invalid 'handler' in when()");var a={matcher:function(r,e){return c&&(o=n.compile(e),e=["$match",function(r){return o.format(r)}]),extend(function(n,t){return i(n,e,r.exec(t.path(),t.search()))},{prefix:isString(r.prefix)?r.prefix:""})},regex:function(r,n){if(r.global||r.sticky)throw new Error("when() RegExp must not be global or sticky");return c&&(o=n,n=["$match",function(r){return t(o,r)}]),extend(function(e,t){return i(e,n,r.exec(t.path()))},{prefix:e(r)})}},l={matcher:n.isMatcher(r),regex:r instanceof RegExp};for(var f in l)if(l[f])return this.rule(a[f](r,u));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(r){void 0===r&&(r=!0),l=r},this.$get=u,u.$inject=["$location","$rootScope","$injector","$browser"]}$UrlRouterProvider.$inject=["$locationProvider","$urlMatcherFactoryProvider"],angular.module("ui.router.router").provider("$urlRouter",$UrlRouterProvider);