(function(){
  'use strict';

  AOS.init();

  new fullpage('#fullpage', {
  //options here
  autoScrolling:false,
  scrollHorizontally: true
  });

})(); // end IIFE