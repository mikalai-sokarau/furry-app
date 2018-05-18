import { STATES } from '../../common/constants';

export default function() {
    this.categories = STATES.filter(state => state.name.startsWith('search.'));
    this.getCategoryName = category => category.name.split('.')[1];
}
