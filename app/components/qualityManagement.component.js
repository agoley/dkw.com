// Services component for DKW Site
components.component('qualityManagement', {
   bindings: {},
	controller: function ($scope, $stateParams, $sce, $state, dkwDataMonitor) {
      var ctrl = this;

      /* Variables */
      var currState = $state.current.name;
      ctrl.pageTitle = "Quality Management";
      ctrl.pageInfo = dkwDataMonitor.pages.qualityManagement("Quality|Management");

      /*Functions*/
      ctrl.getItem = function(searchId){
        var resultIndex = ctrl.pageInfo.items.findIndex(e => e.title.replace(/[^a-zA-Z0-9\s]/gi, '').toLowerCase() == searchId.toLowerCase());

        var object = null;
        if (resultIndex < 0) {
          // not found
        } else {
          object = ctrl.pageInfo.items[resultIndex];
        }
        ctrl.selectedItem = object;
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
   templateUrl: 'views/pageTemplates/qualityManagement/qualityManagement.html'
});
