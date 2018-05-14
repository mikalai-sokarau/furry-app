const GITHUB_TOKEN = "'token e4766e5962b7d5530bfc2319ababf227c6d3b8b0'";

export default function ($state, $location, $stateParams, $rootScope, $http) {
    function extractParametersFromUrl() {
        return {
            text: $stateParams.text,
            page: $stateParams.page
        };
    }

    function getRepositories(params) {
        const directiveName = "repositories";
        sendRequest(`https://api.github.com/search/repositories?q=${params.text}&page=1&per_page=10`)
            .then(res => {
                const requestData = {
                    name: directiveName,
                    data: res.data.items
                };
                $rootScope.$emit("GITHUB_DATA_LOADED", requestData);
            });
        $state.go(directiveName, params);
    }

    function getUsers(params) {
        const directiveName = "users";
        sendRequest(`https://api.github.com/search/users?q=${params.text}&page=1&per_page=10`)
            .then(res => {
                const requestData = {
                    name: directiveName,
                    data: res.data.items
                };
                $rootScope.$emit("GITHUB_DATA_LOADED", requestData);
            });
        $state.go(directiveName, params);
    }

    function getIssues(params) {
        const directiveName = "issues";
        sendRequest(`https://api.github.com/search/issues?q=${params.text}&page=1&per_page=10`)
            .then(res => {
                const requestData = {
                    name: directiveName,
                    data: res.data.items
                };
                $rootScope.$emit("GITHUB_DATA_LOADED", requestData);
            });
        $state.go(directiveName, params);
    }

    function getUserInfo(params) {
        const directiveName = "user";
        sendRequest(`https://api.github.com/users/${params.text}`)
            .then(res1 => sendRequest(`https://api.github.com/users/${params.text}/repos`)
                .then(res2 => sendRequest(`https://api.github.com/users/${params.text}/starred`)
                    .then(res3 => {
                        const requestData = {
                            name: directiveName,
                            data: res1.data,
                            repos: res2.data,
                            starred: res3.data
                        };
                        $rootScope.$emit(
                            "GITHUB_DATA_LOADED",
                            requestData
                        );
                    })
                )
            );
    }

    function sendRequest(path) {
        return $http({
            method: "GET",
            url: path,
            headers: {
                Authorization: GITHUB_TOKEN
            }
        })
    }

    function getCategoryFromUrl() {
        let result = "";
        const path = $location.path();

        if (path.startsWith("/search")) {
            const splittedUrl = $location.path().split("/search/");
            result = splittedUrl.length <= 1
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
