// Code for the View Location page.

// This is sample code to demonstrate navigation.
// You need not use it for final app.

var longitude = -37.8141;
var latitude = 144.9631;

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

var output = document.getElementById("output");
var outputText = document.createElement('p');

var image = document.getElementById('icon');
image.style.top = "250px";
image.style.left = "20px";
image.style.backgroundPosition = "200px 900000px";



document.body.appendChild(image);


document.getElementById("daySlider").addEventListener("input", slideChange);  //When slider is moved, recheck day and re-evalute
function slideChange() {
    relativeDay = document.getElementById("daySlider").value; //Change value as relative day : 0 = current day, -7 = 1 week ago
    console.log(relativeDay)
}

document.getElementById("daySlider").addEventListener("mouseup",change)
function change(){
    relativeDay = document.getElementById("daySlider").value;
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
    icon = weather.currently.icon;
    
    drawer();
    
    
}
// Make the API request:
var url = "https://api.forecast.io/forecast/f04bebef67361500be90302f1055ac9f/"+longitude+","+latitude+","+parseInt(day.getTime()/1000)+"?callback=this.Response";  //Callback function to get weather stuff
var script = document.createElement('script');
script.src = url;
document.body.appendChild(script);  //Append this to HTML

drawer = function()
{
    results = "Date:" + date + "<br />" + "Summary:" + summary + "<br />" + "Max Temp:" + maxTemp + "; Min Temp:" + minTemp + "; Current Temp" + currentTemp + "<br />" + "Huditiy:" + humidity + "%<br />" + "wind:"+ wind + " km/h"; 
    outputText.innerHTML = results;//Print out, for testing atm
    
    var images = {"clear-day":"images/clear-day.png","partly-cloudy-day":"images/partly-cloudy-day.png","cloudy":"images/cloudy.png","rain":"images/rain.png","fog":"images/fog.png"}
    image.src = images[icon];
    
    
    
    output.appendChild(outputText);  //Append to HTML
}
}
