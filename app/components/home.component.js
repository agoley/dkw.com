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
        //{"id":3, "type":"img", "image":"images/carousel/washington-dc3.jpg", "title":"Our Distinction", "text":"What distinguishes DKW is the call to public service that our people bring to the job, We are motivated to perform at a high level"},
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
        {"title":"Cyber Security and Intelligence Service", "state":'',"image":"images/cybersecurity.jpg", "content":"DKW’s Cyber Security Solutions are designed to assist national level organizations and cyber security operation centers (CSOCs) in detecting and thwarting cyber attacks. Our portfolio includes DKW’s Network Security Solutions and additional secure Services. DKW’s Network Security Solutions feature a rich product portfolio designed to help national organizations and CSOCs detect and thwart cyber attacks."},
        {"title":"Management Consulting", "state":'',"image":"images/management.jpg", "content":"Your mission success is our priority. For more than a decade, our customers have relied on DKW’s professional and quick response capabilities. Whether analyzing and reengineering current business processes or assisting you in meeting ever-changing regulations and standards, DKW partners with you to ensure mission success."}
        ];

      ctrl.selectedSolution = ctrl.solutions[0];

      ctrl.image1 = "images/software1.jpg";
      ctrl.image2 = "images/businessMeeting.jpg";


      ctrl.keyClients = [
        {"id":0, "title":"Defense Information Systems Agency","image":"images/keyClients/image001.jpg","url":"http://www.disa.mil/"},
        {"id":1, "title":"Capability Maturity Model Integration","image":"images/keyClients/image01.jpg","url":""},
        {"id":2, "title":"The U.S. Department of the Treasury","image":"images/keyClients/image003.png","url":"https://www.treasury.gov/Pages/default.aspx"},
        {"id":3, "title":"The U.S. Department of Homeland Security","image":"images/keyClients/image005.jpg","url":"https://www.dhs.gov/"},
        {"id":4, "title":"","image":"images/keyClients/image007.jpg","url":""},
        {"id":5, "title":"","image":"images/keyClients/image009.jpg","url":""},
        {"id":6, "title":"","image":"images/keyClients/image011.jpg","url":""},
        {"id":7, "title":"","image":"images/keyClients/image013.jpg","url":""},
        {"id":8, "title":"","image":"images/keyClients/image015.jpg","url":""},
        {"id":9, "title":"","image":"images/keyClients/image019.jpg","url":""},
        {"id":10, "title":"","image":"images/keyClients/image021.jpg","url":""},
        {"id":11, "title":"","image":"images/keyClients/image023.jpg","url":""},
        {"id":12, "title":"","image":"images/keyClients/image025.jpg","url":""},
        {"id":13, "title":"","image":"images/keyClients/image027.jpg","url":""},
        {"id":14, "title":"","image":"images/keyClients/image031.jpg","url":""},
        {"id":15, "title":"","image":"images/keyClients/image033.jpg","url":""}
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
    ctrl.clientCtrl = function(direction) {
      if(direction == "left"){
        // Move Left to Right
        $('.client-container').animate({ scrollLeft: "-=200px"}, "slow");
      }
      else if(direction == "right"){
        // Move Right to Left
        $('.client-container').animate({ scrollLeft: "+=200px"}, "slow");
      }
    }
    ctrl.checkCtrlActive = function(direction){
      if(direction == "left"){
        return ($('.client-container')[0].scrollLeft == 0);
      }
      else if(direction == "right"){
        return (($('.client-container')[0].scrollLeft * 2) > $('.client-container')[0].scrollWidth);
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
