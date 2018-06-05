import searchResultsListCtrl from './searchResultsList.controller';
// import searchResultsListTemplate from './searchResultsList.template.html';
import './searchResultsList.styles.scss';

const searchResultsListTemplate = `<section>
<div class="pagination" ng-show="SearchResultsListCtrl.totalResultsCount > 10">
    <input type="button" ng-disabled="SearchResultsListCtrl.currentPage <= 1" ng-click="SearchResultsListCtrl.goBack()" value="&laquo;">
    <ul>
        <li ng-repeat="item in SearchResultsListCtrl.getPaginationList() track by $index">
            <a href="" ng-disabled="item === '...'" ng-click="SearchResultsListCtrl.goToPage($event)">{{::item}}</a>
        </li>
    </ul>
    <input type="button" ng-disabled="SearchResultsListCtrl.currentPage >= SearchResultsListCtrl.lastResultsPage" ng-click="SearchResultsListCtrl.goForward()"
        value="&raquo;">
</div>
<div class="result-item" ng-switch="SearchResultsListCtrl.resultCategory" ng-repeat="item in SearchResultsListCtrl.resultsList">
    <div ng-switch-when="users">
        <a href ng-click="SearchResultsListCtrl.showUserPage(item.login);">{{::item.login}}</a>
    </div>
    <div ng-switch-when="repositories">
        <a href="{{::item.html_url}}" target="_blank">{{::item.name}}</a>
    </div>
    <div ng-switch-when="issues">
        <a href="{{::item.html_url}}" target="_blank">{{::item.title}}</a>
    </div>
</div>
</section>`;

export default {
  template: searchResultsListTemplate,
  controller: searchResultsListCtrl,
  controllerAs: 'SearchResultsListCtrl'
};
