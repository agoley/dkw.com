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
      ctrl.isSelected = function(item){
        return (item.state == ctrl.selectedCert.state);
      }
      ctrl.switchItem = function(searchId){
        var cleanSearchId = searchId.replace(/-/gi, ' ');
        ctrl.selectedCert = getItem(cleanSearchId);
      };

      function getItem(searchId){
        var returnObj = null;

        var resultIndex = ctrl.pageInfo.items.findIndex(e => e.title.replace(/[^a-zA-Z0-9\s]/gi, '').toLowerCase() == searchId.toLowerCase());

        var object = null;
        if (resultIndex < 0) {
          // not found
          object = ctrl.pageInfo.items[0];
        } else {
          object = ctrl.pageInfo.items[resultIndex];
        }
        //ctrl.selectedItem = object;
        //ctrl.selectedItem.wrappedContent = wrapContent(ctrl.selectedItem.content, "each");
        returnObj = object;
        returnObj.wrappedContent = wrapContent(returnObj.content, "each");

        return returnObj;
      }

      function wrapContent(content, type){
          var wrappedContent = [];
          if(type == "title"){
            var subitem = [];
            for(var i=0; i < content.length; i++){
              if(content[i].type == "subtitle" && subitem.length > 0){
                wrappedContent.push(subitem);
                subitem = [];
              }
              subitem.push(content[i]);
            }

            if(subitem.length > 0){
              wrappedContent.push(subitem);
              subitem = [];
            }
          }
          else if(type == "each"){
            for(var i=0; i < content.length; i++){
              wrappedContent.push([content[i]]);
            }
          }
          return wrappedContent;
      }

      // Set Page Information
      var paramID = $stateParams.Id;
      if(paramID != undefined && paramID != ""){
        ctrl.Id = paramID.replace(/-/gi, ' ');
        //ctrl.selectedItem = getItem(ctrl.Id);
        ctrl.selectedCert = getItem(ctrl.Id);
      }
      else {
        // default Certification text
        ctrl.selectedCert = getItem("");
      }
      ctrl.selectedItem = ctrl.pageInfo;
      ctrl.selectedItem.title = ctrl.pageInfo.sectionTitle;
      ctrl.selectedItem.isHome = true;
      ctrl.selectedItem.wrappedContent = wrapContent(ctrl.selectedItem.content, "title");


   },
   templateUrl: 'views/pageTemplates/qualityManagement/qualityManagement.html'
});
