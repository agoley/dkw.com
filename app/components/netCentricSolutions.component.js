// Services component for DKW Site
components.component('netCentricSolutions', {
   bindings: {},
	controller: function ($stateParams, $sce, $location, $anchorScroll, dkwDataMonitor) {
      var ctrl = this;

      /* Variables */
      ctrl.pageInfo = dkwDataMonitor.pages.solutions("Enterprise Net-Centric Solutions");
      ctrl.selectedItem = {};


      /* Functions */
      ctrl.setID = function(title){
        return title.replace(/ /gi, '-');
      }

      ctrl.getItem = function(searchId){
        var results = $.grep(ctrl.pageInfo.items, function(e){ return e.title.toLowerCase() == searchId.toLowerCase()});
        var object = null;
        if (results.length == 0) {
          // not found
        } else if (results.length == 1) {
          object = results[0];
        } else {
          // multiple items found
        }
        ctrl.selectedItem = object;
        var tst =0;
      }

      ctrl.linkIsActive = function(title){
        return (title == ctrl.selectedItem.title);
      }

      // Set Page Information
      var paramID = $stateParams.Id;
      if(paramID != undefined && paramID != ""){
        ctrl.Id = paramID.replace(/-/gi, ' ');
        ctrl.getItem(ctrl.Id);
      }
      else {
        ctrl.selectedItem = ctrl.pageInfo;
      }

   },
   templateUrl: 'views/pageTemplates/solutions/net-centric-solutions.html'
});
