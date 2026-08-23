const apiKey = "7e8dd8c0526ea2c99f3967ea24d9ebe0";

document.getElementById("buscar").addEventListener("click", async function() {
    const cidade = document.getElementById("cidade").value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`;

    try {
        const resposta = await fetch(url);
        const dados = await resposta.json();

        document.getElementById("resultado").innerHTML = `
            <h2>${dados.name}</h2>
            <p>🌡️ Temperatura: ${dados.main.temp} °C</p>
            <p>☁️ Clima: ${dados.weather[0].description}</p>
            <p>💨 Vento: ${dados.wind.speed} m/s</p>
        `;
    } catch (erro) {
        document.getElementById("resultado").innerHTML = "Erro ao buscar clima";
    }
});