import { STATES } from "../../common/constants";

export default function(gitHubMessager) {
  this.states = STATES.filter(state => state.url.startsWith("/search/"));
  this.getData = () => gitHubMessager.getData();
}
