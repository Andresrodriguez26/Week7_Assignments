const getData = async (zipCode) => {
    // await will wait for the axios promise to fufill before setting response variable and moving on
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${zipCode},us&appid=c22b23cf74988c5f793dff5ac4b7a694&units=imperial`)
    console.log(response)
    console.log(response.data)
    return response.data
}

// function to create and insert html for each ranger object from the api call
const createList = (name, feels_like, humidity, temp, temp_max, temp_min) => {
    const html = `<div id=${name} class="card mt-3 mb-3 text-center" style="width: 20rem;">
    <ul class="list-group-item list-group-flush" style="color: darkblue;"> Your City Name: ${name}
    <li class="list-group-item">Feels Like: ${feels_like}°F</li>
    <li class="list-group-item">Humidity: ${humidity}</li>
    <li class="list-group-item">Current Temp: ${temp}°F</li>
    <li class="list-group-item">Temp Max: ${temp_max}°F</li>
    <li class="list-group-item">Temp Min: ${temp_min}°F</li>

    </ul>
    </div>`
    // selecting ranger-list class from section in html
    document.querySelector('.weather-list').insertAdjacentHTML('beforeend', html)
}

const loadData = async (event) => {
    // waits for the getData function to return an output
    // then we set that output to a rangers variable
    event.preventDefault()
    let queryZipCode = document.querySelector("#zip-code").value
    const weather_ = await getData(queryZipCode)
    console.log(queryZipCode)
  

    createList(weather_.name, weather_.main.feels_like, weather_.main.humidity, weather_.main.temp, weather_.main.temp_max, weather_.main.temp_min)
}

const clearData = () => {
    document.querySelector('.weather-list').innerHTML = '';
}


// data
// : 
// base
// : 
// "stations"
// clouds
// : 
// {all: 100}
// cod
// : 
// 200
// coord
// : 
// {lon: -81.343, lat: 28.4317}
// dt
// : 
// 1700687532
// id
// : 
// 0
// main
// : 
// feels_like
// : 
// 74.53
// humidity
// : 
// 90
// pressure
// : 
// 1012
// temp
// : 
// 73.27
// temp_max
// : 
// 76.03
// temp_min
// : 
// 71.06
// [[Prototype]]
// : 
// Object
// name
// : 
// "Orlando"
// rain
// : 
// {1h: 1.54}
// sys
// : 
// {type: 1, id: 4852, country: 'US', sunrise: 1700653996, sunset: 1700692199}
// timezone
// : 
// -18000
// visibility
// : 
// 4828
// weather
// : 
// (2) [{…}, {…}]
// wind
// : 
// {speed: 12.66, deg: 240, gust: 23.02}
// [[Prototype]]
// : 
// Object
// headers
// : 
// n {content-length: '556', content-type: 'application/json; charset=utf-8'}
// request
// : 
// XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
// status
// : 
// 200
// statusText
// : 
// "OK"