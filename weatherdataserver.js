(function() {
	/*Server gets city from input obj passed from client script
	Then server executes REST message
	Server puts response body into data obj and is passed back to client
	Then that stuff is shown through angular
	Temp, humidity, city, wind
	Separate functions for conversion of temp and wind are in client, to avoid unnecessary server calls
	Images for the weather are from image table in server with same names as one of the items in the weather object
	Passed to client to display with angular directives.
	Edge cases are captured for incorrect place names and to avoid having unnecessary elements pop up 
	*/
	if (input) {
		//avoid the hard code by creating a request message, dynamically add the city parameter
	//data.endpoint = data.url + encodeURIComponent(input.city) + data.api;
		var request = new sn_ws.RESTMessageV2('Weather Data', 'Get Weather');
		//request.setEndpoint(data.endpoint);
	//	request.setHttpMethod('GET');
		request.setStringParameter('input', encodeURIComponent(input.city));
		var response;
		try {
			response = request.execute();
		} catch (ex) {
			console.log('Error executing REST request: ' + ex.message);
		}

		var responseBody = response.getBody();
		var httpStatus = response.getStatusCode();

		if (httpStatus == 200) {
			var weather = JSON.parse(responseBody);
			console.log(weather)
			data.weatherData = {
				name: weather.name,
				image: weather.weather[0].main.toLowerCase(),
				temp: {value:weather.main.temp, unit:'°C'},
				humidity: weather.main.humidity,
				wind: {value:weather.wind.speed, unit:'Kph'},
			};

		} else {
			console.log('Error fetching weather data: ' + httpStatus + ' - ' + responseBody);
			data.error = 'Incorrect place name, please reenter!';
			data.weatherData = null;

		}
	}
	


})();
