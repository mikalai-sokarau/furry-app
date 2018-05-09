import angular from 'angular';
// import uiRouter from '@uirouter/angularjs'

import styles from './styles.css';
import main from './directives/main/main.directive';
import resultsContainer from './directives/resultsContainer/resultsContainer.directive';
import searchBar from './directives/searchBar/searchBar.directive'

angular.module('furry-app')
  .config(function($stateProvider) {
    const helloState = {
      name: 'hello',
      url: '/hello',
      template: '<h3>hello</h3>'
    }
    const searchState = {
      name: 'search',
      url: '/search',
      template: '<h3>search</h3>'
    }
    const userState = {
      name: 'user',
      url: '/user', 
      template: '<h3>user</h3>'
    }

    $stateProvider.state(helloState);
    $stateProvider.state(searchState);
    $stateProvider.state(userState);
  });
