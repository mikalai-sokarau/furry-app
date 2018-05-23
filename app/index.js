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

angular.module('furry-app', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        STATES.forEach(state => $stateProvider.state(state));
        $urlRouterProvider.otherwise('/hello');
    })

    .directive('mainView', mainView)
    .directive('searchBar', searchBar)
    .directive('searchCategories', searchCategories)
    .directive('searchResultsList', searchResultsList)
    .directive('userView', userView)

    .factory('gitHubCache', gitHubCache)
    .factory('gitHubMessager', gitHubMessager)
    .factory('utils', utils);
