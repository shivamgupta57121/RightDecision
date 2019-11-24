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
                            [7,'Arts'],
                            [8,'Research']]);

    return service ;
});

app.factory('questiondata' , function(){

    var service = {}
    
    service.personality =[[1,'I like to build things.'],[1,'I like to take care of animals.'],[1,'I like putting things together or assembling things.'],[1,'I like to cook.'],[1,'I am a practical person.'],[1,'I like working outdoors.'],[1,'I like to assemble electronic parts.'],[1,'I like to work on cars.'],[1,'I like to build things.'],
                         [0,'I wouldn’t mind working 8 hours per day in an office.'],[0,'I pay attention to details.'],[0,'I like to do filing or typing.'],[0,'I am good at keeping records of my work.'] ,[0,'I would like to work in an office.'],[0,'I like to organize things(files, desks/offices).'],[0,'I like to have clear instructions  to follow.'],
                         [2,'I am good at working independently.'],[2,'I like to read about art and music.'],[2,'I enjoy creative writing.'],[2,'I am a creative person.'],[2,'I like to play instruments or sing.'],[2,'I like acting in plays.'],[2,'I like to draw.'],[2,'I love writing songs.'],[2,'I am good at working independently.'],[2,'I like to read about art and music.'],
                         [3,'I like to do experiments.'],[3,'I enjoy trying to figure out how things work.'],[3,'I enjoy science.'],[3,'I like to analyze things (problems/ situations).'],[3,'I like working with numbers or charts.'],[3,'I’m good at math.'],[3,'I love studing animal behaviors.'],[3,'I like to do puzzles.'],[3,'I like to do experiments.'],
                         [4,'I like to work in teams.'],[4,'I like to teach or train people.'],[4,'I like trying to help people solve their problems.'],[4,'I am interested in healing people.'],[4,'I enjoy learning about other cultures.'],[4,'I like to get into discussions about issues.'],[4,'I like helping people.'],[4,'I love helping elderly people with their daily activities.'],[4,'I like to work in teams.'],[4,'I like to teach or train people.'],
                         [5,'I am an ambitious person.'],[5,'I set goals for myself.'],[5,'I like to try to influence or persuade people.'],[5,'I like selling things.'],[5,'I am quick to take on new responsibilities.'],[5,'I would like to start my own business.'],[5,'I like to lead.'],[5,'I like to give speeches.']  ,[5,'I am an ambitious person.'],[5,'I set goals for myself.']
                         ];

    service.interest = [[0,'You  like maths.'],[0,'You like algebra.'],[0,'you like pythegorem theorem.'],[1,'You like Physics.'],[1,'You like newton.'],[2,'You like organic chemistry.'],[2,'You like chemisry.'],[0,'You  like maths.'],[0,'You like algebra.'],[0,'you like pythegorem theorem.'],[1,'You like Physics.'],[1,'You like newton.'],[2,'You like organic chemistry.'],[2,'You like chemisry.'],[0,'You  like maths.'],[0,'You like algebra.'],[0,'you like pythegorem theorem.'],[1,'You like Physics.'],[1,'You like newton.'],[2,'You like organic chemistry.'],[2,'You like chemisry.'],[0,'You  like maths.'],[0,'You like algebra.'],[0,'you like pythegorem theorem.'],[1,'You like Physics.'],[1,'You like newton.'],[2,'You like organic chemistry.']];
    
    return service;

});

app.factory('user',function(){

    var service = {};
    service.username = 'Rohit Bansal';

    service.personality = 1;
    service.interest =  [0,7,3] ;
 
    service.personalityarray = [0,0,0,0,0,0];
    service.interestarray = [0,0,0,0,0,0,0,0,0];
    
    
    return service; 


});

app.factory('career',function(){

    var service = {};

    service.careersarray = [
                            {name : 'Doctor', personality : 3 , interest : [4,5,6] , id: 0 , data:{}},
                            {name : 'Police Officer ', personality : 3 , interest :[4,5,6,3],id:1 , data:{}},
                            {name : 'Engineer', personality : 3 , interest :[4,5,1] , id:2 , data:{}},
                            {name : 'Bank Manager', personality : 3 , interest :[1,4] , id:3 , data:{}},
                            {name : 'Architect', personality : 1 , interest :[0,7,8] , id:4 , data:{}},
                            {name : 'Mechanical Engineering', personality : 1 , interest :[0,7,8] , id:5 , data:{}},
                            {name : 'Computer Science', personality : 1 , interest :[0,7,8] , id:6 , data:{}},
                            {name : 'Product designer', personality : 1 , interest :[0,7,8] , id:7 , data:{}},                           

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
           
        
        if($scope.choosevalue == 2){
             user.personalityarray[$scope.currentquestionpersonality] = user.personalityarray[$scope.currentquestionpersonality] + 0.25;
        }
        if($scope.choosevalue == 3){
             user.personalityarray[$scope.currentquestionpersonality] = user.personalityarray[$scope.currentquestionpersonality] + 0.5;
        }
        if($scope.choosevalue == 4){
            user.personalityarray[$scope.currentquestionpersonality] = user.personalityarray[$scope.currentquestionpersonality] + 0.75;
       }
       if($scope.choosevalue == 5){
        user.personalityarray[$scope.currentquestionpersonality] = user.personalityarray[$scope.currentquestionpersonality] + 1;
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
            
        if($scope.choosevalue == 2 ){
            user.interestarray[$scope.currentquestionpersonality] = user.interestarray[$scope.currentquestionpersonality] + 0.25;
        }
        if($scope.choosevalue == 3 ){
            user.interestarray[$scope.currentquestionpersonality] = user.interestarray[$scope.currentquestionpersonality] + 0.5;
        }
        if($scope.choosevalue == 4 ){
            user.interestarray[$scope.currentquestionpersonality] = user.interestarray[$scope.currentquestionpersonality] + 0.75;
        }
        if($scope.choosevalue == 5 ){
            user.interestarray[$scope.currentquestionpersonality] = user.interestarray[$scope.currentquestionpersonality] + 1;
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
            if(iarray[i]>=2){
              
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

   /* function matchcareer3(career,user){

        var idarray = [] ;
        //console.log(user);
        //console.log(career); 
        for (var i = 0 ; i < career.length ; i++){

            if(career[i].personality == user.personality)
            {
                
                if(JSON.stringify(career[i].interest) == JSON.stringify(user.interest))
                {
                    idarray.push(career[i].id);
                }
                
            }

        }

        return idarray ;
        
    } */
    function matchcareer1(career,user){

        var idarray = [] ;
        //console.log(user);
        //console.log(career); 
        for (var i = 0 ; i < career.length ; i++){

            var flag = 0;
            if(user.personality == career[i].personality)
            {

                for(var j =  0 ; j < user.interest.length ;j++){

                    for(var k = 0 ; k < career[i].interest.length ; k++){

                        if(user.interest[j] == career[i].interest[k]){

                            flag = 1;
                            break;
                            
                        }

                    }
                    if(flag==1) break;

                }
                
            }
            if(flag == 1)
            idarray.push(career[i].id);
            

        }

        return idarray ;
        
    }

    //var careeridarray = matchcareer3(career.careersarray,user); 
    var careeridarray = matchcareer1(career.careersarray,user);
    
    for(var i = 0 ; i < careeridarray.length ; i++ ){

        $scope.careernames.push(career.careersarray[careeridarray[i]].name);

    }
    
    //console.log($scope.careernames);
    

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

