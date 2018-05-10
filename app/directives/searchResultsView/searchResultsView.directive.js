import angular from 'angular';
import { STATES } from '../../common/constants';
import searchResultsViewTemplate from './searchResultsView.template.html';
import searchResultsViewCtrl from './searchResultsView.controller';

angular.module('furry-app')
    .directive('searchResultsView', function() {
        return {
            restrict: 'E',
            templateUrl: searchResultsViewTemplate,
            controller: function($scope) {
                const that = this;
            
                this.states = STATES;
                $scope.$on('DATA_LOADED', function(err, data) {
                    that.responce = data;
                    console.log(data);
                })
            },
            controllerAs: 'SearchResultsViewCtrl'
        }
    })