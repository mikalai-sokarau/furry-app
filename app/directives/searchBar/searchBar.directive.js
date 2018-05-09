import angular from 'angular';

import searchBarController from './searchBar.controller';
import searchBarTemplate from './searchBar.template.html';

angular.module('furry-app')
  .directive('searchBar', function () {
    return {
      templateUrl: searchBarTemplate
    }
  })
  .controller('SearchBarCtrl', searchBarController)
