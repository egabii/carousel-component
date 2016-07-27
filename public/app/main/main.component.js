(function(ng){
	var module = ng.module('todoApp', ['slider-component']);
	// module.component('main', {
	// 	templateUrl: '<h1></h1>',
	// 	bindings: {
	// 		name: '@'
	// 	},
	// 	controller: function(){
	// 		this.sample = 'TODO'
	// 	}
	// });
	var link = function($scope) {
		$scope.course = 'angular';
	};

	var MainDirective = function(){
		return {
			scope: {
				name: '@'
			},
			templateUrl: './app/main/main.html',
			restrict: 'AE',
			link: link
		}
	};

	module.directive('main', MainDirective);

})(angular);