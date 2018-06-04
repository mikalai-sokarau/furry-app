import angular from 'angular';
import '@uirouter/angularjs';

import { STATES } from './common/constants';

import mainView from './directives/mainView/mainView.directive';
import searchBar from './directives/searchBar/searchBar.directive';
import searchCategories from './directives/searchCategories/searchCategories.directive';
import searchResultsList from './directives/searchResultsList/searchResultsList.directive';
import userView from './directives/userView/userView.directive';

import gitHubCache from './services/gitHubCache/gitHubCache.service';
import gitHubMessager from './services/gitHubMessager/gitHubMessager.service';
import utils from './services/utils/utils.service';

angular
  .module('furry-app', ['ui.router'])
  .config(function($stateProvider: any, $urlRouterProvider: any) {
    STATES.forEach(state => $stateProvider.state(state));
    $urlRouterProvider.otherwise('/hello');
  })

  .component('mainView', mainView)
  .component('searchBar', searchBar)
  .component('searchCategories', searchCategories)
  .component('searchResultsList', searchResultsList) 
  .component('userView', userView)

  .factory('gitHubCache', gitHubCache)
  .factory('gitHubMessager', gitHubMessager)
  .factory('utils', utils);
