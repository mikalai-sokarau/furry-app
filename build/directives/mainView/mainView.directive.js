// import mainViewTemplate from './mainView.template.html';
import mainViewCtrl from './mainView.controller';
import './mainView.styles.scss';
export default {
    // restrict: 'E',
    // scope: {},
    template: `<div class="search-results-content-wrapper">
  <div class="search-results-content">
      <search-categories ng-if="MainViewCtrl.isCategoriesPage"></search-categories>
      <ui-view>
          <div class="welcome">
              <p>App's welcome page</p>
              <span>(nothing interesting happens here)</span>
          </div>
      </ui-view>
  </div>
</div>`,
    // templateUrl: mainViewTemplate,
    controller: mainViewCtrl,
    controllerAs: 'MainViewCtrl'
};
//# sourceMappingURL=mainView.directive.js.map