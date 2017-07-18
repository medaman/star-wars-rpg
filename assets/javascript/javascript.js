$(document).ready(function() {
 
  var currentPlayer = -1;
  var currentOpponent = -1;
  var remainingOpponents = [0,1,2,3];
  var currentPlayerHealth = 0;
  var currentOpponentHealth = 0;
  var currentAP = 0;
  
  function addChars(chooseType, displayArea) {
    displayArea.html("");
    for(var i=0;i<remainingOpponents.length;i++) {
      var newDiv = $("<div>");
      var innerDiv = $("<div>");
      newDiv.addClass("col-xs-3 character-" + (remainingOpponents[i]+1));
      innerDiv.attr("value", remainingOpponents[i]);
      innerDiv.attr("name", character[remainingOpponents[i]].name);
      innerDiv.addClass("icon " + chooseType);
      innerDiv.css("background", "url(assets/images/background.jpg) no-repeat center center");
      innerDiv.css("background-size","contain");
      innerDiv.css("background-color","black");
      displayText(innerDiv, character[remainingOpponents[i]].name);
      displayText(innerDiv, "HP: " + character[remainingOpponents[i]].hp);
      displayText(innerDiv, "Attack: " + character[remainingOpponents[i]].ap);
      displayImage(innerDiv, character[remainingOpponents[i]].pic);
      displayArea.append(newDiv);
      $(".character-"+(remainingOpponents[i]+1)).append(innerDiv);
    }
  }

  addChars("choose-character", $("#character-row"));

  function displayText(area, item) {
    var newP = $("<p>");
    newP.html(item);
    area.append(newP);
  }

  function displayImage(area, item) {
    var newImage = $("<img>");
    newImage.attr("src", "assets/images/" + item);
    area.append(newImage);
  }

  $("body").on("click", ".choose-character", function() {
    currentPlayer = parseInt($(this).attr("value"));
    $("#start-screen").css("visibility", "hidden");
    var i = remainingOpponents.indexOf(parseInt(currentPlayer));
    remainingOpponents.splice(i,1);
    addChars("choose-opponent", $("#opponents"));
    displayImage($("#myChar"), character[currentPlayer].jpeg);
    $("#myHP").css("width","100%");
    $("#myHealth").html("<span>" + character[currentPlayer].hp + " HP</span>");
    currentPlayerHealth = character[currentPlayer].hp;
    currentAP = character[currentPlayer].ap;
  });

  $("body").on("click", ".choose-opponent", function() {
    currentOpponent = parseInt($(this).attr("value"));
    $("#oppChar").html("");
    $("#start-screen").css("visibility", "hidden");
    var i = remainingOpponents.indexOf(parseInt(currentOpponent));
    remainingOpponents.splice(i,1);
    addChars("choose-opponent", $("#opponents"));
    displayImage($("#oppChar"), character[currentOpponent].jpeg);
    $("#opponentHP").css("width","100%");
    $("#opponentHealth").html("<span>" + character[currentOpponent].hp + " HP</span>");
    currentOpponentHealth = character[currentOpponent].hp;
  });

  $("body").on("click", "#action", function() {
    currentOpponentHealth -= currentAP;
    console.log(character[currentPlayer].ap);
    var newPercent = currentOpponentHealth / character[currentOpponent].hp * 100;
    $("#opponentHP").css("width", newPercent + "%");
    $("#opponentHealth").html("<span>" + currentOpponentHealth + " HP</span>");
    
    if (currentOpponentHealth<=0) {
    $("#opponentHP").css("width", "0%");
    $("#opponentHealth").html("<span>0 HP</span>");      
    }
    else {
      currentPlayerHealth -= character[currentOpponent].ap;
      currentAP+=character[currentPlayer].ap;
      var newPercent = currentPlayerHealth / character[currentPlayer].hp * 100;
      $("#myHP").css("width", newPercent + "%");
      $("#myHealth").html("<span>" + currentPlayerHealth + " HP</span>");
    }
  });





})