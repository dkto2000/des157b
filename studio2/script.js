(function(){
    'use strict';

    let globalData;
    let numDataPoints;
    async function getData(){
        const myMoods = await fetch('data/data.json');
        const data = await myMoods.json();
        // Gets the keys and puts them in an array
        const dataPoints = Object.keys(data);
        // Gets the values and puts them in the globalData array
        globalData = Object.values(data);
        // Gets the number of entries in the JSON file
        numDataPoints = dataPoints.length;
        //console.log(globalData, numDataPoints);
    }

    function showMoodInfo(point, data){
        const captions = [
            ' <img src="images/likethat.jfif" alt="likethatpic" id="likethat">',
            ' <img src="images/pushups.jfif" alt="pushupspic" id="pushups">',
            ' <img src="images/euphoria.jfif" alt="euphoriapic" id="euphoria">',
            ' <img src="images/familymatters.jfif" alt="familymatterspic" id="familymatters">',
            ' <img src="images/meetthegrahams.jfif" alt="lapic" id="la">',
            ' <img src="images/aminor.jfif" alt="notlikeuspic" id="notlikeus">',
            ' <img src="images/theheart.jfif" alt="theheartpic" id="theheart">',
            ' <img src="images/prison.jfif" alt="bbldrizzypic" id="bbldrizzy">',

        ];

        const sounds = [
            '<source src="sound/likethat.mp3" type="audio/mp3">',
            '<source src="sound/pushups.mp3" type="audio/mp3">',
            '<source src="sound/euphoria.mp3" type="audio/mp3">',
            '<source src="sound/familymatters.mp3" type="audio/mp3">',
            '<source src="sound/meetthegrahams.mp3" type="audio/mp3">',
            '<source src="sound/notlikeus.mp3" type="audio/mp3"> ',
            '<source src="sound/theheart.mp3" type="audio/mp3">',
            '<source src="sound/bbldrizzy.mp3" type="audio/mp3">'
        ];
        const sound = document.querySelector('#pep');
        sound.innerHTML = sounds[ data[point].sound ];
        sound.play();
        document.querySelector('#title').innerHTML = data[point].title;
        document.querySelector('#cover').innerHTML = captions[ data[point].cover ];
        document.querySelector('#date').innerHTML = data[point].date;
        
       
    }

    // Event listener for when the mouse moves
    document.addEventListener('mousemove', reportPos);

    let prevLoc = -1;

    function reportPos(event) {
        const windowSize = window.innerWidth;
        //The window needs to be divided into sections for each time in the JSON data
        const timeSection = windowSize / numDataPoints;
        const xPos = event.clientX;
        // changeTime will be a number from 0-16
        const changeTime = Math.floor(xPos / timeSection);

        // When you move the mouse into the next segment, change the interface.
        if (changeTime !== prevLoc) {
            //console.log(changeTime);
            showMoodInfo(changeTime, globalData);
            prevLoc = changeTime;
        }
    }

    getData();

})(); // end IIFE