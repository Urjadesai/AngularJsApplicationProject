var app = angular.module("myApp", []);
app.service('dataservice', function($http)
{
    this.display=function()
    {
        return $http.get('MOCK_DATA.JSON');
    }
    //this.name='ghhj';
});
app.controller('mainCtrl', function($scope, dataservice)
{
    dataservice.display(). then(function(response)
    {
        $scope.data = response.data;
        console.log(response.data);
    });
});
