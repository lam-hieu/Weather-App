var search = document.querySelector('.input-search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var value = document.querySelector('.value')
var time = document.querySelector('.time')
var shortDesc = document.querySelector('.short-desc')
var visibility = document.querySelector('.visibility span')
var wind = document.querySelector('.wind span')
var cloud = document.querySelector('.cloud span')
var content = document.querySelector('.content')
var body = document.querySelector('body')


async function changeWeatherUI(capitalSearch) {
    // let capitalSearch = search.value.trim()
    let apiURL =
        `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`

    let data = await fetch(apiURL).then((response) => response.json())
    if (data.cod == 200) {
        content.classList.remove('hide')
        city.innerText = data.name + ','
        country.innerText = data.sys.country
        time.innerText = new Date().toLocaleString('vi')
        visibility.innerText = data.visibility + '(m)'
        wind.innerText = data.wind.speed + '(m/s)'
        cloud.innerText = data.main.humidity + '(%)'

        shortDesc.innerText = data.weather[0].main
        const tempt = Math.round(data.main.temp)
        value.innerText = tempt

        if (tempt <= 25) {
            body.setAttribute('class', 'cool')
        }

        if (tempt <= 22) {
            body.setAttribute('class', 'warm')
        }

        if (tempt <= 18) {
            body.setAttribute('class', 'cold')
        }

        if (tempt >= 25) {
            body.setAttribute('class', 'hot')
        }

    } else {
        content.classList.add('hide')
    }
}


search.addEventListener("keypress", function (e) {

    if (e.keyCode == 13) {
        let capitalSearch = search.value.trim()
        changeWeatherUI(capitalSearch)
    }
})

changeWeatherUI('Ho Chi Minh')