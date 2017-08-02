var indexApp = angular.module("indexApp", ['autocomplete']);

indexApp.controller('indexCtrl', ['$scope', function ($scope) {

    $scope.fetch = {
        url: 'http://localhost:8080/SearchItems',
    };

}]);

angular.element(document).ready(function () {
    angular.bootstrap(document, ['indexApp']);
});
