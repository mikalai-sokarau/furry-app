import userViewController from './userView.controller';
import userViewTemplate from './userView.template.html';
import './userView.styles.scss';

export default function () {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: userViewTemplate,
        controller: userViewController,
        controllerAs: 'UserViewController'
    };
}
