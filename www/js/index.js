var map;


       

$(document).on( "pageinit", "#pageone", function() {
    
    map = L.map('map').fitWorld();;
    
    
    
    
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiY2hyaXNwYm93ZXJzIiwiYSI6ImNqa3RsMmZ3czA2YzAzcG43NjN0bGVqa2gifQ.R0TgbW-HVWlbXsOwVmBITg'
}).addTo(map);
    
    
     L.marker([52.193638, -2.221575]).addTo(map);
        L.marker([52.486244, -1.890401]).addTo(map);
         L.marker([51.507351, -0.127758]).addTo(map);
         L.marker([55.953251, -3.188267]).addTo(map);
    
    navigator.geolocation.getCurrentPosition(onLocationSuccess, onLocationFail)
    
});


function onLocationSuccess(position) {
    
    console.log("Location successful: " + position);
   
    
    var latlng = new L.LatLng( position.coords.latitude, position.coords.longitude);
    var zoomLvl = 16;
    
    map.setView(latlng, zoomLvl);
    L.marker(latlng).addTo(map);
    
}

function onLocationFail(error) {
    console.log("Error: " + error.message);
}