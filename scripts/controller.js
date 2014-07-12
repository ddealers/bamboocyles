var myAppModule = angular.module('myApp', []);

myAppModule.filter('greet', function(){
	return function(name) {
		return 'hello, ' + name + '!';
	};
});