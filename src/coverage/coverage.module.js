import angular from 'angular';
import '../style/app.css';
import uirouter from 'angular-ui-router';
import ViewCoverageDetailsController from './controllers/viewCoverageDetailsController'
import EditCoverageDetailsController from './controllers/editCoverageDetailsController'
import CoverageDetailsService from './services/CoverageDetailsService'
import CoveragesInfoService from './services/CoveragesInfoService'
import routes from './routes/coverage.routes'

const MODULE_NAME = 'metromile.ui.coverage';
angular.module(MODULE_NAME, [uirouter])
       .config(routes)
       .controller('ViewCoverageDetailsController', ViewCoverageDetailsController)
       .controller('EditCoverageDetailsController', EditCoverageDetailsController)
       .service('CoverageDetailsService', CoverageDetailsService)
       .service('CoveragesInfoService', CoveragesInfoService)
export default MODULE_NAME;