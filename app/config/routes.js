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
