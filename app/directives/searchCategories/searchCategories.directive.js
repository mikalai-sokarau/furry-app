import searchCategoriesTemplate from './searchCategories.template.html';
import searchCategoriesCtrl from './searchCategories.controller';

export default function () {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: searchCategoriesTemplate,
        controller: searchCategoriesCtrl,
        controllerAs: 'SearchCategoriesCtrl'
    }
};
