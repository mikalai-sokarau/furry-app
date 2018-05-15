const GITHUB_TOKEN = 'token 20176991854ac58f008621f3362a62face888d5e';

export default function ($state, $stateParams, $rootScope, $http) {
    function extractParametersFromUrl() {
        let currentPage = parseInt($stateParams.page);

        if (currentPage < 1 || !Number.isInteger(currentPage)) {
            currentPage = 1;
        } else if (currentPage > 100) {
            currentPage = 100;
        }
        
        return {
            text: $stateParams.text,
            page: currentPage
        };
    }

    function fixParams(page, params) {
        const lastPage = Math.floor(page / 10);
        const maxPage = lastPage < 100 ? lastPage : 100;
        let correctPage = params.page;

        if (correctPage < 1) {
            correctPage = 1;
        } else if (correctPage > maxPage) {
            correctPage = maxPage;
        }

        return Object.assign({}, params, {page: correctPage});
    }

    function getRepositories(params) {
        const directiveName = "repositories";
        let correctParams = params;

        sendRequest(`https://api.github.com/search/repositories?q=${params.text}&page=${params.page}&per_page=10`)
            .then(res => {
                const requestData = {
                    name: directiveName,
                    data: res.data.items,
                    totalCount: res.data.total_count
                };
                correctParams = fixParams(requestData.totalCount, params);
                $rootScope.$emit("GITHUB_DATA_LOADED", requestData);
            });
            
        $state.go(directiveName, params);
    }

    function getUsers(params) {
        const directiveName = "users";
        sendRequest(`https://api.github.com/search/users?q=${params.text}&page=${params.page}&per_page=10`)
            .then(res => {
                const requestData = {
                    name: directiveName,
                    data: res.data.items,
                    totalCount: res.data.total_count
                };
                $rootScope.$emit("GITHUB_DATA_LOADED", requestData);
            });
        $state.go(directiveName, params);
    }

    function getIssues(params) {
        const directiveName = "issues";
        sendRequest(`https://api.github.com/search/issues?q=${params.text}&page=${params.page}&per_page=10`)
            .then(res => {
                const requestData = {
                    name: directiveName,
                    data: res.data.items,
                    totalCount: res.data.total_count
                };
                $rootScope.$emit("GITHUB_DATA_LOADED", requestData);
            });
        $state.go(directiveName, params);
    }

    function getUserInfo(params) {
        const directiveName = "user";
        sendRequest(`https://api.github.com/users/${params.text}`)
            .then(res1 => sendRequest(`https://api.github.com/users/${params.text}/starred`)
                .then(res2 => sendRequest(`https://api.github.com/users/${params.text}/repos`)
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
            method: 'GET',
            url: path,
            headers: {
                'Authorization': GITHUB_TOKEN
            }
        })
    }

    function chooseRightCategory(category = $state.current.name) {
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
