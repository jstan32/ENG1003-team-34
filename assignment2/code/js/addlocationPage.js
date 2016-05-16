// Line 2 : added functions,
// Header, inital map, geocoding& text field for addLocation, change in textfields (works individually)
// 2nd textfield( nickname ), json(saving location), HTML additions, havent set function inputs and variables


// Code for Add Location Page
// Add Location bar header
document.getElementById("headerBarTitle").textContent = "Add Location";

// Displays initial map 
var map;

function initMap()
{
  var monashuniposition = { lat: -37.912, lng: 145.131};
  map = new.google.maps.Map(document.getElementById("map"),
  {
    zoom: 16,
    center : monashuniposition
  });
  var geocoder = new google.maps.Geocoder();
  
  document.getElementById('submit').addEventListener('click', function()
  {
    geocodeAddress(geocoder,map);
  }
}
// Add Location textbox (geocode)
// Has to be added to HTML/ edited to suit requirements 
function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('address').value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

// Location 

// For change in Text fields,(onchange property)
var outputAreaRef = document.getElementById("outputArea");

var html = '<input type="text" oninput="fieldValueChanged(this.value)" onchange="fieldValueEntered(this.value)" /><br />';
html += '<div id="message1" ></div>';
html += '<div id="message2" ></div>';
outputAreaRef.innerHTML = html;

// onclick button for AddLocation
