var brokenCalculator = {
  difficulty: "",
  buttons: ["zero", "1", "2", "3", "4", "5", "6", "7", "8", "9", "add", "substract", "multiply", "divide", "sin", "cos", "equal", "ac"],
  brokenButtons: [""],
  goal: "",

  setEasy: function(){
    this.difficulty="Easy";
  },
  setMedium: function(){
    this.difficulty="Medium";
  },
  setHard: function(){
    this.difficulty="Hard";
  },
  breakButtons: function(){               //Breaks buttons depending on difficulty level
    if(this.difficulty == "Easy"){
      for(let i=0; i<3; i++){
        this.brokenButtons[i]=convertToButtonName(Math.floor(Math.random()*14));
        console.log(this.brokenButtons[i]);
        document.getElementById(this.brokenButtons[i]).style.backgroundColor = "black";
        document.getElementById(this.brokenButtons[i]).disabled = true;
      }
      console.log(this.brokenButtons);
    }
    else if(this.difficulty == "Medium"){
      for(let i=0; i<4; i++){
        this.brokenButtons[i]=convertToButtonName(Math.floor(Math.random()*14));
        console.log(this.brokenButtons[i]);
        document.getElementById(this.brokenButtons[i]).style.backgroundColor = "black";
        document.getElementById(this.brokenButtons[i]).disabled = true;
      }
      console.log(this.brokenButtons);
    }
    else if(this.difficulty == "Hard"){
      for(let i=0; i<5; i++){
        this.brokenButtons[i]=convertToButtonName(Math.floor(Math.random()*16));
        console.log(this.brokenButtons[i]);
        document.getElementById(this.brokenButtons[i]).style.backgroundColor = "black";
        document.getElementById(this.brokenButtons[i]).disabled = true;
      }
      console.log(this.brokenButtons);
    }

  },
  setGoal: function(){
    this.goal = Math.floor(Math.random()*20);
    let p = document.getElementById("goalPar");
    p.innerHTML ="Goal: " + this.goal;
    console.log("Random goal set to: " + this.goal);
  }
};

var calcString = "";

function pressEasy(){                   //Gets called when the easy button is pressed
  brokenCalculator.setEasy();
  brokenCalculator.setGoal();
  clearScreen();
  resetButtons();
  brokenCalculator.breakButtons();
  console.log("Calculator set to " + brokenCalculator.difficulty + "!");
  document.getElementById("easyBut").disabled = true;         //Makes the easy button unclickable
  document.getElementById("mediumBut").disabled = false;       //Makes the other buttons clickable
  document.getElementById("hardBut").disabled = false;
}

function pressMedium(){                 //Gets called when the medium button is pressed
  brokenCalculator.setMedium();
  brokenCalculator.setGoal();
  clearScreen();
  resetButtons();
  brokenCalculator.breakButtons();
  console.log("Calculator set to " + brokenCalculator.difficulty + "!");
  document.getElementById("mediumBut").disabled = true;       //Makes the medium button unclickable
  document.getElementById("easyBut").disabled = false;       //Makes the other buttons clickable
  document.getElementById("hardBut").disabled = false;
}

function pressHard(){                   //Gets called when the hard button is pressed
  brokenCalculator.setHard();
  brokenCalculator.setGoal();
  clearScreen();
  resetButtons();
  brokenCalculator.breakButtons();
  console.log("Calculator set to " + brokenCalculator.difficulty + "!");
  document.getElementById("hardBut").disabled = true;         //Makes the hard button unclickable
  document.getElementById("easyBut").disabled = false;       //Makes the other buttons clickable
  document.getElementById("mediumBut").disabled = false;
}

function convertToButtonName(j){            //Helps breakButton() in adding the correct value to brokenButtons[]
  if(j == 0){return "zero"}
  else if(j == 10){return "add"}
  else if(j == 11){return "substract"}
  else if(j == 12){return "multiply"}
  else if(j == 13){return "divide"}
  else if(j == 14){return "sin"}
  else if(j == 15){return "cos"}
  else{return j};
}

function addToCalcString(char){             //Adds pushed button's value to calcString, writes calcString to calculator's screen
  if(calcString[calcString.length-1] == "$"){             //If last character in string is '$', clears screen
    clearScreen();
    document.getElementById("screenPar").style.color = "black";
  }
  if(calcString.length < 9 || calcString == ""){
    calcString += char;
    document.getElementById("screenPar").innerHTML = calcString;
  }
}

