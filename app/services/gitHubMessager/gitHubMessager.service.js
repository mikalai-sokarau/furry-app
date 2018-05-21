import { GITHUB_TOKEN } from '../../common/constants';

export default function($http, $q, gitHubCache) {
    const DEFAULT_HEADERS = {
        headers: {
            Authorization: GITHUB_TOKEN
        }
    };

    function getData(params) {
        const path = `https://api.github.com/search/${params.type}?q=${
            params.text
        }&page=${params.page}&per_page=10`;
        const cachedValue = gitHubCache.get(path);

        return cachedValue
            ? $q.when(cachedValue)
            : $http.get(path, DEFAULT_HEADERS).then(res => {
                gitHubCache.put(path, res);
                return $q.when(res);
            });
    }

    function getUser(name) {
        const path = `https://api.github.com/users/${name}`;
        const cachedValue = gitHubCache.get(path);
        const resultsPerPage = 20;
        const userData = {
            data: null,
            repos: null,
            starred: null
        };

        if (cachedValue) {
            let lng = cachedValue.repos.length;
            cachedValue.repos.length = lng > resultsPerPage 
                ? resultsPerPage
                : lng;
        }

        return cachedValue
            ? $q.when(cachedValue)
            : $q
                .all([
                    $http
                        .get(path, DEFAULT_HEADERS)
                        .then(res => (userData.data = res.data)),
                    $http
                        .get(`${path}/starred`, DEFAULT_HEADERS)
                        .then(res => (userData.starred = res.data)),
                    $http
                        .get(
                            `${path}/repos?page=1&per_page=${resultsPerPage}`,
                            DEFAULT_HEADERS
                        )
                        .then(res => (userData.repos = res.data))
                ])
                .then(() => {
                    gitHubCache.put(path, userData);
                    return $q.when(userData);
                });
    }

    function loadMoreRepositories(name, page) {
        const path = `https://api.github.com/users/${name}/repos?page=${page}&per_page=20`;
        const cachedValue = gitHubCache.get(path);

        return cachedValue
            ? $q.when(cachedValue)
            : $http.get(path, DEFAULT_HEADERS).then(res => {
                gitHubCache.put(path, res);
                return $q.when(res);
            });
    }

    return {
        getData: params => getData(params),
        getUser: name => getUser(name),
        loadMoreRepositories: (name, page) => loadMoreRepositories(name, page)
    };
}
