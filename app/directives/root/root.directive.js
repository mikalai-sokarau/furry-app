import rootTemplate from './root.template.html';
import rootCtrl from './root.controller';

export default function () {
    return {
        restrict: 'E',
        templateUrl: rootTemplate,
        controller: rootCtrl,
        controllerAs: 'RootCtrl'
    }
};
