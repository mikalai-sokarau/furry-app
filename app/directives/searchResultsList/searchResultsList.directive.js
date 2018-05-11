import angular from 'angular';

import searchResultsListCtrl from './searchResultsList.controller';
import searchResultsListTemplate from './searchResultsList.template.html';

angular.module('furry-app')
  .directive('searchResultsList', function () {
    return {
      restrict: 'E',
      templateUrl: searchResultsListTemplate,
      controller: searchResultsListCtrl,
      controllerAs: 'SearchResultsListCtrl'
    }
  })