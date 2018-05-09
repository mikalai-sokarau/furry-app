import angular from 'angular';
import resultsListTemplate from './resultsContainer.template.html';

angular.module('furry-app')
  .directive('resultsList', function () {
    return {
      templateUrl: resultsListTemplate  
    }
  })
  .controller('resultsListCtrl', function () {
    const that = this;
    that.resultsList = [1, 2, 3];
  })