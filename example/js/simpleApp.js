(function(){
	'use strict'
	angular.module("example", [])
	
	.controller("exampleController", function($scope){
	$scope.welcome = "Welcome in Example Controller Scope";
	$scope.data = [
						{
                                        type: 'i',
                                        placeholder: 'Name',
                                        name: 'name',
                                        value: '',
                                        required: true

                                    },
                                    {
                                        type: 's',
                                        placeholder: 'Example Select',
                                        multiple : true,
                                        name: 'query type',
                                        value: '',
                                        options: [
                                            "Option 1",
                                            "Option 2",
                                        ],
                                        required: true
                                    },
                                    {
                                        type: 't',
                                        placeholder: 'Message',
                                        name: 'message',
                                        value: '',
                                        required: true
                                    }
						
                        ];
	
	});

})();