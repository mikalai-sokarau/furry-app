import angular from 'angular';
import GitHub from 'github-api';
import searchBarTemplate from './searchBar.template.html';
import searchBarCtrl from './searchBar.controller';
import { GITHUB_TOKEN } from '../../common/constants'

angular.module('furry-app')
  .directive('searchBar', function () {
    return {
      restrict: 'E',
      templateUrl: searchBarTemplate,
      controller: searchBarCtrl,
      controllerAs: 'SearchBarCtrl'
    }
  })
