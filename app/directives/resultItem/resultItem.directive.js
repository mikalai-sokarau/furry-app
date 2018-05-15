import resultItemCtrl from './resultItem.controller';
import resultItemTemplate from './resultItem.template.html';

export default function () {
    return {
        restrict: 'E',
        templateUrl: resultItemTemplate,
        controller: resultItemCtrl,
        controllerAs: 'resultItemCtrl',
    }
};
