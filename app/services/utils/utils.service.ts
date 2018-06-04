export default function($timeout: any) {
    function debounce(func: Function, wait: number) {
        let timeout: any;

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

    function throttle(func: any, limit: number) {
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
