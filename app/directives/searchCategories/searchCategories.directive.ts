import searchCategoriesTemplate from './searchCategories.template.html';
import { SearchCategories } from './searchCategories.controller';
import './searchCategories.styles.scss';

export default {
  template: searchCategoriesTemplate,
  controller: SearchCategories,
  controllerAs: 'SearchCategoriesCtrl'
};
