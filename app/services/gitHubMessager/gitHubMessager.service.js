import GitHub from 'github-api';

const GITHUB_TOKEN = '17f43dadb83200b2cc5db0e98f9340a25ec82402';
// http://github-tools.github.io/github/docs/3.1.0/ // documentation link

class gitHubMessager {
  constructor() {
    this.gh = new GitHub({ token: GITHUB_TOKEN });
  }

  getDataFromGitHub(text) {
    this.gh = new GitHub({ token: GITHUB_TOKEN });
    const me = this.gh.getUser(text);
    me.getProfile(function (err, profile) {
      console.log(profile);
    })
  }
}

export default gitHubMessager;