var indexApp = angular.module("indexApp", ['autocomplete']);

indexApp.controller('indexCtrl', ['$scope', function($scope) {
    $scope.items = [];
}]);

angular.element(document).ready(function () {
    angular.bootstrap(document, ['indexApp']);
});
