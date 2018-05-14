import resultItemCtrl from './resultItem.controller';
import resultItemTemplate from './resultItem.template.html';

export default function () {
    return {
        restrict: 'E',
        templateUrl: resultItemTemplate,
        controller: resultItemCtrl,
        controllerAs: 'resultItemCtrl',
        require: "^searchResultsList",
        link: function (scope, element, attrs, ctrls) {
            const elem = JSON.parse(attrs.itemValue);
            console.log(elem.owner.login);
            console.log(ctrls);
        }
    }
};
