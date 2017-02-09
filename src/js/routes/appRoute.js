
define(['app'], function(app){
   return app.config(['$routeProvider',"$locationProvider",function($routeProvider,$locationProvider){
			$locationProvider.html5Mode(false).hashPrefix('');//解决1.6的路由地址冲突问题
			$routeProvider.when('/home',{
				templateUrl:'views/home.html'
			})
			.when('/mine',{
				templateUrl:'views/mine.html'
			})
			.when('/supermarket',{
				templateUrl:'views/supermarket.html'
			})
			.when('/cart',{
				templateUrl:'views/cart.html'
			})
			.when('/order',{
				templateUrl:'views/order.html'
			})
			.when('/search',{
				templateUrl:'views/search.html'
			})
			.when('/',{
				templateUrl:'views/welcom.html'
			})
			.when('/intshop',{
				templateUrl:'views/intshop.html'
			})
			.when('/myorder',{
				templateUrl:'views/myorder.html'
			})
			.when('/superbuy',{
				templateUrl:'views/superbuy.html'
			})
	}])
});