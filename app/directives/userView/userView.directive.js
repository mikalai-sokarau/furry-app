import userViewController from './userView.controller';
import userViewTemplate from './userView.template.html';
import userViewStyles from './userView.styles.scss';

export default function () {
    return {
        restrict: 'E',
        templateUrl: userViewTemplate,
        controller: userViewController,
        controllerAs: 'UserViewController'
    };
}
