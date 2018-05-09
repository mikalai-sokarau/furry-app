import angular from 'angular';

const searchBarTemplate = require('./searchBar.template.html');

app.directive('searchBar', function () {
  return {
    template: "searchBarTemplate"
  }
})