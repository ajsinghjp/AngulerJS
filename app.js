var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope)
						{ 						
							$scope.visible = true; 
							$scope.count = 0;
							$scope.toggle = function() 
											{
												$scope.visible = !$scope.visible; 
											};
						    $scope.copy = function() 
											{
												alert("you copy content"); 
											};
							$scope.blur = function() 
											{
												alert("you lose focus"); 
											};
						    $scope.cordinate = function(myE)
											{
												$scope.x = myE.clientX;
												$scope.y = myE.clientY
											}
							
						}
);