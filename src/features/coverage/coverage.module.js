import angular from 'angular';
import '../../style/app.css';
import uirouter from 'angular-ui-router';
import ViewCoverageDetailsController from './controllers/viewController'
import EditCoverageDetailsController from './controllers/editController'
import CoverageDetailsService from './services/coverageDetailsService'
import CoveragesInfoService from './services/coveragesInfoService'
import routes from './routes/routes'

const MODULE_NAME = 'metromile.ui.coverage';
angular.module(MODULE_NAME, [uirouter])
       .config(routes)
       .controller('ViewCoverageDetailsController', ViewCoverageDetailsController)
       .controller('EditCoverageDetailsController', EditCoverageDetailsController)
       .service('CoverageDetailsService', CoverageDetailsService)
       .service('CoveragesInfoService', CoveragesInfoService)
export default MODULE_NAME;