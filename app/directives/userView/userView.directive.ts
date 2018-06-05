import userViewController from './userView.controller';
import userViewTemplate from './userView.template.html';
import './userView.styles.scss';

export default {
  template: userViewTemplate,
  controller: userViewController,
  controllerAs: 'UserViewController'
};
