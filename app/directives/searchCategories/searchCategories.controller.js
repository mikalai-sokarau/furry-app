import { SEARCH_CATEGORIES } from '../../common/constants';

export default function() {
    this.categories = SEARCH_CATEGORIES;
    this.getCategoryName = category => category.name.split('.')[1];
}
