var indexApp = angular.module("indexApp", []);

indexApp.controller('indexCtrl', ['$scope', function($scope) {
    $scope.button = "This is cool!!!";

    $scope.searchList = ['hello', 'world'];

    $scope.items = [];

    $scope.search = function (s) {
        $scope.items = [];
        $scope.items = $scope.searchList.filter(function (ls) {
            return s == ls;
        });
    }
}]);

angular.element(document).ready(function () {
    angular.bootstrap(document, ['indexApp']);
});
