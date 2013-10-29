var app = angular.module('hackerTalks', []);
            
app.controller('homeCtrl', ['$scope', '$filter', '$sce', function($scope, $filter, $sce) {
    $scope.videoUrls = [];
    var videoIds = ['mZ8_QgJ5mbs','M7lc1UVf-VE'];
    
    angular.forEach(videoIds, function(id, index) {
        var url = $sce.trustAsResourceUrl('http://www.youtube.com/embed/' + id);
        $scope.videoUrls.push(url);
    });
}]);