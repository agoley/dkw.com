// Services component for DKW Site
components.component('solutions', {
   bindings: {},
	controller: function ($scope, $stateParams, $sce, $state, dkwDataMonitor, $timeout) {
      var ctrl = this;

      /* Variables */
      var currState = $state.current.name;
      switch(currState){
        case 'app.solutions.netCentricSolutions':
          ctrl.pageTitle = "Enterprise Net-Centric Solutions";
          break;
        case 'app.solutions.cyberSecurityAndIntelligence':
          ctrl.pageTitle = "Cyber Security and Intelligence Service";
          break;
        case 'app.solutions.managementConsulting':
          ctrl.pageTitle = "Management Consulting";
          break;
        default:
          ctrl.pageTitle = "";
          break;
      }

      ctrl.pageInfo = dkwDataMonitor.pages.solutions(ctrl.pageTitle);
      ctrl.selectedItem = {};
      ctrl.showLeft = false;
      ctrl.showRight = true;

      /* Functions */
      ctrl.setID = function(title){
        return title.replace(/ /gi, '-');
      }

      ctrl.getItem = function(searchId){
        var resultIndex = ctrl.pageInfo.items.findIndex(e => e.title.replace(/[&\/]/gi, '').toLowerCase() == searchId.toLowerCase());

        var object = null;
        if (resultIndex < 0) {
          // not found
        } else {
          object = ctrl.pageInfo.items[resultIndex];
          // scroll to object
          /*var objectWidth = ($('.nav-item')[0].offsetWidth * resultIndex);
          $('.nav-items-container').animate({ scrollLeft: "+="+objectWidth+"px"}, 300);

          if(resultIndex < (ctrl.pageInfo.items.length - 1) && resultIndex > 0){
            ctrl.showLeft = true;
            ctrl.showRight = true;
          }
          else if(resultIndex == 0) {
            ctrl.showLeft = false;
          }
          else if(resultIndex >= (ctrl.pageInfo.items.length - 1)){
            ctrl.showLeft = true;
            ctrl.showRight = false;
          }*/
        }
        ctrl.selectedItem = object;
      }

      ctrl.linkIsActive = function(title){
        return (title == ctrl.selectedItem.title);
      }

      ctrl.clientCtrl = function(direction) {
        var scrollContainer = $('.nav-items-container')[0];
        var objectWidth = ($('.nav-item')[0].offsetWidth * 2);

        if(direction == "left"){
          // Move Left to Right
          $('.nav-items-container').animate({ scrollLeft: "-="+objectWidth+"px"}, "slow");
          ctrl.showRight = true;
          if((scrollContainer.scrollLeft - objectWidth) <= 0){
            ctrl.showLeft = false;
          }
        }
        else if(direction == "right"){
          // Move Right to Left
          $('.nav-items-container').animate({ scrollLeft: "+="+objectWidth+"px"}, "slow");
          ctrl.showLeft = true;
          if((scrollContainer.scrollLeft + scrollContainer.offsetWidth + objectWidth) >= scrollContainer.scrollWidth){
            ctrl.showRight = false;
          }
        }

      }

      // Set Page Information
      var paramID = $stateParams.Id;
      if(paramID != undefined && paramID != ""){
        ctrl.Id = paramID.replace(/-/gi, ' ');
        ctrl.getItem(ctrl.Id);
      }
      else {
        ctrl.selectedItem = ctrl.pageInfo;
        ctrl.selectedItem.title = ctrl.pageInfo.sectionTitle;
        ctrl.selectedItem.isHome = true;
      }

      // get screen size
      $timeout(function () {
        //Here your view content is fully loaded !!
        var pageHeight = angular.element(".content-section")[0].offsetHeight;
        var arrSize = Math.ceil((pageHeight - 2300)/ 1600);
        ctrl.spacerMax = (pageHeight > 3000 ? new Array(arrSize-1) : 0);
      }, 1000);

   },
   templateUrl: 'views/pageTemplates/solutions/solutions2.html'
});
