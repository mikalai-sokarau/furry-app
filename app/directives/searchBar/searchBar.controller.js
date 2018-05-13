export default function ($state, $stateParams, $transitions, gitHubMessager) {
  this.searchText = "";

  this.search = () => {
    const urlSearchText = $stateParams.text;
    
    if (urlSearchText !== this.searchText) {
      $state.go('repositories', { text: this.searchText, page: 1 });
      // $transitions.onSuccess({}, function (transition) {
      //   gitHubMessager.getData();
      // }, { invokeLimit: 1 });
    } else {
      /* 
      do nothing, search textes are equal, 
      it is no reason to send one more request. 
      */
    }

  }
};
