import mainViewTemplate from './mainView.template.html';
import mainViewCtrl from './mainView.controller';
import mainViewStyles from './mainView.styles.scss';

export default function () {
    return {
        restrict: 'E',
        templateUrl: mainViewTemplate,
        controller: mainViewCtrl,
        controllerAs: 'MainViewCtrl'
    };
}
