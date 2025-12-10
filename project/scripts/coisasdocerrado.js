document.addEventListener("DOMContentLoaded", () => {
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById("currentYear");
    if (yearElement) {
        yearElement.textContent = currentYear;
    }

    const lastModified = document.lastModified;
    const modifiedElement = document.getElementById("lastModified");

    if (modifiedElement) {
        modifiedElement.textContent = `Last Modified: ${lastModified}`;
    }

    function calculateWindChill(tempC, speed) {
        return 13.12 + (0.6215 * tempC) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * tempC * Math.pow(speed, 0.16));
    }

    let tempC = 23;
    let speed = 8.5;
    if (tempC <= 10 && speed > 4.8) {
    document.getElementById("wcf").innerHTML = `${calculateWindChill(tempC, speed).toFixed(1)} °C`;
    } else {
        document.getElementById("wcf").innerHTML = "N/A";
    }
});
