import { db } from "./firebase-config.js";

import {
  addDoc,
  collection
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

function checkPassword(){

const password =
document.getElementById("passwordInput").value.trim();

const correctPassword = "25/07/2024";

const errorText =
document.getElementById("errorText");

const lockScreen =
document.getElementById("lockScreen");

const mainContent =
document.getElementById("mainContent");

if(password === correctPassword){

errorText.innerHTML = "🌻 Access Granted 🌻";

setTimeout(()=>{

lockScreen.style.opacity = "0";

setTimeout(()=>{

lockScreen.style.display = "none";
mainContent.style.display = "block";

window.scrollTo({
top:0,
behavior:"smooth"
});

},800);

},500);

}
else{

errorText.innerHTML =
"❌ Wrong password baby<br>Hint: I said 'sure'";

}

}

window.checkPassword = checkPassword;

/* Enter key support */

document.addEventListener(
"DOMContentLoaded",
()=>{

const input =
document.getElementById("passwordInput");

if(input){

input.addEventListener(
"keypress",
function(e){

if(e.key==="Enter"){
checkPassword();
}

}
);

}

/* Submit all answers */

const submitBtn =
document.getElementById("submitAnswers");

if(submitBtn){

submitBtn.addEventListener(
"click",
async ()=>{

const allAnswers =
document.querySelectorAll(".answerBox");

const answers = [];

allAnswers.forEach(
(box,index)=>{

answers.push({
question:index + 1,
answer:box.value
});

}
);

try{

await addDoc(
collection(db,"answers"),
{
answers: answers,
createdAt: new Date()
}
);

document.getElementById("status").innerHTML =
"🌻 Answers sent successfully";

}
catch(err){

document.getElementById("status").innerHTML =
"❌ Failed to send";

console.log(err);

}

}
);

}

}
);

/* Small sparkle effect */

document.addEventListener(
"mousemove",
function(e){

if(Math.random() > 0.97){

const sparkle =
document.createElement("div");

sparkle.innerHTML = "✨";

sparkle.style.position = "fixed";
sparkle.style.left = e.clientX + "px";
sparkle.style.top = e.clientY + "px";
sparkle.style.pointerEvents = "none";
sparkle.style.zIndex = "999";
sparkle.style.transition = "1s";

document.body.appendChild(sparkle);

setTimeout(()=>{

sparkle.style.opacity = "0";

sparkle.style.transform =
"translateY(-20px)";

},50);

setTimeout(()=>{

sparkle.remove();

},1000);

}

}
);
