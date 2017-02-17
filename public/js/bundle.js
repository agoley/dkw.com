'use strict';

var routes = angular.module('routes', ['ui.router']);
var directives = angular.module('directives', []);
var components = angular.module('components', ['ui.bootstrap', 'ngAnimate', 'ngSanitize']);

var dkwSite = angular.module('DKWSite',
									  ['ngMaterial',
										'ngAnimate',
										'ui.router',
										'directives',
										'components',
										'routes']);

dkwSite.config(function ($mdThemingProvider) {
	
	// working pallete for dkw
   $mdThemingProvider.definePalette('dkwPallete', {
    '50': '113d71', // color from existing site
    '100': 'ffcdd2',
    '200': 'ef9a9a',
    '300': 'e57373',
    '400': 'ef5350',
    '500': 'f44336',
    '600': 'e53935',
    '700': 'd32f2f',
    '800': 'c62828',
    '900': 'b71c1c',
    'A100': 'ff8a80',
    'A200': 'ff5252',
    'A400': 'ff1744',
    'A700': 'd50000',
    'contrastDefaultColor': 'light',    

    'contrastDarkColors': ['50', '100', 
     '200', '300', '400', 'A100'],
    'contrastLightColors': undefined    
  });
	
  $mdThemingProvider
    .theme('default')
    .primaryPalette('dkwPallete', {
      'default': '50',
    })
    .accentPalette('pink')
    .warnPalette('red')
    .backgroundPalette('blue-grey');
});
dkwSite.config(['$stateProvider', '$urlRouterProvider','$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
      $stateProvider
      .state('app', {
        url: "/",
        views: {
          'content':{
            //templateUrl: 'views/pageTemplates/home.html'
            component: 'home'
          }
        }
      })
      .state('app.about', {
        abstract: true,
        url: "about",
        views: {}
      })
      .state('app.about.messageFromPresident', {
        url: "/message-from-the-president",
        views: {
          'content@': {
            //templateUrl: 'views/pageTemplates/solutions/net-centric-solutions.html'
            component: 'messageFromPresident'
          }
        }
      })
      .state('app.solutions', {
        abstract: true,
        url: "solutions",
        views: {}
      })
      .state('app.solutions.netCentricSolutions', {
        url: "/net-centric-solutions/:Id",
        views: {
          'content@': {
            //templateUrl: 'views/pageTemplates/solutions/net-centric-solutions.html'
            component: 'netCentricSolutions'
          }
        }
      })
      .state('app.search', {
        url: "search/:searchquery",
        views: {
          'content@': {
            //templateUrl: 'views/pageTemplates/solutions/net-centric-solutions.html'
            component: 'search'
          }
        }
      });

      $urlRouterProvider.otherwise('/');
      //$locationProvider.html5Mode(true);
    }]);

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

// footer component for DKWSite
components.component('dkwFooter', {
   bindings: {},
	require: {
      parent: '^all'
    },
	controller: function () {
      var ctrl = this;
   },
   templateUrl: 'views/dkw_footer.html'
});



