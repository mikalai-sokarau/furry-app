export default function($scope, $stateParams, $transitions, gitHubMessager) {
    $scope.$on("GITHUB_DATA_LOADED", function(err, data) {
        $scope.$broadcast("GITHUB_DATA_RECEIVED", data);
    });
    $transitions.onSuccess({}, function(transition) {
        gitHubMessager.getData();
    });
}
