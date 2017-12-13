var Geo = {};

if("geolocation" in navigator){
	navigator.geolocation.getCurrentPosition(success, error);
}else{
	console.log("Geolocation not supported or blocked");
}

function error(){
	console.log("We couldn't find you. Try refreshing")
}

function success(position){
	Geo.lat = position.coords.latitude;
	Geo.lng = position.coords.longitude;
console.log(Geo);
	var key = "094e06f500325b06";
    var url = "http://api.wunderground.com/api/" + key + "/forecast/geolookup/conditions/q/" + Geo.lat + "," + Geo.lng + ".json";
	fetch(url).then(function(response){
		if(response.status !==200){
			console.log("Еrror fetching data");
			return;
		}
		response.json().then(function(data){
			console.log(data);
			document.getElementById("logo").src = data.current_observation.image.url;
			document.getElementById("location").innerHTML = data.location.city;
			document.getElementById("temp").innerHTML = data.current_observation.temp_c;
			document.getElementById("wind").innerHTML = data.current_observation.wind_string;
			document.getElementById("high").innerHTML = data.forecast.simpleforecast.forecastday
			// document.getElementById("moment_icon").src = data.current_observation.icon_url;
			// data.forecast.simpleforecast.forecastday;
		});
	}).catch(function(err){
		console.log(err);
	})
}