// import mainViewTemplate from './mainView.template.html';
import mainViewCtrl from './mainView.controller';
import './mainView.styles.scss';

const mainViewTemplate = `<div class="search-results-content-wrapper">
<div class="search-results-content">
    <search-categories ng-if="MainViewCtrl.isCategoriesPage"></search-categories>
    <ui-view>
        <div class="welcome">
            <p>App's welcome page</p>
            <span>(nothing interesting happens here)</span>
        </div>
    </ui-view>
</div>
</div>`;

export default {
  template: mainViewTemplate,
  controller: mainViewCtrl,
  controllerAs: 'MainViewCtrl'
};
