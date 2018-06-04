import userViewController from './userView.controller';
import userViewTemplate from './userView.template.html';
import './userView.styles.scss';

console.log(userViewTemplate);

export default {
  restrict: 'E',
  scope: {},
  templateUrl: userViewTemplate,
  controller: userViewController,
  controllerAs: 'UserViewController'
};
