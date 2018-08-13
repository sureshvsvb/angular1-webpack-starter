import angular from 'angular';
import coverageModule from './coverage/coverage.module'
import uirouter from 'angular-ui-router';
import routing from './app.config';
const MODULE_NAME = 'metromile.ui';
angular.module(MODULE_NAME, [coverageModule, uirouter])
       .config(routing)
export default MODULE_NAME;