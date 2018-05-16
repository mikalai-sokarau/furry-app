export default function($scope, $stateParams, gitHubMessager) {
    this.userName = "";
    this.avatarUrl = "";
    this.followers = 0;
    this.following = 0;
    this.starsCount = 0;
    this.repositoriesList = [];
    this.scrolledHeight = -1000;
    this.chunksLoaded = 1;
    

    const userRepositoriesElem = document.querySelector('.user-repositories');
    const infinitiLoadElementHeight = 2060;
    
    window.onscroll = () => {
        if (this.scrolledHeight > userRepositoriesElem.getBoundingClientRect().top) {
            this.scrolledHeight -= infinitiLoadElementHeight;
            gitHubMessager
                .sendRequest(`https://api.github.com/users/${$stateParams.text}/repos?page=${this.chunksLoaded}&per_page=20`)
                .then(res => this.repositoriesList.push(...res.data))
            this.chunksLoaded++;
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
