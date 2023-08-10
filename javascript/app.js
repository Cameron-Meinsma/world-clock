setInterval(function () {
    function cityDateTime(timezone) {
        let cityMoment = moment();

        let city = document.querySelector(
            `.city#${timezone.replace("/", "-")}`
        );
        let date = city.querySelector(".date");
        let time = city.querySelector(".time");

        date.innerHTML = cityMoment.tz(timezone).format("ddd, MMMM Do, YYYY");
        time.innerHTML = cityMoment.format("HH:mm:ss");
    }
    cityDateTime("America/Los_Angeles");
    cityDateTime("Europe/Amsterdam");
}, 1000);
