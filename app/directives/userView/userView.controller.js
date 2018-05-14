export default function($scope) {
    this.userName = "";
    this.avatarUrl = "";
    this.followers = 0;
    this.following = 0;
    this.starsCount = 0;
    this.repositoriesList = [];

    $scope.$on("GITHUB_DATA_RECEIVED", (err, dataObj) => {
        this.userName = dataObj.data.login;
        this.avatarUrl = dataObj.data.avatar_url;
        this.followers = dataObj.data.followers;
        this.following = dataObj.data.following;
        this.starsCount = dataObj.starred.length;
        this.repositoriesList = dataObj.repos;
    });
}
