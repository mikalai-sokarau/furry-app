import angular from "angular";
import GitHub from "github-api";

const GITHUB_TOKEN = "17f43dadb83200b2cc5db0e98f9340a25ec82402";

export default function gitHubMessager($state, $location, $stateParams) {
  const search = new GitHub({ GITHUB_TOKEN }).search();
  
  function extractParametersFromUrl() {
    console.log($stateParams.text);
  }
  
  return {
    getRepositories: (scope) => {
      extractParametersFromUrl();
      // console.log($stateParams)
      // search.forRepositories({ q: text }, (err, data) => {
      //   console.log(data);
      //   scope.$emit("GITHUB_DATA_LOADED", data);
      // });
    },

    getUsers: (scope) => {
      $state.go('users');
      search.forUsers({ q: text }, (err, data) => {
        scope.$emit("GITHUB_DATA_LOADED", data);
        console.log(data);
      });
    },

    getIssues: (scope) => {
      $state.go('issues');
      search.forIssues({ q: text }, (err, data) => {
        scope.$emit("GITHUB_DATA_LOADED", data);
        console.log(data);
      });
    }
  };
}

angular.module("furry-app").factory("gitHubMessager", gitHubMessager);
