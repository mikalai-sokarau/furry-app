import * as angular from 'angular';
import '@uirouter/angularjs';
import { downgradeInjectable } from '@angular/upgrade/static';


import { STATES } from './common/constants';

import mainView from './directives/mainView/mainView.directive';
import searchBar from './directives/searchBar/searchBar.directive';
import searchCategories from './directives/searchCategories/searchCategories.directive';
import searchResultsList from './directives/searchResultsList/searchResultsList.directive';
import userView from './directives/userView/userView.directive';

import gitHubCache from './services/gitHubCache/gitHubCache.service';
// import { GitHubMessager } from './services/gitHubMessager/gitHubMessager.service';
import { GitHubMessager } from './services/gitHubMessager/GitHubMessager.ng2.service';
import utils from './services/utils/utils.service';



const appName = 'furry-app';

angular
  .module(appName, ['ui.router'])
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
  /*
    next two services are interchangeable,
    * commented one written in pure JS
    * uncommented one is ready to use, working Angular2 service written in TS, 
      but downgraded to use in AngularJS
  */
  // .service('gitHubMessager', GitHubMessager)
  .service('gitHubMessager', downgradeInjectable(GitHubMessager))
  .service('utils', utils);

export default appName;
