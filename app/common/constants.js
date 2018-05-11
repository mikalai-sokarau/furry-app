const GITHUB_TOKEN = '17f43dadb83200b2cc5db0e98f9340a25ec82402';
const STATES = [
    {
        name: 'repositories',
        url: '/search/repositories?:text&:page',
        component: 'searchResultsView'
    },
    {
        name: 'issues',
        url: '/search/issues',
        component: 'searchResultsView'
    },
    {
        name: 'users',
        url: '/search/users',
        component: 'searchResultsView'
    },
    {
        name: 'hello',
        url: '/',
        template: '<p style="text-align: center;">Welcome page<p>'
    },
    {
        name: 'search',
        url: '/search',
        component: 'searchResultsView'
    },
    {
        name: 'user',
        url: '/user',
        component: 'userView'
    }
];

export { GITHUB_TOKEN, STATES };
