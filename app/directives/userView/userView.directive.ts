import userViewController from './userView.controller';
// import userViewTemplate from './userView.template.html';
import './userView.styles.scss';

const userViewTemplate = `<section>
<input class="user-back-btn" ng-click="UserViewController.goBack()" type="button" value="← back">
<div class="user-content-wrapper" ng-show="UserViewController.userName">
    <div class="user-info">
        <figure>
            <div class="user-image-container">
                <a href="{{UserViewController.profileUrl}}"><img src="{{UserViewController.avatarUrl}}" /></a>
            </div>
            <figcaption>{{::UserViewController.userName}}</figcaption>
        </figure>
    </div>
    <div class="user-achievements">
        <span>followers: {{::UserViewController.followers}}</span>
        <span>following: {{::UserViewController.following}}</span>
        <span>stars count: {{::UserViewController.starsCount}}</span>
    </div>
    <ul class="user-repositories">
        <li class="result-item" ng-repeat="repo in UserViewController.repositoriesList">
            <span>{{$index + 1}}:</span> 
            <a href={{::repo.html_url}} target="_blank">{{::repo.name}}</a>
        </li>
    </ul>
</div>
<div class="loader-wrapper" ng-show="UserViewController.isContentLoading">
    <img src="../../images/loader.gif" />
</div>
<div class="user-view-error-message" ng-if="UserViewController.isError">
    <p>Nothing interesting was found by your request, try to find something else <3</p>
</div>
</section>`;

export default {
  template: userViewTemplate,
  controller: userViewController,
  controllerAs: 'UserViewController'
};
