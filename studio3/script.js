(function(){
  'use strict';

  AOS.init();

  new fullpage('#fullpage', {
  //options here
  autoScrolling:false,
  scrollHorizontally: true
  });
  new fullpage('#fullpage', {
    licenseKey: gplv3-license
  });
})(); // end IIFE