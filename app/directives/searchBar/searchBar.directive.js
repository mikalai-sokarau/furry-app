import searchBarTemplate from './searchBar.template.html';
import searchBarCtrl from './searchBar.controller';
import './searchBar.styles.scss';
const templ = '<p>searchBar</p>';
console.log(templ);
export default {
    // restrict: 'E',
    // scope: {},
    // template: templ,
    templateUrl: searchBarTemplate,
    controller: searchBarCtrl,
    controllerAs: 'SearchBarCtrl'
};
//# sourceMappingURL=searchBar.directive.js.map