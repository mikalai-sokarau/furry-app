export default function($timeout) {
    function debounce(func, wait) {
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
    }

    function throttle(func, limit) {
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

    return {
        debounce,
        throttle
    };
}
