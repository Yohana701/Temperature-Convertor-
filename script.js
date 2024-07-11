function convertTemperature() {
    // Get input values
    let temperature = parseFloat(document.getElementById('temperature').value);
    let conversionType = document.getElementById('conversionType').value;

    // Perform conversion based on selected type
    let result;
    if (conversionType === 'celsiusToFahrenheit') {
        result = (temperature * 9/5) + 32;
        document.getElementById('result').innerText = `${temperature}°C = ${result.toFixed(2)}°F`;
    } else if (conversionType === 'fahrenheitToCelsius') {
        result = (temperature - 32) * 5/9;
        document.getElementById('result').innerText = `${temperature}°F = ${result.toFixed(2)}°C`;
    } else {
        document.getElementById('result').innerText = 'Invalid conversion type';
    }
}
