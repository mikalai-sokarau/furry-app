export default function($scope, $state, $stateParams) {
    this.resultsList = [];
    this.resultCategory = "";
    this.link = "";
    this.showFrom = 0;
    this.paginationPage = 0;

    this.showUserPage = event => {
        $state.go("user", { text: event.currentTarget.textContent, page: $stateParams.page });
    };

    this.changePage = function(pageNumber) {
        this.paginationPage = pageNumber;
        $stateParams.page = pageNumber;
        // $state.go("users", {text: $stateParams.text, page: pageNumber}, {location: true, notify: false, reload:false});
    }

    $scope.$on("GITHUB_DATA_RECEIVED", (err, dataObj) => {
        this.resultCategory = dataObj.name;
        this.paginationPage = $stateParams.page;
        this.resultsList = dataObj.data;
        // this.resultsList = dataObj.data.reduce((acc, item) => {
        //     const accLastItem = acc[acc.length - 1];
        //     accLastItem.length < 10 ? accLastItem.push(item) : acc.push([item]);
        //     return acc;
        // }, [[]]);
        // $scope.$digest();
    });
}
