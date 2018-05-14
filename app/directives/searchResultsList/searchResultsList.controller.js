export default function ($scope, deliveredData) {
    this.resultsList = [];
    this.resultCategory = '';
    
    $scope.$on('GITHUB_DATA_RECEIVED', (err, dataObj) => {
        this.resultCategory = dataObj.name;
        this.resultsList.length = 0;
        this.resultsList.push(...dataObj.data);
        $scope.$apply();
        console.log(dataObj);
    });
}

/*
    todo: instead this.resultsList length = 0 
    add caching old search results
*/
