
    angular
            .module('example')
            .directive('stepForm', function () {
                return {
                    restrict: 'AE',
                    scope: {
                        parModel: '='
                    },
                    controller: function ($scope, $timeout) {
					
                        $scope.current = {
                            step: 0
                        };
                        $scope.error = false;
                        $scope.final = false;

                        $scope.checkStep = function (model) {
                            if(checkStep(model)){
                                return;
                            }
                            $scope.current.step += 1;
                            if ($scope.current.step < $scope.parModel.length) {
                                $timeout(function () {
                                    document.querySelector(".stepFill").focus();
                                }, 50);
                            }
                        };
                        
                        function checkStep(model){
                             // some validation might go here
                            if (model.required == true) {
                                //validation goes here
                                if (model.value.length < 1) {
                                    $scope.error = 'Please fill field: ' + model.placeholder + '.';
                                    return true;
                                }
                            }
                            clearError();
                        }

                        $scope.stepBack = function () {
                            if ($scope.current.step > 0) {
                                clearError();
                                $scope.current.step += -1;
                            }
                        };
                        $scope.skip = function(index){
                            if($scope.parModel[index].required !== true){
                                $scope.checkStep($scope.parModel[index]);
                            }
                        }
                        $scope.closeError = function () {
                            clearError();
                        };
                        function clearError() {
                            $scope.error = false;
                        };

                        $scope.enter = function (event, item) {
                            if (event.keyCode === 13) {
                                $scope.checkStep(item);
                            };
                        };

                        $scope.submitAction = function () {
                            // normal submit should be used there
                            var message = '';
                            for (var i = 0; i < $scope.parModel.length; i++) {
                                message += $scope.parModel[i].placeholder + ': ' + $scope.parModel[i].value + '\n';
                            }
                            alert(message);
                        };
                        
                        $scope.editStep = function(index){
                            $scope.current.step = index;
                            $scope.final = true;
                        }
                        $scope.goFinal = function(model){
                             if(checkStep(model)){
                                return;
                            }
                            $scope.current.step = $scope.parModel.length;
                        }

                    },
                    templateUrl: 'templateId.html',
                    link: function ($scope, $elm, $attrs) {


                    }
                }
            });
