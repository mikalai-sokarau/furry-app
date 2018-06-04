import mainViewTemplate from './mainView.template.html';
import mainViewCtrl from './mainView.controller';
import './mainView.styles.scss';

export default function () {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: mainViewTemplate,
        controller: mainViewCtrl,
        controllerAs: 'MainViewCtrl'
    };
}
