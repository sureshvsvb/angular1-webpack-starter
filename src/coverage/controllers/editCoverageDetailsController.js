import CoveragesInfoService from '../services/coverageDetailsService'
export default class EditCoverageDetailsController {
    constructor(CoveragesInfoService) {
      this.coveragesInfoService = CoveragesInfoService;
    }
  }
EditCoverageDetailsController.$inject = [CoveragesInfoService.name]