// import searchBarTemplate from './searchBar.template.html';
import searchBarCtrl from './searchBar.controller';
import './searchBar.styles.scss';

export default {
  // restrict: 'E',
  // scope: {},
  template: `<header>
  <div class="search">
      <div class="icon-container">
          <a href='/'>
              <img src="../../images/icon.png">
          </a>
      </div>
      <form ng-submit="SearchBarCtrl.search()">
          <input type="text" ng-model="SearchBarCtrl.searchText" size="50" />
      </form>
  </div>
</header>`,
  // templateUrl: searchBarTemplate,
  controller: searchBarCtrl,
  controllerAs: 'SearchBarCtrl'
};
