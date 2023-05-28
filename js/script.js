const api = {
    base_url: "https://api.openweathermap.org/data/2.5/",
    lang: "pt_br",
    units: "metric",
    key: "3d4d8bf48b31fa547e29bb33ca994ff2"
}

// geolocalização ..
if('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {

        const url_1 = `${api.base_url}weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`

        fetch(url_1).then(response => {
            return response.json()
        }).then((data) => {
            $('#local').html(data.name)
            $('#país').html(data.sys.country)
            $('#temperatura').html(`${Math.round(data.main.temp)}°ᶜ`)

            const iconName = data.weather[0].icon;
            $('#imagem_temp').attr('src', `imagens/icons_temp/${iconName}.png`)
            
            const hm = data.weather[0].icon;
            $('#slakk').attr('src', `imagens/wallpapers/${hm}.jpg`)
          

            $('#tempMax').html(`${Math.round(data.main.temp_max)}°C`)
            $('#tempMin').html(`${Math.round(data.main.temp_min)}°C`)
            $('#descricao').html(data.weather[0].description)
            $('#humidade').html(`${Math.round(data.main.humidity)}%`)
            $('#sensacao').html(`${Math.round(data.main.feels_like)}°C`)          
        })
    })
} else {
    alert('Opss... Localização não encontrada!')
}


// search ..
$('#buscar').on('click', e => {

    const cidade = $('#cidade').val()
    const url_2 = `${api.base_url}weather?q=${cidade}&lang=${api.lang}&units=${api.units}&appid=${api.key}`
    
    fetch(url_2).then(response => {
        return response.json()
    }).then((data) => {
        $('#local').html(data.name)
        $('#país').html(data.sys.country)
        $('#temperatura').html(`${Math.round(data.main.temp)}°ᶜ`)
        
        const iconName = data.weather[0].icon;
        $('#imagem_temp').attr('src', `imagens/icons_temp/${iconName}.png`)
        
        const hm = data.weather[0].icon;
        $('#slakk').attr('src', `imagens/wallpapers/${hm}.jpg`)
          
        
          
        $('#tempMax').html(`${Math.round(data.main.temp_max)}°C`)
        $('#tempMin').html(`${Math.round(data.main.temp_min)}°C`)
        $('#descricao').html(data.weather[0].description)
        $('#humidade').html(`${Math.round(data.main.humidity)}%`)
        $('#sensacao').html(`${Math.round(data.main.feels_like)}°C`)
    }).catch((error) => {
        alert('Opss... Localização não encontrada!')
    })
})