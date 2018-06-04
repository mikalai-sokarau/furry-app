import { GITHUB_TOKEN } from '../../common/constants';

export default function($http: any, $q: any, gitHubCache: any) {
    $http.defaults.headers.common.Authorization = GITHUB_TOKEN;

    function getData(params: any) {
        const path: string = `https://api.github.com/search/${params.type}?q=${
            params.text
        }&page=${params.page}&per_page=10`;
        const cachedValue = gitHubCache.get(path);

        return cachedValue
            ? $q.when(cachedValue)
            : $http.get(path).then((res: any) => {
                gitHubCache.put(path, res);
                return $q.when(res);
            });
    }

    function getUser(name: any) {
        const path = `https://api.github.com/users/${name}`;
        const cachedValue = gitHubCache.get(path);
        const resultsPerPage = 20;
        const userData: any = {
            data: null,
            repos: null,
            starred: null
        };

        if (cachedValue) {
            const length = cachedValue.repos.length;
            cachedValue.repos.length = length > resultsPerPage 
                ? resultsPerPage
                : length;
        }

        return cachedValue
            ? $q.when(cachedValue)
            : $q
                .all([
                    $http
                        .get(path)
                        .then((res: any) => (userData.data = res.data)),
                    $http
                        .get(`${path}/starred`)
                        .then((res: any) => (userData.starred = res.data)),
                    $http
                        .get(`${path}/repos?page=1&per_page=${resultsPerPage}`)
                        .then((res: any) => (userData.repos = res.data))
                ])
                .then(() => {
                    gitHubCache.put(path, userData);
                    return $q.when(userData);
                });
    }

    function loadMoreRepositories(name: string, page: number) {
        const path = `https://api.github.com/users/${name}/repos?page=${page}&per_page=20`;
        const cachedValue = gitHubCache.get(path);

        return cachedValue
            ? $q.when(cachedValue)
            : $http.get(path).then((res: any) => {
                gitHubCache.put(path, res);
                return $q.when(res);
            });
    }

    return {
        getData,
        getUser,
        loadMoreRepositories
    };
}
