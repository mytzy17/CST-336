let getEarthquakes = function(){
	$.ajax({
		url: "http://earthquake.usgs.gov/fdsnws/event/1/query",
		type: "GET",
		dataType: "json",
		data: {
			"format"   : "geojson",
            "starttime": $("#starttime").val(),
            "endtime"  : $("#endtime").val(),
            "latitude" : $("#latitude").val(),
            "longitude": $("#longitude").val(),
            "maxradius": $("#maxradius").val(),
            "minmag"   : $("#minmag").val()
		},
		success: function(data) {
			$("#results").html("<h4>Results</h4><br/>");
			data.features.forEach(function(feature){
				$("#results").append(feature.properties.mag + " - " + feature.properties.place + "<br/>");
			});
			$("#results").addClass("details");
		},
    	error: function(error) {
    		console.log(error);
    	}
	});
}