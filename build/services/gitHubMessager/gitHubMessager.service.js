import { GITHUB_TOKEN } from '../../common/constants';
export default class default_1 {
    constructor($http, $q, gitHubCache) {
        this.http = $http;
        this.q = $q;
        this.gitHubCache = gitHubCache;
        this.http.defaults.headers.common.Authorization = GITHUB_TOKEN;
    }
    getData(params) {
        const path = `https://api.github.com/search/${params.type}?q=${params.text}&page=${params.page}&per_page=10`;
        const cachedValue = this.gitHubCache.get(path);
        return cachedValue
            ? this.q.when(cachedValue)
            : this.http.get(path).then((res) => {
                this.gitHubCache.put(path, res);
                return this.q.when(res);
            });
    }
    getUser(name) {
        const path = `https://api.github.com/users/${name}`;
        const cachedValue = this.gitHubCache.get(path);
        const resultsPerPage = 20;
        const userData = {
            data: null,
            repos: null,
            starred: null
        };
        if (cachedValue) {
            const length = cachedValue.repos.length;
            cachedValue.repos.length =
                length > resultsPerPage ? resultsPerPage : length;
        }
        return cachedValue
            ? this.q.when(cachedValue)
            : this.q
                .all([
                this.http.get(path).then((res) => (userData.data = res.data)),
                this.http
                    .get(`${path}/starred`)
                    .then((res) => (userData.starred = res.data)),
                this.http
                    .get(`${path}/repos?page=1&per_page=${resultsPerPage}`)
                    .then((res) => (userData.repos = res.data))
            ])
                .then(() => {
                this.gitHubCache.put(path, userData);
                return this.q.when(userData);
            });
    }
    loadMoreRepositories(name, page) {
        const path = `https://api.github.com/users/${name}/repos?page=${page}&per_page=20`;
        const cachedValue = this.gitHubCache.get(path);
        return cachedValue
            ? this.q.when(cachedValue)
            : this.http.get(path).then((res) => {
                this.gitHubCache.put(path, res);
                return this.q.when(res);
            });
    }
}
default_1.$inject = ['$http', '$q', 'gitHubCache'];
// export default function($http: any, $q: any, gitHubCache: any) {
//   $http.defaults.headers.common.Authorization = GITHUB_TOKEN;
//   function getData(params: any) {
//     const path: string = `https://api.github.com/search/${params.type}?q=${
//       params.text
//     }&page=${params.page}&per_page=10`;
//     const cachedValue = gitHubCache.get(path);
//     return cachedValue
//       ? $q.when(cachedValue)
//       : $http.get(path).then((res: any) => {
//           gitHubCache.put(path, res);
//           return $q.when(res);
//         });
//   }
//   function getUser(name: any) {
//     const path = `https://api.github.com/users/${name}`;
//     const cachedValue = gitHubCache.get(path);
//     const resultsPerPage = 20;
//     const userData: any = {
//       data: null,
//       repos: null,
//       starred: null
//     };
//     if (cachedValue) {
//       const length = cachedValue.repos.length;
//       cachedValue.repos.length =
//         length > resultsPerPage ? resultsPerPage : length;
//     }
//     return cachedValue
//       ? $q.when(cachedValue)
//       : $q
//           .all([
//             $http.get(path).then((res: any) => (userData.data = res.data)),
//             $http
//               .get(`${path}/starred`)
//               .then((res: any) => (userData.starred = res.data)),
//             $http
//               .get(`${path}/repos?page=1&per_page=${resultsPerPage}`)
//               .then((res: any) => (userData.repos = res.data))
//           ])
//           .then(() => {
//             gitHubCache.put(path, userData);
//             return $q.when(userData);
//           });
//   }
//   function loadMoreRepositories(name: string, page: number) {
//     const path = `https://api.github.com/users/${name}/repos?page=${page}&per_page=20`;
//     const cachedValue = gitHubCache.get(path);
//     return cachedValue
//       ? $q.when(cachedValue)
//       : $http.get(path).then((res: any) => {
//           gitHubCache.put(path, res);
//           return $q.when(res);
//         });
//   }
//   return {
//     getData,
//     getUser,
//     loadMoreRepositories
//   };
// }
//# sourceMappingURL=gitHubMessager.service.js.map