export default class CoveragesInfoService {
    constructor($http) {
        this.$http = $http;
    }
    getAllCoverageOptions() {
        return this.$http.get('./mocks/coverages.json')
    }
}
CoveragesInfoService.$inject = ['$http']