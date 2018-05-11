export default function ($scope) {
    this.resultsList = [];
    $scope.$on('GITHUB_DATA_RECEIVED', (err, data) => {
        this.resultsList = data;
        $scope.$apply();
    });
}
