let getArandomValue = Math.floor(Math.random()*100)

console.log("random number", getArandomValue)
let arr = [];
let totalChance = ["⚡","⚡","⚡","⚡","⚡","⚡","⚡","⚡"]


let inputField = document.querySelector(".inputField");
let alreadyGuessed = document.querySelector(".alreadyGuessed");
let message = document.getElementById("message")
let chances = document.getElementById("chancesleft");
let alertContainer = document.querySelector(".alert")
let alerrMessageContainer = document.getElementById("alertMessage")
let alertType = document.getElementById("alertType")
let Container = document.querySelector(".Container");
let correct = document.querySelector(".correct");
let answer = document.getElementById("answer");


function ShowAlert(alertMessage, MsgType){
    
    alertContainer.style.display="block"; 
    alerrMessageContainer.innerHTML = alertMessage;
    alertType.innerHTML = MsgType;
    inputField.disabled = true;

    if (MsgType == "⚠ : Warning") {
        alertContainer.style.border = "2px solid goldenrod"
        alertType.style.color = "goldenrod"
    }
    else if (MsgType == "🎉 : Success") {
        alertContainer.style.border = "2px solid green"
        alertType.style.color = "green"
    }
    else{
        alertContainer.style.border = "2px solid crimson"
        alertType.style.color = "crimson"
        correct.style.display = "inline-flex";
        answer.innerHTML = getArandomValue;
    }
}

document.getElementById("alertButton").onclick = function () {
    alertContainer.style.display="none"; 
    inputField.disabled = false;

    if (MsgType == "🎉 : Success" || MsgType == "😥 : Sorry") {
        location.reload();
    }

}


chances.innerHTML = totalChance.join("")
const CheckValue = () => {
    let fetchValue = inputField.value;
    
    if (fetchValue == "") {
        ShowAlert(alerrMessage="you can't live the field blank", MsgType="⚠ : Warning")
        return;
    }
    else if (fetchValue < 0) {
        ShowAlert(alerrMessage="value should not less then 0", MsgType="⚠ : Warning")
        inputField.value = ""
        return;
    }
    else if(getArandomValue == fetchValue) {
        ShowAlert(alerrMessage="Yupiee You Won the Game", MsgType="🎉 : Success")
        return
    }
    else if (fetchValue < getArandomValue) {
        message.innerHTML = "value is less than the actual number"
    }
    else if (fetchValue > getArandomValue) {
        message.innerHTML = "value is greater then the actual number"
    }


    arr.push(fetchValue)
    totalChance.pop()

    alreadyGuessed.innerHTML = "already guessed " + arr;
    chances.innerHTML = totalChance.join("")

    setTimeout(() => {
        if (totalChance == 0) {
            ShowAlert(alerrMessage="Sorry You Lose the Game", MsgType="😥 : Sorry")
        }     
    }, 1000);
   
    // clear input
    inputField.value = ""
}

