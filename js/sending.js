var app = angular.module("app",['ngRoute']);


// factories = data 

app.factory('subject',function(){

    var service = {};

    service.pmap = new Map([[0,'Conventional'],
                            [1,'Realistic'],
                            [2,'Artistic'],
                            [3,'Investigatory'],
                            [4,'Social'],
                            [5,'Enterprising']]);
    
    service.imap = new Map([[0,'Science'],
                            [1,'Maths'],
                            [2,'Geography'],
                            [3,'History'],
                            [4,'Economics'],
                            [5,'Political Science'],
                            [6,'Phycology'],
                            [7,'Arts']]);

    return service ;
});

app.factory('questiondata' , function(){

    var service = {}
    
    service.personality =[[0,'Do you like to read Sherlock homes ?'],[0,'Do you like to study about human body ?'],[1,'Have you worked with any NGO ?'],[1,'Have you helped any poor person .']];
    service.interest = [[0,'You like maths'],[0,'You like algebra'],[0,'you like pythegorem theorem'],[1,'You like Physics'],[1,'You like newton'],[2,'You like organic chemistry'],[2,'You like chemisry']];
    return service;

});

app.factory('user',function(){

    var service = {};
    service.username = 'Rohit Bansal';

    service.personality = 0;
    service.interest =  [1,4] ;
 
    service.personalityarray = [0,0,0,7,0,0];
    service.interestarray = [1,2,0,0,2,1,4,0];
    
    
    return service; 


});

app.factory('career',function(){

    var service = {};

    service.careersarray = [
                            {name : 'Doctor', personality : 3 , interest : [0,6] , id: 0 , data:{}},
                            {name : 'Police Officer ', personality : 1 , interest :[3,4,5,7],id:1 , data:{}},
                            {name : 'Bank Manager', personality : 0 , interest :[1,4] , id:2 , data:{}}
                          ];

    
    
    return service ;

});

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

app.controller('third',function($scope,user,subject){


    $scope.username = user.username ; 


    function personalityf(parray){
               
        var max = parray[0];
        var pos = 0;
        for(var i = 1 ; i < parray.length ; i++ ){
            if(max<parray[i]){
                max=parray[i];
                pos=i;
            }
        }
       
        return pos;

    }

    user.personality = personalityf(user.personalityarray,subject.pmap) ; 
    $scope.personality = subject.pmap.get(user.personality);


    function interestf(iarray){
        //console.log(iarray)
        //console.log(iarray.length)
        var passarray = [];
        for(var i = 0 ; i < iarray.length ; i++ ){
            if(iarray[i]==3){
              
                passarray.push(i);
            }
        }

        return passarray;
    }

    user.interest = interestf(user.interestarray);

    $scope.interest = [];

    for (var i = 0 ; i < user.interest.length ; i++ ){

         $scope.interest.push(subject.imap.get(user.interest[i])) ;

    }

    
    
    
});

app.controller('career',function($scope,career,user){

$scope.careernames = [];
//console.log(career.careersarray);

    function matchcareer(career,user){

        var idarray = [] ;
        //console.log(user);
        //console.log(career); 
        for (var i = 0 ; i < career.length ; i++){

            if(career[i].personality == user.personality)
            {
                
                if(JSON.stringify(career[i].interest) == JSON.stringify(user.interest)){
                    idarray.push(career[i].id);
                    
                }
                
            }

        }

        return idarray ;
        
    }

    var careeridarray = matchcareer(career.careersarray,user); 
    
    for(var i = 0 ; i < careeridarray.length ; i++ ){

        $scope.careernames.push(career.careersarray[careeridarray[i]].name);

    }
    console.log($scope.careernames);
    

})


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
     .when('/career',{

        templateUrl : 'html/career.html',
        controller : 'career'

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