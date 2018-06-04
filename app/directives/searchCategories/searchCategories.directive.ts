import searchCategoriesTemplate from './searchCategories.template.html';
import searchCategoriesCtrl from './searchCategories.controller';
import './searchCategories.styles.scss';

export default {
  restrict: 'E',
  scope: {},
  templateUrl: searchCategoriesTemplate,
  controller: searchCategoriesCtrl,
  controllerAs: 'SearchCategoriesCtrl'
};
