dkwSite.config(['$stateProvider', '$urlRouterProvider','$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
      $stateProvider
      .state('app', {
        url: "/",
        views: {
          'content':{
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
            component: 'messageFromPresident'
          }
        }
      })
      .state('app.about.companyHistory', {
        url: "/company-history",
        views: {
          'content@': {
            component: 'companyHistory'
          }
        }
      })
      .state('app.solutions', {
        abstract: true,
        url: "our-solutions",
        views: {}
      })
      .state('app.solutions.netCentricSolutions', {
        url: "/net-centric-solutions/:Id",
        views: {
          'content@': {
            component: 'solutions'
          }
        }
      })
      .state('app.solutions.cyberSecurityAndIntelligence', {
        url: "/cyber-security-and-intelligence/:Id",
        views: {
          'content@': {
            component: 'solutions'
          }
        }
      })
      .state('app.solutions.managementConsulting', {
        url: "/management-consulting/:Id",
        views: {
          'content@': {
            component: 'solutions'
          }
        }
      })
      .state('app.search', {
        url: "search/:searchquery",
        views: {
          'content@': {
            component: 'search'
          }
        }
      });

      $urlRouterProvider.otherwise('/');
      $locationProvider.html5Mode(true);
    }]);
