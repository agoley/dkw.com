// root component: all other components will be under this component
// objects: view - this will store the state and other high level objects
components.component('all', {
   bindings: {},
	controller: function ($scope) {
      var ctrl = this;
		ctrl.view = {};
		ctrl.view.isMobile = false;
		ctrl.view.isSearching = false;
		
		// set mobile to true
		var configForMobile = function () {
			ctrl.view.isMobile = true;
		}
		
		// set mobile to false
		var configForDesktop = function () {
			ctrl.view.isMobile = false;
		}
		
		// logic to configure the site for mobile oe desktop
		var configView = function () {
			if (window.innerWidth < 715) {
				configForMobile();
			} else {
				configForDesktop();
			}
		}
		
		configView();
		
		window.onresize = function(){
    		setTimeout(function(){
				configView(); 
				$scope.$apply();
			}, 100);
		};
   },
   templateUrl: 'views/all.html'
});
