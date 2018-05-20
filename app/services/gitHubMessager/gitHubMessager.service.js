import { GITHUB_TOKEN } from '../../common/constants';

export default function($http, $q) {
    function getData(params) {
        return sendRequest(
            `https://api.github.com/search/${params.type}?q=${
                params.text
            }&page=${params.page}&per_page=10`
        );
    }

    function getUser(name) {
        return sendRequest(`https://api.github.com/users/${name}`)
            .then(res1 => sendRequest(`https://api.github.com/users/${name}/starred`)
                .then(res2 => sendRequest(`https://api.github.com/users/${name}/repos?page=1&per_page=20`)
                    .then(res3 => {
                        const requestData = {
                            data: res1.data,
                            repos: res3.data,
                            starred: res2.data
                        };
                        return $q.when(requestData);
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

    return {
        getData: params => getData(params),
        getUser: name => getUser(name)
        // sendRequest: path => sendRequest(path)
    };
}
