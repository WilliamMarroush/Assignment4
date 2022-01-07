console.log("Hello from javascripts");
//Assignment 04|01
function redbutton(){
    const fighttext=document.getElementById("fighting");
    const newfight = document.createElement("p");
    newfight.id = "redwins";
    newfight.innerText = "Don't click blue! Click me!";
    fighttext.append(newfight);
}
function bluebutton(){
    const fighttext=document.getElementById("fighting");
    const newfight = document.createElement("p");
    newfight.id = "bluewins";
    newfight.innerText = "Don't click red! Click me!";
    fighttext.append(newfight);
}
//Assignment 04|02
function hoveralert(){
    alert("Hey! I told you not to hover over me!");
}
//Assignment 04|04 a b & c
function collectdata(){
    let password = document.getElementById("pass").value;
    if (password != "12345678"){
        alert("Incorrect password. Intruder Detected."+password);
    }
    else{
        const passed = document.getElementById("ifpass");
        passed.innerText="Correct! Please move forward!";
    }
}
//Assignment 04|06
function radcalculate(){
    let radius = document.getElementById("radius").value;
    const textbox = document.getElementById("results");
    let volume = (Math.PI * Math.pow(radius,2));
    textbox.innerText = "Volume:" + volume;
}
