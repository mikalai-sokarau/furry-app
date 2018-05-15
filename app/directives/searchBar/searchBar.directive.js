import searchBarTemplate from './searchBar.template.html';
import searchBarCtrl from './searchBar.controller';
import searchBarStyles from './searchBar.styles.scss';

export default function() {
    return {
        restrict: 'E',
        templateUrl: searchBarTemplate,
        controller: searchBarCtrl,
        controllerAs: 'SearchBarCtrl'
    };
}
