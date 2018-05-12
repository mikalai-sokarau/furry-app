import searchBarTemplate from './searchBar.template.html';
import searchBarCtrl from './searchBar.controller';

export default function () {
  return {
    restrict: 'E',
    templateUrl: searchBarTemplate,
    controller: searchBarCtrl,
    controllerAs: 'SearchBarCtrl'
  }
};
