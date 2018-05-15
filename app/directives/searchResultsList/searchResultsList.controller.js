export default function($scope, $state, $stateParams) {
    this.resultsList = [];
    this.resultCategory = "";
    this.currentPage = 0;
    this.totalResultsCount = 0;
    this.lastResultsPage = 0;

    this.showUserPage = (event) => {
        $state.go("user", {
            text: event.currentTarget.textContent,
            page: $stateParams.page
        });
    };

    this.goBack = function() {
        $state.go($state.$current.name, {
            text: $stateParams.text,
            page: +$stateParams.page - 1
        });
    };

    this.goForward = function() {
        $state.go($state.$current.name, {
            text: $stateParams.text, 
            page: +$stateParams.page + 1
        });
    };

    this.calculateLastResultPage = (num) => {
        const lastPage = Math.ceil(num / 10);
        this.lastResultsPage = lastPage > 100 ? 100 : lastPage;
    }

    $scope.$on("GITHUB_DATA_RECEIVED", (err, dataObj) => {
        this.resultCategory = dataObj.name;
        this.currentPage = $stateParams.page;
        this.resultsList = dataObj.data;
        this.totalResultsCount = dataObj.totalCount;
        this.calculateLastResultPage(dataObj.totalCount);
    });
}
