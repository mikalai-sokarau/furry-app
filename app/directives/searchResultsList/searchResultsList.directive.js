import searchResultsListCtrl from './searchResultsList.controller';
import searchResultsListTemplate from './searchResultsList.template.html';
import './searchResultsList.styles.scss';

export default function () {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: searchResultsListTemplate,
        controller: searchResultsListCtrl,
        controllerAs: 'SearchResultsListCtrl'
    };
}
