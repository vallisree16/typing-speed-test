let sentence="";

let time=60;

let timer;

let started=false;

let currentIndex=0;

let selectedLevel="";



let paragraphs={


easy:[

"Typing is a useful skill for everyone. Regular practice helps you improve your speed and accuracy.",

"Learning typing is easy when you practice every day. Focus on accuracy before increasing speed.",

"Good typing skills help students complete their work faster and save valuable time."

],



medium:[

"Technology is growing rapidly and typing has become an important skill for students and professionals.",

"Good typing speed helps developers and writers complete their tasks efficiently with better productivity.",

"Practice and patience are important to improve typing accuracy and increase your confidence."

],



hard:[

"Modern software development requires developers to write clean and efficient code while solving complex problems.",

"Artificial intelligence and modern technologies are changing the way people work and communicate globally.",

"Professional developers need strong technical skills along with excellent problem solving abilities."

]


};





function startLevel(level){


let name=document.getElementById("username").value;



if(name==""){

alert("Please enter your name");

return;

}



selectedLevel=level;

currentIndex=0;


sentence=paragraphs[level][currentIndex];



document.getElementById("startPage")
.classList.add("hide");



document.getElementById("testPage")
.classList.remove("hide");



document.getElementById("user")
.innerText=name;



document.getElementById("sentence")
.innerText=sentence;



document.getElementById("inputText")
.focus();


}






function checkTyping(){


let input=document.getElementById("inputText").value;


let display="";



for(let i=0;i<sentence.length;i++){


if(i<input.length){


if(input[i]===sentence[i]){

display+=`<span class="correct">${sentence[i]}</span>`;

}

else{

display+=`<span class="wrong">${sentence[i]}</span>`;

}


}

else{

display+=sentence[i];

}


}



document.getElementById("sentence")
.innerHTML=display;



if(!started){

started=true;

timer=setInterval(countDown,1000);

}



let correct=0;


for(let i=0;i<input.length;i++){

if(input[i]===sentence[i]){

correct++;

}

}



let accuracy=Math.round(
(correct/input.length)*100
)||100;


document.getElementById("accuracy")
.innerText=accuracy+"%";



let words=input.trim().split(" ").length;


let wpm=Math.round(
words/((60-time)/60)
)||0;


document.getElementById("wpm")
.innerText=wpm;

if(input.trim() === sentence.trim()){

    showCelebration();

}
}











function nextSentence(){


currentIndex++;



if(currentIndex >= paragraphs[selectedLevel].length){

currentIndex=0;

}



sentence=paragraphs[selectedLevel][currentIndex];



document.getElementById("sentence")
.innerText=sentence;



document.getElementById("inputText")
.value="";



document.getElementById("inputText")
.focus();



}







function countDown(){


time--;


document.getElementById("time")
.innerText=time;



if(time<=0){

finishTest();

}


}







function finishTest(){


clearInterval(timer);



document.getElementById("testPage")
.classList.add("hide");



document.getElementById("resultPage")
.classList.remove("hide");



document.getElementById("finalWpm")
.innerText=document.getElementById("wpm").innerText;



document.getElementById("finalAccuracy")
.innerText=document.getElementById("accuracy").innerText;



document.getElementById("resultName")
.innerText=
"Great Job "+document.getElementById("user").innerText;


}
function showCelebration(){

let box=document.getElementById("celebrate");


box.classList.add("show");



setTimeout(()=>{

box.classList.remove("show");

},3000);


}