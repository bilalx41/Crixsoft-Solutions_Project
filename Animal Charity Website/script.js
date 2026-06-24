function donate(){

const amount =
document.getElementById("amount").value;

const message =
document.getElementById("donationMessage");

if(amount === "" || amount <= 0){

message.innerHTML =
"Please enter a valid amount.";

message.style.color = "red";

return;
}

message.innerHTML =
`Thank you for donating $${amount}! ❤️`;

message.style.color = "green";
}

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter=>{

const updateCounter = ()=>{

const target =
+counter.getAttribute("data-target");

const count =
+counter.innerText;

const increment =
target / 100;

if(count < target){

counter.innerText =
Math.ceil(count + increment);

setTimeout(updateCounter,20);

}
else{

counter.innerText = target;

}

};

updateCounter();

});