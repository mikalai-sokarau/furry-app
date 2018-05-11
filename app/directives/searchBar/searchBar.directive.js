import angular from 'angular';

import searchBarTemplate from './searchBar.template.html';
import searchBarCtrl from './searchBar.controller';

angular.module('furry-app')
  .directive('searchBar', function () {
    return {
      restrict: 'E',
      templateUrl: searchBarTemplate,
      controller: searchBarCtrl,
      controllerAs: 'SearchBarCtrl'
    }
  })
