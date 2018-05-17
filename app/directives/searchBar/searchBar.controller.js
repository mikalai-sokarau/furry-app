export default function($state, $stateParams, $transitions) {
    this.searchText = '';

    this.search = () => {
        const urlSearchText = $stateParams.text;
        const currentStateName =
            $state.current.name === 'hello'
                ? 'repositories'
                : $state.current.name;

        if (urlSearchText !== this.searchText) {
            $state.go(currentStateName, { text: this.searchText, page: 1 });
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
