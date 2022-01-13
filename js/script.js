$('#buscar').on('click', e => {
  
    const cidade = $('#cidade').val()

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=3d4d8bf48b31fa547e29bb33ca994ff2&lang=pt_br`
    
    fetch(url).then(response => {
        return response.json()
    }).then(data => {
        $('#local').html(data.name)
        $('#temperatura').html(`${Math.round(data.main.temp)}°ᶜ`)
        $('#tempMax').html(`${Math.round(data.main.temp_max)}°C`)
        $('#tempMin').html(`${Math.round(data.main.temp_min)}°C`)
        $('#descricao').html(data.weather[0].description)
        $('#humidade').html(`${Math.round(data.main.humidity)}%`)
        $('#sensacao').html(`${Math.round(data.main.feels_like)}°C`)
    })

})