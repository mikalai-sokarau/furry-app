export default function($scope) {
    $scope.$on('GITHUB_DATA_LOADED', function(err, data) {
        $scope.$broadcast('GITHUB_DATA_RECEIVED', data);
    });
}
