directives.directive('randomMotion', ['$timeout', '$window', function($timeout, $window) {
  return {
    restrict: 'EA',
    link: function ($scope, element, attrs) {
      //console.log("Start Motion");
      // Randomly Set Postion & Velocity
      var maxVelocity = 50;
      var parentContainer = element[0].offsetParent;

      var maxX = parentContainer.clientWidth - 100;
      var maxY = parentContainer.clientHeight - 75;

      //var posX = Math.min(0, Math.max(20, (Math.random() * 0)));
      //var posY = Math.min(0, Math.max(20, (Math.random() * 10)));

      var posX = ((Math.random() * maxX) + 1);
      var posY = ((Math.random() * maxY) + 1);

      var velX = (Math.random() * maxVelocity);
      var velY = (Math.random() * maxVelocity);
      var timestamp = null;

      if($window.outerWidth > 640){
        // Move Object
        (function tick() {
          var now = new Date().getTime();
          var borderX = element[0].clientWidth + 5;
          var borderY = element[0].clientHeight + 5;

          maxX = parentContainer.clientWidth - borderX;
          maxY = parentContainer.clientHeight - borderY;

          var elapsed = (timestamp || now) - now;
          timestamp = now;
          posX += elapsed * velX / 1000;
          posY += elapsed * velY / 1000;

          if (posX > maxX) {
              posX = 2 * maxX - posX;
              velX *= -1;
          }
          if (posX < 1) {
              posX = 10;
              velX *= -1;
          }
          if (posY > maxY) {
              posY = 2 * maxY - posY;
              velY *= -1;
          }
          if (posY < 1) {
              posY = 10;
              velY *= -1;
          }
          // Set Position to $element top and left
          element.css({ "top": posY, "left": posX });          
          // Loop to Move object
          $timeout(tick, 30);
        })();
      }
    }
  }
}]);
