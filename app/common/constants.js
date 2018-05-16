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
        template: "<p style='text-align: center; margin-top: 70px'>App's welcome page<p>"
    },
    {
        name: 'search',
        url: '/search',
        component: 'mainView'
    },
    {
        name: 'user',
        url: '/user?:text',
        component: 'userView'
    }
];

export { STATES };
