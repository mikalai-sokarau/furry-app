export default function($timeout) {
    
    return function(func, wait) {
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
    };
}