import GitHub from 'github-api';

import { GITHUB_TOKEN } from '../../common/constants';

export default function ($scope) {
  const that = this;
  this.searchText = '';
  this.gh = new GitHub({ GITHUB_TOKEN });
  that.responce = 'nothing';

  this.getData = function () {
    window.location = "#!/search"
    
    const search = this.gh.search();
    search.forRepositories({ q: this.searchText }, function (err, data) {
      that.responce = data;
      $scope.$emit('GITHUB_DATA_LOADED', [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);  
      // console.log(that.responce);
    })
    // console.log(that.responce);
  }
}
