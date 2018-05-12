import userViewController from './userView.controller';
import userViewTemplate from './userView.template.html';

export default function () {
    return {
        restrict: 'E',
        templateUrl: userViewTemplate,
        controller: userViewController,
        controllerAs: 'UserViewController'
    }
};
