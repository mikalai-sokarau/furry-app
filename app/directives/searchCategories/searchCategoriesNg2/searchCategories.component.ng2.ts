import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { SEARCH_CATEGORIES } from '../../../common/constants';
import searchCategoriesTemplate from './searchCategories.template.ng2.html';
import '../searchCategories.styles.scss';

@Component({
  selector: 'search-bar',
  template: searchCategoriesTemplate,
})
export class SearchCategories {
  categories: string[];
  state: any;
  stateParams: any;

  constructor(
    @Inject('$state') $state: any,
    @Inject('$stateParams') $stateParams: any
  ) {
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
