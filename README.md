# Weather-Data-Widget
This widget that displays weather data uses a REST API from OpenWeather and JSON to display info for cities or places. This is a Servicenow widget meant to be displayed in Service Portal, so it has AngularJS directives in the HTML script, a client side script, and a server side script that calls an outbound REST Message. There are two separate xml files, one for the actual code for the widget, and one that holds the REST API record for the endpoint for OpenWeather (wanted to avoid hardcoding API key, etc). Both need to be uploaded to ServiceNow for this widget to work properly and actually pull data. 

In the REST message you can leave as is or use your own API key, look at openweather docs.

<img width="1464" alt="Weather Data Widget" src="https://github.com/sarahslikk/Weather-Data-Widget/assets/148659685/76dacd44-c3ad-4ea2-8913-395e9b4767b3">


Weather Data widget available in Service Portal in Servicenow

Upload the XML file to your instance to replicate this widget (it is a global widget), or view the individual files for the HTML/AngularJS, Javascript, and CSS.

