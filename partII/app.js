let bookRetrieve = function(){
	$("#info").empty();
	var isbn = $("#isbn").val();
	var bibkeys = "ISBN:" + isbn;
	var authors = "";
	var publishers = "";
	$.ajax({
		url: "https://openlibrary.org/api/books",
		type: "GET",
		dataType: "json",
		data:{
			"format": "json",
			"bibkeys": bibkeys,
			"jscmd": "data"
		},
		success: function(data){
			var data = data[bibkeys];
			data.authors.forEach(function(author){
				authors += author.name + ", ";
			});
			authors = authors.substr(0, authors.length-2);
			data.publishers.forEach(function(author){
				publishers += publishers.name + ", ";
			});
			publishers = publishers.substr(0, publishers.length-2);
			$("#cover").attr("src",data.cover.large);
			$("#cover").addClass("cover");
			var info = 
				"Title : " + data.title + "<br/>" +
				"Author: " + authors + "<br/>" +
				"Publish: " + data.publish_date + "<br/>" +
				"Publisher: " + publishers + "<br/>" +
				"ISBN: " + isbn + "<br/>" +
				"Pages: " + data.number_of_pages + "<br/>"
			$("#info").append(info);
			$("#info").addClass("info");
		},
		error: function(err){
			console.log(err);
		}
	});
}