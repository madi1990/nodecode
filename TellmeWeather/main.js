async function getWeatherData(params) {
    let data = await fetch('https://open-meteo.com/en/pricing');
    return data;
}

let data = getWeatherData()
.then(data => console.log(data))
.catch(err => console.error(err));