export default function($scope) {
    this.userName = "";
    this.avatarUrl = "";
    this.followers = 0;
    this.following = 0;
    this.starsCount = 0;
    this.repositoriesList = [];

    this.pageYOffset = window.pageYOffset;

    window.onscroll = function(event) {
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
            console.log("you're at the bottom of the page");
        }
    }

    $scope.$on("GITHUB_DATA_RECEIVED", (err, dataObj) => {
        this.userName = dataObj.data.login;
        this.avatarUrl = dataObj.data.avatar_url;
        this.followers = dataObj.data.followers;
        this.following = dataObj.data.following;
        this.starsCount = dataObj.starred.length;
        this.repositoriesList = dataObj.repos;
    });
}
