var indexApp = angular.module("indexApp", []);

indexApp.controller('indexCtrl', ['$scope', function($scope) {
    $scope.button = "This is cool!!!";
}]);

angular.element(document).ready(function () {
    angular.bootstrap(document, ['indexApp']);
});
