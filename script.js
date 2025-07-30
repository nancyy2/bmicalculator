// const calculateBmi=function(e){
//     e.preventDefault();
//     let height = Number(document.querySelector("#height").value)/100;
//     let weight = Number(document.querySelector("#weight").value);
//     console.log(height,weight);
//     let bmi=(weight/height**2).toFixed(2);
//     let result=document.querySelector('#result');
//     if(bmi<=18){
//         result.innerHTML=`Your BMI is ${bmi},you are  under-weight.`
//           result.style.color="red";
//     }
//      else if(bmi<=24){
//         result.innerHTML=`Your BMI is ${bmi},you are  normal-weight.`
//           result.style.color="green";
//     }
//      else if(bmi<=30){
//         result.innerHTML=`Your BMI is ${bmi},you are  over-weight.`
//           result.style.color="yellow";
//     }
//      else {
//         result.innerHTML=`Your BMI is ${bmi},you are obese.`
//         result.style.color="pink";
//     }
// }
// let formTag=document.querySelector("form");
// formTag.addEventListener('submit',calculateBmi)


const calculateBmi = function(e) {
    e.preventDefault();
    let height = Number(document.querySelector("#height").value) / 100;
    let weight = Number(document.querySelector("#weight").value);
    console.log(height, weight);
    
    let bmi = weight / height ** 2;
    let bmiRounded = bmi.toFixed(2);
    
    let result = document.querySelector('#result');
    if (bmi <= 18) {
        result.innerHTML = `Your BMI is ${bmiRounded}, you are under-weight.`;
        result.style.color = "red";
    } else if (bmi <= 24) {
        result.innerHTML = `Your BMI is ${bmiRounded}, you are normal-weight.`;
        result.style.color = "green";
    } else if (bmi <= 30) {
        result.innerHTML = `Your BMI is ${bmiRounded}, you are over-weight.`;
        result.style.color = "yellow";
    } else {
        result.innerHTML = `Your BMI is ${bmiRounded}, you are obese.`;
        result.style.color = "pink";
    }
};

let formTag = document.querySelector("form");
formTag.addEventListener('submit', calculateBmi);

