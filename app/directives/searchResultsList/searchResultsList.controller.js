export default function ($scope) {
    this.resultsList = [1, 3, 5, 2, 4];
    $scope.$on('GITHUB_DATA_RECEIVED', (err, data) => {
        this.resultsList = data;
        $scope.$apply();
    });
}
