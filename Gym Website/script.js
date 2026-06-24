function calculateBMI(){

const weight =
document.getElementById("weight").value;

const height =
document.getElementById("height").value / 100;

const bmi =
(weight / (height * height)).toFixed(1);

let status = "";

if(bmi < 18.5){
status = "Underweight";
}
else if(bmi < 25){
status = "Normal";
}
else if(bmi < 30){
status = "Overweight";
}
else{
status = "Obese";
}

document.getElementById("result").innerHTML =
`Your BMI: ${bmi} (${status})`;

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