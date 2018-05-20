export default function($state, $stateParams, $transitions) {
    this.searchText = '';

    this.search = () => {
        const urlSearchText = $stateParams.text;
        const newCategoryName =
            $state.current.name === 'hello'
                ? 'repositories'
                : $state.current.type;

        if (urlSearchText !== this.searchText) {
            $state.go('search.categories', {
                type: newCategoryName,
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
