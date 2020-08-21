
//global variables
var askedQuestions = [];
var curQuestion;


$(document).ready(function(){
    load_numOfQs_DDL();  
    
    
    document.getElementById("lblTopMsg").innerHTML = "&nbsp;";
    document.getElementById("message").innerHTML = "Are you up for a challenge?";
    
    
    
    document.getElementById("question").innerHTML =  "&nbsp;";
    document.getElementById("option1").innerHTML =  "&nbsp;";      
    document.getElementById("option2").innerHTML =  "&nbsp;";       
    document.getElementById("option3").innerHTML =  "&nbsp;";
    
    //show flag
    document.getElementById('usaFlag').style.display = "block";   
    
    document.getElementById("resultImg").src = "";
    document.getElementById("resultImg").style.display = "none";
    
    
    $('.js--scroll-to-test').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-test').offset().top}, 1000); 
    });

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated shake');
        }, {
        offset: '50%'
    });

    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated wobble');
        }, {
        offset: '50%'
    });
    
});


function DisableOptions(){
    if(askedQuestions.length >= 10)
    {
        for(var i = 0;i<(askedQuestions.length - 10);i++){
            document.getElementById('numOfQs').options[i].disabled = true;
        }
    }
}

function load_numOfQs_DDL(){
var select = document.getElementById('numOfQs');
for(var i = 10;i<=100;i++)
    {
        var option = document.createElement('option');
        option.text = option.value = i;
        select.add(option,select.length);
    }
}

function init()
{
    //hide flag    
    document.getElementById('usaFlag').style.display = "none";
    askedQuestions = [];
    score = 0;
    curQuestion = null;
    document.getElementById("btnStartTest").innerText ="Reset";    
    document.getElementById("lblTopMsg").innerHTML = "&nbsp;";
    document.getElementById("message").innerHTML = "Lets Go!";
    document.getElementById('correct-0').innerHTML = "0";
    document.getElementById('wrong-0').innerHTML = "0";
    document.getElementById('numOfQs').value = "10";
    document.getElementById('rectangleBox').style.border = "none"; 
    document.getElementById('resultImg').style.src = "";     
    document.getElementById('resultImg').style.display = "none";
    $("#numOfQs option").prop("disabled", false);
    getQuestion();
}


function getQuestion()
{ 
    disableAnsSelection(false);
    document.getElementById("btnNxt").style.display = "none";   
    
    document.getElementById("message").innerHTML = "Lets Go!";
    var ele = document.getElementsByName("answer");
    for(var i=0;i<ele.length;i++)
    ele[i].checked = false;
    
    
    if(askedQuestions.length==parseInt(document.getElementById('numOfQs').value))
    {
        document.getElementById("lblTopMsg").innerHTML = 'You scored ' + ((score/(askedQuestions.length))*100).toFixed(2) + '%.';
        if(((score/(askedQuestions.length))*100).toFixed(2) >= 60.00)
            {
                document.getElementById("message").innerHTML = 'Good job! You passed! Welcome to America!';
                //show result image
                document.getElementById("resultImg").src = "./resources/img/happyPup.jpg"; 
                document.getElementById("resultImg").style.display = "block";
            }
        
        else{            
                document.getElementById("message").innerHTML = 'Not quite there yet... Don\'t give up! Try again!';
                // try again 
                document.getElementById("resultImg").src = "./resources/img/tryAgain.png";
                document.getElementById("resultImg").style.display = "block";                 
        }
        document.getElementById("btnStartTest").style.display = 'inline';
        hideForm();
        return;
    }

    var x;
    do{
        x = Math.floor(Math.random() * questions.length);
    }while(askedQuestions.indexOf(x)>=0)

    askedQuestions.push(x);  
    document.getElementById("formDiv").style.display = "block";
    document.getElementById("question").innerHTML = questions[x].question;
    curQuestion = x;
    document.getElementById("option1").innerHTML = questions[x].possibleAnswers[0];       
    document.getElementById("option2").innerHTML = questions[x].possibleAnswers[1];       
    document.getElementById("option3").innerHTML = questions[x].possibleAnswers[2];
    
    document.getElementById("showChoices").style.display = "none";
    document.getElementById("btnShowChoices").style.display = "block";
    DisableOptions();
    
}

function disableAnsSelection(x)
{
    var inputs = document.getElementsByName('answer');
    for (var i = 0, len = inputs.length; i<len; i++){
        inputs[i].disabled = x;
        }
    document.getElementById("btnSubmit").disabled = x;
}

function validateddlSelection(){
    if( parseInt(document.getElementById('numOfQs').value) < askedQuestions.length )
        {
            document.getElementById('numOfQs').value = askedQuestions.length;
        }
}

function showChoices(){
    document.getElementById("showChoices").style.display = "block";
    document.getElementById("btnShowChoices").style.display = "none";
}

function gotItRight(q,x)
{
    var good2go = false;
    var inputs = document.getElementsByName('answer');
    for (var i = 0, len = inputs.length; i<len; i++){
        if(inputs[i].checked)
            {
                good2go = true;                
                document.getElementById('rectangleBox').style.border = "none";
                document.getElementById('rectangleBox').style.backgroundColor = ""; 
                break;
            }        
        }
    if(!good2go)
        {
            document.getElementById("message").innerHTML = "Choose an answer!";  
            document.getElementById('rectangleBox').style.border = "dashed";   
            document.getElementById('rectangleBox').style.borderColor = "red";  
            document.getElementById('rectangleBox').style.backgroundColor = "rgba(208, 119, 119, 0.71)";  
            shakeIt();
            return;
        }
    
    disableAnsSelection(true);
    var q = questions[curQuestion];
    var x = parseInt(document.querySelector('input[name = "answer"]:checked').value);
    
    var correctAnsLoc = q.correctAnswer;
    if(x === correctAnsLoc)
        {            
            document.getElementById("message").innerHTML = "Good job!";
            document.getElementById("btnNxt").style.display = "inline";            
            score++;
            document.getElementById('correct-0').innerHTML = parseInt(document.getElementById('correct-0').innerHTML) + 1;
            return true;
        }
    else{        
        document.getElementById("message").innerHTML = "Hmm... not quite... The correct answer is : " + q.possibleAnswers[q.correctAnswer] + ".";
        document.getElementById("btnNxt").style.display = "inline"; 
        document.getElementById('wrong-0').innerHTML = parseInt(document.getElementById('wrong-0').innerHTML) + 1;
        return false;
    }
}

function hideForm()
{
    document.getElementById("formDiv").style.display = "none";
}

function shakeIt()
{
    var x = $("#showChoices");
    var y = $("#uncleSamStuff");
    x.effect( "shake");
    y.effect("shake");
}
