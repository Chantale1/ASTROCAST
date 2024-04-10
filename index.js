function searchWeather(){
    const city= document.getElementById ('city').value ;
    const apiKey ='9ed91719b1ce195594023b184debc185' ;
    const APIURL = 'https://openweathermap.org/';
}
function weatherApi (){
fetch (APIURL)
.then(response => {

    if (!response.ok){
        throw new Error (response.status);
    }
    return response.json();
    })
    .then(data =>{
  //use data from the API to display information on the screen
console.log(data);
    })
.catch(error => {

    console.log('There was an error with your request;',error);
});
}
function displayWeather(data,cityName){
    const weatherInfo = document.getElementById('weather-information');
weatherInfo.innerHTML='';


    const cityName = document.createElement("h2");
    cityName.textContent = `${cityName}`, $;{data['TIMEZONE']};
   weatherInfo.appendChild(cityName);

   const dateTime = document.createElement("p");
   dateTime.textContent=`Date and Time: ${data}`;
   weatherInfo.appendChild(dateTime);

   const temperature = document.createElement("p");
   let tempValue = Math.round (data[`TEMPERATURE`]);
   temperature.textContent=`Temperature : ${tempValue}°C`;
   weatherInfo.appendChild(temperature);

const description = document.createElement("p");
description.textContent=`Description: ${data['DESCRIPTION']}`;
weatherInfo.appendChild(description);

const humidity = document.createElement("p");
humidity.textContent=`Humidity; ${data['HUMIDITY']}%`;
weatherInfo.appendChild(humidity);

function displayAstronomy() {
    //get the UV index from the API
    let uvIndex = (data['UVINDEX']);
    if (uvIndex<3)
    var color = 'green';
else if(uvIndex => 3 && uvIndex <=6)
color = 'yellow'
} 


const asronomyInfo = document.getElementById('astronomy-information');
astronomyInfo.innerHTML="";

const sunrise = document.createElement("p");
sunrise.style.color=color;
sunrise.textContent=`Sunrise ;${data['SUNRISE']}`;
astronomyInfo.appendChild(sunrise);

const sunset = document.createElement("p");
sunset.textContent=`Sunset : ${data['SUNSET']}`;
astronomyInfo.appendChild(sunset);


const moonPhase = document.createElement("p");
moonPhase.textContent=`Moon Phase : ${data['MOONPHASE']}`;
astronomyInfo.appendChild(moonPhase);

}

function displayError(note) {
    const weatherInfo = document.getElementById('weather-information');
    weatherInfo.innerHTML='';

   const error =document.createElement('p');
   error.textContent = note ;
   weatherInfo.appendChild(errorMessage);
    
}
