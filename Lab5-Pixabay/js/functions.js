//predefined array
var keyword = $("#keyword");
var ori = $("#ori");

// var randomValue = ['turtle', 'dog',  'shoes', 'flower'];
// randomValue = _.shuffle(randomValue);

//does four random images
keyword = $("#keyword").val();
ori = $("#ori").val();

console.log(keyword);
console.log(ori);
$.ajax({
    method:"GET",
    url: "https://pixabay.com/api/?key=5589438-47a0bca778bf23fc2e8c5bf3e&q=" + keyword + "&orientation=" + ori + "&image_type=photo",
    dataType: "json",
    // data: {
    //     "random": $("#random").randomValue()
    // },
    success: function(data){
        $("#full").html("");
        console.log(data);
        for(var i = 0; i < 4; i++){
            $("#full").append("<h3>likes: " + data["hits"][i]["likes"] + "</h3>" + "<img src=\"" + data["hits"][i]["webformatURL"] + "\">");
        }
    },
    error: function(error){
        console.log(error);
    }
});//ajax

//searches for an image when keyword is inputted
$("#button").on("click", function(){
        keyword = $("#keyword").val();
        ori = $("#ori").val();
        
        console.log(keyword);
        console.log(ori);
        $.ajax({
        method:"GET",
        url: "https://pixabay.com/api/?key=5589438-47a0bca778bf23fc2e8c5bf3e&q=" + keyword + "&orientation=" + ori + "&image_type=photo",
        dataType: "json",
        data: {
            
        },
        success: function(data){
            $("#full").html("");
            console.log(data);
            for(var i = 0; i < 4; i++){
                $("#full").append("<h3>likes: " + data["hits"][i]["likes"] + "</h3>" + "<img src=\"" + data["hits"][i]["webformatURL"] + "\">");
            }
            
        },
        error: function(error){
            console.log(error);
        }
    });//ajax
});

