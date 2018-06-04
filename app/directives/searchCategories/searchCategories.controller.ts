import { SEARCH_CATEGORIES } from '../../common/constants';

export default class {
  categories: string[];
  state: any;
  stateParams: any;

  static inject = ['$state', '$stateParams'];

  constructor($state: any, $stateParams: any) {
    this.categories = SEARCH_CATEGORIES;
    this.state = $state;
    this.stateParams = $stateParams;
  }

  changeCategory(category: string) {
    this.state.go('search.categories', {
      type: category,
      text: this.stateParams.text,
      page: 1
    });
  }
}

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
