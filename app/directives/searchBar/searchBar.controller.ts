export default class {
  searchText: string;
  search: Function;

  static $inject = ['$state', '$stateParams', '$transitions'];

  constructor($state: any, $stateParams: any, $transitions: any) {
    
    this.searchText = '';
    this.search = (): void => {
      const urlSearchText = $stateParams.text;
      const newCategoryType =
        $state.current.name === 'hello'
          ? 'repositories'
          : $stateParams.type || $stateParams.name;

      const newCategoryName =
        $state.current.name === 'hello'
          ? 'search.categories'
          : $state.current.name;

      if (urlSearchText !== this.searchText) {
        $state.go(newCategoryName, {
          type: newCategoryType,
          text: this.searchText,
          page: 1,
          name: this.searchText
        });
      } else {
        /* 
          do nothing, search textes are equal,
          it is no reason to send one more request.
        */
      }
    };

    $transitions.onSuccess({}, () => {
      this.searchText = $stateParams.text || $stateParams.name;
    });
  }
}

// export default function($state: any, $stateParams: any, $transitions: any) {
//     this.searchText = '';
//     this.search = () => {
//         const urlSearchText = $stateParams.text;
//         const newCategoryType =
//             $state.current.name === 'hello'
//                 ? 'repositories'
//                 : $stateParams.type || $stateParams.name;

//         const newCategoryName =
//             $state.current.name === 'hello'
//                 ? 'search.categories'
//                 : $state.current.name;

//         if (urlSearchText !== this.searchText) {
//             $state.go(newCategoryName, {
//                 type: newCategoryType,
//                 text: this.searchText,
//                 page: 1,
//                 name: this.searchText
//             });
//         } else {
//             /*
//             do nothing, search textes are equal,
//             it is no reason to send one more request.
//             */
//         }
//     };

//     $transitions.onSuccess({}, () => {
//         this.searchText = $stateParams.text || $stateParams.name;
//     });
// }
