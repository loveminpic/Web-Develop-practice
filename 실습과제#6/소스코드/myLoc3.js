window.onload = getMyLocation;

function getMyLocation() {
    if (navigator.geolocation)  {
       var watchButton = document.getElementById("watch");
       watchButton.onclick = watchLocation;
       var clearWatchButton = document.getElementById("clearWatch");
       clearWatchButton.onclick = clearWatch;
    }
    else    {
        alert("Oops, no geolocation support");
    }
}

function computeDistance(startCoords, destCoords)   {
    var startLatRads = degreesToRadians(startCoords.latitude);
    var startLognRads = degreesToRadians(startCoords.longitude);
    var destLatRads = degreesToRadians(destCoords.latitude);
    var destLongRads = degreesToRadians(destCoords.longitude);
    
    var Radius = 6371;
    var distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) + Math.cos(startLatRads) * Math.cos(destLatRads) * Math.cos(startLognRads - destLongRads)) * Radius;
    
    return distance;
}

function degreesToRadians(degrees)  {
    var radians = (degrees * Math.PI)/180;
    return radians;
}
var ourCoords = {
    latitude: 47.623851,
    longitude: -122.52099
};


function displayLocation(position)  {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    
    var div = document.getElementById("location");
    div.innerHTML = "You are at Latitude: " + latitude + ", Longitude: " + longitude;
    div.innerHTML += " (with " + position.coords.accuracy + " meters accuracy)";
    
    var km = computeDistance(position.coords, ourCoords);
    var distance = document.getElementById("distance");
    distance.innerHTML = "You are " + km + "km from the WickedlySmart HQ";
    
    if(map == null){
        showMap(position.coords);
    } else{

        scrollMapToPosition(position.coords);
    }
}

var map;

function showMap(coords)    {
    var googleLatAndLong = new google.maps.LatLng(coords.latitude, coords.longitude);
    
    var mapOptions = {
        zoom:10,
        center: googleLatAndLong,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var mapDiv = document.getElementById("map");
    map = new google.maps.Map(mapDiv, mapOptions);

    var title = "Your Location";
    var content = "You are here: " + coords.latitude + ", " + coords.longitude;
    addMarker(map,googleLatAndLong, title, content)
}

function addMarker(map, latlong, title, content) {
    var markerOptions = {
        position: latlong,
        map: map,
        title: title,
        clickable: true
    };
    var marker = new google.maps.Marker(markerOptions);

    var infoWindowOptions = {
        content: content,
        position: latlong
    };

    var infoWindow = new google.maps.InfoWindow(infoWindowOptions);

    google.maps.event.addListener(marker, "click", function() {
        infoWindow.open(map);
    });
}

var watchId = null;

function watchLocation(){
    watchId = navigator.geolocation.watchPosition(displayLocation);
}

function clearWatch(){
    if (watchId != null){
        navigator.geolocation.clearWatch(watchId);
        watchId = null;
        
    }
}

function scrollMapToPosition(coords){
    var latitude = coords.latitude;
    var longitude = coords.longitude;
    var latlong = new google.maps.LatLng(latitude,longitude);

    map.panTo(latlong);

    addMarker(map, latlong, "Your new location", "You moved to: "+ latitude + ","+longitude );

}

