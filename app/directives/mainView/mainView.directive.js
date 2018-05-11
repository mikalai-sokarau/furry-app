import angular from 'angular';

import { STATES } from '../../common/constants';
import mainViewTemplate from './mainView.template.html';
import mainViewCtrl from './mainView.controller';

angular.module('furry-app')
    .directive('mainView', function() {
        return {
            restrict: 'E',
            templateUrl: mainViewTemplate,
            controller: mainViewCtrl,
            controllerAs: 'MainViewCtrl'
        }
    })