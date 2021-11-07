
    var targetDate = new Date("Dec 25, 2021 12:00:00").getTime();
    var myFunc = setInterval(function() {
      var currentTime = new Date().getTime();
      var remaining = targetDate - currentTime;

      var s = Math.floor((remaining % (1000 * 60)) / 1000);
      var m = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
      var h = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var d = Math.floor(remaining / (1000 * 60 * 60 * 24));

      document.getElementById("showTimer").innerHTML = d + "d " + h + "h "
      + m + "m " + s + "s ";
        
    }, 1000);
 