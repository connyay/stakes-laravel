angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("components/UI/brand-header.html","<header class=\"dker nav-bar\">\n    <a class=\"btn btn-link visible-xs\" data-toggle=\"class:nav-off-screen\" data-target=\"#nav\">\n        <i class=\"fa fa-bars\"></i>\n    </a>\n    <a href=\"#\" class=\"nav-brand\" data-toggle=\"fullscreen\">Stakes</a>\n</header>");
$templateCache.put("components/UI/loading.html","<div class=\"text-center m\">\n    <i class=\"fa fa-spinner fa-3x fa-spin\"></i>\n</div>");
$templateCache.put("components/UI/side-nav.html","<aside class=\"bg-dark aside-sm\" id=\"nav\">\n    <section class=\"vbox\">\n        <brand-header></brand-header>\n        <section>\n            <nav class=\"nav-primary hidden-xs\">\n                <ul class=\"nav\">\n                    <li ng-repeat=\"item in navItems\" ng-class=\"{\'active\':isActive(\'/{{item.route}}\'), \'dropdown-submenu\':item.subitems}\">\n\n                        <a href=\"#{{item.route}}\" title=\"{{item.title}}\" ng-if=\"!item.subitems\">\n                            <i class=\"fa fa-{{item.icon}}\" ng-if=\"item.icon\"></i>\n                            {{item.title}}\n                        </a>\n                        <a href class=\"dropdown-toggle\" ng-if=\"item.subitems\" data-toggle=\"dropdown\">\n                            <i class=\"fa fa-{{item.icon}}\" ng-if=\"item.icon\"></i>\n                            <span>{{item.title}}</span>\n                        </a>\n                        <ul class=\"dropdown-menu\" ng-if=\"item.subitems\">\n                            <li ng-repeat=\"item in item.subitems\">\n                                <a href=\"#{{$parent.item.route + item.route}}\">{{item.title}}</a>\n                            </li>\n                        </ul>\n                    </li>\n                </ul>\n            </nav>\n        </section>\n    </section>\n</aside>");
$templateCache.put("components/Account/templates/account-overview.html","<section class=\"panel\">\n    <header class=\"panel-heading font-bold\">Account Overview</header>\n    <div ng-if=\"account\">\n        <div class=\"panel-body\">\n            <p><b>Account ID:</b>  <a ng-href=\"#/accounts/{{account.id}}\" ng-if=\"link\">{{account.id}}</a>\n                <span ng-if=\"!link\">{{account.id}}</span>\n            </p>\n            <p><b>Created:</b> {{account.created | date:\'MM/dd/yyyy @ h:mma\'}}</p>\n        </div>\n        <footer class=\"panel-footer\">\n            <div class=\"row text-center\">\n                <div class=\"col-xs-3 b-r\">\n                    <p class=\"h3 font-bold m-t\">{{account.balance}}</p>\n                    <p class=\"text-muted\">Credits</p>\n                </div>\n                <div class=\"col-xs-3 b-r\">\n                    <p class=\"h3 font-bold m-t\">0</p>\n                    <p class=\"text-muted\">Transactions</p>\n                </div>\n                <div class=\"col-xs-3 b-r\">\n                    <p class=\"h3 font-bold m-t\">{{account.wins}}</p>\n                    <p class=\"text-muted\">Wins</p>\n                </div>\n                <div class=\"col-xs-3\">\n                    <p class=\"h3 font-bold m-t\">{{account.losses}}</p>\n                    <p class=\"text-muted\">Losses</p>\n                </div>\n            </div>\n        </footer>\n    </div>\n</section>");
$templateCache.put("components/Account/templates/account.html","<header class=\"header b-b bg-white-only\">\n    <p>Account</p>\n</header>\n<section class=\"scrollable wrapper\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <section class=\"panel\" ng-if=\"!account\">\n                <loading></loading>\n            </section>\n            <account-overview account=\"account\" ng-if=\"account\"></account-overview>\n            <user-overview user=\"account.user\" ng-if=\"account.user\" link=\"true\"></user-overview>\n        </div>\n    </div>\n</section>");
$templateCache.put("components/Account/templates/accounts.html","<header class=\"header b-b bg-white-only\">\n    <p>Accounts</p>\n</header>\n<section class=\"scrollable wrapper\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <section class=\"panel\">\n                <header class=\"panel-heading\">\n                    <button type=\"button\" class=\"btn btn-white btn-sm pull-right\" ng-click=\"refresh()\">\n                        <span class=\"fa fa-refresh\"></span>\n                    </button>\n                    <span class=\"label bg-info pull-right\">{{accounts.length}} total</span>\n                    <h3>Accounts</h3>\n                </header>\n                <table class=\"table table-hover m-b-none text-sm\">\n                    <thead>\n                        <tr>\n                            <th>ID</th>\n                            <th>Balance</th>\n                            <th>Wins</th>\n                            <th>Losses</th>\n                            <th>Created</th>\n                            <th title=\"Actions\"></th>\n                        </tr>\n                    </thead>\n                    <tbody class=\"animated fadeIn\" ng-if=\"accounts\">\n                        <tr ng-repeat=\"account in accounts\">\n                            <td><a ng-href=\"#/accounts/{{account.id}}\">{{account.id}}</a>\n                            </td>\n                            <td>{{account.balance}}</td>\n                            <td>{{account.wins}}</td>\n                            <td>{{account.losses}}</td>\n                            <td>{{account.created | date:\'MM/dd/yyyy @ h:mma\'}}</td>\n                            <td class=\"text-right\">\n                                <div class=\"btn-group\">\n                                    <a href class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-pencil\"></i></a>\n                                    <ul class=\"dropdown-menu pull-right\">\n                                        <li><a ng-href=\"#/accounts/{{account.id}}/edit\" title=\"Edit Account\">Edit</a>\n                                        </li>\n                                        <li><a href ng-click=\"deleteAccount(account)\" title=\"Delete Account\">Delete</a>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <loading ng-if=\"!accounts\"></loading>\n            </section>\n        </div>\n    </div>\n</section>");
$templateCache.put("components/Dashboard/templates/dashboard.html","<header class=\"header b-b bg-white-only\">\n    <p>Dashboard</p>\n</header>\n<section class=\"scrollable wrapper\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <section class=\"panel\">\n                <section class=\"panel-body\">\n                    Here is all of the cool dashboard stuff\n                </section>\n            </section>\n        </div>\n    </div>\n</section>");
$templateCache.put("components/Transaction/templates/transaction-overview.html","<section class=\"panel\">\n    <header class=\"panel-heading font-bold\">Transaction Overview</header>\n    <div ng-if=\"transaction\">\n        <div class=\"panel-body\">\n            <p><b>Transaction ID:</b>  <a ng-href=\"#/transactions/{{transaction.id}}\" ng-if=\"link\">{{transaction.id}}</a>\n                <span ng-if=\"!link\">{{transaction.id}}</span>\n            </p>\n            <p><b>Created:</b> {{transaction.created | date:\'MM/dd/yyyy @ h:mma\'}}</p>\n        </div>\n    </div>\n</section>");
$templateCache.put("components/Transaction/templates/transaction.html","<header class=\"header b-b bg-white-only\">\n    <p>Transaction</p>\n</header>\n<section class=\"scrollable wrapper\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <section class=\"panel\" ng-if=\"!transaction\">\n                <loading></loading>\n            </section>\n            <transaction-overview transaction=\"transaction\" ng-if=\"transaction\"></transaction-overview>\n            <account-overview account=\"transaction.account\" ng-if=\"transaction.account\" link=\"true\"></account-overview>\n        </div>\n    </div>\n</section>");
$templateCache.put("components/Transaction/templates/transactions.html","<header class=\"header b-b bg-white-only\">\n    <p>Transactions</p>\n</header>\n<section class=\"scrollable wrapper\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <section class=\"panel\">\n                <header class=\"panel-heading\">\n                    <button type=\"button\" class=\"btn btn-white btn-sm pull-right\" ng-click=\"refresh()\">\n                        <span class=\"fa fa-refresh\"></span>\n                    </button>\n                    <span class=\"label bg-info pull-right\">{{transactions.length}} total</span>\n                    <h3>Transactions</h3>\n                </header>\n                <table class=\"table table-hover m-b-none text-sm\">\n                    <thead>\n                        <tr>\n                            <th>ID</th>\n                            <th>Amount</th>\n                            <th>Type</th>\n                        </tr>\n                    </thead>\n                    <tbody class=\"animated fadeIn\" ng-if=\"transactions\">\n                        <tr ng-repeat=\"transaction in transactions\">\n                            <td><a ng-href=\"#/transactions/{{transaction.id}}\">{{transaction.id}}</a>\n                            </td>\n                            <td>{{transaction.amount}}</td>\n                            <td>\n                                <span class=\"label label-success\" ng-if=\"transaction.type === \'credit\'\">Credit</span>\n                                <span class=\"label label-danger\" ng-if=\"transaction.type === \'debit\'\">Debit</span>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <loading ng-if=\"!transactions\"></loading>\n            </section>\n        </div>\n    </div>\n</section>");
$templateCache.put("components/User/templates/user-create.html","<header class=\"header b-b bg-white-only\">\n    <p>New User</p>\n</header>\n<section class=\"scrollable wrapper\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <section class=\"panel\">\n                <header class=\"panel-heading font-bold\">New User</header>\n                <div class=\"panel-body\">\n                    <user-form submit-text=\"Create\" user=\"user\" submit=\"createUser()\"></user-form>\n                </div>\n            </section>\n        </div>\n    </div>\n</section>");
$templateCache.put("components/User/templates/user-edit.html","<header class=\"header b-b bg-white-only\">\n    <h4>Edit {{user.username}}</h4>\n</header>\n<section class=\"scrollable wrapper\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <section class=\"panel\">\n                <header class=\"panel-heading font-bold\">Edit {{user.username}}</header>\n                <div class=\"panel-body\">\n                    <user-form submit-text=\"Save\" user=\"user\" submit=\"save()\"></user-form>\n                </div>\n            </section>\n        </div>\n    </div>\n</section>");
$templateCache.put("components/User/templates/user-form.html","<form role=\"form\" ng-submit=\"submit()\" name=\"form\" novalidate>\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" class=\"form-control\" ng-model=\"user.username\" placeholder=\"Username\" required>\n    </div>\n    <div class=\"form-group\">\n        <label>Password</label>\n        <input type=\"password\" class=\"form-control\" ng-model=\"user.password\" placeholder=\"Password\" required>\n    </div>\n    <div class=\"form-group\">\n        <label>Confirm Password</label>\n        <input type=\"password\" class=\"form-control\" ng-model=\"user.password_confirmation\" placeholder=\"Confirm Password\" required>\n    </div>\n    <div class=\"checkbox\">\n        <label>\n            <input type=\"checkbox\" ng-model=\"user.isAdmin\" />Admin\n        </label>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"form.$invalid || user.password !== user.password_confirmation\">{{submitText}}</button>\n</form>");
$templateCache.put("components/User/templates/user-overview.html","<section class=\"panel\">\n    <header class=\"panel-heading font-bold\">User Overview</header>\n    <div>\n        <div class=\"panel-body\">\n            <p><b>Username:</b> <a ng-href=\"#/users/{{user.id}}\" ng-if=\"link\">{{user.id}}</a>\n                <span ng-if=\"!link\">{{user.id}}</span></p>\n            <p><b>Is Admin:</b>\n                <span class=\"label label-success\" ng-if=\"user.isAdmin\">Yes</span>\n                <span class=\"label label-danger\" ng-if=\"!user.isAdmin\">No</span>\n            </p>\n\n            <p><b>User ID:</b> {{user.id}}</p>\n            <p><b>Created:</b> {{user.created | date:\'MM/dd/yyyy @ h:mma\'}}</p>\n        </div>\n    </div>\n</section>");
$templateCache.put("components/User/templates/user-quick-create.html","<section class=\"panel\">\n    <header class=\"panel-heading font-bold\">\n        Quick Create User\n    </header>\n    <div class=\"panel-body\">\n        <form class=\"form-inline\" name=\"form\" role=\"form\" ng-submit=\"submit()\" novalidate>\n            <div class=\"form-group\">\n                <input type=\"text\" name=\"username\" class=\"form-control\" ng-model=\"user.username\" placeholder=\"Username\" required>\n            </div>\n            <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control\" ng-model=\"user.password\" placeholder=\"Password\" required>\n            </div>\n            <div class=\"checkbox m-l-xs m-r-xs\">\n                <label>\n                    <input type=\"checkbox\" ng-model=\"user.isAdmin\">&nbsp;Admin\n                </label>\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\" ng-disabled=\"form.$invalid\">Create</button>\n        </form>\n    </div>\n</section>");
$templateCache.put("components/User/templates/user.html","<header class=\"header b-b bg-white-only\">\n    <p>User</p>\n</header>\n<section class=\"scrollable wrapper\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <section class=\"panel\" ng-if=\"!user\">\n                <loading></loading>\n            </section>\n            <user-overview user=\"user\" ng-if=\"user\"></user-overview>\n            <account-overview account=\"user.account\" ng-if=\"user.account\" link=\"true\"></account-overview>\n        </div>\n    </div>\n</section>");
$templateCache.put("components/User/templates/users.html","<header class=\"header b-b bg-white-only\">\n    <p>Users</p>\n</header>\n<section class=\"scrollable wrapper\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <section class=\"panel\">\n                <header class=\"panel-heading\">\n                    <button type=\"button\" class=\"btn btn-white btn-sm pull-right\" ng-click=\"refresh()\">\n                        <span class=\"fa fa-refresh\"></span>\n                    </button>\n                    <span class=\"label bg-info pull-right\">{{users.length}} total</span>\n                    <h3>Users</h3>\n                </header>\n                <table class=\"table table-hover m-b-none text-sm\">\n                    <thead>\n                        <tr>\n                            <th>ID</th>\n                            <th>Username</th>\n                            <th>Creation Date</th>\n                            <th>Admin</th>\n                            <th title=\"Actions\"></th>\n                        </tr>\n                    </thead>\n                    <tbody class=\"animated fadeIn\" ng-if=\"users\">\n                        <tr ng-repeat=\"user in users\">\n                            <td><a ng-href=\"#/users/{{user.id}}\">{{user.id}}</a>\n                            </td>\n                            <td><a ng-href=\"#/users/{{user.id}}\">{{user.username}}</a>\n                            </td>\n                            <td>{{user.created | date:\'MM/dd/yyyy @ h:mma\'}}</td>\n                            <td>\n                                <span class=\"label label-success\" ng-if=\"user.isAdmin\" title=\"{{user.username}} is an admin\">Yes</span>\n                                <span class=\"label label-danger\" ng-if=\"!user.isAdmin\" title=\"{{user.username}} is not an admin\">No</span>\n                            </td>\n                            <td class=\"text-right\">\n                                <div class=\"btn-group\">\n                                    <a href class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-pencil\"></i></a>\n                                    <ul class=\"dropdown-menu pull-right\">\n                                        <li><a ng-href=\"#/users/{{user.id}}/edit\" title=\"Edit {{user.username}}\">Edit</a>\n                                        </li>\n                                        <li><a href ng-click=\"deleteUser(user)\" title=\"Delete {{user.username}}\">Delete</a>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n                <loading ng-if=\"!users\"></loading>\n            </section>\n        </div>\n        <div class=\"col-md-8\">\n            <user-quick-create user=\"newUser\" submit=\"addUser()\"></user-quick-create>\n        </div>\n    </div>\n</section>");}]);