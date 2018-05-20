const GITHUB_TOKEN = 'token 20176991854ac58f008621f3362a62face888d5e';
const SEARCH_CATEGORIES = [
    'repositories',
    'issues',
    'users'
];
const STATES = [
    {
        name: 'hello',
        url: '/hello',
        component: 'mainView'
    },
    {
        name: 'user',
        url: '/user/:name',
        component: 'userView'
    },
    {   
        name: 'search',
        url: '/search',
        component: 'mainView',
    },
    {
        name: 'search.categories',
        url: '/categories?type&text&page',
        component: 'searchResultsList',
        params: {
            type: null,       
            page: null,
            text: null
        }
    },
    
    // {
    //     name: 'search.repositories',
    //     url: '/repositories?text&page',
    //     component: 'searchResultsList',
    //     params: {
    //         page: null,
    //         text: null
    //     }
    // },
    // {
    //     name: 'search.issues',
    //     url: '/issues?text&page',
    //     component: 'searchResultsList',
    //     params: {
    //         page: null,
    //         text: null
    //     }
    // },
    // {
    //     name: 'search.users',
    //     url: '/users?text&page',
    //     component: 'searchResultsList',
    //     params: {
    //         page: null,
    //         text: null
    //     }
    // }
];

export { GITHUB_TOKEN, SEARCH_CATEGORIES, STATES };
