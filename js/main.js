

var video = document.getElementById("video"); 
    //this did the trick
    video.loop = false; 
    video.addEventListener('ended', function() { 
      video.currentTime=0.1; video.play(); }, false);
    video.play();
