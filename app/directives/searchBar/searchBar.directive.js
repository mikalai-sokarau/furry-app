import searchBarTemplate from './searchBar.template.html';
import searchBarCtrl from './searchBar.controller';
import './searchBar.styles.scss';

export default function() {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: searchBarTemplate,
        controller: searchBarCtrl,
        controllerAs: 'SearchBarCtrl'
    };
}
