// change css using jquery
// $("#txt").css({ color: "blue", fontSize: "25px" });

// 4 / 2 = 2
// 4 / 3 = 1 R1

// 4 % 2 = 0
// 4 % 3 = 1

// 2 % 2 = 0
// 3 % 2 = 1

// if a number is even then % with 2 will return 0
// otherwise if a number is odd then % with 2 will return 1

$(document).ready(function() {
  
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ampm = amOrPm(h);
    h = convertHours(h);
    h = checkTime(h);

    m = checkTime(m);
    s = checkTime(s);
    $("#txt").html(h + ":" + m + ":" + s + ampm)

    //change text colour to red on odd minutes, blue on evens
    var colourUpdate = updateColour(m);
    $("#txt").css("color", colourUpdate);
    setTimeout(startTime, 500);
  }

  function startFlippingBackgroundColor() {
      
    //set to 5 minutes, 300k milliseconds
    var flippingColorTimer = 300000;

    var color1 = "rgb(0,255,255)"; //blue
    var color2 = "rgb(255,255,0)"; //yellow

    var randomColor = "rgb("+getRandomInt(0,255)+","
                          +getRandomInt(0,255)+","
                          +getRandomInt(0,255)+")";

    $("body").css("background-color", randomColor);

    setTimeout(startFlippingBackgroundColor, flippingColorTimer);
    
  }

  function startUpdatingFontSize(vTimer) {

      //set to 5 minutes, 300k milliseconds
      var flippingFontSizeTimer = 300000;

      //array of font sizes
      var fontSizes = ["10px","30px","50px","100px"];

      //choose a random font size from the array
      var fontSize = fontSizes[getRandomInt(0,fontSizes.length-1)];
      $("#txt").css("font-size", fontSize);

      setTimeout(startUpdatingFontSize, flippingFontSizeTimer);
    
  }

  /**
  * Returns a random integer between min (inclusive) and max (inclusive)
   * Using Math.round() will give you a non-uniform distribution!
   */
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i;
  }

  function convertHours(i) {
    if (i > 12) {
        i = i - 12;
    }
    return i;
  }

  function amOrPm(i) {
    if (i < 12) {
        return "AM";
    } else {
        return "PM";
    }
  }

  //return red if it's an even increment, blue if it's odd
  function updateColour(timeInc) {
    if ((timeInc % 2) === 0) {
      return "blue";
    }
    else { 
      return "red";
    }
  }

  startTime();
  startFlippingBackgroundColor();
  startUpdatingFontSize();  

});
