import rootTemplate from './root.template.html';
import rootCtrl from './root.controller';
import rootStyles from './root.styles.scss';

export default function () {
    return {
        restrict: 'E',
        templateUrl: rootTemplate,
        controller: rootCtrl,
        controllerAs: 'RootCtrl'
    };
}
