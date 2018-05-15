import paginationCtrl from './resultItem.controller';
import paginationTemplate from './resultItem.template.html';

export default function () {
    return {
        restrict: 'E',
        templateUrl: paginationTemplate,
        controller: paginationCtrl,
        controllerAs: 'paginationCtrl',
    }
};