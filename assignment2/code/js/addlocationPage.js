// Line 2 : added functions,
// Header, inital map, geocoding& text field for addLocation, change in textfields (works individually)
// 2nd textfield( nickname ), json(saving location), HTML additions, havent set function inputs and variables


// Code for Add Location Page
// Add Location bar header
document.getElementById("headerBarTitle").textContent = "Add Location";

// Two text fields : (1) Add Location (2) Nickname
var addlocation = document.getElementById("addlocation").value;
var nickname = document.getElementById("nickname").value;

// Responding to a change in a HTML text field (1)

var html = '<input type="text" onchange="fieldValueEntered(this.value)"/<br/>';
html += '<div id ="addlocation" ></div>';

fieldValueEntered = function(value)
{
	addlocationRef.innerHTML = "Add location changed to: " + value;
};

//Responding to change in (2)

var html = '<input type="text" onchange="fieldValueEntered(this.value)"/<br/>';
html += '<div id ="nickname" ></div>';

fieldValueEntered = function(value)
{
	addlocationRef.innerHTML = "nickname changed to: " + value;
};

// takes add location and determines if location is accepted
function geocodelocation() {
  var addlocation = document.getElementById("addlocation");

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation location not found or unavailable in your browser</p>";
    return;
  }

  function success(addlocation) {
    var latitude  = addlocation.coords.latitude;
    var longitude = addlocation.coords.longitude;

    output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

    var img = new Image();
    img.src = "https://maps.googleapis.com/maps/api/js?key=f04bebef67361500be90302f1055ac9f&callback=initMap" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

    output.appendChild(img);
  };

// error for when unable to determine location
  function error() {
    output.innerHTML = "Unable to retrieve your location";
  };

  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);
}
