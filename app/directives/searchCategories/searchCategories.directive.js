import angular from 'angular';

import searchCategoriesTemplate from './searchCategories.template.html';
import searchCategoriesCtrl from './searchCategories.controller';

angular.module('furry-app')
    .directive('searchCategories', function() {
        return {
            restrict: 'E',
            templateUrl: searchCategoriesTemplate,
            controller: searchCategoriesCtrl,
            controllerAs: 'SearchCategoriesCtrl'
        }
    })
    