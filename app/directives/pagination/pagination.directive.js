import paginationCtrl from './pagination.controller';
import paginationTemplate from './pagination.template.html';

export default function () {
    return {
        restrict: 'E',
        scope: {},
        require: '^searchResultsList',
        link: link,
        templateUrl: paginationTemplate,
        controller: paginationCtrl,
        controllerAs: 'PaginationCtrl',
    }
};

function link(scope, element, attrs, controller) {
    console.log(controller.lastResultsPage);
}