(function(ng){
	var slider = ng.module('slider-component',[]);


	var SliderCompiler = function(elem, attrs) {
		var	width = parseInt($('.slide').css('width'))
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
					counter -= width;
					
					if( _isLastOne() ) {
						elem.find('.slide-next').attr('disabled', true);
					}else{
						_move(counter);
						$('.current').removeClass('current').next().first().addClass('current');
					}
				}
				
				scope.$prev = function () {
					counter += width;
					if( _isfirstOne() ){
						elem.find('.slide-prev').attr('disabled', true);
					} else {
						_move(counter);
						$('.current').removeClass('current').prev().addClass('current');
					}

				}

				function _isfirstOne() {
					return $('.first').hasClass('current');
				}

				function _move(x) {
					$('.slider-track').css({
						'transform': 'translate('+x+'px,0)'
					})
				}

				function _reset() {
					_move(0);
				}

				function _isLastOne() {
					return $('.last').hasClass('current');
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