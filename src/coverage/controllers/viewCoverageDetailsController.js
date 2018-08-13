import CoverageDetailsService from '../services/coverageDetailsService'
export default class ViewCoverageDetailsController {
    constructor(CoverageDetailsService, $stateParams, $state) {
      this.$stateParams = $stateParams;
      this.$state = $state
      this.coverageDetailsService = CoverageDetailsService;
      this.coverageDetails = {};
      this.coverageId = this.$stateParams.id;
     this.getCoverageDetails(this.coverageId);
    }
    getCoverageDetails(coverageId){
      this.coverageDetailsService.getCoverageDetails(1).then(
        (response) => {
          this.coverageDetails = response.data;
        },
        (error) => {
          console.log(error)
        } 
      )
    }

    goToEditCoverage(coverageId){
      this.$state.go('editcoverage', { id: coverageId });
    }
  }
ViewCoverageDetailsController.$inject = [CoverageDetailsService.name, '$stateParams', '$state']