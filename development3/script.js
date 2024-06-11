

(function(){
  'use strict';

   // typewriter
   var app = document.getElementById('app');
   var text1 = document.getElementById('text1');
   var text2 = document.getElementById('text2');
   var text3 = document.getElementById('text3');
   var text4 = document.getElementById('text4');
  
   var typewriter = new Typewriter(app, {
       loop: true
   });

   
   typewriter.typeString("Welcome to 2074 America: the Home of the Brave and Land of the Free!")
       .pauseFor(2500)
       .deleteAll()
       .typeString("Shall I give you a tour of what you're missing out in 2024?")
       .pauseFor(10000)
       .start();

       var typewriter = new Typewriter(text1, {
        loop: true
    });
 
    
    typewriter.typeString("The Future Decline to Infrastructure")
        .pauseFor(2500)
        .deleteAll()
        .start();
       var typewriter = new Typewriter(text2, {
        loop: true
    });
       typewriter.typeString("Coming to a neighborhood near you comes the Bart T-74!")
       .pauseFor(2500)
       .deleteAll()
       .start();

       var typewriter = new Typewriter(text3, {
        loop: true
    });
       typewriter.typeString("The electric car market has never seen better days! Our Fellow Americans might not be buying as much as before but they sure know how to keep em!")
       .pauseFor(2500)
       .deleteAll()
       .start();

       var typewriter = new Typewriter(text4, {
        loop: true
    });
       typewriter.typeString("Flight have been more efficient now that there aren't many people boarding planes anymore! Heck getting a flight in general is a fun lottery for a lot of folk who like to lose!")
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