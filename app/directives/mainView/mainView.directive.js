import mainViewTemplate from './mainView.template.html';
import mainViewCtrl from './mainView.controller';

export default function () {
    return {
        restrict: 'E',
        templateUrl: mainViewTemplate,
        controller: mainViewCtrl,
        controllerAs: 'MainViewCtrl'
    }
};