function clearScreen(){
  calcString = "";
  document.getElementById("screenPar").innerHTML = "";
  document.getElementById("screenPar").style.color = "black";
}

function resetButtons(){
  for(let i=0; i<(brokenCalculator.buttons.length-6); i++){               //Set grey buttons to default
    document.getElementById(brokenCalculator.buttons[i]).style.backgroundColor = "#888";
    document.getElementById(brokenCalculator.buttons[i]).disabled = false;
  }
  for(let i=(brokenCalculator.buttons.length-6); i<(brokenCalculator.buttons.length-2); i++){      //Set dark grey buttons to default
    document.getElementById(brokenCalculator.buttons[i]).style.backgroundColor = "#444";
    document.getElementById(brokenCalculator.buttons[i]).disabled = false;
  }
  document.getElementById(brokenCalculator.buttons[16]).style.backgroundColor = "#F30";      //Set equal button to default
  document.getElementById(brokenCalculator.buttons[16]).disabled = false;

  document.getElementById(brokenCalculator.buttons[17]).style.backgroundColor = "#888";       //Set AC button to default
  document.getElementById(brokenCalculator.buttons[17]).disabled = false;
}

function calculateResult(){                                 //Evaluates and writes result to screen, then checks if result == goal
  try{                                                    //Checks for syntax errors
    if(calcString[calcString.length-1] == "+" || calcString[calcString.length-1] == "-" || calcString[calcString.length-1] == "*" || calcString[calcString.length-1] == "/"){
      throw "Syntax Error"
    }
  }
  catch(err){
    document.getElementById("screenPar").innerHTML = err;
    return 1;
  }
  console.log(calcString);
  var result = eval(calcString);
  document.getElementById("screenPar").innerHTML = result;
  calcString += "$";                                          //Adds '$' as an end of expression character to end of the string
  if(result === brokenCalculator.goal){                       //If result is correct, sets new goal, and breaks new buttons
    if(calcString.search("[\\+|\\-|\\*|\\/]") == -1){
      document.getElementById("screenPar").innerHTML = "Don't cheat";
      document.getElementById("screenPar").style.color = "red";
    }
    else{
      document.getElementById("screenPar").style.color = "green";
      brokenCalculator.setGoal();
      resetButtons();
      brokenCalculator.breakButtons();
    }
  }
  else if(brokenCalculator.goal !== ""){                                                  //If result is incorrect, screen turns red
    document.getElementById("screenPar").style.color = "red";
  }
  return result;
}

function calcSin(){
  try{                                                    //Checks for syntax errors
    if(calcString[calcString.length-1] == "+" || calcString[calcString.length-1] == "-" || calcString[calcString.length-1] == "*" || calcString[calcString.length-1] == "/"){
      throw "Syntax Error"
    }
  }
  catch(err){
    document.getElementById("screenPar").innerHTML = err;
    return 1;
  }
  if(calcString[calcString.length-1] == "$"){             //If last character in string is '$', clears screen
    clearScreen();
    document.getElementById("screenPar").style.color = "black";
  }
  else{
    var evalRes = eval(calcString);
    console.log(evalRes + typeof evalRes);
    var result = Math.round(Math.sin(evalRes));
    console.log(result + typeof result);
    console.log(result);
    calcString = result;
    document.getElementById("screenPar").innerHTML = result;
  }
}

function calcCos(){
  try{                                                    //Checks for syntax errors
    if(calcString[calcString.length-1] == "+" || calcString[calcString.length-1] == "-" || calcString[calcString.length-1] == "*" || calcString[calcString.length-1] == "/"){
      throw "Syntax Error"
    }
  }
  catch(err){
    document.getElementById("screenPar").innerHTML = err;
    return 1;
  }
  if(calcString[calcString.length-1] == "$"){             //If last character in string is '$', clears screen
    clearScreen();
    document.getElementById("screenPar").style.color = "black";
  }
  else{
    var evalRes = eval(calcString);
    console.log(evalRes + typeof evalRes);
    var result = Math.abs(Math.round(Math.cos(evalRes)));
    console.log(result + typeof result);
    console.log(result);
    calcString = result;
    document.getElementById("screenPar").innerHTML = result;
  }
}