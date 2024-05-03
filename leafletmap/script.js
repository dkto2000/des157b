(function(){
    'use strict';

    // add your script here
    var map = L.map('map').setView([37.765205, -122.241638], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([37.75638784973277, -122.25130769080543]).addTo(map);
    marker.bindPopup("<b>Yifang Taiwan Fruit Tea</b><br>This is my favorite boba place in the Bay Area").openPopup();

    var circle = L.circle([37.75708022626988, -122.25227730940247], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.3,
        radius: 200
    }).addTo(map);
    circle.bindPopup("This is Southshore Mall");

    var polygon = L.polygon([
        [37.77169814132852, -122.23749833770539],
        [37.76096080746915, -122.24611359292824],
        [37.7645740180208, -122.23924713796377]
    ]).addTo(map);
    polygon.bindPopup("This is considered downtown Alameda aka it's commerical hub");
    
}());