/* Require external APIs and start our application instance */
var express = require('express');
var mysql = require('mysql');
var app = express();

/* Configure our server to read public folder and ejs files */
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.static('css'));

/* Configure MySQL DBMS */
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'mytzy',
    password: 'mytzy',
    database: 'quotes_db'
});
connection.connect();

// /* The handler for the DEFAULT route */
// app.get('/', function(req, res){
//     res.render('home');
// });

// /* The handler for the /author route */
// app.get('/author', function(req, res){
//     var stmt = 'select * from l9_author where firstName=\'' 
//                 + req.query.firstname + '\' and lastName=\'' 
//                 + req.query.lastname + '\';'
// 	connection.query(stmt, function(error, found){
// 	    var author = null;
// 	    if(error) throw error;
// 	    if(found.length){
// 	        author = found[0];
// 	        // Convert the Date type into the String type
// 	        author.dob = author.dob.toString().split(' ').slice(0,4).join(' ');
// 	        author.dod = author.dod.toString().split(' ').slice(0,4).join(' ');
// 	    }
// 	    res.render('author', {author: author});
// 	});
// });

// /* The handler for the /author/name/id route */
// app.get('/author/:aid', function(req, res){
//     var stmt = 'select quote, firstName, lastName ' +
//               'from l9_quotes, l9_author ' +
//               'where l9_quotes.authorId=l9_author.authorId ' + 
//               'and l9_quotes.authorId=' + req.params.aid + ';'
//     connection.query(stmt, function(error, results){
//         if(error) throw error;
//         var name = results[0].firstName + ' ' + results[0].lastName;
//         res.render('quotes', {name: name, quotes: results});      
//     });
// });

app.get("/", function(req, res){
	var stmtCategory = "select distinct(l9_quotes.category) from l9_quotes;";
	var stmtNames = "select * from l9_author"
	
	var fullnames = [];
	var authors = null
	connection.query(stmtNames,function(error,found){
    	if(error) throw error;
		if(found.length){
			found.forEach(function(f){
				fullnames.push(f.firstName + " " + f.lastName);
			})
			authors = found;			
		}
    });
    //the categories there is and not found
	var categories = [];
	connection.query(stmtCategory,function(error,found){
    	if(error) throw error;
		if(found.length){
			found.forEach(function(f){
				categories.push(f.category);
			})
		}
	    res.render('home', {categories:categories,fullnames:fullnames,authors:authors});
    });
});

app.get("/author", function(req, res) {
    //variable to use throughout the code
    var name = req.query.name;
    
    var first = name.split(" ").splice(0,1);
    var last = name.split(" ").splice(1,2);
    
    var stmt = "select * from l9_quotes natural join l9_author "+
    				"where l9_author.firstName = '" + first + "'" +
    				"and l9_author.lastName='"+ last + "';" ; 
    				
    //grabs the data of the author
    connection.query(stmt,function(error,found){
    	var authors = null;
    	
    	if(error) throw error;
    	
		if(found.length){
			authors = found; 
		}
		res.render('quotes', {keyword:name, authors:authors});
    });
});

app.get("/author/:authorId", function(req, res){
    //variable to use throughout the code
	var authorIds = req.params.authorId;
	
	var stmt = "select * from l9_author where authorId=" + 
					authorIds + ';';
					
	connection.query(stmt,function(error,found){
		var author = null;
		
		if(error) throw error;
		
		//grabs the data from the database
		if(found.length){
			author = found[0]; 
			author.dob = author.dob.toString().split(" ").splice(0,4).join(" ");
			author.dod = author.dod.toString().split(" ").splice(0,4).join(" ");
		}
		res.render('author', {author:author});
	});
});

app.get("/gender",function(req, res){
    //variable to use throughout the code
	var gender = req.query.gender;
	
	var stmt = 'select * ' +
               'from l9_quotes natural join l9_author ' +
               'where sex=\'' + gender + '\';';
               
    connection.query(stmt, function(error, found){
    	var authors = null;
    	
    	if(error) throw error;
    	
    	//grabs the data that was found
		if(found.length){
			authors = found; 
		}
		//checks whether or not it is a female or male
		if(gender == "F"){
			gender = "Female"
		} 
		else{
			gender = "Male"
		}
		res.render('quotes', {keyword:gender, authors:authors});     
    });
});

app.get("/category", function(req, res) {
	var categ = req.query.category;
    var stat = "select * from l9_quotes natural join l9_author "+
    				"where l9_quotes.category = '" + categ + "';" ; 
    connection.query(stat,function(error,found){
    	var authors = null;
    	
    	if(error) throw error;
    	
			if(found.length){
				authors = found; // this gets us all of the data from the database of the given author
			}
			res.render('quotes', {keyword:categ, authors:authors});
    });
});

app.get("/keyword", function(req, res) {
    var keyword = req.query.keyword;
    var stmt = "select * from l9_quotes natural join l9_author where l9_quotes.quote like '%"
                    + keyword + "%'" ; 
    connection.query(stmt,function(error,found){
        
    	var authors = null;
    	
    	if(error) throw error;
    	
    	//grabs the data that was found in database
		if(found.length){
			authors = found;
		}
		res.render('quotes', {keyword:keyword, authors:authors});
    });
});

/* The handler for undefined routes */
app.get('*', function(req, res){
   res.render('error'); 
});

/* Start the application server */
app.listen(process.env.PORT || 3000, function(){
    console.log('Server has been started');
})