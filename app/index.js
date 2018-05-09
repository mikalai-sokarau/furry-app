import angular from 'angular';
import styles from './styles.css';

import searchBarController from './directives/searchBar/searchBar.controller';
import resultsContainerController from './directives/resultsContainer/resultsContainer.controller';

const searchBarTemplate = require('directives/searchBar/searchBar.template.html');
const resultsContainerTemplate = require('./directives/resultsContainer/resultsContainer.template.html');


angular.module('furry-app', [])
  .directive('searchBar', function() {
    return {
      templateUrl: searchBarTemplate
    }
  })
  .controller('SearchBarCtrl', searchBarController)
  .directive('resultsContainer', function() {
    return {
      templateUrl: resultsContainerTemplate
    }
  })
  .controller('ResultsContainerCtrl', resultsContainerController)