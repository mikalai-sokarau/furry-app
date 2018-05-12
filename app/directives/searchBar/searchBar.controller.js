export default function ($state, $transitions, gitHubMessager) {
  this.searchText = "";

  this.search = () => {
    $state.go(gitHubMessager.getUrl(), { text: this.searchText, page: 1 });
    $transitions.onSuccess({}, function (transition) {
      gitHubMessager.getData();
    }, { invokeLimit: 1 });
  }
};