// header component for DKWSite
components.component('dkwHeader', {
	require: {
      parent: '^all'
    },
	controller: function ($timeout, $mdSidenav, $log, $state) {
      var ctrl = this;
		ctrl.isSearching = false;
		ctrl.menu;

		ctrl.ourCompanyMenu = {
			title: 'Our Company',
			backMenuTitle: 'Main',
			sections: [
			{
				name:'Company History',
				state:'app'
			},
			{
				name:'Message from the President',
				state:'app.about.messageFromPresident'
			},
			{
				name:'Senior Managment Team',
				state:'app'
			},
			{
				name:'Carol Inman Glover – Dedication',
				state:'app'
			}]
		};

		ctrl.enterpriseNetCentricSolutionsMenu = {
			title: 'Enterprise Net-Centric Solutions',
			backMenuTitle: 'Our Solutions',
			sections: [
				{
					name:'About Enterprise Net-Centric Solutions',
					state:'app.solutions.netCentricSolutions({Id:""})',
					params: {"Id":""}
				},
				{
					name:'IT Service Management',
					state:'app.solutions.netCentricSolutions({Id: "it-service-management" })',
					params: {"Id":"it-service-management" }
				},
				{
					name:'Mobile Solutions',
					state:'app.solutions.netCentricSolutions({Id: "mobile-solutions" })',
					params: {"Id": "mobile-solutions" }
				},
				{
					name:'Application Development',
					state:'app.solutions.netCentricSolutions({Id: "application-development" })',
					params: {"Id": "application-development" }
				
				},
				{
					name:'Operations and Maintenance',
					state:'app.solutions.netCentricSolutions({Id: "operations-and-maintenance" })',
					params: {"Id": "operations-and-maintenance" }
				},
				{
					name:'IV&V',
					state:'app.solutions.netCentricSolutions({Id: "iv&v" })',
					params: {"Id": "iv&v" }
				},
				{
					name:'Service Desk',
					state:'app.solutions.netCentricSolutions({Id: "service-desk" })',
					paarams: {"Id": "service-desk" }
				},
				{
					name:'C5ISR',
					state:'app.solutions.netCentricSolutions({Id: "c5isr" })',
					params: {"Id": "c5isr" }
				},
				{
					name:'Disabilty Accommodations',
					state:'app.solutions.netCentricSolutions({Id: "disability-accommodations" })',
					params: {"Id": "disability-accommodations" }
				},
				{
					name:'Systems Engineering',
					state:'app.solutions.netCentricSolutions({Id: "systems-engineering" })',
					params: {"Id": "systems-engineering" }
				},
				{
					name:'Healthcare IT',
					state:'app.solutions.netCentricSolutions({Id: "healthcare-it" })',
					params: {"Id": "healthcare-it" }
				},
				{
					name:'Datacenter Support',
					state:'app.solutions.netCentricSolutions({Id: "datacenter-support" })',
					params: {"Id": "datacenter-support" }
				}
			]
		};

		ctrl.contractVehiclesMenu = {
			title: 'Contract Vehicles',
			backMenuTitle: 'Main',
			sections: [
				{
					name:'SeaPort-E',
					type: 'submenu',
					submenu: "seaPortEMenu"
				},
				{
					name:'Alliant Small Business Governmentwide Acquisition Contract (GWAC)',
					state:'app'
				},
				{
					name:'8(a) STARS II Governmentwide Acquisition Contract (GWAC)',
					state:'app'
				},
				{
					name:'DHS EAGLE II INDEFINITE-DELIVERY, INDEFINITE-QUANTITY (IDIQ) HSHQDC-13-D-E2064',
					state:'app'
				},
				{
					name:'Operations and Maintenance',
					state:'app'}
				,
				{
					name:'GSA IT Schedule70 GS-35F-0704N',
					state:'app'
				},
				{
					name:'IRS TIPSS-4 SB Cyber and MBOSS',
					state:'app'
				},
				{
					name:'SPAWAR PILLARS (BFS, ICO, TCI)',
					state:'app'
				},
				{
					name:'NAVSEA Seaport-e Zone 1-7',
					state:'app'
				},
				{
					name:'FAA eFAST DTFAWA10A-00025',
					state:'app'
				},
				{
					name:'OPM IT Services BPA (OPM-32-12-A-0036)',
					state:'app'
				}
			]
		}

		ctrl.cyberSecurityIntelligenceServiceMenu = {
			title: 'Cyber Security and Intelligence Service',
			backMenuTitle: 'Our Solutions',
			sections: [
				{
					name:'Compliance and C&A',
					state:'app'
				},
				{
					name:'COOP/Disaster Recovery',
					state:'app'
				},
				{
					name:'Identity Access Management',
					state:'app'
				},
				{
					name:'Information Assurance',
					state:'app'
				}
			]
		};

		ctrl.managementConsultingMenu = {
			title: 'Management Consulting',
			backMenuTitle: 'Our Solutions',
			sections: [
				{
					name:'Acquisition Support',
					state:'app'
				},
				{
					name:'Business Process Reengineering',
					state:'app'
				},
				{
					name:'Change Management',
					state:'app'
				},
				{
					name:'IElectronic Records Management',
					state:'app'
				},
				{
					name:'Human Resources',
					state:'app'
				},
				{
					name:'Information Management',
					state:'app'
				},
				{
					name:"Program Management",
					state:'app'
				}
			]
		}

		ctrl.seaPortEMenu = {
			title: 'SeaPort-E',
			backMenuTitle: 'Contract Vehicles',
			sections: [
				{
					name:'About SeaPort-E & DKW',
					state:'app'
				},
				{
					name:'Points Of Contact',
					state:'app'
				},
				{
					name:'Team Members',
					state:'app'
				},
				{
					name:'Task Orders',
					state:'app'
				},
				{
					name:'Bids & Awards',
					state:'app'
				},
				{
					name:'Active RFPs',
					state:'app'
				},
				{
					name:'Quality Assurance',
					state:'app'
				},
				{
					name:'Functional Areas',
					state:'app'
				}
			]
		}

		ctrl.ourSolutionsMenu = {
			title: 'Our Solutions',
			backMenuTitle: 'Main',
			sections: [
				{
					name:'Enterprise Net-Centric Solutions',
					type: 'submenu',
					submenu: "enterpriseNetCentricSolutionsMenu"
				},
				{
					name:'Cyber Security and Intelligence Service',
					type: 'submenu',
					submenu: 'cyberSecurityIntelligenceServiceMenu'
				},
				{
					name:'Management Consulting',
					type: 'submenu',
					submenu: 'managementConsultingMenu'
				},
			]
		};

		ctrl.newsMenu = {
			title: 'News',
			backMenuTitle: 'Main',
			sections: [
				{name:'Recent Activity',
				state:'app'},
				{name:'Community',
				state:'app'},
				{name:'Awards',
				state:'app'}
			]
		};

		ctrl.careersMenu = {
			title: 'Careers',
			backMenuTitle: 'Main',
			sections: [
				{name:'About DKW',
				state:'app'},
				{name:'Job Oppertunities',
				state:'app'}
			]
		};

		ctrl.contactMenu = {
			title: 'Contact',
			backMenuTitle: 'Main',
			sections: [
				{name:'Contact Us',
				state:'app'},
				{name:'E-Verify',
				state:'app'}
			]
		};

		ctrl.mainMenu = {
			title: 'Main',
			sections: [
			{
				name: 'Home',
				state: 'app'
			},
			{
				name: 'Our Company',
				type: 'submenu',
				submenu: "ourCompanyMenu"
			},
			{
				name:'Our Solutions',
				type: 'submenu',
				submenu: "ourSolutionsMenu"
			},
			{name:'Quality Managment',
				state:'app'},
			{
				name:'Contract Vehicles',
				type: 'submenu',
				submenu: "contractVehiclesMenu"
			},
			{
				name:'News',
				type:'submenu',
				submenu: 'newsMenu'
			},
			{
				name:'Careers',
				type:'submenu',
				submenu: 'careersMenu'
			},
			{
				name:'Contact',
				type:'submenu',
				submenu: 'contactMenu'
			}]
		};

		ctrl.menu = ctrl.mainMenu;

		ctrl.onMenuBackClick = function () {
			switch (ctrl.menu.backMenuTitle) {
				case 'Our Solutions':
					ctrl.menu = ctrl.ourSolutionsMenu;
					break;
				case 'Contract Vehicles':
					ctrl.menu = ctrl.contractVehiclesMenu;
					break;
				default:
					ctrl.menu = ctrl.mainMenu;
					break;
			}
		}
		ctrl.onMenuItemClick = function (item) {
			console.log(item);
			if (item.type == 'submenu') {
				switch (item.submenu) {
					case 'ourCompanyMenu':
						ctrl.menu = ctrl.ourCompanyMenu;
						break;
					case 'ourSolutionsMenu':
						ctrl.menu = ctrl.ourSolutionsMenu;
						break;
					case 'enterpriseNetCentricSolutionsMenu':
						ctrl.menu = ctrl.enterpriseNetCentricSolutionsMenu;
						break;
					case 'cyberSecurityIntelligenceServiceMenu':
						ctrl.menu = ctrl.cyberSecurityIntelligenceServiceMenu;
						break;
					case 'managementConsultingMenu':
						ctrl.menu = ctrl.managementConsultingMenu;
						break;
					case 'contractVehiclesMenu':
						ctrl.menu = ctrl.contractVehiclesMenu;
						break;
					case 'seaPortEMenu':
						ctrl.menu = ctrl.seaPortEMenu;
						break;
					case 'newsMenu':
						ctrl.menu = ctrl.newsMenu;
						break;
					case 'careersMenu':
						ctrl.menu = ctrl.careersMenu;
						break;
					case 'contactMenu':
						ctrl.menu = ctrl.contactMenu;
						break;
					default:
						ctrl.menu = ctrl.mainMenu;
						break;
				}
			} else {
				var index = item.state.indexOf('(');
				if(index < 0) {
					index = item.state.length + 1;
				}
				var state = item.state.slice(0, index);
				$state.go(state, item.params);
				ctrl.close();
			}
		}

    	ctrl.toggleRight = buildToggler('right');
    	ctrl.isOpenRight = function(){
      	return $mdSidenav('right').isOpen();
    	};

		/**
     	* Supplies a function that will continue to operate until the
     	* time is up.
     	*/
    	function debounce(func, wait, context) {
      	var timer;

      	return function debounced() {
        		var context = this,
            args = Array.prototype.slice.call(arguments);
        		$timeout.cancel(timer);
        		timer = $timeout(function() {
          		timer = undefined;
          		func.apply(context, args);
        		}, wait || 10);
      	};
    	}

    	/**
     	* Build handler to open/close a SideNav; when animation finishes
     	* report completion in console
     	*/
    	function buildDelayedToggler(navID) {
      	return debounce(function() {
        	// Component lookup should always be available
			// since we are not using `ng-if`
        	$mdSidenav(navID)
				.toggle()
				.then(function () {
					//$log.debug("toggle " + navID + " is done");
          	});
      	}, 200);
    	}

    	function buildToggler(navID) {
      	return function() {
			// hide the social links if this is mobile
			if (window.innerWidth < 641) {
				$(".social-links").slideToggle("fast");
			}
			// Disable scrolling on main-body.
			$("body").addClass('not-scrollable');
			$("#dkw-body").addClass('overlay');

        	// Component lookup should always be available
			// since we are not using `ng-if`
        	$mdSidenav(navID)
				.toggle()
				.then(function () {
					// nothing currently
          	});
      	}
		}

		ctrl.close = function () {
      	// Component lookup should always be
			// available since we are not using `ng-if`
      	$mdSidenav('right').close()
				.then(function () {
				// show the social links if this is mobile
				if (window.innerWidth < 641) {
					$(".social-links").slideToggle("fast");
				}
				// Enable scrolling on the main body
				$("body").removeClass('not-scrollable');
				$("#dkw-body").removeClass('overlay');

        	});
    	};

		ctrl.toggleIsSearching = function () {
			$("#searchInput").slideToggle("fast");
		}

    ctrl.goToSearch = function (){
      if(ctrl.query.length > 0){
        ctrl.toggleIsSearching();
        $state.go('app.search', { searchquery: ctrl.query });
        ctrl.query = "";
      }
    }

   },
   templateUrl: 'views/dkw_header.html'
});

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

