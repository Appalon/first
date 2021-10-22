let API='http://api.openweathermap.org/data/2.5/weather?q='
let HALF ='&appid=b067377a72c98ae6963cdae2e35408d9'
let output = document.getElementById('output')


const search =(el)=>{
    el.preventDefault()

    let input = document.getElementById('input')
    let url = API+input.value+HALF
    getWeather(url)
    input.value=''
}

const getWeather = async(url)=>{
    let req = await fetch (url );
    let res = await req.json()
    // console.log(res)
    // output.innerHTML=''
    renderWeather(res)
}


const renderWeather =(obj)=>{
    let name = document.createElement('p')
    let clouds = document.createElement('p')
    let country = document.createElement('p')
    let temp = document.createElement('p')
    let tempfeel = document.createElement('p')
    let wind = document.createElement('p')
    

    name.innerHTML=obj.name
    clouds.innerHTML=obj.weather[0].main
    country.innerHTML=obj.sys.country
    temp.innerHTML=(obj.main.temp-273.15).toFixed(1)
    tempfeel.innerHTML=(obj.main.feels_like-273.15).toFixed(1)
    wind.innerHTML =(obj.wind.speed).toFixed(1)

    output.append(country,name,temp, tempfeel,clouds,wind)
}