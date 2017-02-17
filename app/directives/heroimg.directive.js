directives.directive('heroImg', ['$window', function($window) {
  return {
    restrict: 'EA',
    link: function ($scope, element, attrs) {
      var mobileSize = 640;

      var initialWidth = $window.outerWidth;
      if($window.outerWidth < mobileSize){
        element.css({'height': ($window.outerHeight - 135) });
      }

      //$window.resize(function resize(){
      angular.element($window).bind('resize', function(){
        if(initialWidth != $window.outerWidth){
          if($window.outerWidth < mobileSize){
            element.css({'height': ($window.outerHeight - 135) });
          }
          else {
            element.removeAttr("style");
            //element.style.height = null;
          }
          initialWidth = $window.outerWidth;
        }
      });

    }
  }
}]);
