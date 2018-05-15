import searchResultsListCtrl from './searchResultsList.controller';
import searchResultsListTemplate from './searchResultsList.template.html';
import searchResultsListStyles from './searchResultsList.styles.scss';

export default function () {
    return {
        restrict: 'E',
        templateUrl: searchResultsListTemplate,
        controller: searchResultsListCtrl,
        controllerAs: 'SearchResultsListCtrl'
    };
}
