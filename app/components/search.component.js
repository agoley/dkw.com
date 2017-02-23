// footer component for DKWSite
components.component('search', {
   bindings: {},
	controller: function ($stateParams, $sce, $location, dkwDataMonitor) {
      var ctrl = this;
      /*Variables*/
      ctrl.searchData = dkwDataMonitor.search.all();
      ctrl.searchResults = {"all": [], "filtered":[], "displayed":[], "displaySection":"all", "page":1, "totalPages":[], "displayNum":10, "displayInc":[10,20,50] };

      /*Functions*/
      // Highlight Search Results
      ctrl.highlightSearch = function(text){
          if(text == undefined){
            return text;
          }
          else {
            return $sce.trustAsHtml(text.replace(new RegExp(ctrl.Id, 'gi'), '<span class="highlightedText">$&</span>'));
          }
      }
      
      // Get preview of string
      function stringPreview(starterIndex, content, length){
        var starter = 0;
        // get to space before word
        do {
          if(starterIndex == 0){
            starter = 2;
          }
          else if(content[starterIndex] == " ") {
            starter++;
            if(starter < 2){ starterIndex--; }
          }
          else {
            starterIndex--;
          }
        } while ( starter < 2);

        var returnStr = content.substring(starterIndex);
        return returnStr;
      }

      ctrl.getItemNum = function(type){
        if(type == "min"){
          return (1 + ((ctrl.searchResults.page-1) * ctrl.searchResults.displayNum));
        }
        else if(type=="max"){
          var calcMax = (ctrl.searchResults.page * ctrl.searchResults.displayNum);
          return (ctrl.searchResults.filtered.length < calcMax ? ctrl.searchResults.filtered.length : calcMax );
        }
      }
      ctrl.getPreview = function(content, length){
        if(typeof content == 'string'){
          var queryIndex = content.toLowerCase().indexOf(ctrl.Id.toLowerCase());
          var returnString = "";
          if(queryIndex < 0){
            returnString = content.substring(0, length) + "...";
          }
          else {
            returnString = "..."+stringPreview(queryIndex, content, length).substring(0, length ); +"...";
          }
          return returnString;
        }
        else if( Object.prototype.toString.call( content ) === '[object Array]' ) {
          for(var i =0; i < content.length; i++){
            var contentObj = content[i];
            if(contentObj.type == "text"){
              var queryIndex = contentObj.content.toLowerCase().indexOf(ctrl.Id.toLowerCase());
              var returnString = "";
              if(queryIndex < 0){
                returnString = contentObj.content.substring(0, length) + "...";
              }
              else {
                returnString = "..."+ stringPreview(queryIndex, contentObj.content, length).substring(0, length )+"...";
                return returnString;
              }
            }
            else if(contentObj.type == "list"){
              for(var j=0; j < contentObj.content.length; j++){
                var listItem = contentObj.content[j];
                var queryIndex = listItem.toLowerCase().indexOf(ctrl.Id.toLowerCase());
                var returnString = "";
                if(queryIndex < 0){
                  returnString = listItem.substring(0, length) + "...";
                }
                else {
                  returnString = "..."+ stringPreview(queryIndex, listItem, length).substring(0, length )+"...";
                  return returnString;
                }
              }
            }
          }
          return returnString + "...";
        }
        else {
          return "";
        }
        return "__";
      }
      ctrl.getResults = function(query){
        var allResults = [];
        // Search Solutions
        allResults = allResults.concat(searchSolutions(query));
        // Search News
        allResults = allResults.concat(searchNews(query));
        // Search Contract Vehicles
        allResults = allResults.concat(searchContractVehicles(query));

        var object = [];
        if (allResults.length == 0) {
          // not found
        } else {
          // multiple items found
          object = allResults.sort(function(a, b) { return b.hits - a.hits; });
        }
        ctrl.searchResults.all = object;

        //set display results
        ctrl.searchResults.filtered = ctrl.searchResults.all;
        ctrl.searchResults.totalPages = new Array(Math.ceil(ctrl.searchResults.filtered.length / ctrl.searchResults.displayNum));
        ctrl.searchResults.displayed = ctrl.searchResults.filtered.slice(0, ctrl.searchResults.displayNum);
      }

      ctrl.setDisplayPage = function(page){
        ctrl.searchResults.page = page;
        var min = (page-1) * ctrl.searchResults.displayNum;
        var max = min + ctrl.searchResults.displayNum;
        ctrl.searchResults.displayed = ctrl.searchResults.filtered.slice(min, max);
      }
      ctrl.setDisplayPageSize = function(size){
        ctrl.searchResults.displayNum = size;
        var min = 0;
        var max = ctrl.searchResults.displayNum;
        ctrl.searchResults.totalPages = new Array(Math.ceil(ctrl.searchResults.filtered.length / ctrl.searchResults.displayNum));
        ctrl.searchResults.displayed = ctrl.searchResults.filtered.slice(min, max);
      }
      ctrl.setDisplaySection = function(section){
        ctrl.searchResults.displaySection = section;
        if(section == 'all'){
          ctrl.searchResults.filtered = ctrl.searchResults.all;
        }
        else {
          ctrl.searchResults.filtered = $.grep(ctrl.searchResults.all, function(e){ return e.section == section });
        }
        ctrl.searchResults.page = 1;
        ctrl.searchResults.totalPages = new Array(Math.ceil(ctrl.searchResults.filtered.length / ctrl.searchResults.displayNum));
        ctrl.searchResults.displayed = ctrl.searchResults.filtered.slice(0, ctrl.searchResults.displayNum);
      }

      function searchSolutions(query){
        var dataObj = ctrl.searchData.solutions;
        var results = [];
        for(var i =0; i < dataObj.length; i++){
          var data = dataObj[i];
          // check home page
          var result = solutionsObjSearch(data, query, true);
          if(result.title != "") {
            results.push(result);
          }
          // check each subpage
          for(var k=0; k < data.items.length; k++){
            var result = solutionsObjSearch(data.items[k], query, false);
            if(result.title != "") {
              results.push(result);
            }
          }
        }

        return results;
      }

      function solutionsObjSearch(data, query, header){
        var result = {"title":"", "section":"solutions", "content":"", "state":"", "hits":0};

        if(header){
          //if(data.sectionTitle.toLowerCase().indexOf(query.toLowerCase()) != -1){
          var matches = (data.sectionTitle.toLowerCase().match(new RegExp(query.toLowerCase(), "g")) || []).length;
          if(matches > 0){
            result.title = data.sectionTitle;
            result.content = data.content;
            result.state = data.state;
            result.hits += matches;
          }
        }
        else {
          //if(data.title.toLowerCase().indexOf(query.toLowerCase()) != -1){
          var matches = (data.title.toLowerCase().match(new RegExp(query.toLowerCase(), "g")) || []).length;
          if(matches > 0){
            result.title = data.title;
            result.content = data.content;
            result.state = data.state;
            result.hits += matches;
          }
        }

        for(var j =0; j < data.content.length; j++){
          var object = data.content[j];
          if(object.type == "text"){
            //if(object.content.toLowerCase().indexOf(query.toLowerCase()) != -1){
            var matches = (object.content.toLowerCase().match(new RegExp(query.toLowerCase(), "g")) || []).length;
            if(matches > 0){
              if(result.title == ""){
                result.title = (data.sectionTitle != undefined ? data.sectionTitle : data.title);
                result.content = data.content;
                result.state = data.state;
              }
              result.hits += matches;
            }
          }
          else if(object.type == "list"){
            var objList = $.grep(object.content, function(e){ return e.toLowerCase().indexOf(query.toLowerCase()) != -1 });
            if(objList.length > 0){
              if(result.title == "") {
                result.title = (data.sectionTitle != undefined ? data.sectionTitle : data.title);
                result.content = data.content;
                result.state = data.state;
              }
              result.hits += objList.length;
            }
          }
        }

        return result;
      }

      function searchNews(query){
        var dataObj = ctrl.searchData.news;
        var results = [];

        for(var i =0; i < dataObj.length; i++){
          var data = dataObj[i];
          // search title
          var titleMatches = (data.title.toLowerCase().match(new RegExp(query.toLowerCase(), "g")) || []).length;
          // search content
          var contentMatches = (data.content.toLowerCase().match(new RegExp(query.toLowerCase(), "g")) || []).length;
          if(titleMatches > 0 || contentMatches > 0){
            results.push({"title":data.title, "section":"news", "content":data.content, "state":"app", "hits":(titleMatches + contentMatches)});
          }
        }
        return results;
      }

      function searchContractVehicles(query){
        var dataObj = ctrl.searchData.contractVehicles;
        var results = [];

        for(var i =0; i < dataObj.length; i++){
          var data = dataObj[i];
          // search title
          var titleMatches = (data.sectionTitle.toLowerCase().match(new RegExp(query.toLowerCase(), "g")) || []).length;
          // search content
          var contentMatches = (data.content.toLowerCase().match(new RegExp(query.toLowerCase(), "g")) || []).length;
          if(titleMatches > 0 || contentMatches > 0){
            results.push({"title":data.sectionTitle, "section":"contractVehicles", "content":data.content, "state":"app", "hits":(titleMatches + contentMatches)});
          }
        }
        return results;
      }
      // Query string
      var paramID = $stateParams.searchquery;
      if(paramID != undefined && paramID != ""){
        ctrl.Id = paramID.replace(/-/gi, ' ');
        ctrl.getResults(ctrl.Id);
      }
      else {
        ctrl.selectedItem = ctrl.pageInfo;
      }

   },
   templateUrl: 'views/pageTemplates/search.html'
});
