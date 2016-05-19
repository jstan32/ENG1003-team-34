// Line 2 : added functions,
// Header, inital map, geocoding& text field for addLocation, change in textfields (works individually)
// 2nd textfield( nickname ), json(saving location), HTML additions, havent set function inputs and variables


// Code for Add Location Page
// Add Location bar header
document.getElementById("headerBarTitle").textContent = "Add Location";

// Displays initial map 
if(!document.getElementById("mapsapi"))
{
  var script = document.createElement("script");
  script.setAttribute("src","https://maps.googleapis.com/maps/api/js?v=3");
  script.setAttribute("id", "mapsapi");
	var bodyNode = document.getElementsByTagName("body")[0];
	bodyNode.appendChild(script);
}

var map;

document.getElementById("outputArea").innerHTML = '<div id="map" style="height: 600px; width: 100%;">Loading map...</div>';

setTimeout(initMap,1000);

function initMap()
{
  // centered at monash uni clayton
  var monashClaytonPosition = { lat: -37.912, lng: 145.131};
  map = new google.maps.Map(document.getElementById("map")),
  {
    zoom:16,
    center : monashClaytonPosition
  });
}
