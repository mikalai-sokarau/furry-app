import angular from "angular";

import userViewController from './userView.controller';
import userViewTemplate from './userView.template.html';

angular.module('furry-app')
    .directive('userView', function() {
        return {
            restrict: 'E',
            templateUrl: userViewTemplate,
            controller: userViewController,
            controllerAs: 'UserViewController'
        }
    })