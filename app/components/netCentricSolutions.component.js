// Services component for DKW Site
components.component('netCentricSolutions', {
   bindings: {},
	controller: function ($scope, $stateParams, $sce, $location, dkwDataMonitor) {
      var ctrl = this;

      /* Variables */
      ctrl.pageTitle = "Enterprise Net-Centric Solutions";
      ctrl.pageInfo = dkwDataMonitor.pages.solutions(ctrl.pageTitle);
      ctrl.selectedItem = {};
      ctrl.showLeft = false;
      ctrl.showRight = true;

      /* Functions */
      ctrl.setID = function(title){
        return title.replace(/ /gi, '-');
      }

      ctrl.getItem = function(searchId){
        var resultIndex = ctrl.pageInfo.items.findIndex(e => e.title.toLowerCase() == searchId.toLowerCase());

        //var results = $.grep(ctrl.pageInfo.items, function(e){ return e.title.toLowerCase() == searchId.toLowerCase()});
        var object = null;
        if (resultIndex < 0) {
          // not found
        } else {
          //object = results[0];
          object = ctrl.pageInfo.items[resultIndex];
          // scroll to object
          var objectWidth = ($('.nav-item')[0].offsetWidth * resultIndex);
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
          }
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
        //ctrl.showLeft = ctrl.displayCtrl('left');
        //ctrl.showRight = ctrl.displayCtrl('right');

        var tst =0;
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

   },
   templateUrl: 'views/pageTemplates/solutions/solutions.html'
});
