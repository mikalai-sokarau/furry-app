import { SEARCH_CATEGORIES } from '../../common/constants';

export default function($state, $stateParams) {
    this.categories = SEARCH_CATEGORIES;

    this.changeCategory = category => {
        $state.go('search.categories', {
            type: category,
            text: $stateParams.text,
            page: 1
        });
    };
}
