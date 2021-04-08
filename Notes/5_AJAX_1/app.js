/* Get DOM elements */
var text           = $("#details-text");
var moreDetailsBtn = $("#more-details-btn");
var scdDetailsBtn  = $("#scd-details-btn");

/* AJAX with vanilla JavaScript */
var request = new XMLHttpRequest();
request.onreadystatechange = function(){
  if(request.readyState === 4){    
    if(request.status === 200){
      text.html(request.responseText);
      text.addClass("details");
    }
    else{
      text.html("An error occurred during your request: " +  request.status + " " + request.statusText);
      text.addClass("error");
    }
  }
}

request.open("GET", "data/csumb.txt");

moreDetailsBtn.on("click", function(){
  $(this).hide();
  scdDetailsBtn.removeAttr("hidden");
  request.send();  // NOTE: Must send if using AJAX with vanilla JS
});

/* AJAX with JQuery */
scdDetailsBtn.on("click", function(){
  $("img").attr("src", "data/scd.jpg");
  $(this).hide();
  $.ajax({
    url: "data/scd.txt",
    type: "GET",
    dataType: "text",
    success: function(data) {
      text.html(data);
      text.addClass("details");
    },
    error: function(e) {
      text.html("An error occurred during your request: " +  e.status + " " + e.statusText);
      text.addClass("error");
    }
  });
});

