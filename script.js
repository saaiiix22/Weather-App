

const key = "29a7e26d769da8c73dcd08e17ab3973f"
const url =  "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const search = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")

async function check(city){
    const response = await fetch(url + city +`&appid=${key}`)
    const data = await  response.json()

    console.log(data);

    document.querySelector(".cityName").innerHTML = data.name 
    document.querySelector(".tempText").innerHTML = Math.round(data.main.temp ) + "°C"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".windSp").innerHTML = data.wind.speed + "km/h"


    // if()

}

searchBtn.addEventListener("click",(e)=>{
    check(search.value)
})
