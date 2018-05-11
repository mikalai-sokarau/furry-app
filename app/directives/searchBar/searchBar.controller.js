import GitHub from "github-api";

import { GITHUB_TOKEN } from "../../common/constants";

export default function($scope, $state, $location, $transitions, gitHubMessager) {
  this.searchText = "";
  this.gh = new GitHub({ GITHUB_TOKEN });

  this.search = () => {
    // const splittedUrl = $location.$$path.split('/');
    // const path = splittedUrl.length <= 1 ? 'repositories' : splittedUrl[splittedUrl.length - 1];
    // const options = $location.$$search.hasOwnProperty('text') ? $location.$$search : {text: this.searchText, page: 1};
    
    $state.go('repositories', {text: this.searchText, page: 1});
    $transitions.onSuccess({}, function(transition) {
      gitHubMessager.getRepositories($scope);  
    });
  }
  
  this.getRepositories = () => {
    gitHubMessager.getRepositories($scope);
    // window.location = "#!/search";
    // console.log(this.searchText);
    // this.gh.search().forRepositories({ q: this.searchText }, (err, data) => {
    //   $scope.$emit("GITHUB_DATA_LOADED", data);
    // });
  };

  this.getUsers = () => {
    window.location = "/search";
    console.log(this.searchText);
    this.gh.search().forUsers({ q: this.searchText }, (err, data) => {
      // $scope.$emit("GITHUB_DATA_LOADED", data);
      console.log(data);
    });
  };

  this.getIssues = () => {
    window.location = "/search";
    console.log(this.searchText);
    this.gh.search().forIssues({ q: this.searchText }, (err, data) => {
      // $scope.$emit("GITHUB_DATA_LOADED", data);
      console.log(data);
    });
  };
}
