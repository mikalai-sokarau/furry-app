// import searchCategoriesTemplate from './searchCategories.template.html';
import searchCategoriesCtrl from './searchCategories.controller';
import './searchCategories.styles.scss';

export default {
  // restrict: 'E',
  // scope: {},
  template: `<aside>
  <ul>
      <li 
        ng-repeat="categoryName in SearchCategoriesCtrl.categories" 
        ng-click="SearchCategoriesCtrl.changeCategory(categoryName)"
        ui-sref-active="active">
          {{::categoryName}}
      </li>
  </ul>
</aside>
`,
  // templateUrl: searchCategoriesTemplate,
  controller: searchCategoriesCtrl,
  controllerAs: 'SearchCategoriesCtrl'
};