// footer component for DKWSite
components.component('netCentricSolutions', {
   bindings: {},
	controller: function ($stateParams, $sce, $location, $anchorScroll) {
      var ctrl = this;
      ctrl.pageInfo = {
        "sectionTitle":"Enterprise Net-Centric Solutions",
        "image":"images/teamwork.jpg",
        "state":'app.solutions.netCentricSolutions({Id:""})',
        "content":[
          {"type":"text", "content":"DKW designs, engineers, deploys, and maintains a full range of software, database, and web information systems through a structured, disciplined set of proven systems and application software engineering practices and life cycle maintenance techniques. These practices encompass the full life cycle development process from project analysis to project closeout for projects requiring the development or modification of systems and software. Our approach to defining the systems and software engineering practices is based on the Software Engineering Institute’s (SEI) Capability Maturity Model Integration (CMMI) Level 2 best practices, which have been assessed at Capability Maturity Model Integration (CMMI) Level 3."},
          {"type":"list", "content":["Since 2006, DKW has supported SPAWAR Atlantic in the application of sound software development, software engineering, and programming support, based our end-customers’ System Development Lifecycle (SDLC). Our team of software architects, engineers, developers, quality assurance testers, and technical writers have applied engineering, security, and scientific disciplines for a variety of financial management, medical, administrative, and logistics management applications, developing these applications using the classic waterfall or Agile development approach as best fit the client’s requirements.","DKW has been a significant contributor to the transformation of the Public Health Information System (PHIS), a critical USDA system used to protect our Nation’s food sources. This complex system consists of 800 database tables and 5.8 million lines of code."]},
          {"type":"text","content":"Since 2010, DKW has been providing CMMI DEV L3-appraised Information Technology Services (ITS) and Software Maintenance Support (SMS) for the PHIS application, which is a comprehensive, data-driven inspection system comprised of multiple applications that was developed to collect, mine and analyze inspection, surveillance and investigative data; predict hazards and vulnerabilities; communicate or report analysis results; and target resources to prevent or mitigate the risk of food borne illness and threats to the nation’s food supply. DKW has been the key enabler for USDA in implementing required enhancements to FSIS through waterfall, agile, and hybrid software development methodologies, and we have transitioned 11 USDA legacy systems in the process."},
          {"type":"text","content":"DKW has worked closely with FSIS as it implemented a phased approach to the continual development and maintenance of PHIS to ensure that FSIS employees and other users of PHIS could accomplish their primary objectives without interruption of business operations. This phased approach sought to stabilize, optimize, and then transform PHIS."},
          {"type":"list","content":["DKW is prime contractor in support of the Global Information Grid (GIG) Technical Guidance Federation (GTG-F), which is a suite of software applications on the NIPRNet and SIPRNet that provide technical guidance across the DISA Enterprise to achieve net-ready, interoperable, and supportable GIG systems. The GTG-F assists program managers, portfolio managers, engineers, and others in answering two questions critical to any IT or National Security Systems (NSS): (1) Where does the IT or NSS fit, as both a provider and consumer, into the GIG with regard to End-to-End technical performance, access to data and services, and interoperability?; and (2) What must an IT system or NSS do to ensure technical interoperability with the GIG? Several of the GIG Technical Guidance business processes have joined together as a single Web destination that has provided several advantages to our clients, such as ease of use, reduced hosting costs, and increasing data availability to the DoD community. DKW architects, designs, develops, implements, and provides maintenance for the GTG Federated Tools Suite. It is the authoritative source for ISP assessment data, GTPs with implementation guidance, and compliance. The GTG Federated Tools Suite program is a key enabler of the ongoing DISA-led IT enterprise transformation.","DKW modernized the Navy Fleet’s Sensitive Compartmented Information (SCI) Network Operations Center (NOC), which was formerly an antiquated network with an overly complex footprint that was difficult to manage. DKW analyzed the system architecture, the CONOPS, and the security environment to identify which areas needed to be improved and which vulnerabilities needed to be addressed. DKW discovered that the hardware and software were in some cases at end-of-life, a situation which the Navy deemed an unacceptable level of risk."]},
          {"type":"text","content":"DKW provided the Fleet SCI NOC with solutions that mitigated the risks, including replacement of older Cisco routers and Catalyst switches with upgraded components, reducing the overall footprint and complexity and increasing overall efficiency as well as virtualizing the hardware using VMware."}
        ]
      };
      ctrl.items = [
        {"title":"Application Development", "state":'app.solutions.netCentricSolutions({Id: "application-development" })', "image":"images/appdev3.jpg", "content":[{"type":"text", "content":"DKW’s Application Development service offerings provide application consulting, custom application development, testing, and quality assurance. We develop high quality business applications that increase operational efficiency and sustain your competitive advantage. DKW’s Applications Development allow your organization to take advantage of emerging technologies while offering a substantial reduction in capital expenditure, improved responsiveness to business demands, increased agility, and a faster time to market. We combine deep industry experience, highly skilled resources, and proven processes to deliver software solutions that fully support your goals. In addition, DKW’s cloud-based development platform allows us to develop and deliver applications across a multitude of platforms and technologies." }]},
        {"title":"C5ISR", "state":'app.solutions.netCentricSolutions({Id: "c5isr" })',"image":"images/c5sir2.jpg", "content":[{"type":"text", "content":"DKW’s C5ISR professionals have experience in the design, installation, configuration, testing, and/or going support of a wide range of systems, such as: Messaging & Communications Systems, Tactical Systems, Enterprise IT Infrastructure, Cyber Defense Systems, and Intelligence Systems. DKW is capable of supporting virtually any C5ISR support requirement, from the Enterprise-level engineering to end-user desktop support, both on GENSER and SCI platforms. Our mission-focused team is experienced in working around operational, technical, and administrative challenges to deliver our customers exceptional support. DKW’s services are highly customized to meet the unique needs and expectations of our customers." }]},
        {"title":"Datacenter Support", "state":'app.solutions.netCentricSolutions({Id: "datacenter-support" })',"image":"images/datacenter4.jpg", "content":[{"type":"text", "content":"DKW delivers scalable, reliable, and secure Data Center Support solutions to help maximize your existing technology investments and better meet your current and future technology needs. DKW offers some of the most reliable and affordable data center services in the industry. Our experienced staff of certified engineers are available at all hours of the day or night to provide the data center services you need to keep your business running. Our data centers offer various options for power, space, managed IT and hosting, virtual solutions, and cloud solutions. With years of experience managing, maintaining, and operating data center facilities, you can be assured that your critical data assets are secure and available." }]},
        {"title":"Healthcare IT", "state":'app.solutions.netCentricSolutions({Id: "healthcare-it" })',"image":"images/healthIT3.jpg", "content":[{"type":"text", "content":"DKW delivers a wide range of Healthcare IT solutions—from addressing back office functions and electronic medical records to clinical transformation and consumer engagement. DKW can assess your readiness from a technological perspective, build a Healthcare IT solutions roadmap, and bring your systems up to standard to support HIPAA requirements for patient data protection and support. Our commitment to value begins at architecture and extends to installation, monitoring, and maintenance. At DKW, we employ our cross-industry experts to bring the IT expertise in areas such as server consolidation, virtualization, remote access, high availability services, effective data communications architecture, wireless deployments, centralized vendor management, and proactive systems monitoring and management to healthcare. <br> Your medical practice can benefit from partnering with DKW for your technology support needs. We can help you make sense of technology and manage it efficiently and effectively so you can focus on your primary concern: patient care."}]},
        {"title":"IT Service Management", "state":'app.solutions.netCentricSolutions({Id: "it-service-management" })',"image":"images/itman2.jpg", "content":[{"type":"text", "content":"DKW’s IT Service Management solutions enable you to implement repeatable, measurable processes for defining, transitioning, delivering, and supporting services and assets throughout their life cycles. By integrating and automating Information Technology Infrastructure Library (ITIL) processes, you can utilize resources and control changes more efficiently, while streamlining the workload for your IT staff. With our comprehensive management capabilities, we can improve the quality of your services, prevent interruptions, and lower costs—all of which helps to ensure that your services stay aligned with your business requirements." }]},
        {"title":"IV&V", "state":'app.solutions.netCentricSolutions({Id: "iv&v" })',"image":"images/itmain1.jpg", "content":[{"type":"text", "content":"DKW’s Independent Verification and Validation (IV&V) processes provide an objective assessment of software products and processes throughout the software life cycle in an environment organizationally free from the influence, guidance, and control of the development effort. Our IV&V methodology is consistent with the latest systems engineering and process improvement models, and it has been assessed by the Capability Maturity Model Integration (CMMI)." }]},
        {"title":"Mobile Solutions", "state":'app.solutions.netCentricSolutions({Id: "mobile-solutions" })',"image":"images/mobilesolutions3.jpg", "content":[{"type":"text", "content":"DKW is a global provider of mobile solutions software for businesses of all sizes. By using our industry-leading experience, we develop easy-to-use, feature-rich mobile applications that extend the reach of your organization and employees. Our mobile experts are well equipped to help you extend existing technology solutions or develop new investments in cloud infrastructure to increase connectivity, collaboration, and productivity across your entire business." }]},
        {"title":"Operations and Maintenance", "state":'app.solutions.netCentricSolutions({Id: "operations-and-maintenance" })',"image":"images/oppmain1.png", "content":[{"type":"text", "content":"DKW provides a broad range of IT operations support and maintenance services for a number of Federal civilian and DoD customers; we assist over 20,000 users located across the U.S. and around the world. The expansion, diversity, and increased sophistication of technology combined with our customers’ broad multi-site install-base requires that DKW be able to provide integrated service support and service delivery in all areas of communications, problem resolution, configuration management, and hardware and software operations and maintenance." }]},
        {"title":"Service Desk", "state":'app.solutions.netCentricSolutions({Id: "service-desk" })',"image":"images/serviceDesk3.jpg", "content":[{"type":"text", "content":"DKW’s Service Desk operations are delivered through a consistent set of tools and processes, using an ITIL based approach to IT Service Delivery. DKW has diverse experience in transitioning customers from multiple Helpdesks to a centralized Service Desk, which also leads to standardization across enterprise operations." }]},
        {"title":"Systems Engineering", "state":'app.solutions.netCentricSolutions({Id: "systems-engineering" })',"image":"images/systemseng2.jpg", "content":[{"type":"text", "content":"DKW’s proven ability to deliver quality products, while also meeting budget and schedule requirements is what makes us the premier service provider in the industry. DKW’s comprehensive and accurate requirements management process ensures that systems with well-designed hardware and software features meet exactly what users want and need. Our experience is essential as we work closely with clients, partners, and end-users to clearly define user needs and system requirements, and we deliver value at each step in the process. DKW’s systems engineers integrate all engineering disciplines into an efficient, streamlined process that smoothly takes the project from concept to production to operation, in order to meet our customer’s business and technical goals." }]},
        {"title":"Disability Accommodations", "state":'app.solutions.netCentricSolutions({Id: "disability-accommodations" })',"image":"images/disability3.jpg", "content":[{"type":"text", "content":"DKW is committed to providing equal employment opportunity to all job seekers. If you are an individual with a disability who is unable to use our online tools to search and or apply for jobs, please send an email to disability-accommodations@199.230.117.121/dkwcomm and indicate the specifics of the assistance you need, or please contact the Disability Accommodations Office at 202-355-7400. This option is reserved only for individuals who are unable to use the online tools due to a disability or medical issue. It is not intended for other purposes or inquiries."}]}
      ];

      ctrl.selectedItem = {};
      ctrl.scrollToNav = function(title){
        var navLoc = title.replace(/ /gi, '-');
        //$location.hash(navLoc);
        //$anchorScroll();
      }

      ctrl.setID = function(title){
        return title.replace(/ /gi, '-');
      }

      ctrl.getItem = function(searchId){
        var results = $.grep(ctrl.items, function(e){ return e.title.toLowerCase() == searchId.toLowerCase()});
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

      var paramID = $stateParams.Id;
      if(paramID != undefined && paramID != ""){
        ctrl.Id = paramID.replace(/-/gi, ' ');
        ctrl.getItem(ctrl.Id);
        // Set anchor
        ctrl.scrollToNav(ctrl.selectedItem.title);
      }
      else {
        ctrl.selectedItem = ctrl.pageInfo;
      }

   },
   templateUrl: 'views/pageTemplates/solutions/net-centric-solutions.html'
});

// footer component for DKWSite
components.component('messageFromPresident', {
   bindings: {},
	controller: function () {
      var ctrl = this;
   },
   templateUrl: 'views/pageTemplates/about/message-from-the-president.html'
});

// footer component for DKWSite
components.component('search', {
   bindings: {},
	controller: function ($stateParams, $sce, $location) {
      var ctrl = this;
      ctrl.searchData = {
        "solutions":[
          {"sectionTitle":"Enterprise Net-Centric Solutions", "image":"images/teamwork.jpg","state":'app.solutions.netCentricSolutions({Id:""})',
          "content":[
            {"type":"text", "content":"DKW designs, engineers, deploys, and maintains a full range of software, database, and web information systems through a structured, disciplined set of proven systems and application software engineering practices and life cycle maintenance techniques. These practices encompass the full life cycle development process from project analysis to project closeout for projects requiring the development or modification of systems and software. Our approach to defining the systems and software engineering practices is based on the Software Engineering Institute’s (SEI) Capability Maturity Model Integration (CMMI) Level 2 best practices, which have been assessed at Capability Maturity Model Integration (CMMI) Level 3."},
            {"type":"list", "content":["Since 2006, DKW has supported SPAWAR Atlantic in the application of sound software development, software engineering, and programming support, based our end-customers’ System Development Lifecycle (SDLC). Our team of software architects, engineers, developers, quality assurance testers, and technical writers have applied engineering, security, and scientific disciplines for a variety of financial management, medical, administrative, and logistics management applications, developing these applications using the classic waterfall or Agile development approach as best fit the client’s requirements.","DKW has been a significant contributor to the transformation of the Public Health Information System (PHIS), a critical USDA system used to protect our Nation’s food sources. This complex system consists of 800 database tables and 5.8 million lines of code."]},
            {"type":"text","content":"Since 2010, DKW has been providing CMMI DEV L3-appraised Information Technology Services (ITS) and Software Maintenance Support (SMS) for the PHIS application, which is a comprehensive, data-driven inspection system comprised of multiple applications that was developed to collect, mine and analyze inspection, surveillance and investigative data; predict hazards and vulnerabilities; communicate or report analysis results; and target resources to prevent or mitigate the risk of food borne illness and threats to the nation’s food supply. DKW has been the key enabler for USDA in implementing required enhancements to FSIS through waterfall, agile, and hybrid software development methodologies, and we have transitioned 11 USDA legacy systems in the process."},
            {"type":"text","content":"DKW has worked closely with FSIS as it implemented a phased approach to the continual development and maintenance of PHIS to ensure that FSIS employees and other users of PHIS could accomplish their primary objectives without interruption of business operations. This phased approach sought to stabilize, optimize, and then transform PHIS."},
            {"type":"list","content":["DKW is prime contractor in support of the Global Information Grid (GIG) Technical Guidance Federation (GTG-F), which is a suite of software applications on the NIPRNet and SIPRNet that provide technical guidance across the DISA Enterprise to achieve net-ready, interoperable, and supportable GIG systems. The GTG-F assists program managers, portfolio managers, engineers, and others in answering two questions critical to any IT or National Security Systems (NSS): (1) Where does the IT or NSS fit, as both a provider and consumer, into the GIG with regard to End-to-End technical performance, access to data and services, and interoperability?; and (2) What must an IT system or NSS do to ensure technical interoperability with the GIG? Several of the GIG Technical Guidance business processes have joined together as a single Web destination that has provided several advantages to our clients, such as ease of use, reduced hosting costs, and increasing data availability to the DoD community. DKW architects, designs, develops, implements, and provides maintenance for the GTG Federated Tools Suite. It is the authoritative source for ISP assessment data, GTPs with implementation guidance, and compliance. The GTG Federated Tools Suite program is a key enabler of the ongoing DISA-led IT enterprise transformation.","DKW modernized the Navy Fleet’s Sensitive Compartmented Information (SCI) Network Operations Center (NOC), which was formerly an antiquated network with an overly complex footprint that was difficult to manage. DKW analyzed the system architecture, the CONOPS, and the security environment to identify which areas needed to be improved and which vulnerabilities needed to be addressed. DKW discovered that the hardware and software were in some cases at end-of-life, a situation which the Navy deemed an unacceptable level of risk."]},
            {"type":"text","content":"DKW provided the Fleet SCI NOC with solutions that mitigated the risks, including replacement of older Cisco routers and Catalyst switches with upgraded components, reducing the overall footprint and complexity and increasing overall efficiency as well as virtualizing the hardware using VMware."}
          ],
          "items":[
          {"title":"Application Development", "state":'app.solutions.netCentricSolutions({Id: "application-development" })', "image":"images/appdev2.jpg", "content":[{"type":"text", "content":"DKW’s Application Development service offerings provide application consulting, custom application development, testing, and quality assurance. We develop high quality business applications that increase operational efficiency and sustain your competitive advantage. DKW’s Applications Development allow your organization to take advantage of emerging technologies while offering a substantial reduction in capital expenditure, improved responsiveness to business demands, increased agility, and a faster time to market. We combine deep industry experience, highly skilled resources, and proven processes to deliver software solutions that fully support your goals. In addition, DKW’s cloud-based development platform allows us to develop and deliver applications across a multitude of platforms and technologies." }]},
          {"title":"C5ISR", "state":'app.solutions.netCentricSolutions({Id: "c5isr" })',"image":"images/c5sir1.jpg", "content":[{"type":"text", "content":"DKW’s C5ISR professionals have experience in the design, installation, configuration, testing, and/or going support of a wide range of systems, such as: Messaging & Communications Systems, Tactical Systems, Enterprise IT Infrastructure, Cyber Defense Systems, and Intelligence Systems. DKW is capable of supporting virtually any C5ISR support requirement, from the Enterprise-level engineering to end-user desktop support, both on GENSER and SCI platforms. Our mission-focused team is experienced in working around operational, technical, and administrative challenges to deliver our customers exceptional support. DKW’s services are highly customized to meet the unique needs and expectations of our customers." }]},
          {"title":"Datacenter Support", "state":'app.solutions.netCentricSolutions({Id: "datacenter-support" })',"image":"images/datacenter1.jpg", "content":[{"type":"text", "content":"DKW delivers scalable, reliable, and secure Data Center Support solutions to help maximize your existing technology investments and better meet your current and future technology needs. DKW offers some of the most reliable and affordable data center services in the industry. Our experienced staff of certified engineers are available at all hours of the day or night to provide the data center services you need to keep your business running. Our data centers offer various options for power, space, managed IT and hosting, virtual solutions, and cloud solutions. With years of experience managing, maintaining, and operating data center facilities, you can be assured that your critical data assets are secure and available." }]},
          {"title":"Healthcare IT", "state":'app.solutions.netCentricSolutions({Id: "healthcare-it" })',"image":"images/healthIT1.jpg", "content":[{"type":"text", "content":"DKW delivers a wide range of Healthcare IT solutions—from addressing back office functions and electronic medical records to clinical transformation and consumer engagement. DKW can assess your readiness from a technological perspective, build a Healthcare IT solutions roadmap, and bring your systems up to standard to support HIPAA requirements for patient data protection and support. Our commitment to value begins at architecture and extends to installation, monitoring, and maintenance. At DKW, we employ our cross-industry experts to bring the IT expertise in areas such as server consolidation, virtualization, remote access, high availability services, effective data communications architecture, wireless deployments, centralized vendor management, and proactive systems monitoring and management to healthcare. <br> Your medical practice can benefit from partnering with DKW for your technology support needs. We can help you make sense of technology and manage it efficiently and effectively so you can focus on your primary concern: patient care."}]},
          {"title":"IT Service Management", "state":'app.solutions.netCentricSolutions({Id: "it-service-management" })',"image":"images/itman2.jpg", "content":[{"type":"text", "content":"DKW’s IT Service Management solutions enable you to implement repeatable, measurable processes for defining, transitioning, delivering, and supporting services and assets throughout their life cycles. By integrating and automating Information Technology Infrastructure Library (ITIL) processes, you can utilize resources and control changes more efficiently, while streamlining the workload for your IT staff. With our comprehensive management capabilities, we can improve the quality of your services, prevent interruptions, and lower costs—all of which helps to ensure that your services stay aligned with your business requirements." }]},
          {"title":"IV&V", "state":'app.solutions.netCentricSolutions({Id: "iv&v" })',"image":"images/ivv2.png", "content":[{"type":"text", "content":"DKW’s Independent Verification and Validation (IV&V) processes provide an objective assessment of software products and processes throughout the software life cycle in an environment organizationally free from the influence, guidance, and control of the development effort. Our IV&V methodology is consistent with the latest systems engineering and process improvement models, and it has been assessed by the Capability Maturity Model Integration (CMMI)." }]},
          {"title":"Mobile Solutions", "state":'app.solutions.netCentricSolutions({Id: "mobile-solutions" })',"image":"images/mobilesolutions1.jpg", "content":[{"type":"text", "content":"DKW is a global provider of mobile solutions software for businesses of all sizes. By using our industry-leading experience, we develop easy-to-use, feature-rich mobile applications that extend the reach of your organization and employees. Our mobile experts are well equipped to help you extend existing technology solutions or develop new investments in cloud infrastructure to increase connectivity, collaboration, and productivity across your entire business." }]},
          {"title":"Operations and Maintenance", "state":'app.solutions.netCentricSolutions({Id: "operations-and-maintenance" })',"image":"images/itmain1.jpg", "content":[{"type":"text", "content":"DKW provides a broad range of IT operations support and maintenance services for a number of Federal civilian and DoD customers; we assist over 20,000 users located across the U.S. and around the world. The expansion, diversity, and increased sophistication of technology combined with our customers’ broad multi-site install-base requires that DKW be able to provide integrated service support and service delivery in all areas of communications, problem resolution, configuration management, and hardware and software operations and maintenance." }]},
          {"title":"Service Desk", "state":'app.solutions.netCentricSolutions({Id: "service-desk" })',"image":"images/serviceDesk1.jpg", "content":[{"type":"text", "content":"DKW’s Service Desk operations are delivered through a consistent set of tools and processes, using an ITIL based approach to IT Service Delivery. DKW has diverse experience in transitioning customers from multiple Helpdesks to a centralized Service Desk, which also leads to standardization across enterprise operations." }]},
          {"title":"Systems Engineering", "state":'app.solutions.netCentricSolutions({Id: "systems-engineering" })',"image":"images/systemseng1.jpg", "content":[{"type":"text", "content":"DKW’s proven ability to deliver quality products, while also meeting budget and schedule requirements is what makes us the premier service provider in the industry. DKW’s comprehensive and accurate requirements management process ensures that systems with well-designed hardware and software features meet exactly what users want and need. Our experience is essential as we work closely with clients, partners, and end-users to clearly define user needs and system requirements, and we deliver value at each step in the process. DKW’s systems engineers integrate all engineering disciplines into an efficient, streamlined process that smoothly takes the project from concept to production to operation, in order to meet our customer’s business and technical goals." }]},
          {"title":"Disability Accommodations", "state":'app.solutions.netCentricSolutions({Id: "disability-accommodations" })',"image":"images/disability1.jpg", "content":[{"type":"text", "content":"DKW is committed to providing equal employment opportunity to all job seekers. If you are an individual with a disability who is unable to use our online tools to search and or apply for jobs, please send an email to disability-accommodations@199.230.117.121/dkwcomm and indicate the specifics of the assistance you need, or please contact the Disability Accommodations Office at 202-355-7400. This option is reserved only for individuals who are unable to use the online tools due to a disability or medical issue. It is not intended for other purposes or inquiries."}]}
        ]}],
        "news":[
          {"date":"", "title":"DKW is now certified as a Local Disadvantaged Business Enterprise", "image":"","content":"DKW is now certified as a Local Disadvantaged Business Enterprise (LDBE) with the Metropolitan Washington Airports Authority (Authority) Expiration Date January 20, 2018"},
          {"date":"", "title":"DKW Selected By the U.S. Marine Corps to Manage Eight Data Centers in San Diego, California", "image":"","content":"DKW was recently awarded a $4.5 million dollar contract with the U.S. Marine Corps to provide network analysis, data center planning, IT project management, network and facilities engineering, and implementation and testing of network designs for eight data centers located in San Diego, California."},
          {"date":"", "title":"DKW Awarded New Contract to Provide IT Support Services to the U.S. Department of Interior", "image":"","content":"The U.S. Department of Interior, Office of Natural Resources Revenue (ONRR) recently selected DKW Communications, Inc. to support its IT operations at its Denver Federal Center in Lakewood, Colorado. ONRR is responsible for the management of revenues associated with Federal offshore and Federal and American Indian onshore mineral leases, as well as revenues received as a result of offshore renewable energy efforts. ONRR also ensures that the nation’s Federal and American Indian natural resources revenues are accurately reported and paid in compliance with laws, regulations, and lease terms. DKW will provide applications development and Documentum support, IT helpdesk support, and database administration."},
          {"date":"", "title":"DKW Awarded $10 Million Dollar Contract to Provide Software Development Services to the United States Department of Agriculture (USDA), Food Safety and Inspection Service", "image":"","content":"The Unites States Department of Agriculture (USDA), Food Safety and Inspection Service (FSIS) selected DKW to provide ongoing software maintenance for its Public Health Information System (PHIS) which supports FSIS in protecting the U.S. food supply by ensuring that our commercial supply of meat, poultry, and egg products is safe, wholesome, and correctly labeled and packaged."}
        ],
        "contractVehicles":[
          {"sectionTitle":"Alliant Small Business Governmentwide Acquisition Contract (GWAC)", "content":"This contract vehicle provides a common framework and terminology for defining and understanding the components of an IT solution. Alignment with the FEA and DoDEA enables Alliant Small Business to evolve over time as technologies change without requiring a technical refresh. It also conforms to the Office of Management and Budget (OMB) policy mandates for reporting on IT investments. Low 0.75 percent contract access fee GWACs have the same low fee as GSA Schedules. Access to all types of task orders Alliant Small Business features fixed-price, cost-reimbursement, labor-hour, and time-and-materials task order types, which provide greater flexibility in procuring different types of IT products and services and meeting your mission requirements. How Federal agencies have used Alliant Small Business Operating an information assurance response center One small business was awarded a $52 million task order to operate the Department of Energy’s National Nuclear Security Administration’s (NNSA) Information Assurance Response Center (NIARC) in Las Vegas, NV. Providing IT and cyber support for a CIO’s office The Department of Energy’s National Nuclear Security Administration (NNSA), Office of the Chief Information Officer awarded a $70 million task order to a small business. Encouraging maximum small business utilization in contracting The Department of Defense issued a memo on July 14, 2011, encouraging the use of Alliant Small Business, among other small business GWACs, to meet the Department’s small business contracting and information technology needs. Read the memo (PDF, 145 KB). Increasing competition while reducing acquisition cycle time The Department of the Navy recently conducted a General IT Development and Support Services strategic sourcing analysis, which focused on cost savings. They recommended increasing the use of existing contract vehicles to generate greater competition while reducing cycle time, including the Alliant Small Business GWAC. Alliant Small Business will work with the Navy team to establish and deliver training opportunities. The link to this Web page is www.gsa.gov/alliantsb."},
          {"sectionTitle":"8(a) STARS II Governmentwide Acquisition Contract (GWAC)", "content":"Two constellations based on industry accreditation 8(a) STARS II industry partners are classified in two constellations. Industry partners in both constellations have competitive pricing and technical proficiency. Constellation II also includes industry partners with an additional industry credential, such as Capability Maturity Model Integration (CMMI) or ISO 9001 (quality management system). Access to multiple types of task orders 8(a) STARS II offers fixed price, time and materials, labor hour, and blended task order types, which provides greater flexibility in procuring different types of IT products and services and meeting your mission requirements. How Federal agencies have used 8(a) STARS II Encouraging maximum small business utilization in contracting The Department of Defense issued a memo on July 14, 2011, encouraging the use of 8(a) STARS II, among other small business GWACs, to meet the Department’s small business contracting and IT needs. Read the July 14, 2011 memo (PDF, 146 KB).The link to this Web page is www.gsa.gov/stars2."},
          {"sectionTitle":"OPM IT Services BPA (OPM-32-12-A-0036)", "content":"The Office of Personnel Management (OPM) has issued an IT Services BPA (Blanket Purchase Agreement) to provide the OPM Office of the Chief Information Officer (CIO) with numerous IT services, including network operations and security, data center operations, applications and database software development, Web development, and other support services. The Chief Information Officer, Operations Technology Management, Network Management (NM) supports the OPM mission by managing and operating OPM’s IT infrastructure. This includes the implementation, management, and maintenance of workstations, local and wide area networks (LAN/WAN), data communications, servers, storage area networks (SAN), and IT security initiatives. A BPA is not a contract; rather, it is used by approved agencies to order and pay for supplies and services that they purchase from approved vendors. In the case of the OPM IT Services BPA, the approved vendor is DKW Communications, Inc., the prime contractor on Special Technical Area (STA) 1, which entails Application Systems and Database Development and Maintenance and Special Technical Area (STA) 4, which entails Network and Server Operations and Maintenance, Security Services, Project Management, and Engineering."}
        ]
      };

      ctrl.searchResults = {"all": [], "filtered":[], "displayed":[], "displaySection":"all", "page":1, "totalPages":[], "displayNum":10, "displayInc":[10,20,50] };

      ctrl.highlightSearch = function(text){
          if(text == undefined){
            return text;
          }
          else {
            return $sce.trustAsHtml(text.replace(new RegExp(ctrl.Id, 'gi'), '<span class="highlightedText">$&</span>'));
          }
      }
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

directives.directive('backImg', ['$window', function($window) {
  return {
    restrict: 'EA',
    link: function ($scope, element, attrs) {
      var url = attrs.backImg;
      element.css({'background-image': 'url(' + url +')'});
    }
  }
}]);

directives.directive('heroImg', ['$window', function($window) {
  return {
    restrict: 'EA',
    link: function ($scope, element, attrs) {
      var mobileSize = 640;

      var initialWidth = $window.outerWidth;
      if($window.outerWidth < mobileSize){
        element.css({'height': ($window.outerHeight - 135) });
      }

      //$window.resize(function resize(){
      angular.element($window).bind('resize', function(){
        if(initialWidth != $window.outerWidth){
          if($window.outerWidth < mobileSize){
            element.css({'height': ($window.outerHeight - 135) });
          }
          else {
            element.removeAttr("style");
            //element.style.height = null;
          }
          initialWidth = $window.outerWidth;
        }
      });

    }
  }
}]);

directives.directive('randomMotion', ['$timeout', '$window', function($timeout, $window) {
  return {
    restrict: 'EA',
    link: function ($scope, element, attrs) {
      //console.log("Start Motion");
      // Randomly Set Postion & Velocity
      var maxVelocity = 50;
      var parentContainer = element[0].offsetParent;

      var maxX = parentContainer.clientWidth - 100;
      var maxY = parentContainer.clientHeight - 75;

      //var posX = Math.min(0, Math.max(20, (Math.random() * 0)));
      //var posY = Math.min(0, Math.max(20, (Math.random() * 10)));

      var posX = ((Math.random() * maxX) + 1);
      var posY = ((Math.random() * maxY) + 1);

      var velX = (Math.random() * maxVelocity);
      var velY = (Math.random() * maxVelocity);
      var timestamp = null;

      if($window.outerWidth > 640){
        // Move Object
        (function tick() {
          var now = new Date().getTime();
          var borderX = element[0].clientWidth + 5;
          var borderY = element[0].clientHeight + 5;

          maxX = parentContainer.clientWidth - borderX;
          maxY = parentContainer.clientHeight - borderY;

          var elapsed = (timestamp || now) - now;
          timestamp = now;
          posX += elapsed * velX / 1000;
          posY += elapsed * velY / 1000;

          if (posX > maxX) {
              posX = 2 * maxX - posX;
              velX *= -1;
          }
          if (posX < 1) {
              posX = 10;
              velX *= -1;
          }
          if (posY > maxY) {
              posY = 2 * maxY - posY;
              velY *= -1;
          }
          if (posY < 1) {
              posY = 10;
              velY *= -1;
          }
          // Set Position to $element top and left
          element.css({ "top": posY, "left": posX });          
          // Loop to Move object
          $timeout(tick, 30);
        })();
      }
    }
  }
}]);
