import * as angular from 'angular';
// import '@uirouter/angularjs';
import '@uirouter/angular-hybrid';
import { UIRouter, UrlService } from '@uirouter/core';


import { STATES } from './common/constants';

import mainView from './directives/mainView/mainView.directive';
import searchBar from './directives/searchBar/searchBar.directive';
import searchCategories from './directives/searchCategories/searchCategories.directive';
import searchResultsList from './directives/searchResultsList/searchResultsList.directive';
import userView from './directives/userView/userView.directive';

import gitHubCache from './services/gitHubCache/gitHubCache.service';
import gitHubMessager from './services/gitHubMessager/gitHubMessager.service';
import utils from './services/utils/utils.service';

const MODULE_NAME = 'furry-app';

angular
  .module(MODULE_NAME, ['ui.router.upgrade'])
  .config(function($stateProvider: any, $urlRouterProvider: any) {
    STATES.forEach(state => $stateProvider.state(state));
    $urlRouterProvider.otherwise('/hello');
  })
  
  .component('mainView', mainView)
  .component('searchBar', searchBar)
  .component('searchCategories', searchCategories)
  .component('searchResultsList', searchResultsList)
  .component('userView', userView)

  .service('gitHubCache', gitHubCache)
  .service('gitHubMessager', gitHubMessager)
  .service('utils', utils);

// angular.bootstrap(document.body, [MODULE_NAME]); 
angular.element(function() {
  angular.bootstrap(document, [MODULE_NAME]);
});

export default MODULE_NAME;
