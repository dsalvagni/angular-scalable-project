function $ViewDirective(e,t,n,r){function i(){return t.has?function(e){return t.has(e)?t.get(e):null}:function(e){try{return t.get(e)}catch(n){return null}}}function l(e,t){var n=function(){return{enter:function(e,t,n){t.after(e),n()},leave:function(e,t){e.remove(),t()}}};if(u)return{enter:function(e,t,n){var r=u.enter(e,null,t,n);r&&r.then&&r.then(n)},leave:function(e,t){var n=u.leave(e,t);n&&n.then&&n.then(t)}};if(a){var r=a&&a(t,e);return{enter:function(e,t,n){r.enter(e,null,t),n()},leave:function(e,t){r.leave(e),t()}}}return n()}var o=i(),a=o("$animator"),u=o("$animate"),c={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(t,i,o){return function(t,i,a){function u(){$&&($.remove(),$=null),f&&(f.$destroy(),f=null),v&&(w.leave(v,function(){$=null}),$=v,v=null)}function c(l){var c,$=getUiViewName(t,a,i,r),V=$&&e.$current&&e.$current.locals[$];if(l||V!==m){c=t.$new(),m=e.$current.locals[$];var g=o(c,function(e){w.enter(e,i,function(){f&&f.$emit("$viewContentAnimationEnded"),(angular.isDefined(d)&&!d||t.$eval(d))&&n(e)}),u()});v=g,f=c,f.$emit("$viewContentLoaded"),f.$eval(s)}}var $,v,f,m,s=a.onload||"",d=a.autoscroll,w=l(a,t);t.$on("$stateChangeSuccess",function(){c(!1)}),t.$on("$viewContentLoading",function(){c(!1)}),c(!0)}}};return c}function $ViewDirectiveFill(e,t,n,r){return{restrict:"ECA",priority:-400,compile:function(i){var l=i.html();return function(i,o,a){var u=n.$current,c=getUiViewName(i,a,o,r),$=u&&u.locals[c];if($){o.data("$uiView",{name:c,state:$.$$state}),o.html($.$template?$.$template:l);var v=e(o.contents());if($.$$controller){$.$scope=i,$.$element=o;var f=t($.$$controller,$);$.$$controllerAs&&(i[$.$$controllerAs]=f),o.data("$ngControllerController",f),o.children().data("$ngControllerController",f)}v(i)}}}}}function getUiViewName(e,t,n,r){var i=r(t.uiView||t.name||"")(e),l=n.inheritedData("$uiView");return i.indexOf("@")>=0?i:i+"@"+(l?l.state.name:"")}$ViewDirective.$inject=["$state","$injector","$uiViewScroll","$interpolate"],$ViewDirectiveFill.$inject=["$compile","$controller","$state","$interpolate"],angular.module("ui.router.state").directive("uiView",$ViewDirective),angular.module("ui.router.state").directive("uiView",$ViewDirectiveFill);