api.controller = function($scope) {
	var c = this;
	$scope.searchWeather = function(city) {
		c.data.city = city;
		c.data.error = null;
		c.server.update();
	}

	$scope.mphToKph = function(value, unit) {
		if (unit == 'Mph') {
			c.data.weatherData.wind.value = (value * 1.60934).toFixed(2);
			c.data.weatherData.wind.unit = 'Kph';
		}
	}
	$scope.kphToMph = function(value, unit) {
		if (unit == 'Kph') {
			c.data.weatherData.wind.value = (value / 1.60934).toFixed(2);
			c.data.weatherData.wind.unit = 'Mph';
		}
	}

	$scope.fahToCel = function(value, unit) {
		if (unit == '°F') {
			c.data.weatherData.temp.value = ((value - 32) * 5/9).toFixed(2);
			c.data.weatherData.temp.unit = '°C';
		}
	}
	$scope.celToFah = function(value, unit) {
		if (unit == '°C') {
			c.data.weatherData.temp.value = ((value * 9/5) + 32).toFixed(2);
			c.data.weatherData.temp.unit = '°F';
		}
	}
};
