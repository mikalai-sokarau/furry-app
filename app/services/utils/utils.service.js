export default class default_1 {
    constructor($timeout) {
        this.timeout = $timeout;
    }
    debounce(func, wait) {
        let timeout;
        return () => {
            const context = this;
            const args = arguments;
            const later = function () {
                timeout = null;
                func.apply(context, args);
            };
            clearTimeout(timeout);
            timeout = this.timeout(later, wait);
        };
    }
    throttle(func, limit) {
        let wait = false;
        return () => {
            if (!wait) {
                wait = true;
                this.timeout(function () {
                    wait = false;
                    func.call();
                }, limit);
            }
        };
    }
}
default_1.$inject = ['$timeout'];
// export default function($timeout: any) {
//   function debounce(func: Function, wait: number) {
//     let timeout: any;
//     return function() {
//       const context = this;
//       const args = arguments;
//       const later = function() {
//         timeout = null;
//         func.apply(context, args);
//       };
//       clearTimeout(timeout);
//       timeout = $timeout(later, wait);
//     };
//   }
//   function throttle(func: any, limit: number) {
//     let wait = false;
//     return function() {
//       if (!wait) {
//         wait = true;
//         $timeout(function() {
//           wait = false;
//           func.call();
//         }, limit);
//       }
//     };
//   }
//   return {
//     debounce,
//     throttle
//   };
// }
//# sourceMappingURL=utils.service.js.map