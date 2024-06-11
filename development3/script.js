

(function(){
  'use strict';

   // typewriter
   var app = document.getElementById('app');
   var text2 = document.getElementById('text2');
  
   var typewriter = new Typewriter(app, {
       loop: true
   });

   
   typewriter.typeString("Welcome to 2074 America: the Home of the Brave and Land of the Free!")
       .pauseFor(2500)
       .deleteAll()
       .typeString("Shall I give you a tour of what you're missing out in 2024?")
       .pauseFor(10000)
       .start();

       var typewriter = new Typewriter(text2, {
        loop: true
    });
       typewriter.typeString("Coming to a neighborhood near you comes the Bart T-74!")
       .pauseFor(2500)
       .deleteAll()
       .start();
  //interactive   
  var items = [
    {
      type: "text",
      title: "Destructable Helm",
      description: "<b>State of the Art manufacturing by Boeing Company, America's most trustworthy and reliable manufacturer. Why they ever stopped making planes is a mystery. </b>.",
      position: {
        left: 50,
        top: 220
      }
    },
    {
      type: "text",
      title: "Roads Hanging On For Dear Life",
      description: "<b>The government has taken quite liberal steps to preserve our sacred railways. They've been quite successful don't you think?</b>.",
      position: {
        left: 200,
        top: 380
      }
    },
    
    
  ];
  
  var options = {
    allowHtml: true
  };
  
  $(document).ready(function() {
    $("#my-interactive-image").interactiveImage(items, options);
    
  });

  
  
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