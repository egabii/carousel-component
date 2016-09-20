(function(ng, window){
	var slider = ng.module('slider-component',[]);


	var SliderCompiler = function(elem, attrs) {
		var	width = parseInt($('.slide').css('width'))
			counter = 0;
			console.log(elem);
		return {
			// POSTLINK
			post: function(scope, elem, attrs, ctrl) {
				function _isfirstOne() {
					return elem.find('.first').hasClass('current'); // bool
				}

				function _move(x) {
					$('.slider-track').css({
						'transform': 'translate('+x+'px,0)'
					})
				}

				function _isLastOne() {
					return elem.find('.last').hasClass('current'); // bool
				}

				scope.$watch(function(newVal, oldVal){
					if( _isfirstOne ){
						console.log('_isfirstOne',newVal, oldVal);
						elem.find('.slide-prev').attr('disabled', true);
						elem.find('.slide-next').attr('disabled', false);
					} else if( _isLastOne ){
						console.log('_isLastOne');
						elem.find('.slide-prev').attr('disabled', false);
						elem.find('.slide-next').attr('disabled', true);
					}
				});

				scope.$next = function() {
					counter -= width;
					_move(counter);
					$('.current').removeClass('current').next().first().addClass('current');
				}
				
				scope.$prev = function () {
					counter += width;
					_move(counter);
					$('.current').removeClass('current').prev().addClass('current');
				}
			}
		}
	}

	var SliderDirective = function() {
		// Runs during compile
		return {
			scope: {
				// Best Practice: Use the scope option to create isolate scopes 
				// when making components that you want to reuse throughout your app.
				slides: '='
			},
			restrict: 'E',
			templateUrl: 'app/slider/slider.html',
			compile: SliderCompiler
		};
	}

	SliderDirective.$inject = ['$rootScope'];
	slider.directive('slider', SliderDirective);
})(angular, window)