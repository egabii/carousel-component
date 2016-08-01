(function(ng){
	var module = ng.module('todoApp', ['slider-component']);

	var MainDirective = function(){
		return {
			scope: {
				name: '@',
				course: '@'
			},
			templateUrl: './app/main/main.html',
			restrict: 'AE'
		}
	};

	module.directive('main', MainDirective);

})(angular);