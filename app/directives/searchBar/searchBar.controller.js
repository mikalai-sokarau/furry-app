import GitHub from 'github-api';

import { GITHUB_TOKEN } from '../../common/constants';

export default function ($scope) {
  this.searchText = '';
  this.gh = new GitHub({ GITHUB_TOKEN });
  this.responce = 'nothing';

  this.getData = () => {
    window.location = "#!/search"

    const search = this.gh.search();
    console.log(this.searchText);
    search.forRepositories({ q: this.searchText }, (err, data) => {
      this.responce = data;
      $scope.$emit('GITHUB_DATA_LOADED', data);
    })
  }
}
