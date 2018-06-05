// import searchCategoriesTemplate from './searchCategories.template.html';
import searchCategoriesCtrl from './searchCategories.controller';
import './searchCategories.styles.scss';

const searchCategoriesTemplate = `<aside>
<ul>
    <li 
      ng-repeat="categoryName in SearchCategoriesCtrl.categories" 
      ng-click="SearchCategoriesCtrl.changeCategory(categoryName)"
      ui-sref-active="active">
        {{::categoryName}}
    </li>
</ul>
</aside>`;

export default {
  template: searchCategoriesTemplate,
  controller: searchCategoriesCtrl,
  controllerAs: 'SearchCategoriesCtrl'
};
