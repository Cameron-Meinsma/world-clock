function cityDateTime(timezone) {
    let cityMoment = moment();

    let city = document.querySelector(`.city#${timezone.replace("/", "-")}`);
    let date = city.querySelector(".date");
    let time = city.querySelector(".time");

    date.innerHTML = cityMoment.tz(timezone).format("ddd, MMMM Do, YYYY");
    time.innerHTML = cityMoment.format("HH:mm:ss");
}

function selectedCity(event) {
    setInterval(() => {
        let cityTimezone = event.target.value;
        if (cityTimezone === "current") {
            cityTimezone = moment.tz.guess();
        }

        cityTime = moment().tz(cityTimezone);
        let city = cityTimezone.replace("_", " ").split("/")[1];
        let citiesLmnt = document.querySelector(".cities");

        citiesLmnt.innerHTML = `
        <div class="city">
            <div>
                <h2>${city}</h2>
                <div class="date">${cityTime.format("ddd, MMMM Do, YYYY")}</div>
            </div>
            <div class="time">${cityTime.format("HH:mm:ss")}</div>
        </div>
        <a href="/" class="home-link">Home</a>
        `;
    }, 1000);
}

setInterval(() => {
    cityDateTime("America/Los_Angeles");
    cityDateTime("Europe/Amsterdam");
    cityDateTime("Universal");
}, 1000);

let citySelect = document.querySelector("#city-select");
citySelect.addEventListener("change", selectedCity);
