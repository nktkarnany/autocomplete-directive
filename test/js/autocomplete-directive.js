var autocomplete = angular.module("autocomplete", []);

autocomplete.directive('autocomplete', ['api', function (api) {
    return {
        restrict: 'E',
        scope: {
            placeholder: '@',
            items: '='
        },
        controller: function ($scope) {
            $scope.search = function (s) {
                $scope.items = [];
                api.fetchItems({
                    searchString: s,
                    cookie: 0,
                    limit: 10
                }).then(
                    function (r) {
                        var response = r.data;
                        if(response.code == 0) {
                            $scope.items = response.items;
                        }
                    },
                    function (e) {
                        console.log(e);
                    }
                );
            }
        },
        template: '<div class="dropdown ng-class:{\'open\':items.length > 0}">\
                    <input id="autocomplete" type="text" class="form-control" placeholder="{{placeholder}}" aria-haspopup="true" aria-expanded="false" ng-model="s" ng-change="search(s)">\
                    <ul class="dropdown-menu" aria-labelledby="autocomplete" style="width:100%;">\
                        <li ng-repeat="item in items"><a href="">{{item.name}}</a></li>\
                    </ul>\
                   </div>'
    };
}]);

autocomplete.service('api', ['$http', function ($http) {

    this.fetchItems = function (req) {
        return $http.post('http://localhost:8080/SearchItems', JSON.stringify(req));
    }

}]);
