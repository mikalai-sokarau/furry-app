import { GITHUB_TOKEN } from '../../common/constants';

export default function($state, $stateParams, $rootScope, $http) {
    // function extractParametersFromUrl() {
    //     let currentPage = parseInt($stateParams.page);

    //     if (currentPage < 1 || !Number.isInteger(currentPage)) {
    //         currentPage = 1;
    //     } else if (currentPage > 100) {
    //         currentPage = 100;
    //     }

    //     return {
    //         text: $stateParams.text,
    //         page: currentPage
    //     };
    // }
    function getData(params) {
        console.log(params)
        return sendRequest(
            `https://api.github.com/search/${
                params.type
            }?q=${
                params.text
            }&page=${
                params.page
            }&per_page=10`
        )
    };

    function getRepositories(params) {
        // const directiveName = 'repositories';

        return sendRequest(
            `https://api.github.com/search/repositories?q=${params.text}&page=${
                params.page
            }&per_page=10`
        );
        //     .then(res => {
        //         const requestData = {
        //             name: directiveName,
        //             data: res.data.items,
        //             totalCount: res.data.total_count
        //         };
        //         $rootScope.$broadcast('GITHUB_DATA_RECEIVED', requestData);
        //     });

        // $state.go(directiveName, params);
    }

    function getUsers(params) {
        const directiveName = 'users';
        sendRequest(
            `https://api.github.com/search/users?q=${params.text}&page=${
                params.page
            }&per_page=10`
        ).then(res => {
            const requestData = {
                name: directiveName,
                data: res.data.items,
                totalCount: res.data.total_count
            };
            $rootScope.$broadcast('GITHUB_DATA_RECEIVED', requestData);
        });
        $state.go(directiveName, params);
    }

    function getIssues(params) {
        const directiveName = 'issues';
        $state.go(directiveName, params);
        sendRequest(
            `https://api.github.com/search/issues?q=${params.text}&page=${
                params.page
            }&per_page=10`
        ).then(res => {
            const requestData = {
                name: directiveName,
                data: res.data.items,
                totalCount: res.data.total_count
            };
            // return requestData;
            $rootScope.$broadcast('GITHUB_DATA_RECEIVED', requestData);
        });
    }

    function getUserInfo(params) {
        const directiveName = 'user';
        sendRequest(`https://api.github.com/users/${params.text}`).then(res1 =>
            sendRequest(
                `https://api.github.com/users/${params.text}/starred`
            ).then(res2 =>
                sendRequest(
                    `https://api.github.com/users/${
                        params.text
                    }/repos?page=1&per_page=20`
                ).then(res3 => {
                    const requestData = {
                        name: directiveName,
                        data: res1.data,
                        repos: res3.data,
                        starred: res2.data
                    };

                    $rootScope.$broadcast('GITHUB_DATA_RECEIVED', requestData);
                })
            )
        );
    }

    function sendRequest(path) {
        return $http({
            method: 'GET',
            url: path,
            headers: {
                Authorization: GITHUB_TOKEN
            }
        });
    }

    // function chooseRightCategory(category = $state.current.name) {
    //     const params = extractParametersFromUrl();

    //     if (params.text) {
    //         switch (category) {
    //         case 'repositories':
    //             getRepositories(params);
    //             break;
    //         case 'issues':
    //             getIssues(params);
    //             break;
    //         case 'users':
    //             getUsers(params);
    //             break;
    //         case 'user':
    //             getUserInfo(params);
    //             break;
    //         default:
    //             $state.go('hello');
    //         }
    //     } else {
    //         /*
    //             error message
    //         */
    //         // console.log('no parameters chosen')
    //     }
    // }

    return {
        getIssues: params => getIssues(params),
        getUsers: params => getUsers(params),
        getRepositories: params => getRepositories(params),
        getData: () => getData(),
        sendRequest: path => sendRequest(path)
    };
}
