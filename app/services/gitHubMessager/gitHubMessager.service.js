import GitHub from "github-api";

const GITHUB_TOKEN = "17f43dadb83200b2cc5db0e98f9340a25ec82402";

export default function ($state, $location, $stateParams) {
  const search = new GitHub({ GITHUB_TOKEN }).search();

  function extractParametersFromUrl() {
    return {
      text: $stateParams.text,
      page: $stateParams.page
    }
  }

  function getRepositories(params) {
    console.log('getRepositories');
    $state.go('repositories', params);
    search.forRepositories({ q: params.text }, gitHubCallback);
  };

  function getUsers(params) {
    console.log('getUsers');
    console.log(params);
    $state.go('users', params);
    search.forUsers({ q: params.text }, gitHubCallback);
  }

  function getIssues(params) {
    console.log('getIssues');
    $state.go('issues', params);
    search.forIssues({ q: params.text }, gitHubCallback);
  }

  function gitHubCallback(err, data) {
    console.log(data);
    // scope.$emit("GITHUB_DATA_LOADED", data);
  }

  function getUrl() {
    const splittedUrl = $location.path().split('/search/');
    return splittedUrl.length <= 1 ? 'repositories' : splittedUrl[splittedUrl.length - 1];
  }

  return {
    getData: (category = getUrl()) => {
      const params = extractParametersFromUrl();
      // console.log(params);
      switch (category) {
        case 'repositories':
          getRepositories(params);
          break;
        case 'issues':
          getIssues(params);
          break;
        case 'users':
          getUsers(params);
          break;
      }
    },

    getUrl: () => {
      return getUrl();
    }
  }
};
