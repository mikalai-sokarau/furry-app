import GitHub from "github-api";

const GITHUB_TOKEN = "17f43dadb83200b2cc5db0e98f9340a25ec82402";

export default function ($state, $location, $stateParams, $rootScope) {
  const search = new GitHub({ GITHUB_TOKEN }).search();
  let readyForRequest = true;

  function extractParametersFromUrl() {
    return {
      text: $stateParams.text,
      page: $stateParams.page
    }
  }

  function getRepositories(params) {
    $state.go('repositories', params);
    search.forRepositories({ q: params.text }, gitHubCallback);
    readyForRequest = false;
  };

  function getUsers(params) {
    $state.go('users', params);
    search.forUsers({ q: params.text }, gitHubCallback);
    readyForRequest = false;
  }

  function getIssues(params) {
    $state.go('issues', params);
    search.forIssues({ q: params.text }, gitHubCallback);
    readyForRequest = false;
  }

  function getUserInfo(params) {

  }

  function gitHubCallback(err, data) {
    if (!err) {
      $rootScope.$emit("GITHUB_DATA_LOADED", data);
      readyForRequest = true;
    } else {
      /*
        error handling
      */
      console.log(err);
    }
  }

  function getCategoryFromUrl() {
    let result = '';
    const path = $location.path();
    if (path.startsWith('/search')) {
      const splittedUrl = $location.path().split('/search/');
      result = splittedUrl.length <= 1 ? 'repositories' : splittedUrl[splittedUrl.length - 1];
    } else if (path.startsWith('/user')) {
      result = 'user';
    } else {
      result = 'hello';
    }
    return result;
  }

  function chooseRightCategory(category = getCategoryFromUrl()) {
    if (readyForRequest) {
      const params = extractParametersFromUrl();

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
        case 'user':
          getUserInfo(params);
          break;
        default:
          $state.go('hello');
      }
    } else {
      /*
        error message
      */
      console.log('too many requests')
    }
  }

  return {
    getData: (category) => chooseRightCategory(category),
    getUrl: () => getCategoryFromUrl()
  }
};
