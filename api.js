
const search = () => {
    const searchBtn = document.getElementById('search-btn');

    const searchValue = document.getElementById('search').value;
    const name = searchValue;
    const apiKey = 'Enter You Api Key'; // Replace with your actual API key

    const cityNameElement = document.getElementById('city-name');
    const cityPopulationElement = document.getElementById('city-population');
    const cityCountryElement = document.getElementById('city-country');
    const is_capital = document.getElementById('is-capital');

    fetch(`https://api.api-ninjas.com/v1/city?name=${name}`, {
        method: 'GET',
        headers: {
            'X-Api-Key': apiKey,
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            return response.json();
        })
        .then(result => {
            // Assuming 'result' is an array with a single object inside
            const cityData = result[0];
            const cityName = cityData.name;
            const cityPopulation = cityData.population;
            const cityCountry = cityData.country;
            const is_capital_Data = cityData.is_capital;

            cityNameElement.textContent = `City Name: ${cityName}`;
            cityPopulationElement.textContent = `Population: ${cityPopulation}`;
            cityCountryElement.textContent = `Country: ${cityCountry}`;
            is_capital.textContent = `Capital: ${is_capital_Data}`
            console.log(result)
        })
        .catch(error => {
            console.error('Error: ', error);
        });
}

