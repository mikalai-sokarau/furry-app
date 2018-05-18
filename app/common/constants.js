const STATES = [
    {
        name: 'hello',
        url: '/hello',
        component: 'mainView'
    },
    {
        name: 'user',
        url: '/user/name',
        component: 'userView'
    },
    {
        name: 'search',
        url: '/search',
        component: 'mainView'
    },
    {
        name: 'search.repositories',
        url: '/repositories?text&page',
        component: 'searchResultsList',
        params: {
            page: null,
            text: null
        }
    },
    {
        name: 'search.issues',
        url: '/issues?text&page',
        component: 'searchResultsList',
        params: {
            page: null,
            text: null
        }
    },
    {
        name: 'search.users',
        url: '/users?text&page',
        component: 'searchResultsList',
        params: {
            page: null,
            text: null
        }
    }
];

export { STATES };
