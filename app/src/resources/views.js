angular.module('resources.views', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('src/components/contactList/phoneBook/view/_phoneBook.html',
    "<div class=\"panel panel-default\">\r" +
    "\n" +
    "    <div class=\"panel-heading\">\r" +
    "\n" +
    "        <h3 class=\"panel-title\">PhoneBook</h3>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"panel-body\">\r" +
    "\n" +
    "        <div class=\"form-group\">\r" +
    "\n" +
    "            <input type=\"text\" class=\"form-control input-sm\" ng-model=\"pb.searchText\" placeholder=\"Search...\"/>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <ul class=\"list-group contactList scrollable\">\r" +
    "\n" +
    "        <li class=\"list-group-item\" ng-repeat=\"item in pb.items | filter:pb.searchText\">\r" +
    "\n" +
    "            <strong>{{item.name}}</strong> <span class=\"label label-default pull-right\" title=\"{{item.group}}\">{{item.group}}</span>\r" +
    "\n" +
    "            <ul class=\"list-unstyled list-inline\">\r" +
    "\n" +
    "                <li ng-if=\"item.email\"><i class=\"glyphicon glyphicon-envelope\"></i> {{item.email}}</li>\r" +
    "\n" +
    "                <li ng-if=\"item.telephone\"><i class=\"glyphicon glyphicon-phone-alt\"></i> {{item.telephone}}</li>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "        </li>\r" +
    "\n" +
    "    </ul>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/components/todo/pending/view/_pending.html',
    "<div class=\"panel panel-default\">\r" +
    "\n" +
    "    <div class=\"panel-heading\">\r" +
    "\n" +
    "        <h3 class=\"panel-title\">Pending tasks</h3>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"panel-body\">\r" +
    "\n" +
    "        <div class=\"form-group\">\r" +
    "\n" +
    "            <input type=\"text\" class=\"form-control input-sm\" placeholder=\"What you have to do?\"\r" +
    "\n" +
    "                   ng-keyup=\"vm.add(vm.item,$event)\"\r" +
    "\n" +
    "                   ng-model=\"vm.item.description\"/>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <ul class=\"list-group todoList scrollable\">\r" +
    "\n" +
    "        <li class=\"list-group-item\" ng-repeat=\"item in vm.getItems()\">\r" +
    "\n" +
    "            <input type=\"checkbox\" ng-click=\"vm.done(item)\"/>\r" +
    "\n" +
    "            <span>{{item.description}}</span>\r" +
    "\n" +
    "        </li>\r" +
    "\n" +
    "    </ul>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/modules/contactList/view/contacts/index.html',
    "<div class=\"page-header\">\r" +
    "\n" +
    "    <h1>Contact List</h1>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"form-group\">\r" +
    "\n" +
    "    <a href=\"javascript:;\" class=\"btn btn-block btn-primary\" ng-show=\"!vm.showForm\" ng-click=\"vm.showForm=true\">New Contact</a>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"panel panel-default\" ng-show=\"vm.showForm\">\r" +
    "\n" +
    "    <div class=\"panel-heading\">\r" +
    "\n" +
    "        <h3 class=\"panel-title\">Add new contact</h3>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"panel-body\">\r" +
    "\n" +
    "        <form ng-submit=\"vm.add(vm.newItem)\">\r" +
    "\n" +
    "        <div class=\"form-group\">\r" +
    "\n" +
    "            <input type=\"text\" class=\"form-control\" ng-model=\"vm.newItem.name\" placeholder=\"Name\" required/>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"form-group\">\r" +
    "\n" +
    "            <input type=\"text\" class=\"form-control\" ng-model=\"vm.newItem.telephone\" placeholder=\"Phone number\"/>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"form-group\">\r" +
    "\n" +
    "            <input type=\"text\" class=\"form-control\" ng-model=\"vm.newItem.email\" placeholder=\"E-mail address\"/>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"form-group\">\r" +
    "\n" +
    "            <select class=\"form-control\" ng-model=\"vm.newItem.group\" ng-options=\"group for group in groups\">\r" +
    "\n" +
    "                <option value=\"\">Group</option>\r" +
    "\n" +
    "            </select>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <hr/>\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-6\"><button type=\"submit\" class=\"btn btn-success btn-block\">Save</button></div>\r" +
    "\n" +
    "            <div class=\"col-md-6\"><a href=\"javascript:;\" ng-click=\"vm.showForm=false\" class=\"btn btn-default btn-block\">Cancel</a></div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        </form>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"panel panel-default\">\r" +
    "\n" +
    "    <div class=\"panel-body\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <div class=\"form-group\">\r" +
    "\n" +
    "            <input type=\"text\" class=\"form-control input-sm\" ng-model=\"vm.searchText\" placeholder=\"Search\"/>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <ul class=\"list-group contactList\">\r" +
    "\n" +
    "            <li class=\"list-group-item\" ng-repeat=\"item in vm.items | filter:vm.searchText\"\r" +
    "\n" +
    "                ng-click=\"vm.toggleSelected(item)\" ng-class=\"{'selected':item.selected}\">\r" +
    "\n" +
    "                <strong>{{item.name}}</strong> <span class=\"label label-default pull-right\" title=\"{{item.group}}\">{{item.group}}</span>\r" +
    "\n" +
    "                <ul class=\"list-unstyled list-inline\">\r" +
    "\n" +
    "                    <li ng-if=\"item.email\"><i class=\"glyphicon glyphicon-envelope\"></i> {{item.email}}</li>\r" +
    "\n" +
    "                    <li ng-if=\"item.telephone\"><i class=\"glyphicon glyphicon-phone-alt\"></i> {{item.telephone}}</li>\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "            </li>\r" +
    "\n" +
    "        </ul>\r" +
    "\n" +
    "        <div>\r" +
    "\n" +
    "            <a href=\"javascript:;\" ng-click=\"vm.deleteSelected(vm.items)\" ng-show=\"vm.getSelected().length > 0\"\r" +
    "\n" +
    "               class=\"btn btn-block btn-danger\">Delete</a>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/modules/dashboard/view/dashboard/index.html',
    "<div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-md-12\">\r" +
    "\n" +
    "        <div class=\"alert alert-info\">\r" +
    "\n" +
    "            <strong>Hey!</strong> I blogged about this project <a href=\"http://dsalvagni.com.br/angularjs-para-aplicacoes-de-larga-escala/\" target=\"_blank\" style=\"color:#fff; text-decoration:underline; \">here [pt-BR]</a>.\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-md-6\">\r" +
    "\n" +
    "        <todo-pending-tasks></todo-pending-tasks>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-md-6\">\r" +
    "\n" +
    "        <contact-list-phone-book></contact-list-phone-book>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('src/modules/todo/view/todo/index.html',
    "<div class=\"page-header\">\r" +
    "\n" +
    "    <h1>Todo List</h1>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"form-group\">\r" +
    "\n" +
    "    <input type=\"text\" class=\"form-control input-lg\" placeholder=\"What you have to do?\" ng-keyup=\"vm.add(vm.item,$event)\"\r" +
    "\n" +
    "           ng-model=\"vm.item.description\"/>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"todoList\">\r" +
    "\n" +
    "    <ul class=\"list-group\">\r" +
    "\n" +
    "        <li class=\"list-group-item\" ng-repeat=\"item in vm.items\">\r" +
    "\n" +
    "            <input type=\"checkbox\" ng-model=\"item.done\"/>\r" +
    "\n" +
    "            <span ng-class=\"{complete: item.done}\">{{item.description}}</span>\r" +
    "\n" +
    "        </li>\r" +
    "\n" +
    "    </ul>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div>\r" +
    "\n" +
    "    <a href=\"javascript:;\" ng-click=\"vm.deleteSelected(vm.items)\" ng-show=\"vm.getSelectedTasks().length > 0\"\r" +
    "\n" +
    "       class=\"btn btn-block btn-danger\">Delete</a>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );

}]);
