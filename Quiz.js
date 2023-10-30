/* Javascript Code for Quiz */

function Quizgame()
{
    window.location.href = "Quiz game.html";

}
var showed_ques=0;

function show_ques1()
{
    document.getElementById('q1_op3').checked=true;
    document.getElementById('q1_opt3').style.backgroundColor="#10bb108c";
    showed_ques=showed_ques+1;
}
function show_ques2()
{
    document.getElementById('q2_op3').checked=true;
    document.getElementById('q2_opt3').style.backgroundColor="#10bb108c";
    showed_ques=showed_ques+1;
}
function show_ques3()
{
    document.getElementById('q3_op4').checked=true;
    document.getElementById('q3_opt4').style.backgroundColor="#10bb108c";
    showed_ques=showed_ques+1;
}
function show_ques4()
{
    document.getElementById('q4_op2').checked=true;
    document.getElementById('q4_opt2').style.backgroundColor="#10bb108c";
    showed_ques=showed_ques+1;
}
function show_ques5()
{
    document.getElementById('q5_op1').checked=true;
    document.getElementById('q5_opt1').style.backgroundColor="#10bb108c";
    showed_ques=showed_ques+1;
}
function show_ques6()
{
    document.getElementById('q6_op1').checked=true;
    document.getElementById('q6_opt1').style.backgroundColor="#10bb108c";
    showed_ques=showed_ques+1;
}
function show_ques7()
{
    document.getElementById('q7_op3').checked=true;
    document.getElementById('q7_opt3').style.backgroundColor="#10bb108c";
    showed_ques=showed_ques+1;
}
function show_ques8()
{
    document.getElementById('q8_op1').checked=true;
    document.getElementById('q8_opt1').style.backgroundColor="#10bb108c";
    showed_ques=showed_ques+1;
}
function show_ques9()
{
    document.getElementById('q9_op2').checked=true;
    document.getElementById('q9_opt2').style.backgroundColor="#10bb108c";
    showed_ques=showed_ques+1;
}
function show_ques10()
{
    document.getElementById('q10_op1').checked=true;
    document.getElementById('q10_opt1').style.backgroundColor="#10bb108c";
    showed_ques=showed_ques+1;
}

var total=10;
var correct_answer=0;
var wrong_answers=0;

function Check_Answers()
{
    console.log("correct: ",correct_answer);
    console.log("wrong: ",wrong_answers);
    console.log("Seen: ",showed_ques);
    console.log("total: ",total);
    
    if(document.getElementById('q1_op3').checked==true)
    {
        correct_answer++;
    }
    else
    {
        wrong_answers++;
    } 
    if(document.getElementById('q2_op3').checked==true)
    {
        correct_answer++;
    }
    else
    {
        wrong_answers++;
    } 
    if(document.getElementById('q3_op4').checked==true)
    {
        correct_answer++;
    }
    else
    {
        wrong_answers++;
    } 
    if(document.getElementById('q4_op2').checked==true)
    {
        correct_answer++;
    }
    else
    {
        wrong_answers++;
    } 
    if(document.getElementById('q5_op1').checked==true)
    {
        correct_answer++;
    }
    else
    {
        wrong_answers++;
    } 
    if(document.getElementById('q6_op1').checked==true)
    {
        correct_answer++;
    }
    else
    {
        wrong_answers++;
    } 
    if(document.getElementById('q7_op3').checked==true)
    {
        correct_answer++;
    }
    else
    {
        wrong_answers++;
    } 
    if(document.getElementById('q8_op1').checked==true)
    {
        correct_answer++;
    }
    else
    {
        wrong_answers++;
    } 
    if(document.getElementById('q9_op2').checked==true)
    {
        correct_answer++;
    }
    else
    {
        wrong_answers++;
    } 
    if(document.getElementById('q10_op1').checked==true)
    {
        correct_answer++;
    }
    else
    {
        wrong_answers++;
    }    
    
    document.getElementById('total_questions').innerHTML=total;
    document.getElementById('seen_questions').innerHTML=showed_ques;
    document.getElementById('correct_questions').innerHTML=correct_answer-showed_ques;
    document.getElementById('wrong_questions').innerHTML=wrong_answers+showed_ques;

}

function end_here()
{
    window.location.href="Thankyou.html";
}