export default function($timeout) {
    return {
        debounce: function(func, wait) {
            let timeout;

            return function() {
                const context = this;
                const args = arguments;
                const later = function() {
                    timeout = null;
                    func.apply(context, args);
                };

                clearTimeout(timeout);
                timeout = $timeout(later, wait);
            };
        },
        
        throttle: function(func, limit) {
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
        }
    };
}
