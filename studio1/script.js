(function() {
  'use strict';

  const myVideo = document.querySelector('#myVideo');
  const fs = document.querySelector('.fa-expand');
  const fr = document.querySelector('.fa-filter');
 
  const line1 = document.querySelector('#line1');
  const line2 = document.querySelector('#line2');
  const line3 = document.querySelector('#line3');

  const haiku = {
   start: [0, 4, 7],
  stop: [2, 6, 9],
  line: [line1, line2, line3]
  }

  const intervalID = setInterval(checkTime, 1000);
  let mode = 'first';

  function checkTime() {
console.log(parseInt(myVideo.currentTime));

for (let i = 0; i < haiku.start.length; i++) {
if (haiku.start[i] < myVideo.currentTime && myVideo.currentTime < haiku.stop[i]) {
haiku.line[i].className = "showing";
} else {
haiku.line[i].className = "hidden";
}
}
}
// makes function for widescreen zoom button

  fs.addEventListener('click', function() {
   
      if (!document.fullscreenElement) {
        
          document.documentElement.requestFullscreen();
      } else {
          document.exitFullscreen();

      }
  });

  // makes a function for filter button

  fr.addEventListener('click', function() {
   
    if (mode === 'first') {
     
     myVideo.style.filter="grayscale(100%)";
      mode = 'second';

  }else if(mode === 'second'){
    myVideo.style.filter="contrast(200%)";
      mode = 'third';
  }else if(mode === 'third'){
    myVideo.style.filter="hue-rotate(90deg)";
      mode = 'four';
  }else if(mode === 'four'){
    myVideo.style.filter="drop-shadow(16px 16px 20px red) invert(75%)";
    mode = 'five';
  }
  else {
    myVideo.style.filter="none";
    mode = 'first';
}
});
})();