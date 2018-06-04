export default class default_1 {
    constructor($scope, $stateParams, $window, gitHubMessager, utils) {
        this.$window = $window;
        this.$scope = $scope;
        this.$stateParams = $stateParams;
        this.gitHubMessager = gitHubMessager;
        this.utils = utils;
        this.userName = '';
        this.profileUrl = '';
        this.avatarUrl = '';
        this.followers = 0;
        this.following = 0;
        this.starsCount = 0;
        this.repositoriesList = [];
        this.isContentLoading = true;
        this.isError = false;
        this.nextPageToLoad = 2;
    }
    goBack() {
        this.$window.history.back();
    }
    $postLink() {
        this.gitHubMessager
            .getUser(this.$stateParams.name)
            .then((res) => {
            this.userName = res.data.login;
            this.profileUrl = res.data.html_url;
            this.avatarUrl = res.data.avatar_url;
            this.followers = res.data.followers;
            this.following = res.data.following;
            this.starsCount = res.starred.length;
            this.repositoriesList = res.repos;
            this.isContentLoading = false;
        })
            .catch(() => {
            this.isContentLoading = false;
            this.isError = true;
        });
        this.$window.onscroll = this.utils.throttle(() => {
            const fullHeight = document.body.scrollHeight;
            const windowInnerHeight = window.innerHeight;
            const scrolledHeight = window.pageYOffset;
            const pixelsRemainToTheEndOfTheWindow = 300;
            this.isContentLoading = true;
            if (fullHeight - windowInnerHeight - scrolledHeight <=
                pixelsRemainToTheEndOfTheWindow) {
                this.gitHubMessager
                    .loadMoreRepositories(this.$stateParams.name, this.nextPageToLoad++)
                    .then((res) => {
                    if (res.data.length < 20)
                        this.$window.onscroll = null;
                    this.repositoriesList.push(...res.data);
                    this.isContentLoading = false;
                }, () => {
                    this.isContentLoading = false;
                });
            }
        }, 500);
    }
}
default_1.$inject = [
    '$scope',
    '$stateParams',
    '$window',
    'gitHubMessager',
    'utils'
];
// export default function($scope: any, $stateParams: any, gitHubMessager: any, utils: any) {
//     this.userName = '';
//     this.profileUrl = '';
//     this.avatarUrl = '';
//     this.followers = 0;
//     this.following = 0;
//     this.starsCount = 0;
//     this.repositoriesList = [];
//     this.isContentLoading = true;
//     this.isError = false;
//     this.goBack = () => window.history.back();
//     let nextPageToLoad = 2;
//     gitHubMessager
//         .getUser($stateParams.name)
//         .then((res: any) => {
//             this.userName = res.data.login;
//             this.profileUrl = res.data.html_url;
//             this.avatarUrl = res.data.avatar_url;
//             this.followers = res.data.followers;
//             this.following = res.data.following;
//             this.starsCount = res.starred.length;
//             this.repositoriesList = res.repos;
//             this.isContentLoading = false;
//         })
//         .catch(() => {
//             this.isContentLoading = false;
//             this.isError = true;
//         });
//     window.onscroll = utils.throttle(() => {
//         const fullHeight = document.body.scrollHeight;
//         const windowInnerHeight = window.innerHeight;
//         const scrolledHeight = window.pageYOffset;
//         const pixelsRemainToTheEndOfTheWindow = 300;
//         this.isContentLoading = true;
//         if (fullHeight - windowInnerHeight - scrolledHeight <= pixelsRemainToTheEndOfTheWindow) {
//             gitHubMessager
//                 .loadMoreRepositories($stateParams.name, nextPageToLoad++)
//                 .then((res: any) => {
//                     if (res.data.length < 20) window.onscroll = null;
//                     this.repositoriesList.push(...res.data);
//                     this.isContentLoading = false;
//                 }, () => {
//                     this.isContentLoading = false;
//                 });
//         }
//     }, 500);
// }
//# sourceMappingURL=userView.controller.js.map