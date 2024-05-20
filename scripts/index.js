"use strict";

window.onload = init;

function init(){
    let helloBtn = document.getElementById("helloBtn");
    helloBtn.onclick = onHelloBtnClicked;

    let clearBtn = document.getElementById("clearBtn");
    clearBtn.onclick = onClearBtnClicked;
}

function onHelloBtnClicked() {
    let messageDiv = document.getElementById("messageDiv");

    messageDiv.innerHTML = "Hello World!";
}

function onClearBtnClicked() {
    let messageDiv = document.getElementById("messageDiv");

    messageDiv.innerHTML = " ";
}