<template>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Broken Calculator</title>
    <link rel="stylesheet" media="screen" href="https://fontlibrary.org/face/lcd" type="text/css"/>
    <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Crimson+Text&display=swap" rel="stylesheet">
  </head>

  <body>
  <div class="container" id="wrap">
    <h1>Welcome, champ!</h1>
    <p>Note: This is a calculator I built a few years ago for my portfolio. Here I am reusing that project, because I find it really cool.. :)</p>
    <h2>Select difficulty:</h2>
    <div class="container" id="diffSelCont">
      <button id="easyBut" onclick="pressEasy()">Easy</button>
      <button id="mediumBut" onclick="pressMedium()">Medium</button>
      <button id="hardBut" onclick="pressHard()">Hard</button>
      <p id="goalPar">Goal: </p>
    </div>
    <div class="container" id="calcCont">
      <div class="container" id="screen">
        <p id="screenPar">12345678</p>
      </div>
      <div class="container" id="buttonsCont">
        <button onclick="calcSin()" class="calcBut upperRow" id="sin" value="Math.sin()">Sin</button>
        <button onclick="calcCos()" class="calcBut upperRow" id="cos" value="Math.cos()">Cos</button>
        <button onclick="addToCalcString('/')" class="calcBut upperRow" id="divide" value="/">/</button>
        <button onclick="addToCalcString('*')" class="calcBut upperRow" id="multiply" value="*">x</button>
        <br>
        <button onclick="addToCalcString('7')" class="calcBut" id="7" value="7">7</button>
        <button onclick="addToCalcString('8')" class="calcBut" id="8" value="8">8</button>
        <button onclick="addToCalcString('9')" class="calcBut" id="9" value="9">9</button>
        <button onclick="addToCalcString('-')" class="calcBut" id="substract" value="-">-</button>
        <br>
        <button onclick="addToCalcString('4')" class="calcBut" id="4" value="4">4</button>
        <button onclick="addToCalcString('5')" class="calcBut" id="5" value="5">5</button>
        <button onclick="addToCalcString('6')" class="calcBut" id="6" value="6">6</button>
        <button onclick="addToCalcString('+')" class="calcBut" id="add" value="add">+</button>
        <br>
        <button onclick="addToCalcString('1')" class="calcBut" id="1" value="1">1</button>
        <button onclick="addToCalcString('2')" class="calcBut" id="2" value="2">2</button>
        <button onclick="addToCalcString('3')" class="calcBut" id="3" value="3">3</button>
        <button onclick="calculateResult()" class="calcBut" id="equal" value="equal">=</button>
        <br>
        <button onclick="addToCalcString('0')" class="calcBut" id="zero" value="0">0</button>
        <button onclick="clearScreen()" class="calcBut" id="ac" value="clear">AC</button>
      </div>
    </div>
    <footer>
      <a href="https://www.linkedin.com/in/viktor-áron-farkas-6898b8188/">LinkedIn</a>
      <a href="https://github.com/viktoraronfarkas/brokenCalculator">GitHub</a>
    </footer>
  </div>
  </body>
</template>