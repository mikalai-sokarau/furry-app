import angular from 'angular';

import resultItemCtrl from './resultItem.controller';
import resultItemTemplate from './resultItem.template.html';

angular.module('furry-app')
    .directive('resultItem', function() {
        return {
            restrict: 'E',
            templateUrl: resultItemTemplate,
            controller: resultItemCtrl,
            controllerAs: 'resultItemCtrl',
            require: "^resultsList",
            link: function (scope, element, attrs) {}
        }
    });
    