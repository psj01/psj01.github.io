// question class
var questionClass = function(id,question, possibleAnswers, correctAnswer){
    this.id = id;
    this.question = question;
    this.possibleAnswers = possibleAnswers;
    this.correctAnswer = correctAnswer;
}

//global variables
var askedQuestions = [];
var curQuestion;

//create questions
var q1 = new questionClass(1,'What is the supreme law of the land?',['the Constitution','Supreme Court','Freedom of speech'],0);
var q2 = new questionClass(2,'What does the constitution do?',['sets up the government','make laws','enforce laws'],0);
var q3 = new questionClass(3,'The idea of self-government is in the first three words of the Constitution. What are these words?',['Justice for all','We the People','Good morning America'],1);
var q4 = new questionClass(4,'What is an amendment?',['a new law','a change or addition to supreme court ruling','a change or addition to the constitution'],2);
var q5 = new questionClass(5,'What do we call the first ten amendments to the Constitution?',['supreme laws of the land','the Amendments','the Bill of Rights'],2);
var q6 = new questionClass(6,'What is one right or freedom from the First Amendment?',['speech','due process','health care'],0);
var q7 = new questionClass(7,'How many amendments does the Constitution have?',['22','25','27'],2);
var q8 = new questionClass(8,'What did the Declaration of Independence do?',['declared our independence from Great Britain','declared independence from Russia','declared independence from China'],0);
var q9 = new questionClass(9,'What are two rights in the Declaration of Independence?',['wealth and freedom','life & pursuit of happiness','liberty & justice'],1);
var q10 = new questionClass(10,'What is freedom of religion?',['You can practice any religion, or not practice a religion','you can pratice a maximum of two (2) religions at a time','you can only pratice three religion'],0);
var q11 = new questionClass(11,'What is the economic system in the United States?',['capitalist or market economy','socialist economy','democratic economy'],0);
var q12 = new questionClass(12,'What is the “rule of law”?',['only president makes law','every one must follow the law','supreme court makes laws'],1);
var q13 = new questionClass(13,'Name one branch or part of the government.',['executive','UPS','fedEx'],0);
var q14 = new questionClass(14,'What stops one branch of government from becoming too powerful?',['supreme court','congress','checks and balances'],2);
var q15 = new questionClass(15,'Who is in charge of the executive branch?',['the President','speaker of the house','vice president'],0);
var q16 = new questionClass(16,'Who makes federal laws?',['Congress','the courts','supreme court'],0);
var q17 = new questionClass(17,'What are the two parts of the U.S. Congress?',['the courts and the congress','the senate and the house','executive branch and the courts'],1);
var q18 = new questionClass(18,'How many U.S. Senators are there?',['100','50','435'],0);
var q19 = new questionClass(19,'We elect a U.S. Senator for how many years?',['8','4','6'],2);
var q20 = new questionClass(20,'Who is one of your state’s (IL) U.S. Senators now?',['Bill Stein','Bruce Rauner','Tammy Duckworth'],2);
var q21 = new questionClass(21,'The House of Representatives has how many voting members?',['500','435','50'],1);
var q22 = new questionClass(22,'We elect a U.S. Representative for how many years?',['6','8','2'],2);
var q23 = new questionClass(22,'Name your U.S. Representative (Illinois District 11)',['Bill Foster','Randy Jackson','Tammy Duckworth'],0);
var q24 = new questionClass(24,'Who does a U.S. Senator represent?',['all the people in the county','the district','all the people of the state'],2);
var q25 = new questionClass(25,'Why do some states have more Representatives than other states?',['because of its size','because of is population','because of its tax revenue'],1);
var q26 = new questionClass(26,'We elect a President for how many years?',['2','8','4'],2);
var q27 = new questionClass(27,'In what month do we vote for President?',['November','December','July'],0);
var q28 = new questionClass(28,'What is the name of the President of the United States now?',['Barack Obama','Hillary Clinton','Donald J. Trump'],2);
var q29 = new questionClass(29,'What is the name of the Vice President of the United States now?',['Tom Perez','Mike Pence','Paul Ryan'],1);
var q30 = new questionClass(30,'If the President can no longer serve, who becomes President?',['Chief Justice of the Supreme Court','speaker of the house','the Vice President'],2);
var q31 = new questionClass(31,'If both the President and the Vice President can no longer serve, who becomes President?',['the Speaker of the House','Vice President','Majority leader in the house'],0);
var q32 = new questionClass(32,'Who is the Commander in Chief of the military?',['Vice President','Defense minister','the President'],2);
var q33 = new questionClass(33,'Who signs bills to become laws?',['the President','Vice President','Speaker of the House'],0);
var q34 = new questionClass(34,'Who vetoes bills?',['the President','Speaker of the House','Vice President'],0);
var q35 = new questionClass(35,'What does the President’s Cabinet do?',['Make laws','Review Laws','advices the President'],2);
var q36 = new questionClass(36,'What are two Cabinet-level positions?',['Vice President & Secretary of State','Senator & Secretary of State','Governor & Secretary of State'],0);
var q37 = new questionClass(37,'What does the judicial branch do?',['reviews/explains laws','Make Laws','Write Laws'],0);
var q38 = new questionClass(38,'What is the highest court in the United States?',['Civil Court','the Supreme Court','District Court'],1);
var q39 = new questionClass(39,'How many justices are on the Supreme Court?',['11','9','5'],1);
var q40 = new questionClass(40,'Who is the Chief Justice of the United States now?',['John Roberts','Anthony Kennedy','Mike Pence'],0);
var q41 = new questionClass(41,'Under our Constitution, some powers belong to the federal government. What is one power of the federal government?',['to print money','run the local police departments','set state tax rates'],0);
var q42 = new questionClass(42,'Under our Constitution, some powers belong to the states. What is one power of the states?',['print money','collect federal taxes','provide schooling and education'],2);
var q43 = new questionClass(43,'Who is the Governor of your state (IL) now?',['Bill Stein','Paul Ryan','Bruce Rauner'],2);
var q44 = new questionClass(44,'What is the capital of your state (IL)?',['Chicago','Aurora','Springfield'],2);
var q45 = new questionClass(45,'What are the two major political parties in the United States?',['Communist and Democratic','Democratic and Republican','Socialist and federalist'],1);
var q46 = new questionClass(46,'What is the political party of the President now?',['Democratic','Republican','Socialist'],1);
var q47 = new questionClass(47,'What is the name of the Speaker of the House of Representatives now?',['Mike Pence','Tammy Jackson','Paul D. Ryan'],2);
var q48 = new questionClass(48,'There are four amendments to the Constitution about who can vote. Describe one of them.',['Citizens twenty-one (21) and older (can vote)','Citizens eighteen (18) and older (can vote)','Citizens twenty-six (26) and older (can vote)'],1);
var q49 = new questionClass(49,'What is one responsibility that is only for United States citizens?',['serve on a jury','travel across united states freely','work at the post office'],0);
var q50 = new questionClass(50,'Name one right only for United States citizens.',['vote in a federal election','vote in the united states','join a public library'],0);
var q51 = new questionClass(51,'What are two rights of everyone living in the United States?',['vote and freedom of expression','freedom of speech & freedom of religion','write and read'],1);
var q52 = new questionClass(52,'What do we show loyalty to when we say the Pledge of Allegiance?',['statue of liberty','Washington monument','the United States'],2);
var q53 = new questionClass(53,'What is one promise you make when you become a United States citizen?',['be loyal to the United States','be loyal to Canada','fight for Canada if needed'],0);
var q54 = new questionClass(54,'How old do citizens have to be to vote for President?',['18 or older','22 or older','21 or older'],0);
var q55 = new questionClass(55,'What are two ways that Americans can participate in their democracy?',['fly the flag and vote','vote and run for office','fight for justice and run for office'],1);
var q56 = new questionClass(56,'When is the last day you can send in federal income tax forms?',['April 21','April 15','December 21'],1);
var q57 = new questionClass(57,'When must all men register for the Selective Service?',['between eighteen (18) and twenty-six (26)','at the age of seventeen (17)','at the age of sixty (60)'],0);
var q58 = new questionClass(58,'What is one reason colonists came to America?',['money','war','freedom'],2);
var q59 = new questionClass(59,'Who lived in America before the Europeans arrived?',['Canadians','Mexicans','American Indians'],2);
var q60 = new questionClass(60,'What group of people was taken to America and sold as slaves?',['people from Canada','people from Africa','people from Europe'],1);
var q61 = new questionClass(61,'Why did the colonists fight the British?',['because of slavery','because of fight over land','because of high taxes'],2);
var q62 = new questionClass(62,'Who wrote the Declaration of Independence?',['George Washington','Thomas Jefferson','Andrew Jackson'],1);
var q63 = new questionClass(63,'When was the Declaration of Independence adopted?',['July 4, 1777','July 5, 1776','July 4, 1776'],2);
var q64 = new questionClass(64,'There were 13 original states. Name three.',['New York, New Jersey and Massachusetts','Texas, Florida and California','Texas, California and New York'],0);
var q65 = new questionClass(65,'What happened at the Constitutional Convention?',['The Constitution was written','Declared war against Britain','Declared war against Mexico'],0);
var q66 = new questionClass(66,'When was the Constitution written?',['1788','1787','1758'],1);
var q67 = new questionClass(67,'The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.',['Andrew Jackson','Alex Jones','Alexander Hamilton'],2);
var q68 = new questionClass(68,'What is one thing Benjamin Franklin is famous for?',['first Attorney General','first Postmaster General of the United States','first President of the United States'],1);
var q69 = new questionClass(69,'Who is the “Father of Our Country”?',['George Washington','Andrew Jackson','Micheal Pence'],0);
var q70 = new questionClass(70,'Who was the first President?',['Alexander Hamilton','George Washington','Andrew Jackson'],1);
var q71 = new questionClass(71,'What territory did the United States buy from France in 1803?',['the Florida Territory','the Western Territory','the Louisiana Territory'],2);
var q72 = new questionClass(72,'Name one war fought by the United States in the 1800s',['Mexican-American War','Canadian-American War','French-American War'],0);
var q73 = new questionClass(73,'Name the U.S. war between the North and the South',['the Civil War','the Mexican-American War','the Texas War'],0);
var q74 = new questionClass(74,'Name one problem that led to the Civil War',['slavery','high taxes','drought'],0);
var q75 = new questionClass(75,'What was one important thing that Abraham Lincoln did?',['abolished high taxes','ended the Mexican-American war','freed the slaves'],2);
var q76 = new questionClass(76,'What did the Emancipation Proclamation do?',['gave women right to vote','freed the slaves','gave slaves right to vote'],1);
var q77 = new questionClass(77,'What did Susan B. Anthony do?',['fought against high taxes','became the first women post master','fought for women’s rights'],2);
var q78 = new questionClass(78,'Name one war fought by the United States in the 1900s.',['Mexican American War','World War I','French-American war'],1);
var q79 = new questionClass(79,'Who was President during World War I?',['Andrew Jackson','Thomas Jackson','Woodrow Wilson'],2);
var q80 = new questionClass(80,'Who was President during the Great Depression and World War II?',['Franklin Roosevelt','Benjamin Franklin','Frank Underwood'],0);
var q81 = new questionClass(81,'Who did the United States fight in World War II?',['Russia','China','Japan, Germany, and Italy'],2);
var q82 = new questionClass(82,'Before he was President, Eisenhower was a general. What war was he in?',['Mexican American War','World War II','French War'],1);
var q83 = new questionClass(83,'During the Cold War, what was the main concern of the United States?',['Slavery','High taxes','Communism'],2);
var q84 = new questionClass(84,'What movement tried to end racial discrimination?',['The American Revolution','civil rights','The Labor Movement'],1);
var q85 = new questionClass(85,'What did Martin Luther King, Jr. do?',['led The Labor Movement','led The American Revolution','fought for civil rights'],2);
var q86 = new questionClass(86,'What major event happened on September 11, 2001, in the United States?',['Terrorists attacked the United States','Russia attacked the United States','China attacked the USA'],0);
var q87 = new questionClass(87,'Name one American Indian tribe in the United States.',['Jeep','Grand','Cherokee'],2);
var q88 = new questionClass(88,'Name one of the two longest rivers in the United States.',['Mississippi','chicago','michigan'],0);
var q89 = new questionClass(89,'What ocean is on the West Coast of the United States?',['Atlantic Ocean','Indian Ocean','Pacific Ocean'],2);
var q90 = new questionClass(90,'What ocean is on the East Coast of the United States?',['Pacific Ocean','Atlantic Ocean','Indian Ocean'],1);
var q91 = new questionClass(91,'Name one U.S. territory',['Mexico','Brazil','Puerto Rico'],2);
var q92 = new questionClass(92,'Name one state that borders Canada',['Minnesota','Florida','Texas'],0);
var q93 = new questionClass(93,'Name one state that borders Mexico.',['New York','Illinois','Texas'],2);
var q94 = new questionClass(94,'What is the capital of the United States?',['Washington, D.C','Illinois','Iowa'],0);
var q95 = new questionClass(95,'Where is the Statue of Liberty?',['New York (Harbor)','Chicago','St. Louis'],0);
var q96 = new questionClass(96,'Why does the flag have 13 stripes?',['because 13 was considered a lucky number','because there were 13 original colonies','because 13 people wrote the constitution'],1);
var q97 = new questionClass(97,'Why does the flag have 50 stars?',['50 is considered a lucky number','because there are 50 states','because there was 50 original colonies'],1);
var q98 = new questionClass(98,'What is the name of the national anthem?',['The Nation','Justice for all','The Star-Spangled Banner'],2);
var q99 = new questionClass(99,'When do we celebrate Independence Day?',['June 6','December 12','July 4'],2);
var q100 = new questionClass(100,'Name two national U.S. holidays.',['New years and Easter','Christmas and Thanksgiving','Easter and Christmas'],1);


