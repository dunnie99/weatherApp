let apiKey = `a0848bcbd86e7a0ab92ab4abd17d32e9`;
let form = document.querySelector("form");
let input = document.querySelector("#input")
let msg = document.getElementsByClassName(".msg")
let weather = document.querySelector("#weather")

let getData = async (inputVal) => {
   weather.innerHTML = `Awaiting...`
   let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
   let response = await fetch(url);
   let data = await response.json(); 
   return showData(data);
}

let showData = (data) => {
   if (data.cod == "404"){
      weather.innerHTML = "Error! City not found!"
   }
   weather.innerHTML = `
         <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt=""/>
         <h2>${data.main.temp} °C</h2><br>
         <h4>${data.weather[0].description} </h4>
   `
}


 form.addEventListener("submit", e => {
   getData(input.value)
    e.preventDefault(); 
    
 });

 
 
