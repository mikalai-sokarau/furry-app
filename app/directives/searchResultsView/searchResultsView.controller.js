import { STATES } from '../../common/constants';

export default function ($scope) {
    this.states = STATES.filter(state => state.url.startsWith('/search/'));
}
