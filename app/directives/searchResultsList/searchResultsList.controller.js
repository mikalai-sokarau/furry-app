export default function($scope, $state, $stateParams) {
    this.resultsList = [];
    this.resultCategory = "";
    this.currentPage = 0;
    this.totalResultsCount = 0;
    this.lastResultsPage = 0;

    this.getPaginationList = function() {
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
        } else {
            resultArr.push(
                "...",
                this.lastResultsPage - 1,
                this.lastResultsPage
            );
        }
        // add first pages to the resultArr
        if (this.currentPage <= 7) {
            for (let i = resultArr[0] - 1; i > 0; i--) {
                resultArr.unshift(i);
            }
        } else {
            resultArr.unshift(
                1,
                2,
                '...'
            )
        }

        return resultArr;
    };

    this.goToPage = function(event) {
        if (event.currentTarget.textContent != "...") {
            $state.go($state.$current.name, {
                text: $stateParams.text,
                page: event.currentTarget.textContent
            });
        }
    };

    this.showUserPage = function(event) {
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

    function calculateLastResultPage(num) {
        const lastPage = Math.ceil(num / 10);
        return lastPage > 100 ? 100 : lastPage;
    };

    $scope.$on("GITHUB_DATA_RECEIVED", (err, dataObj) => {
        this.resultCategory = dataObj.name;
        this.currentPage = $stateParams.page;
        this.resultsList = dataObj.data;
        this.totalResultsCount = dataObj.totalCount;
        this.lastResultsPage = calculateLastResultPage(dataObj.totalCount);
        this.getPaginationList();
    });
}
