var autocomplete = angular.module("autocomplete", []);

autocomplete.directive('autocomplete', ['$http', function ($http) {
    return {
        restrict: 'E',
        scope: {
            placeholder: '@',
            fetch: '=',
            item: '='
        },
        controller: function ($scope) {
            $scope.search = function (s) {
                $scope.list = [];
                $scope.fetch.req = {
                    searchString: s,
                    cookie: 0,
                    limit: 10
                };
                $http.post($scope.fetch.url, JSON.stringify($scope.fetch.req)).then(
                    function (r) {
                        var response = r.data;
                        if (response.code == 0) {
                            $scope.list = response.items;
                        }
                    },
                    function (e) {
                        console.log(e);
                    }
                );
            }
            $scope.selected = function (index) {
                $scope.item = $scope.list[index].name;
                console.log($scope.item);
                $scope.list = [];
            }
        },
        template: '<div class="dropdown ng-class:{\'open\':list.length > 0}">\
                    <input id="autocomplete" type="text" class="form-control" placeholder="{{placeholder}}" aria-haspopup="true" aria-expanded="false" ng-model="item" ng-change="search(item)" ng-blur="list = []">\
                    <ul class="dropdown-menu" aria-labelledby="autocomplete" style="width:100%;">\
                        <li ng-repeat="item in list" ng-click="selected($index)"><a href="">{{item.name}}</a></li>\
                    </ul>\
                   </div>'
    };
}]);
