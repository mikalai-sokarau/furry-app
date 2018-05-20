export default function($state, $stateParams, $transitions) {
    this.searchText = '';

    this.search = () => {
        const urlSearchText = $stateParams.text;
        const newCategoryType =
            $state.current.name !== 'hello'
                ? $stateParams.type
                : 'repositories';

        if (urlSearchText !== this.searchText) {
            $state.go('search.categories', {
                type: newCategoryType,
                text: this.searchText,
                page: 1
            });
        } else {
            /* 
            do nothing, search textes are equal, 
            it is no reason to send one more request. 
            */
        }
    };

    $transitions.onSuccess({}, () => {
        this.searchText = $stateParams.text;
    });
}
