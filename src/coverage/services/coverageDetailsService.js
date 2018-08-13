export default class CoverageDetailsService {
    constructor($http) {
        this.$http = $http;
    }
    getCoverageDetails (id) {
        return this.$http.get('./mocks/vehicle.json')
    }
}
CoverageDetailsService.$inject = ['$http']