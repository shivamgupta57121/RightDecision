var app = angular.module("app",['ngRoute']);


// factories = data 

app.factory('questiondata' , function(){

    var service = {}
    
    service.personality =[[0,'Do you like to read Sherlock homes ?'],[0,'Do you like to study about human body ?'],[1,'Have you worked with any NGO ?'],[1,'Have you helped any poor person .']];
    service.interest = [[0,'You like maths'],[0,'You like algebra'],[0,'you like pythegorem theorem'],[1,'You like Physics'],[1,'You like newton'],[2,'You like organic chemistry'],[2,'You like chemisry']];
    return service;

});

app.factory('user',function(){

    var service = {};
    service.username = 'Rohit';

    service.personality = 'Realistic';
    service.interest = ['Maths','Science','Geography'];
   

    service.personalityarray = [0,0,0,0,0,0];
    service.interestarray = [0,0,0,0,0,0,0]
    
    
    return service; 


});


// controllers = functions 

app.controller('start',function($scope){



})

app.controller('first',function($scope,questiondata,user){

    $scope.qcount = 0;
    
    $scope.totalquestions = questiondata.personality.length;
    
    $scope.currentquestion = questiondata.personality[$scope.qcount][1] ;
    $scope.currentquestionpersonality = questiondata.personality[$scope.qcount][0] 
    
    $scope.choosevalue ;
    
    $scope.nextquestion = function(){
    
        var availableoptions = document.getElementsByClassName("availableoptions");
    
        for ( var i =0 ; i < availableoptions.length ; i++){
            availableoptions[i].checked = false;
        }
           
        
        if($scope.choosevalue == 4 || $scope.choosevalue == 5){
             user.personalityarray[$scope.currentquestionpersonality]++;
        }
            
        ++$scope.qcount;
    
        if($scope.qcount < questiondata.personality.length )
        {

            console.log(user.personalityarray);
    
            $scope.currentquestion = questiondata.personality[$scope.qcount][1] ;
            $scope.currentquestionpersonality = questiondata.personality[$scope.qcount][0] 
        }

        if($scope.qcount == questiondata.personality.length ){

            console.log(user.personalityarray);

            var form = document.getElementsByTagName('form');
            form[0].remove();

        }
 
    }
    
});


app.controller('second',function($scope,questiondata,user){

    $scope.qcount = 0;
    
    $scope.totalquestions = questiondata.interest.length;
    
    $scope.currentquestion = questiondata.interest[$scope.qcount][1] ;
    $scope.currentquestionpersonality = questiondata.interest[$scope.qcount][0] 
        
    $scope.choosevalue ;
    
    $scope.nextquestion = function(){
    
        var availableoptions = document.getElementsByClassName("availableoptions");
    
        for ( var i =0 ; i < availableoptions.length ; i++){
            availableoptions[i].checked = false;
        }
            
        if($scope.choosevalue == 4 || $scope.choosevalue == 5){
            user.interestarray[$scope.currentquestionpersonality]++;
        }
            
        ++$scope.qcount;

        if($scope.qcount < questiondata.interest.length )
        {

            console.log(user.interestarray);
    
            $scope.currentquestion = questiondata.interest[$scope.qcount][1] ;
            $scope.currentquestionpersonality = questiondata.interest[$scope.qcount][0] 
        
        }

        if($scope.qcount == questiondata.interest.length )
        {

            console.log(user.interestarray);
    
            var form = document.getElementsByTagName('form');
            form[0].remove();

        }
    
        
        
    
    }
    
});

app.controller('third',function($scope,user){

    $scope.username = user.username ; 
    $scope.personality = 'Realistic' ;
    //user.personality ; 
    $scope.interest = user.interest;



});



// routing 
     
app.config(['$routeProvider',function($routeProvider){

    $routeProvider
     .when('/',{

        templateUrl : 'html/start.html',
        controller:'start'
        
     })
     .when('/first',{

        templateUrl : 'html/first.html',
        controller :  'first'

     })
     .when('/second',{

        templateUrl : 'html/second.html',
        controller :  'second'

     })
     .when('/third',{

        templateUrl:'html/third.html',
        controller:'third'

     })

}])


/*
app.controller('first1',function($scope,$route){

  
    console.log($route)

    
    
    
    $scope.qcount = 0;
    
    $scope.usersoul;
    $scope.personalityarray = [0,0,0,0,0,0];
    
    //$scope.question = fetch('./data.json').then(response=>{return response.json(); }).then(obj =>{return obj.data });
    
    $scope.question = [[0,'Do you like to read Sherlock homes ?'],[0,'Do you like to study about human body ?'],[1,'Have you worked with any NGO ?'],[1,'Have you helped any poor person .']];
    
    
    $scope.totalquestions = $scope.question.length;
    
    $scope.currentquestion = $scope.question[$scope.qcount][1] ;
    $scope.currentquestionpersonality = $scope.question[$scope.qcount][0] 
    
    
    
    $scope.choosevalue ;
    
    $scope.addvalue = function(){
    
    console.log($scope.choosevalue);
    
    }
    
    
    $scope.nextquestion = function(){
    
    
        
        var availableoptions = document.getElementsByClassName("availableoptions");
    
        for ( var i =0 ; i < availableoptions.length ; i++){
    
            availableoptions[i].checked = false;
         }
        
    
    
    
        ++$scope.qcount;
        console.log("hello");
    
    
        if($scope.choosevalue == 4 || $scope.choosevalue == 5)
             $scope.personalityarray[$scope.currentquestionpersonality]++;
    
        console.log($scope.personalityarray);
    
       
    
        
    
            $scope.currentquestion = $scope.question[$scope.qcount][1] ;
            $scope.currentquestionpersonality = $scope.question[$scope.qcount][0] 
    
        
    
    }
    

});  
*/