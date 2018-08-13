routes.$inject = ['$stateProvider', '$urlRouterProvider'];
export default function routes($stateProvider, $urlRouterProvider) {
  //Hardcode coverage Id for now. Coverage Id is 12345
  $urlRouterProvider.when('/', '/viewcoverage/12345')
  $urlRouterProvider.otherwise('/viewcoverage/12345')
  $stateProvider
    .state('viewcoverage', {
      url: '/viewcoverage/:id',
      template: require('./../views/viewCoverage.html'),
      controller: 'ViewCoverageDetailsController'
    })
    .state('editcoverage', {
      url: '/editcoverage/:id',
      template: require('./../views/editCoverage.html'),
      controller: 'EditCoverageDetailsController'
    })
}