// root component: all other components will be under this component
// objects: view - this will store the state and other high level objects
components.component('all', {
   bindings: {},
	controller: function ($scope) {
      var ctrl = this;
		ctrl.view = {};
		ctrl.view.isMobile = false;
		ctrl.view.isSearching = false;
    ctrl.socialMediaLinks = [
      {"name":"facebook", "colorClass":"color1", "icon":"fa-facebook","url":"https://www.facebook.com/DKWcommunications/"},
      {"name":"twitter", "colorClass":"color2", "icon":"fa-twitter","url":"https://twitter.com/dkw_comminc"},
      {"name":"youtube", "colorClass":"color3", "icon":"fa-youtube","url":"https://www.youtube.com/channel/UCciaY_nt7U8GkZklOXLtWDA"},
      {"name":"linkedin", "colorClass":"color4", "icon":"fa-linkedin-square","url":"https://www.linkedin.com/company/dkw-communications-inc-"}
    ];
    // Open Social Media Links
    ctrl.openLink = function(url){

    }

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
