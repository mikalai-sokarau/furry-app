import angular from 'angular';

import styles from './styles.css';
import { STATES } from './common/constants';
import root from './directives/root/root.directive';
import searchBar from './directives/searchBar/searchBar.directive';
import searchResultsView from './directives/searchResultsView/searchResultsView.directive';
import resultsList from './directives/resultsList/resultsList.directive';
import resultItem from './directives/resultItem/resultItem.directive';

angular.module('furry-app')
  .config(function($stateProvider) {
    STATES.forEach(state => $stateProvider.state(state));
  });
