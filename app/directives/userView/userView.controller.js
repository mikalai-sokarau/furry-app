export default function($scope, $stateParams, gitHubMessager) {
    this.userName = '';
    this.avatarUrl = '';
    this.followers = 0;
    this.following = 0;
    this.starsCount = 0;
    this.repositoriesList = [];
    this.scrolledHeight = -900;
    this.chunksLoaded = 1;

    gitHubMessager.getUser($stateParams.name).then(res => {
        this.userName = res.data.login;
        this.avatarUrl = res.data.avatar_url;
        this.followers = res.data.followers;
        this.following = res.data.following;
        this.starsCount = res.starred.length;
        this.repositoriesList = res.repos;
    });

    // const userRepositoriesElem = document.querySelector('.user-repositories');
    // const infinitiLoadElementHeight = 2060;

    // window.onscroll = () => {
    //     if (
    //         this.scrolledHeight >
    //         userRepositoriesElem.getBoundingClientRect().top
    //     ) {
    //         this.scrolledHeight -= infinitiLoadElementHeight;
    //         gitHubMessager
    //             .sendRequest(
    //                 `https://api.github.com/users/${
    //                     $stateParams.text
    //                 }/repos?page=${this.chunksLoaded}&per_page=20`
    //             )
    //             .then(res => this.repositoriesList.push(...res.data));
    //         this.chunksLoaded++;
    //     }
    // };
}
