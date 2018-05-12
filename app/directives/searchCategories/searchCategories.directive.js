import searchCategoriesTemplate from './searchCategories.template.html';
import searchCategoriesCtrl from './searchCategories.controller';

export default function () {
    return {
        restrict: 'E',
        templateUrl: searchCategoriesTemplate,
        controller: searchCategoriesCtrl,
        controllerAs: 'SearchCategoriesCtrl'
    }
};
