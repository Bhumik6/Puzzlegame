
function changeStyle() {

  var selectedOption = document.getElementById("options").value;
  var puzzleElement = document.querySelector(".puzzle");

  for (var i = 1; i <= 15; i++) {
    var boxId = "b" + i;
    var boxElement = document.getElementById(boxId);


    switch (selectedOption) {
      case "option1":
        boxElement.style.backgroundImage = "url('couchBeck.jpg')";
        puzzleElement.style.backgroundImage = "url('couchBeck.jpg')";
        break;
      case "option2":
        boxElement.style.backgroundImage = "url('cat.jpg')";
        puzzleElement.style.backgroundImage = "url('cat.jpg')";
        break;
      case "option3":
        boxElement.style.backgroundImage = "url('rabbit.jpg')";
        puzzleElement.style.backgroundImage = "url('rabbit.jpg')";
        break;
      case "option4":
        boxElement.style.backgroundImage = "url('chickin.jpg')";
        puzzleElement.style.backgroundImage = "url('chickin.jpg')"; 
        break;
      default:
        boxElement.style.backgroundImage = "url('couchBeck.jpg')";
        puzzleElement.style.backgroundImage = "url('couchBeck.jpg')";
        
    }
  }
}



window.onload = function () {
  let boxes = document.querySelectorAll('.box');
  let btn = document.getElementById("shuffle");
  let mouseDown = false;
  let gameStart = false;
  let totalMoves = 0;

  let startTime;
  let endTime;

  btn.addEventListener('click', function () {
    shuffle();
    gameStart = true;
    startTime = new Date();
  });

  boxes.forEach(function (box) {
    box.addEventListener('mouseover', function () {
      if (isValid(this.id, document.getElementById("bwhite").id)) {
        document.getElementById(this.id).style.border = "2px solid red";
        document.getElementById(this.id).style.color = "#006600";
        document.getElementById(this.id).style.textDecoration = "underline";
      }
    });

    box.addEventListener('mouseout', function () {
      if (isValid(this.id, document.getElementById("bwhite").id)) {
        document.getElementById(this.id).style.border = "2px solid white";
        document.getElementById(this.id).style.color = "white";
        document.getElementById(this.id).style.textDecoration = "none";
      }
    });

    box.addEventListener('mousedown', function () {
      mouseDown = true;
      if (isValid(this.id, document.getElementById("bwhite").id)) {
        swapBoxes(this.id, document.getElementById("bwhite").id);
      }

      if (gameStart) {
        wonGame();
      }
    });

    box.addEventListener('mouseup', function () {
      mouseDown = false;
    });
  });

  function swapBoxes(box1, box2) {
    let box1El = document.getElementById(box1);
    let box2El = document.getElementById(box2);
    box1El.style.transition = 'transform 0.3s';
    box1El.style.transform = 'rotateY(90deg)';
  
    setTimeout(function() {
      // Swap the positions after the tile has flipped halfway
      let temp = box1El.style.top;
      let temp2 = box1El.style.left;
      box1El.style.top = box2El.style.top;
      box1El.style.left = box2El.style.left;
      box2El.style.top = temp;
      box2El.style.left = temp2
      box1El.style.transform = 'rotateY(0deg)';
  
      // Reset transition so it doesn't affect other properties
      setTimeout(function() {
        box1El.style.transition = '';
      }, 300);
  
    }, 150); // This timeout duration should be half of the flip animation duration
  
    totalMoves++;
  }
}
  
function swapBoxesNoAnimation(box1, box2) {
  let temp = document.getElementById(box1).style.top;
  let temp2 = document.getElementById(box1).style.left;
  document.getElementById(box1).style.top = document.getElementById(box2).style.top;
  document.getElementById(box1).style.left = document.getElementById(box2).style.left;
  document.getElementById(box2).style.top = temp;
  document.getElementById(box2).style.left = temp2;
}

  function shuffle() {
    console.log("shit")
    for (let i = 0; i < 1000; i++) {
      let rand = Math.floor((Math.random() * 15) + 1);
      let string1 = "b";
      let string2 = rand.toString();
      let stringValidate = string1.concat(string2);
      if (isValid(stringValidate, document.getElementById("bwhite").id)) {
        swapBoxesNoAnimation(stringValidate, document.getElementById("bwhite").id);
      }
    }
    totalMoves = 0;
  }

  function isValid(box, bwhite) {
    let bX = parseInt(document.getElementById(box).style.left);
    let bY = parseInt(document.getElementById(box).style.top);
    let whiteX = parseInt(document.getElementById(bwhite).style.left);
    let whiteY = parseInt(document.getElementById(bwhite).style.top);

    let temp1 = Math.abs(whiteX - bX);
    let temp2 = Math.abs(whiteY - bY);

    if (temp1 <= 100 && temp2 <= 100 && temp1 != temp2) {
      return true;
    }
    return false;
  }

  function wonGame() {
    let winCount = 0;

    if (document.getElementById("b1").style.top == "0px" && document.getElementById("b1").style.left == "0px") {
      winCount++;
    }
    if (document.getElementById("b2").style.top == "0px" && document.getElementById("b2").style.left == "100px") {
      winCount++;
    }
    if (document.getElementById("b3").style.top == "0px" && document.getElementById("b3").style.left == "200px") {
      winCount++;
    }
    if (document.getElementById("b4").style.top == "0px" && document.getElementById("b4").style.left == "300px") {
      winCount++;
    }
    if (document.getElementById("b5").style.top == "100px" && document.getElementById("b5").style.left == "0px") {
      winCount++;
    }
    if (document.getElementById("b6").style.top == "100px" && document.getElementById("b6").style.left == "100px") {
      winCount++;
    }
    if (document.getElementById("b7").style.top == "100px" && document.getElementById("b7").style.left == "200px") {
      winCount++;
    }
    if (document.getElementById("b8").style.top == "100px" && document.getElementById("b8").style.left == "300px") {
      winCount++;
    }
    if (document.getElementById("b9").style.top == "200px" && document.getElementById("b9").style.left == "0px") {
      winCount++;
    }
    if (document.getElementById("b10").style.top == "200px" && document.getElementById("b10").style.left == "100px") {
      winCount++;
    }
    if (document.getElementById("b11").style.top == "200px" && document.getElementById("b11").style.left == "200px") {
      winCount++;
    }
    if (document.getElementById("b12").style.top == "200px" && document.getElementById("b12").style.left == "300px") {
      winCount++;
    }
    if (document.getElementById("b13").style.top == "300px" && document.getElementById("b13").style.left == "0px") {
      winCount++;
    }
    if (document.getElementById("b14").style.top == "300px" && document.getElementById("b14").style.left == "100px") {
      winCount++;
    }
    if (document.getElementById("b15").style.top == "300px" && document.getElementById("b15").style.left == "200px") {
      winCount++;
    }

    if (winCount == 15) {
      endTime = new Date();
      let timeDiff = endTime - startTime;
      timeDiff /= 1000;
      let seconds = Math.round(timeDiff);
      document.getElementById("familyTies").play();
      document.getElementById("animation").style.visibility = "visible";
      document.getElementById("animation").innerHTML = "Congrats, You Won! Total Moves: " + totalMoves + "  Total Seconds: " + seconds;
    }
  }
