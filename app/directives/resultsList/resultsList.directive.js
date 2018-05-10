import angular from 'angular';

import resultsListCtrl from './resultsList.controller';
import resultsListTemplate from './resultsList.template.html';

angular.module('furry-app')
  .directive('resultsList', function () {
    return {
      restrict: 'E',
      templateUrl: resultsListTemplate,
      controller: resultsListCtrl,
      controllerAs: 'ResultsListCtrl'
    }
  })