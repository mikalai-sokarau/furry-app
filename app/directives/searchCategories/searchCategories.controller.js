import { STATES } from "../../common/constants";

export default function($state, $stateParams) {
  this.states = STATES.filter(state => state.url.startsWith("/search/"));
  this.getData = (category) => $state.go(category, { text: $stateParams.text, page: 1 });
}
