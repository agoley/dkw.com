directives.directive('scrollMovement', ['$window', function($window) {
  return {
    restrict: 'EA',
    link: function ($scope, element) {
      element.bind('click', function() {
        var screenHeight = $("body")[0].clientHeight;
        $("body").animate({ scrollTop: screenHeight}, "slow");
      });
    },
    template:'<div class="scroll-instruction"><div class="scroll-text">scroll</div><i class="fa fa-angle-down" aria-hidden="true"></i></div>'
  }
}]);
