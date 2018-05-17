export default function($scope, $stateParams, $transitions, gitHubMessager) {
    $transitions.onSuccess({}, function() {
        gitHubMessager.getData();
    });
}
