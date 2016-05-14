// Code for the View Location page.

// This is sample code to demonstrate navigation.
// You need not use it for final app.


var locationIndex = localStorage.getItem(APP_PREFIX + "-selectedLocation"); 
if (locationIndex !== null)
{
    var locationNames = [ "Location A", "Location B" ];
    // If a location name was specified, use it for header bar title.
    document.getElementById("headerBarTitle").textContent = locationNames[locationIndex];
}
else
{
    document.getElementById("headerBarTitle").textContent = "NICKNAME";
}
relativeDay = 0;
checkDay(); //Retrieves data for current day

document.getElementById("daySlider").addEventListener("input", slideChange);  //When slider is moved, recheck day and re-evalute
function slideChange() {
    relativeDay = document.getElementById("daySlider").value; //Change value as relative day : 0 = current day, -7 = 1 week ago
    checkDay();
}
// Make the API request:


function checkDay()
{
currentDay = new Date();   //Using current date
dayMill = currentDay.getTime() + relativeDay*86400000;  //Milliseconds to day 
day = new Date(dayMill); //Creating day in focus
console.log(day);  //Tester
this.Response = function(weather)
{
    date = ""+day.getDate()+"-"+(day.getMonth()+1)+"-"+day.getFullYear()  //Get data values for weather
    summary = weather.currently.summary;
    maxTemp = weather.daily.data[0].temperatureMax; 
    minTemp = weather.daily.data[0].temperatureMin;
    currentTemp = weather.currently.temperature;
    humidity = weather.currently.humidity;
    wind = weather.currently.windSpeed;
    drawer();
    
    
}
// Make the API request:
var url = "https://api.forecast.io/forecast/f04bebef67361500be90302f1055ac9f/0.233,1.566,"+parseInt(day.getTime()/1000)+"?callback=this.Response";  //Callback function to get weather stuff
var script = document.createElement('script');
script.src = url;
document.body.appendChild(script);  //Append this to HTML

drawer = function()
{
    output = document.getElementById("output");

    var outputText = document.createElement('p');
    
    var paragraph = document.createTextNode(maxTemp);  //Print out, for testing atm
    
    
    
    output.appendChild(outputText);  //Append to HTML
    outputText.appendChild(paragraph);
}
}
