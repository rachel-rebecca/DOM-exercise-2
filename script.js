"use strict"

function dropDown() {
    let menuBlock = document.querySelector("#links").style.display;
    document.querySelector("#links").style.display = "block";
    if (menuBlock === "block") {
        document.querySelector("#links").style.display = "none";
    }
}

function clickLetters() {
    document.querySelector("#alpha").style.display = "block";
    document.querySelector("#num").style.display = "none";
    
}

function clickNum() {
    document.querySelector("#alpha").style.display = "none";
    document.querySelector("#num").style.display = "block";
}