export default function($timeout) {
    return function(func, limit) {
        let wait = false;
        
        return function() {
            if (!wait) {
                wait = true;

                $timeout(function() {
                    wait = false;
                    func.call();
                }, limit);
            }
        };
    };
}
