export default function ($scope, deliveredData) {
    this.resultsList = [];
    $scope.$on('GITHUB_DATA_RECEIVED', (err, data) => {
        this.resultsList.length = 0;
        this.resultsList.push(...data);
        $scope.$apply();
        console.log(data);
    });
}

/*
    todo: instead this.resultsList length = 0 
    add caching old search results
*/
