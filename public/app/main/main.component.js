(function(ng){
	var module = ng.module('todoApp', ['slider-component']);

	var MainCtrl = function(scope){
		scope.vm = this;

		this.items = [
			{
				id:0,
				title: 'SLIDE 1',
				body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit nam, vero iure nulla, dolores possimus ex, voluptatem pariatur tenetur beatae odio nisi nihil voluptas. Laudantium quaerat error, numquam nostrum nulla?'
			},
			{
				id:1,
				title: 'SLIDE 2',
				body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit nam, vero iure nulla, dolores possimus ex, voluptatem pariatur tenetur beatae odio nisi nihil voluptas. Laudantium quaerat error, numquam nostrum nulla?'
			},
			{
				id:2,
				title: 'SLIDE 3',
				body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit nam, vero iure nulla, dolores possimus ex, voluptatem pariatur tenetur beatae odio nisi nihil voluptas. Laudantium quaerat error, numquam nostrum nulla?'
			},
			{
				id:3,
				title: 'SLIDE 4',
				body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit nam, vero iure nulla, dolores possimus ex, voluptatem pariatur tenetur beatae odio nisi nihil voluptas. Laudantium quaerat error, numquam nostrum nulla?'
			},
			{
				id:4,
				title: 'SLIDE 5',
				body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit nam, vero iure nulla, dolores possimus ex, voluptatem pariatur tenetur beatae odio nisi nihil voluptas. Laudantium quaerat error, numquam nostrum nulla?'
			}
		];
	}

	MainCtrl.$inject = ['$scope'];
	
	var MainDirective = function(){
		return {
			scope: {
				name: '@',
				course: '@'
			},
			templateUrl: './app/main/main.html',
			restrict: 'AE',
			controller: 'MainCtrl'
		}
	};

	module.controller('MainCtrl', MainCtrl).directive('main', MainDirective);

})(angular);