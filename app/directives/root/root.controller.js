export default function($scope, $stateParams, $transitions, gitHubMessager) {
    $transitions.onSuccess({}, function(transition) {
        gitHubMessager.getData();
    });
}
