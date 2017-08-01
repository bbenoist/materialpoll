'use strict';

/**
 * @ngdoc function
 * @name materialPollApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the materialPollApp
 */
angular.module('materialPollApp')
  .controller('MainCtrl', function ($scope, $http, myConfig) {
    $scope.options = [{},{},{}];
    //submit poll
    $scope.submit = function() {
        var votes = [];
        var added = false;
        for(var x = 0; x < $scope.options.length; x++){
            votes.push(0);
            if($scope.options[x].name !== undefined && $scope.title !== undefined){
                added = true;
            }
        }
        if(added !== false){
            $('.submitButton').hide();
            $http.post(myConfig.backend,{answers: $scope.options, name: $scope.title, multiple: $scope.multiple, singleIP: $scope.singleIP, votes: votes})
            .then(function(response){
                var data = response.data;
                $scope.linkto = data[1].poll.id;
                $scope.location = window.location.protocol + window.location.host + '/' + $scope.linkto;
            });
        }
    };
    //add new poll option automatically if focused on the next to last option and other fields are filled
    $scope.addOption = function() {
    	var addOpt = false;
    	for(var x = 0; x < $scope.options.length - 1; x++){
    		if($scope.options[x].name !== '' && $scope.options[x].name != null){
    			addOpt = true;
    		}else {
    			addOpt = false;
    	    }
        }
        if(addOpt === true){
            $scope.options.push({});
        }
    };
});