// questions array
var questions = [];

// add questions to the questions array.
questions.push(q1);
questions.push(q2);
questions.push(q3);
questions.push(q4);
questions.push(q5);
questions.push(q6);
questions.push(q7);
questions.push(q8);
questions.push(q9);
questions.push(q10);
questions.push(q11);
questions.push(q12);
questions.push(q13);
questions.push(q14);
questions.push(q15);
questions.push(q16);
questions.push(q17);
questions.push(q18);
questions.push(q19);
questions.push(q20);
questions.push(q21);
questions.push(q22);
questions.push(q23);
questions.push(q24);
questions.push(q25);
questions.push(q26);
questions.push(q27);
questions.push(q28);
questions.push(q29);
questions.push(q30);
questions.push(q31);
questions.push(q32);
questions.push(q33);
questions.push(q34);
questions.push(q35);
questions.push(q36);
questions.push(q37);
questions.push(q38);
questions.push(q39);
questions.push(q40);
questions.push(q41);
questions.push(q42);
questions.push(q43);
questions.push(q44);
questions.push(q45);
questions.push(q46);
questions.push(q47);
questions.push(q48);
questions.push(q49);
questions.push(q50);
questions.push(q51);
questions.push(q52);
questions.push(q53);
questions.push(q54);
questions.push(q55);
questions.push(q56);
questions.push(q57);
questions.push(q58);
questions.push(q59);
questions.push(q60);
questions.push(q61);
questions.push(q62);
questions.push(q63);
questions.push(q64);
questions.push(q65);
questions.push(q66);
questions.push(q67);
questions.push(q68);
questions.push(q69);
questions.push(q70);
questions.push(q71);
questions.push(q72);
questions.push(q73);
questions.push(q74);
questions.push(q75);
questions.push(q76);
questions.push(q77);
questions.push(q78);
questions.push(q79);
questions.push(q80);
questions.push(q81);
questions.push(q82);
questions.push(q83);
questions.push(q84);
questions.push(q85);
questions.push(q86);
questions.push(q87);
questions.push(q88);
questions.push(q89);
questions.push(q90);
questions.push(q91);
questions.push(q92);
questions.push(q93);
questions.push(q94);
questions.push(q95);
questions.push(q96);
questions.push(q97);
questions.push(q98);
questions.push(q99);
questions.push(q100);

//array to keep scores
var score = 0;

function bodyOnLoad()
{
    //document.getElementById("intro").innerHTML = "You will be asked 10 random questions";
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
    
    //load drop down list numOfQs
    var select = document.getElementById('numOfQs');
    for(var i = 10;i<=questions.length;i++)
        {
            var option = document.createElement('option');
            option.text = option.value = i;
            select.add(option,select.length);
        }
    
    
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        // some code..
        document.getElementById('innerTable').style.width = "300";
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
    getQuestion();
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
                break;
            }        
        }
    if(!good2go)
        {
            document.getElementById("message").innerHTML = "Choose an answer!";  
            document.getElementById('rectangleBox').style.border = "dashed";   
            document.getElementById('rectangleBox').style.borderColor = "red";  
            document.getElementById('rectangleBox').style.padding ="25px"; 
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
                document.getElementById("resultImg").src = "happyPup.jpg"; 
                document.getElementById("resultImg").style.display = "block"; 
            }
        else{            
                document.getElementById("message").innerHTML = 'Not quite there yet... Don\'t give up! Try again!';
                // try again 
                document.getElementById("resultImg").src = "tryAgain.png";
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