angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("components/UI/loading.html","<div class=\"text-center\">\n    <i class=\"fa fa-spinner fa-3x fa-spin\"></i>\n</div>");
$templateCache.put("components/UI/side-nav.html","<aside class=\"bg-dark aside-sm\" id=\"nav\">\n    <section class=\"vbox\">\n        <header class=\"dker nav-bar\">\n            <a class=\"btn btn-link visible-xs\" data-toggle=\"class:nav-off-screen\" data-target=\"#nav\">\n                <i class=\"fa fa-bars\"></i>\n            </a>\n            <a href=\"#\" class=\"nav-brand\" data-toggle=\"fullscreen\">Stakes</a>\n        </header>\n        <section>\n            <nav class=\"nav-primary hidden-xs\">\n                <ul class=\"nav\">\n                    <li ng-repeat=\"item in navItems\" ng-class=\"{\'active\':isActive(\'/{{item.route}}\'), \'dropdown-submenu\':item.subitems}\">\n\n                        <a href=\"#{{item.route}}\" title=\"{{item.title}}\" ng-if=\"!item.subitems\">\n                            <i class=\"fa fa-{{item.icon}}\" ng-if=\"item.icon\"></i>\n                            {{item.title}}\n                        </a>\n                        <a href class=\"dropdown-toggle\" ng-if=\"item.subitems\" data-toggle=\"dropdown\">\n                            <i class=\"fa fa-{{item.icon}}\" ng-if=\"item.icon\"></i>\n                            <span>{{item.title}}</span>\n                        </a>\n                        <ul class=\"dropdown-menu\" ng-if=\"item.subitems\">\n                            <li ng-repeat=\"item in item.subitems\">\n                                <a href=\"#{{$parent.item.route + item.route}}\">{{item.title}}</a>\n                            </li>\n                        </ul>\n                    </li>\n                </ul>\n            </nav>\n        </section>\n    </section>\n</aside>");
$templateCache.put("components/Account/templates/account-overview.html","<section>\n    <h1>Account Overview</h1>\n\n    <table>\n        <tr>\n            <td><b>ID</b>\n            </td>\n            <td>{{account.id}}</td>\n        </tr>\n        <tr>\n            <td><b>Balance</b>\n            </td>\n            <td>{{account.balance}}</td>\n        </tr>\n    </table>\n</section>");
$templateCache.put("components/Dashboard/templates/dashboard.html","<header class=\"header bg-light dker\">\n    <p>Dashboard</p>\n</header>\n<section class=\"scrollable wrapper\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <section class=\"panel\">\n                <section class=\"panel-body\">\n                    Here is all of the cool dashboard stuff\n                </section>\n            </section>\n        </div>\n    </div>\n</section>");
$templateCache.put("components/User/templates/user-create.html","<header class=\"header bg-light dker\">\n    <p>New User</p>\n</header>\n<section class=\"scrollable wrapper\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <section class=\"panel\">\n                <header class=\"panel-heading font-bold\">New User</header>\n                <div class=\"panel-body\">\n                    <user-form submit-text=\"Create\" user=\"user\" submit=\"createUser()\"></user-form>\n                </div>\n            </section>\n        </div>\n    </div>\n</section>");
$templateCache.put("components/User/templates/user-edit.html","<header class=\"header bg-light dker\">\n    <p>Edit {{user.username}}</p>\n</header>\n<section class=\"scrollable wrapper\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <section class=\"panel\">\n                <header class=\"panel-heading font-bold\">Edit {{user.username}}</header>\n                <div class=\"panel-body\">\n                    <user-form submit-text=\"Save\" user=\"user\" submit=\"save()\"></user-form>\n                </div>\n            </section>\n        </div>\n    </div>\n</section>");
$templateCache.put("components/User/templates/user-form.html","<form role=\"form\" ng-submit=\"submit()\">\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" class=\"form-control\" ng-model=\"user.username\" placeholder=\"Username\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"form-control\" ng-model=\"user.password\" placeholder=\"Password\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Confirm Password</label>\n        <input type=\"password\" class=\"form-control\" ng-model=\"user.password_confirmation\" placeholder=\"Confirm Password\">\n    </div>\n    <div class=\"checkbox\">\n        <label>\n            <input type=\"checkbox\" ng-model=\"user.isAdmin\" />Admin\n        </label>\n    </div>\n    <button type=\"submit\" class=\"btn btn-sm btn-default\">{{submitText}}</button>\n</form>");
$templateCache.put("components/User/templates/user.html","<header class=\"header bg-light dker\">\n    <p>User &ndash; {{user.username}}</p>\n</header>\n<section class=\"scrollable wrapper\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <section class=\"panel\">\n                <section class=\"panel-body\">\n                    <h1>{{user.username}}\n                        <small>\n                            <small>\n                                <span class=\"label label-success\" ng-if=\"user.isAdmin\">Admin</span>\n                            </small>\n                        </small>\n                    </h1>\n\n                    <section ng-if=\"user.account\">\n                        <account-overview account=\"user.account\"></account-overview>\n                    </section>\n                    <section ng-if=\"!user.account\">\n                        <div>No account found... Would you like to create one?</div>\n                    </section>\n                </section>\n            </section>\n        </div>\n    </div>\n</section>");
$templateCache.put("components/User/templates/users.html","<header class=\"header bg-light dker\">\n    <p>Users</p>\n</header>\n<section class=\"scrollable wrapper\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <section class=\"panel\">\n                <header class=\"panel-heading\">\n                    <span class=\"label bg-info pull-right\">{{users.length}} Users</span>\n                    <h3>Users</h3>\n                </header>\n                <table class=\"table table-hover m-b-none text-sm\">\n                    <thead>\n                        <tr>\n                            <th>ID</th>\n                            <th>Username</th>\n                            <th>Creation Date</th>\n                            <th>Admin</th>\n                            <th title=\"Actions\"></th>\n                        </tr>\n                    </thead>\n                    <tbody class=\"animated fadeIn\" ng-if=\"!inFlight\">\n                        <tr ng-repeat=\"user in users\">\n                            <td><a ng-href=\"#/users/{{user.id}}\">{{user.id}}</a>\n                            </td>\n                            <td><a ng-href=\"#/users/{{user.id}}\">{{user.username}}</a>\n                            </td>\n                            <td>{{user.created | date:\'MM/dd/yyyy @ h:mma\'}}</td>\n                            <td>\n                                <span class=\"label label-success\" ng-if=\"user.isAdmin\" title=\"{{user.username}} is an admin\">Yes</span>\n                                <span class=\"label label-danger\" ng-if=\"!user.isAdmin\" title=\"{{user.username}} is not an admin\">No</span>\n                            </td>\n                            <td class=\"text-right\">\n                                <div class=\"btn-group\">\n                                    <a href class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-pencil\"></i></a>\n                                    <ul class=\"dropdown-menu pull-right\">\n                                        <li><a ng-href=\"#/users/{{user.id}}/edit\" title=\"Edit {{user.username}}\">Edit</a>\n                                        </li>\n                                        <li><a href ng-click=\"deleteUser(user)\" title=\"Delete {{user.username}}\">Delete</a>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <loading ng-if=\"inFlight\"></loading>\n            </section>\n        </div>\n        <div class=\"col-md-8\">\n            <section class=\"panel\">\n                <header class=\"panel-heading font-bold\">\n                    Quick Create User\n                </header>\n                <div class=\"panel-body\">\n                    <form class=\"form-inline\" role=\"form\" ng-submit=\"addUser($event)\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" name=\"username\" class=\"form-control\" ng-model=\"newUser.username\" placeholder=\"Username\">\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"password\" class=\"form-control\" ng-model=\"newUser.password\" placeholder=\"Password\">\n                        </div>\n                        <div class=\"checkbox m-l-xs m-r-xs\">\n                            <label>\n                                <input type=\"checkbox\" ng-model=\"newUser.isAdmin\">&nbsp;Admin\n                            </label>\n                        </div>\n                        <button type=\"submit\" class=\"btn btn-default\">Create</button>\n                    </form>\n                </div>\n            </section>\n        </div>\n    </div>\n</section>");}]);