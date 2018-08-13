import CoveragesInfoService from '../services/coveragesInfoService'
import CoverageDetailsService from '../services/coverageDetailsService'
export default class EditCoverageDetailsController {

    constructor(CoveragesInfoService, CoverageDetailsService, $stateParams, $state, $scope) {
      this.$stateParams = $stateParams;
      this.$state = $state;
      this.$scope = $scope;
      this.coveragesInfoService = CoveragesInfoService;
      this.coverageDetailsService = CoverageDetailsService;
      this.coverageDetails = {};
      this.allCoverageOptions = [];
      this.isDirty = false;

      this.getAllCoverageOptions();
      this.getCoverageDetails();
    }
    // First fetch current coverage details from coverageId in the Url
    getCoverageDetails(coverageId){
      this.coverageDetailsService.getCoverageDetails(1).then(
        (response) => {
          this.coverageDetails.old = response.data;
          this.coverageDetails.new = angular.copy(this.coverageDetails.old);
        },
        (error) => {
          console.log(error)
        } 
      )
    }

    onOptionChange(type, value){
      this.isDirty = true;
      this.coverageDetails.new[type] = value;
    }

    onCancel(){
      this.isDirty = false;
      this.coverageDetails.new = angular.copy(this.coverageDetails.old);
    }
    
    isSelectedOption(selectedOption, currentOption){
      return selectedOption == currentOption;
    }

    getDisplayValue(value){
      let displayValue;
      switch(value){
        case 'false':
          displayValue = 'No'
          break;
        case 'true':
          displayValue = 'Yes'
          break;
        case '9999':
          displayValue = 'No Coverage';
          break;
        default:
          displayValue = value;
      }
      return displayValue;
    }
    
    //Save the details on memory and clear the dirtyness and update old values
    onSave(){
      this.isDirty = false;
      this.coverageDetails.old = angular.copy(this.coverageDetails.new);
      alert("Changes Saved successfully");
    }

    getAllCoverageOptions(){
      this.coveragesInfoService.getAllCoverageOptions().then(
        (response) => {
          this.allCoverageOptions = response.data ? response.data.coverageOptions : [];
        },
        (error) => {
          console.log(error)
        } 
      )
    }
  }
EditCoverageDetailsController.$inject = [CoveragesInfoService.name, CoverageDetailsService.name, '$stateParams', '$state', '$scope'];