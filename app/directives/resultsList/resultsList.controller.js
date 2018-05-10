export default function ($scope) {
    this.resultsList = [1, 2, 3];
    $scope.$on('GITHUB_DATA_RECEIVED', (err, data) => {
        this.resultsList = data;
        $scope.$apply();
    });
}
