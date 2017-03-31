// footer component for DKWSite
components.component('home', {
   bindings: {},
	controller: function () {
      var ctrl = this;
      // variables
      ctrl.myInterval = 7000;
      ctrl.active = 0;

      ctrl.slides = [
        {"id":0, "type":"img", "image":"images/carousel/washington-dc7.jpg", "title":"Industry, Innovation, Influence", "text":""},
        {"id":1, "type":"img", "image":"images/carousel/washington-dc2.jpg", "title":"Over a Decade of Experience", "text":"Focusing on enterprise solutions and services for more than 70 Federal Government customers"},
        {"id":2, "type":"img", "image":"images/carousel/washington-dc1.jpg", "title":"The DKW Commitment", "text":"Our Center of Excellence (COEs) ensure that our customers receive the superior knowledge and expertise needed to rapidly launch applications without sacrificing quality"},
        {"id":3, "type":"video", "location":"images/carousel/washington-dc-vid3.mov", "image":"images/carousel/washington-dc-vid2-still.jpg", "title":"Our Distinction", "text":"What distinguishes DKW is the call to public service that our people bring to the job, We are motivated to perform at a high level"},
      ];
      // Auto play video
      /*var checkVideoPlayback = function () {
        var video = document.getElementById("carouselVideo");
        if (video != null && video.paused) {
          video.play();
        }
  		}();

      window.onresize = function(){
      	setTimeout(function(){
          if (window.innerWidth < 715) {
            checkVideoPlayback();
      		} else {  }
  			}, 500);
  		};*/

      ctrl.solutions = [
        {"title":"Enterprise Net-Centric Solutions", "state":'app.solutions.netCentricSolutions({Id:""})',"image":"images/teamwork.jpg", "content":"DKW designs, engineers, deploys, and maintains a full range of software, database, and web information systems through a structured, disciplined set of proven systems and application software engineering practices and life cycle maintenance techniques. These practices encompass the full life cycle development process from project analysis to project closeout for projects requiring the development or modification of systems and software. Our approach to defining the systems and software engineering practices is based on the Software Engineering Institute’s (SEI) Capability Maturity Model Integration (CMMI) Level 2 best practices, which have been assessed at Capability Maturity Model Integration (CMMI) Level 3."},
        {"title":"Cyber Security and Intelligence Service", "state":'app.solutions.cyberSecurityAndIntelligence({Id:""})',"image":"images/cybersecurity.jpg", "content":"DKW’s Cyber Security Solutions are designed to assist national level organizations and cyber security operation centers (CSOCs) in detecting and thwarting cyber attacks. Our portfolio includes DKW’s Network Security Solutions and additional secure Services. DKW’s Network Security Solutions feature a rich product portfolio designed to help national organizations and CSOCs detect and thwart cyber attacks."},
        {"title":"Management Consulting", "state":'app.solutions.managementConsulting({Id:""})',"image":"images/management.jpg", "content":"Your mission success is our priority. For more than a decade, our customers have relied on DKW’s professional and quick response capabilities. Whether analyzing and reengineering current business processes or assisting you in meeting ever-changing regulations and standards, DKW partners with you to ensure mission success."}
        ];

      ctrl.selectedSolution = ctrl.solutions[0];

      ctrl.image1 = "images/pageImages/business2.jpg";
      ctrl.image2 = "images/businessMeeting.jpg";


      ctrl.keyClients = [
        {"id":0, "title":"Defense Information Systems Agency","image":"images/keyClients/image001.jpg","url":"http://www.disa.mil/"},
        {"id":1, "title":"The U.S. Department of the Treasury","image":"images/keyClients/image003.png","url":"https://www.treasury.gov/Pages/default.aspx"},
        {"id":2, "title":"The U.S. Department of Homeland Security","image":"images/keyClients/image005.jpg","url":"https://www.dhs.gov/"},
        {"id":3, "title":"The U.S. DEPARTMENT OF AGRICULTURE","image":"images/keyClients/image007.png","url":"https://www.usda.gov/"},
        {"id":4, "title":"United States Agency International Development","image":"images/keyClients/image009.jpg","url":"https://www.usaid.gov/"},
        {"id":5, "title":"General Services Administration","image":"images/keyClients/image015.jpg","url":"https://www.gsa.gov/portal/category/100000"},
        {"id":6, "title":"Small Business Administration","image":"images/keyClients/image021.png","url":"https://www.sba.gov/"},
        {"id":7, "title":"Internal Revenue Service","image":"images/keyClients/image023.jpg","url":"https://www.irs.gov/"},
        {"id":8, "title":"Seaport","image":"images/keyClients/image025.png","url":"http://www.seaport.navy.mil/"},
        {"id":9, "title":"Space and Naval Warfare System Command","image":"images/keyClients/image027.png","url":"http://www.public.navy.mil/spawar/Pages/default.aspx"},
        {"id":10, "title":"U.S. Department of Housing and Urban Development","image":"images/keyClients/image031.jpg","url":"https://portal.hud.gov/hudportal/HUD"},
        {"id":11, "title":"Federal Housing Finance Agency","image":"images/keyClients/image033.jpg","url":"https://www.fhfa.gov/"}
      ];
      ctrl.keyCertifications = [
        {"id":0, "title":"Capability Maturity Model Integration","image":"images/keyClients/image01.jpg","url":""},
        {"id":1, "title":"EAGLE II","image":"images/keyClients/image011.jpg","url":"https://www.dhs.gov/eagle-ii"},
        {"id":2, "title":"GSA Alliant","image":"images/keyClients/image019.jpg","url":"https://www.gsa.gov/portal/content/104793"},
        {"id":3, "title":"eFast","image":"images/keyClients/image013.png","url":"https://www.faa.gov/about/office_org/headquarters_offices/afn/offices/acquisitions/efast/"}
      ];


		ctrl.news = {};
		ctrl.minStory = true;
		ctrl.news.interiorTextSmall = "The U.S. Department of Interior, Office of Natural Resources Revenue (ONRR) recently selected DKW Communications, Inc. to support its IT operations at its Denver Federal Center in Lakewood, Colorado. ONRR is responsible for the management of revenues associated with Federal offshore and Federal and American Indian onshore mineral leases, as well as revenues received as...";
		ctrl.news.interiorTextAll = "The U.S. Department of Interior, Office of Natural Resources Revenue (ONRR) recently selected DKW Communications, Inc. to support its IT operations at its Denver Federal Center in Lakewood, Colorado. ONRR is responsible for the management of revenues associated with Federal offshore and Federal and American Indian onshore mineral leases, as well as revenues received as a result of offshore renewable energy efforts. ONRR also ensures that the nation’s Federal and American Indian natural resources revenues are accurately reported and paid in compliance with laws, regulations, and lease terms. DKW will provide applications development and Documentum support, IT helpdesk support, and database administration.";

		ctrl.news.interiorText = ctrl.news.interiorTextSmall;

      // functions
      /*Solutions*/
      ctrl.isSelected = function(item){
        return (ctrl.selectedSolution == item);
      }
      ctrl.changeSelected = function(item){
        ctrl.selectedSolution = item;
      }

      /*Carousel*/
      ctrl.toggleInterval = function() {
        ctrl.myInterval = (ctrl.myInterval > 0 ? 0 : 5000);
      }
      ctrl.isInMotion = function() {
        return (ctrl.myInterval > 0);
      };

		ctrl.moreNews= function() {
			ctrl.news.interiorText = ctrl.news.interiorTextAll;
			ctrl.minStory = false;
		}

		ctrl.lessNews= function() {
			ctrl.news.interiorText = ctrl.news.interiorTextSmall;
			ctrl.minStory = true;
		}
    /* Key Clients*/
    ctrl.clientCtrl = function(direction, keyid) {
      var className = '.'+keyid+'-key';
      if(direction == "left"){
        // Move Left to Right
        $(className).animate({ scrollLeft: "-=200px"}, "slow");
      }
      else if(direction == "right"){
        // Move Right to Left
        $(className).animate({ scrollLeft: "+=200px"}, "slow");
      }
    }
    ctrl.checkCtrlActive = function(direction, keyid){
      var className = '.'+keyid+'-key';
      if(direction == "left"){
        return ($(className)[0].scrollLeft == 0);
      }
      else if(direction == "right"){
        return ( (($(className)[0].scrollLeft * 2) > $(className)[0].scrollWidth) || ($(className)[0].scrollWidth <= $(className)[0].offsetWidth));
      }
    }
   },
   templateUrl: 'views/pageTemplates/home/home.html'
});

/*ADD to app/assets/libs/angular-bootstrap/ui-bootstrap-tpls.js line 506*/
/*
$scope.isInMotion = function() {
  return ($scope.interval > 0);
};
$scope.toggleInterval = function() {
  $scope.interval = ($scope.interval > 0 ? 0 : 7000);
  if($scope.interval > 0) { $scope.next(); }
};
*/
