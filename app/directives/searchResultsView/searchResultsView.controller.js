import { STATES } from "../../common/constants";

export default function($scope, gitHubMessager) {
  this.states = STATES.filter(state => state.url.startsWith("/search/"));
  this.getData = text => {
    switch (text) {
      case "repositories":
        gitHubMessager.getRepositories(text, $scope);
        break;
      case "issues":
        gitHubMessager.getIssues(text, $scope);
        break;
      case "users":
        gitHubMessager.getUsers(text, $scope);
        break;
    }
  };
}
