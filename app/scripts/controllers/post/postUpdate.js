
'use strict';

angularjsNodeApp.controller('PostUpdateCtrl', function($scope, $routeParams, $http) {
  $http.get('/api/post/update/:id').success(function(data) {
    $scope.post = data;
  });
});
