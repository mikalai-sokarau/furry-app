import GitHub from "github-api";

const GITHUB_TOKEN = "17f43dadb83200b2cc5db0e98f9340a25ec82402";
const GITHUB_TOKEN_2 = "'token e4766e5962b7d5530bfc2319ababf227c6d3b8b0'";

export default function($state, $location, $stateParams, $rootScope, $http) {
    const gh = new GitHub({ GITHUB_TOKEN });

    function extractParametersFromUrl() {
        return {
            text: $stateParams.text,
            page: $stateParams.page
        };
    }

    function getRepositories(params) {
        const directiveName = "repositories";
        $http({
            method: "GET",
            url: `https://api.github.com/search/repositories?q=${
                params.text
            }&page=1&per_page=10`,
            headers: {
                Authorization: GITHUB_TOKEN_2
            }
        }).then(
            res => {
                const requestData = {
                    name: directiveName,
                    data: res.data.items
                };
                $rootScope.$emit("GITHUB_DATA_LOADED", requestData);
            },
            rej => {}
        );

        $state.go(directiveName, params);
    }

    function getUsers(params) {
        const directiveName = "users";
        $http({
            method: "GET",
            url: `https://api.github.com/search/users?q=${
                params.text
            }&page=1&per_page=10`,
            headers: {
                Authorization: GITHUB_TOKEN_2
            }
        }).then(
            res => {
                const requestData = {
                    name: directiveName,
                    data: res.data.items
                };
                $rootScope.$emit("GITHUB_DATA_LOADED", requestData);
            },
            rej => {}
        );
        $state.go(directiveName, params);
    }

    function getIssues(params) {
        const directiveName = "issues";
        $http({
            method: "GET",
            url: `https://api.github.com/search/issues?q=${
                params.text
            }&page=1&per_page=10`,
            headers: {
                Authorization: GITHUB_TOKEN_2
            }
        }).then(
            res => {
                const requestData = {
                    name: directiveName,
                    data: res.data.items
                };
                $rootScope.$emit("GITHUB_DATA_LOADED", requestData);
            },
            rej => {}
        );
        $state.go(directiveName, params);
    }

    function getUserInfo(params) {
        const directiveName = "user";
        $http({
            method: "GET",
            url: `https://api.github.com/users/${params.text}`,
            headers: {
                Authorization: GITHUB_TOKEN_2
            }
        }).then(
            res => {
                $http({
                    method: "GET",
                    url: `https://api.github.com/users/${params.text}/repos`,
                    headers: {
                        Authorization: GITHUB_TOKEN_2
                    }
                }).then(
                    res2 => {
                        $http({
                            method: "GET",
                            url: `https://api.github.com/users/${
                                params.text
                            }/starred`,
                            headers: {
                                Authorization: GITHUB_TOKEN_2
                            }
                        }).then(
                            res3 => {
                                console.log(res3);
                                const requestData = {
                                    name: directiveName,
                                    data: res.data,
                                    repos: res2.data,
                                    starred: res3.data
                                };
                                $rootScope.$emit(
                                    "GITHUB_DATA_LOADED",
                                    requestData
                                );
                            },
                            rej3 => {}
                        );
                    },
                    rej2 => {}
                );
            },
            rej => {}
        );
    }

    function gitHubCallback(directiveName) {
        return function(err, receivedData) {
            if (!err) {
                const requestData = {
                    name: directiveName,
                    data: receivedData
                };
                $rootScope.$emit("GITHUB_DATA_LOADED", requestData);
            } else {
                /*
              error handling
            */
            }
        };
    }

    function getCategoryFromUrl() {
        let result = "";
        const path = $location.path();
        if (path.startsWith("/search")) {
            const splittedUrl = $location.path().split("/search/");
            result =
                splittedUrl.length <= 1
                    ? "repositories"
                    : splittedUrl[splittedUrl.length - 1];
        } else if (path.startsWith("/user")) {
            result = "user";
        } else {
            result = "hello";
        }
        return result;
    }

    function chooseRightCategory(category = getCategoryFromUrl()) {
        const params = extractParametersFromUrl();
        if (params.text) {
            switch (category) {
                case "repositories":
                    getRepositories(params);
                    break;
                case "issues":
                    getIssues(params);
                    break;
                case "users":
                    getUsers(params);
                    break;
                case "user":
                    getUserInfo(params);
                    break;
                default:
                    $state.go("hello");
            }
        } else {
            /*
                error message
            */
            // console.log('no parameters chosen')
        }
    }

    return {
        getData: () => chooseRightCategory(),
        getUrl: () => getCategoryFromUrl()
    };
}
