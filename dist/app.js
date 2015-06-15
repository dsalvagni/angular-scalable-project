define("src/config/namespace",[],function(){"use strict";return"ModuleLargeApp"}),define("src/modules/core/config/app.config",[],function(){"use strict";var t=function(t){t.otherwise("/dashboard")};return t.$inject=["$urlRouterProvider"],t}),define("src/modules/core/config/app.bootstrap",[],function(){"use strict"}),define("src/components/todo/undone/directives/undone",[],function(){"use strict";var t=function(){var t="src/components/todo/undone/view/";return{restrict:"E",templateUrl:t+"_undone.html",controller:["$scope","todoSvc",function(t,e){var o=[];t.isReady=!1,t.done=function(t){t.done=!0},t.getItems=function(){return o=o.filter(function(t){return!t.done})},t.add=function(e,n){return 13!==n.keyCode?!1:(o.push(e),void(t.item={}))},e.getAllUndone().then(function(e){o=e,t.isReady=!0})["catch"](function(){t.isReady=!0})}]}};return t}),define("src/components/todo/undone/component",["../../../config/namespace","./directives/undone"],function(t,e){"use strict";angular.module(t+".components.todo.undone",[t+".todo"]).directive("todoUndoneTasks",e)}),define("src/components/contactList/phoneBook/directives/phoneBook",[],function(){"use strict";var t=function(){var t="src/components/contactList/phoneBook/view/";return{restrict:"E",templateUrl:t+"_phoneBook.html",controller:["$scope","contactsSvc",function(t,e){t.items=[],t.isReady=!1,e.getAllContacts().then(function(e){t.items=e.items,t.isReady=!0})["catch"](function(){t.isReady=!0})}]}};return t}),define("src/components/contactList/phoneBook/component",["../../../config/namespace","./directives/phoneBook"],function(t,e){"use strict";angular.module(t+".components.contacts.phoneBook",[t+".contacts"]).directive("contactListPhoneBook",e)}),define("src/modules/navigation/provider/PrimaryNavigationProvider",[],function(){"use strict";var t=function(){var t=[];this.$get=function(){return{add:function(e){t.push(e)},getNavigation:function(){return t}}}};return t}),define("src/modules/navigation/config/module.config",[],function(){"use strict";var t=function(){};return t}),define("src/modules/navigation/module",["../../config/namespace","./provider/PrimaryNavigationProvider","./config/module.config"],function(t,e,o){"use strict";angular.module(t+".navigation",[]).provider("PrimaryNavigation",e).config(o)}),define("src/modules/app/controller/appCtrl",[],function(){"use strict";var t=function(t,e){t.primaryNavigation=e.getNavigation()};return t.$inject=["$scope","PrimaryNavigation"],t}),define("src/modules/app/config/module.config",[],function(){var t=function(){};return t}),define("src/modules/app/module",["../../config/namespace","./controller/appCtrl","./config/module.config"],function(t,e,o){"use strict";angular.module(t+".app",["ngRoute",t+".navigation"]).controller("appCtrl",e).config(o)}),define("src/modules/todo/controller/todoCtrl",[],function(){"use strict";var t=function(t,e,o){function n(){o.getAllTasks().then(function(t){e.items=t.items})}e.items=[],e.add=function(t,o){return 13!==o.keyCode?!1:(e.items.push({description:t.description,done:!1,selected:!1}),void(e.item={}))},e.getSelectedTasks=function(){return e.items.filter(function(t){return t.selected})},e.deleteSelected=function(t){return confirm("Are you sure?")?void(e.items=t.filter(function(t){return!t.selected})):!1},n()};return t.$inject=["$rootScope","$scope","todoSvc"],t}),define("src/modules/todo/service/todoSvc",[],function(){"use strict";var t=function(t,e){var o=function(){var o=e.defer();return t.get("./src/modules/todo/data/tasks.json").success(function(t){o.resolve({items:t})}).error(function(t,e){o.reject({data:t,status:e})}),o.promise},n=function(){var t=e.defer(),n=[];return o().then(function(e){n=e.items.filter(function(t){return!t.done}),t.resolve(n)})["catch"](function(e){t.reject(e)}),t.promise};return{getAllTasks:function(){return o()},getAllUndone:function(){return n()}}};return t.$inject=["$http","$q"],t}),define("src/modules/todo/config/module.config",[],function(){"use strict";var t=function(t){var e="src/modules/todo/view/";t.state("todo",{url:"/todo",controller:"todoCtrl",templateUrl:e+"todo/index.html"})};return t.$inject=["$stateProvider"],t}),define("src/modules/todo/module",["../../config/namespace","./controller/todoCtrl","./service/todoSvc","./config/module.config"],function(t,e,o,n){"use strict";angular.module(t+".todo",["ui.router",t+".navigation"]).controller("todoCtrl",e).service("todoSvc",o).config(n).run(["PrimaryNavigation",function(t){t.add({title:"Todo List",stateName:"todo",order:1})}])}),define("src/modules/dashboard/config/module.config",[],function(){"use strict";var t=function(t){var e="src/modules/dashboard/view/";t.state("dashboard",{url:"/dashboard",templateUrl:e+"dashboard/index.html"})};return t.$inject=["$stateProvider"],t}),define("src/modules/dashboard/module",["../../config/namespace","./config/module.config"],function(t,e){"use strict";angular.module(t+".dashboard",["ui.router",t+".navigation"]).config(e).run(["PrimaryNavigation",function(t){t.add({title:"Dashboard",stateName:"dashboard",order:0})}])}),define("src/modules/contactList/controller/contactsCtrl",[],function(){"use strict";var t=function(t,e,o){function n(){o.getAllContacts().then(function(t){e.items=t.items})}e.items=[],e.groups=["Friends","Family","Others"],e.toggleSelected=function(t){t.selected=!t.selected},e.add=function(t){e.items.push(t),delete e.newItem,e.showForm=!1},e.getSelected=function(){return e.items.filter(function(t){return t.selected})},e.deleteSelected=function(t){return confirm("Are you sure?")?void(e.items=t.filter(function(t){return!t.selected})):!1},n()};return t.$inject=["$rootScope","$scope","contactsSvc"],t}),define("src/modules/contactList/service/contactsSvc",[],function(){"use strict";var t=function(t,e){var o=function(){var o=e.defer();return t.get("./src/modules/contactList/data/contacts.json").success(function(t){o.resolve({items:t})}).error(function(t,e){o.reject({data:t,status:e})}),o.promise};return{getAllContacts:function(){return o()}}};return t.$inject=["$http","$q"],t}),define("src/modules/contactList/config/module.config",[],function(){"use strict";var t=function(t){var e="src/modules/contactList/view/";t.state("contacts",{url:"/contacts",controller:"contactsCtrl",templateUrl:e+"contacts/index.html"})};return t.$inject=["$stateProvider"],t}),function(){"use strict";define("src/modules/contactList/module",["../../config/namespace","./controller/contactsCtrl","./service/contactsSvc","./config/module.config"],function(t,e,o,n){angular.module(t+".contacts",["ui.router",t+".navigation"]).controller("contactsCtrl",e).service("contactsSvc",o).config(n).run(["PrimaryNavigation",function(t){t.add({title:"Contacts",stateName:"contacts",order:1})}])})}(),define("app",["src/config/namespace","src/modules/core/config/app.config","src/modules/core/config/app.bootstrap","src/components/todo/undone/component","src/components/contactList/phoneBook/component","src/modules/navigation/module","src/modules/app/module","src/modules/todo/module","src/modules/dashboard/module","src/modules/contactList/module"],function(t,e,o){"use strict";return angular.module(t,["ngRoute","ui.router",t+".app",t+".todo",t+".dashboard",t+".contacts",t+".components.todo.undone",t+".components.contacts.phoneBook"]).config(e).run(o),{name:t}});