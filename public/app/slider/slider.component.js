(function(ng){
	var slider = ng.module('slider-component',[]);


	var SliderCompiler = function(elem, attrs) {
		var	width = parseInt($('.item').css('width'))
			counter = 0;
		return {
			// POSTLINK
			post: function(scope, elem, attrs, ctrl) {
				scope.items = [
					{
						title: 'SLIDE 1',
						body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit nam, vero iure nulla, dolores possimus ex, voluptatem pariatur tenetur beatae odio nisi nihil voluptas. Laudantium quaerat error, numquam nostrum nulla?'
					},
					{
						title: 'SLIDE 2',
						body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit nam, vero iure nulla, dolores possimus ex, voluptatem pariatur tenetur beatae odio nisi nihil voluptas. Laudantium quaerat error, numquam nostrum nulla?'
					},
					{
						title: 'SLIDE 3',
						body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit nam, vero iure nulla, dolores possimus ex, voluptatem pariatur tenetur beatae odio nisi nihil voluptas. Laudantium quaerat error, numquam nostrum nulla?'
					},
					{
						title: 'SLIDE 4',
						body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit nam, vero iure nulla, dolores possimus ex, voluptatem pariatur tenetur beatae odio nisi nihil voluptas. Laudantium quaerat error, numquam nostrum nulla?'
					},
					{
						title: 'SLIDE 5',
						body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit nam, vero iure nulla, dolores possimus ex, voluptatem pariatur tenetur beatae odio nisi nihil voluptas. Laudantium quaerat error, numquam nostrum nulla?'
					}
				];

				scope.$next = function() {
					if( isLastOne() ) {
						reset();
					} else {
						counter -= width;
						move(counter);
						$('.active')
						.removeClass('active').next().first().addClass('active')
					}
				}

				scope.$prev = function () {
					counter += width;
					if( isFirstOne() ) {
						reset();
					}
					move(counter);
				}

				function move(x) {
					$('.item').animate({
						'left': (x +'px')
					});
				}

				function reset() {
					$('.item').css('left', 0);
					counter = width;
				}

				function isLastOne() {
					var length = $('.item').length;
					return $('[slide-index="'+(length-1)+'"]').hasClass('active');
				}

				function isFirstOne() {
					return $('[slide-index="0"]').hasClass('active');
				}
			}
		}
	}


	var SliderDirective = function() {
		// Runs during compile
		return {
			scope: {},
			restrict: 'E',
			templateUrl: 'app/slider/slider.html',
			compile: SliderCompiler
		};
	}

	slider.directive('slider', SliderDirective);
})(angular)