import { SEARCH_CATEGORIES } from '../../common/constants';
export default class default_1 {
    constructor($state, $stateParams) {
        this.categories = SEARCH_CATEGORIES;
        this.state = $state;
        this.stateParams = $stateParams;
    }
    changeCategory(category) {
        this.state.go('search.categories', {
            type: category,
            text: this.stateParams.text,
            page: 1
        });
    }
}
default_1.inject = ['$state', '$stateParams'];
// export default function($state: any, $stateParams: any) {
//     this.categories = SEARCH_CATEGORIES;
//     this.changeCategory = (category: string) => {
//         $state.go('search.categories', {
//             type: category,
//             text: $stateParams.text,
//             page: 1
//         });
//     };
// }
//# sourceMappingURL=searchCategories.controller.js.map