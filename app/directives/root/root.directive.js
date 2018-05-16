import rootTemplate from './root.template.html';
import rootCtrl from './root.controller';
import './root.styles.scss';

export default function () {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: rootTemplate,
        controller: rootCtrl,
        controllerAs: 'RootCtrl'
    };
}
