

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
