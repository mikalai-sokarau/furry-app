export default function ($scope, $state, $transitions, gitHubMessager) {
  this.searchText = "";

  this.search = () => {
    const path = gitHubMessager.getUrl()
    
    $state.go(path, { text: this.searchText, page: 1 });
    $transitions.onSuccess({}, function (transition) {
      gitHubMessager.getData($scope);
    }, { invokeLimit: 1 });
  }
};
