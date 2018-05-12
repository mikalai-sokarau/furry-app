const GITHUB_TOKEN = '17f43dadb83200b2cc5db0e98f9340a25ec82402';
const STATES = [
    {
        name: 'repositories',
        url: '/search/repositories?:text&:page',
        component: 'mainView'
    },
    {
        name: 'issues',
        url: '/search/issues?:text&:page',
        component: 'mainView'
    },
    {
        name: 'users',
        url: '/search/users?:text&:page',
        component: 'mainView'
    },
    {
        name: 'hello',
        url: '/',
        template: '<p style="text-align: center;">Welcome page<p>'
    },
    {
        name: 'search',
        url: '/search',
        component: 'mainView'
    },
    {
        name: 'user',
        url: '/user',
        component: 'userView'
    }
];

export { GITHUB_TOKEN, STATES };
