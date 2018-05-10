import angular from 'angular';
import uiRouter from '@uirouter/angularjs'

import rootTemplate from './root.template.html';
import rootCtrl from './root.controller';

angular.module('furry-app', ['ui.router'])
    .directive('root', function () {
        return {
            restrict: 'E',
            templateUrl: rootTemplate,
            controller: rootCtrl
        }
    });