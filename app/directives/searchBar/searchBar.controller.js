export default function ($state, $stateParams, gitHubMessager) {
  this.searchText = "";

  this.search = () => {
    const urlSearchText = $stateParams.text;
    if (urlSearchText !== this.searchText) {
      $state.go('repositories', { text: this.searchText, page: 1 });
    } else {
      /* 
      do nothing, search textes are equal, 
      it is no reason to send one more request. 
      */
    }

  }
};
