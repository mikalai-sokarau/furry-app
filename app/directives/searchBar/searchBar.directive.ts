// import searchBarTemplate from './searchBar.template.html';
import searchBarCtrl from './searchBar.controller';
import './searchBar.styles.scss';

const searchBarTemplate = `<header>
<div class="search">
    <div class="icon-container">
        <a href='/'>
            <img src="../app/images/icon.png">
        </a>
    </div>
    <form ng-submit="SearchBarCtrl.search()">
        <input type="text" ng-model="SearchBarCtrl.searchText" size="50" />
    </form>
</div>
</header>`;

export default {
  template: searchBarTemplate,
  controller: searchBarCtrl,
  controllerAs: 'SearchBarCtrl'
};
