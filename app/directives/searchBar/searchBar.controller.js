import GitHub from 'github-api';
import GITHUB_TOKEN from '../../common/constants';

export default function() {
  const that = this;
  this.searchText = '';
  this.gh = new GitHub({GITHUB_TOKEN});
  that.responce = 'nothing';

  this.getData = function() {
    const search = this.gh.search();
    search.forRepositories({q: this.searchText}, function (err, data) {
      that.responce = data;
      console.log(that.responce);
    })
    console.log(that.responce);
  }
}