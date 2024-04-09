(function() {
    'use strict';

    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section')
    let mode = 'first';

    button.addEventListener('click', function() {
        if (mode === 'first') {
            body.className = 'switch';
            button.className = 'switch';
            header.className = 'switch';
            document.querySelector("video").src = "images/bluesky.mp4";
            for (const section of sections) {
                section.className = 'switch';
            }
            mode = 'second';

        }else if(mode === 'second'){
            header.className ='second';
            button.className='second';
            body.className='second';
            document.querySelector("video").src = "images/greysky.mp4";
            for (const section of sections) {
                section.className = 'second';
            }
            mode = 'null';
        }
        
         else {
            body.removeAttribute('class');
            document.querySelector("video").src = "images/greensky.mp4";
            button.removeAttribute('class');
            for (const section of sections) {
                section.removeAttribute('class');
            }
            mode = 'first';
        }
    })
})()