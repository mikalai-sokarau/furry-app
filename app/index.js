import angular from 'angular';
import uiRouter from '@uirouter/angularjs'

import styles from './styles.css';
import { STATES } from './common/constants';

import root from './directives/root/root.directive';
import searchBar from './directives/searchBar/searchBar.directive';
import mainView from './directives/mainView/mainView.directive';
import searchResultsList from './directives/searchResultsList/searchResultsList.directive';
import resultItem from './directives/resultItem/resultItem.directive';
import userView from './directives/userView/userView.directive';
import searchCategories from './directives/searchCategories/searchCategories.directive';

import deliveredData from './services/deliveredData/deliveredData.service';
import gitHubMessager from './services/gitHubMessager/gitHubMessager.service';

const app = angular.module('furry-app', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    STATES.forEach(state => $stateProvider.state(state));
    $urlRouterProvider.otherwise('/');
  });

app
  .directive('root', root)
  .directive('searchBar', searchBar)
  .directive('mainView', mainView)
  .directive('searchResultsList', searchResultsList)
  .directive('resultItem', resultItem)
  .directive('userView', userView)
  .directive('searchCategories', searchCategories);

app
  .factory('gitHubMessager', gitHubMessager)
  .factory('deliveredData', deliveredData);