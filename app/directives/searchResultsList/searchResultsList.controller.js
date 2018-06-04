export default class default_1 {
    constructor($scope, $state, $stateParams, gitHubMessager) {
        this.goBack = function () {
            this.$state.go(this.$state.$current.name, {
                text: this.$stateParams.text,
                page: +this.$stateParams.page - 1
            });
        };
        this.$scope = $scope;
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.gitHubMessager = gitHubMessager;
        this.resultCategory = '';
        this.currentPage = 0;
        this.totalResultsCount = 0;
        this.lastResultsPage = 0;
        this.resultsList = [];
    }
    $postLink() {
        this.gitHubMessager
            .getData({
            type: this.$stateParams.type,
            text: this.$stateParams.text,
            page: this.$stateParams.page
        })
            .then((res) => {
            this.resultsList = res.data.items;
            this.resultCategory = this.$stateParams.type;
            this.currentPage = this.$stateParams.page;
            this.totalResultsCount = res.data.total_count;
            this.lastResultsPage = this.calculateLastResultPage(this.totalResultsCount);
        });
    }
    getPaginationList() {
        let start = this.currentPage - 3;
        let end = +this.currentPage + 3;
        const resultArr = [];
        // fill the resultArr accoring to the start and end points
        while (start < 1) {
            start++;
            end++;
        }
        if (end > this.lastResultsPage) {
            end = this.lastResultsPage;
        }
        for (let i = start; i <= end; i++) {
            resultArr.push(i);
        }
        // add last pages to the resultArr
        if (this.lastResultsPage - end <= 3) {
            for (let i = end + 1; i <= this.lastResultsPage; i++) {
                resultArr.push(i);
            }
        }
        else {
            resultArr.push('...', this.lastResultsPage - 1, this.lastResultsPage);
        }
        // add first pages to the resultArr
        if (this.currentPage <= 7) {
            for (let i = resultArr[0] - 1; i > 0; i--) {
                resultArr.unshift(i);
            }
        }
        else {
            resultArr.unshift(1, 2, '...');
        }
        return resultArr;
    }
    goToPage(event) {
        if (event.currentTarget.textContent != '...') {
            this.$state.go(this.$state.$current.name, {
                text: this.$stateParams.text,
                page: event.currentTarget.textContent
            });
        }
    }
    showUserPage(name) {
        this.$state.go('user', { name });
    }
    goForward() {
        this.$state.go(this.$state.$current.name, {
            text: this.$stateParams.text,
            page: +this.$stateParams.page + 1
        });
    }
    calculateLastResultPage(num) {
        const lastPage = Math.ceil(num / 10);
        return lastPage > 100 ? 100 : lastPage;
    }
}
default_1.$inject = ['$scope', '$state', '$stateParams', 'gitHubMessager'];
// export default function($scope: any, $state: any, $stateParams: any, gitHubMessager: any) {
//     this.resultCategory = '';
//     this.currentPage = 0;
//     this.totalResultsCount = 0;
//     this.lastResultsPage = 0;
//     this.resultsList = [];
//     gitHubMessager
//         .getData({
//             type: $stateParams.type,
//             text: $stateParams.text,
//             page: $stateParams.page
//         })
//         .then((res: any) => {
//             this.resultsList = res.data.items;
//             this.resultCategory = $stateParams.type;
//             this.currentPage = $stateParams.page;
//             this.totalResultsCount = res.data.total_count;
//             this.lastResultsPage = calculateLastResultPage(this.totalResultsCount);
//         });
//     this.getPaginationList = function() {
//         let start = this.currentPage - 3;
//         let end = +this.currentPage + 3;
//         const resultArr = [];
//         // fill the resultArr accoring to the start and end points
//         while (start < 1) {
//             start++;
//             end++;
//         }
//         if (end > this.lastResultsPage) {
//             end = this.lastResultsPage;
//         }
//         for (let i = start; i <= end; i++) {
//             resultArr.push(i);
//         }
//         // add last pages to the resultArr
//         if (this.lastResultsPage - end <= 3) {
//             for (let i = end + 1; i <= this.lastResultsPage; i++) {
//                 resultArr.push(i);
//             }
//         } else {
//             resultArr.push(
//                 '...',
//                 this.lastResultsPage - 1,
//                 this.lastResultsPage
//             );
//         }
//         // add first pages to the resultArr
//         if (this.currentPage <= 7) {
//             for (let i = resultArr[0] - 1; i > 0; i--) {
//                 resultArr.unshift(i);
//             }
//         } else {
//             resultArr.unshift(1, 2, '...');
//         }
//         return resultArr;
//     };
//     this.goToPage = function(event: any) {
//         if (event.currentTarget.textContent != '...') {
//             $state.go($state.$current.name, {
//                 text: $stateParams.text,
//                 page: event.currentTarget.textContent
//             });
//         }
//     };
//     this.showUserPage = function(name: string) {
//         $state.go('user', { name });
//     };
//     this.goBack = function() {
//         $state.go($state.$current.name, {
//             text: $stateParams.text,
//             page: +$stateParams.page - 1
//         });
//     };
//     this.goForward = function() {
//         $state.go($state.$current.name, {
//             text: $stateParams.text,
//             page: +$stateParams.page + 1
//         });
//     };
//     function calculateLastResultPage(num: number) {
//         const lastPage = Math.ceil(num / 10);
//         return lastPage > 100 ? 100 : lastPage;
//     }
// }
//# sourceMappingURL=searchResultsList.controller.js.map