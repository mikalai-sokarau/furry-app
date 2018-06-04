export default class {
    isCategoriesPage: boolean;

    static $inject = ['$state'];

    constructor($state: any) {
        this.isCategoriesPage = $state.current.name === 'search.categories';
    }
}

// export default function($state: any) {
//     this.isCategoriesPage = $state.current.name === 'search.categories';
// }
