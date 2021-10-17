fetch("./data/films.json").then(function(response) {
		return response.json();
}).then(function(json) {
		displayData(json)
});


const displayData = function(data){
	console.log(data)
} //end of the function, don't remove this


// Q1) Open index.html in a browser. Open the console, note how the films data has been loaded from a JSON file.
// a) Modify the code so that it outputs the title of each film.

// const displayData = function(data){
// 	data.forEach(function(film){
// 		console.log(film.title);
// 	})
// }

// b) Modify the code so that the full details of the second film (Winter's Bone) are displayed in the console.

// const displayData = function(data){
// 	console.log(`The film ${data[1].title} is ${data[1].duration} minutes in duration and was made in ${data[1].year}.`)
// }

// c) Open films.json. Have a good look at the structure of the file. Add the details for another film. Modify the code so that the new film's details are displayed in the console.

// Q2) In a text-editor open films-object.json. This contains similar data but structured in a slightly different way.
// a) Modify the fetch code so that it loads the data in films-object.json instead. Modify the code in the displayData() to output the list of film titles to the console.

// const displayData = function(data){
// 	const films = data.results
// 	films.forEach(function(film){
// 		console.log(film.title);
// 	})
// }

// b) Modify the code so that the genres of Winter's Bone are displayed in the console.

// const displayData = function(data){
// 	const films = data.results
// 	const wintersBone = films[1];
// 	wintersBone.genres.forEach(function(genre){
// 			console.log(genre);
// 		})
// }

// b) Have a good look at the structure of films-object.json. Add the details for another film. Modify the code so that the new film's details are displayed in the console.

// Q3) Next we'll use an API instead of hard coded data

// a) Open a new tab in a web browser enter https://www.swapi.tech/api/species. See the response you get from the SWAPI site.

// b) Modify your code from the previous question so that you load data from the Star Wars API using this URL. To start with use a simple console.log to print the entire response. Then think about about how you can list just the species names.

// const displayData = function(data){
// 	const results = data.results;
// 	results.forEach(function(species){
// 		console.log(species.name);
// 	})
// }

// c) Have a look at https://www.swapi.tech/docs and modify your code to make a request for a single species. Display some of the species details

// const displayData = function(data){
// 	const props = data.result.properties
// 	console.log(`${props.classification}s live for ${props.average_lifespan}.`)
// }

// Q4) Now think about how you can make the code more re-usable.
//a) Create a new function, call it loadData(). Put the fetch() code in this function. The loadData() function should accept two arguments, a URL to request data from and a callback that will be executed when the data is returned. Have a look on the notes (in this repository) for an example.
//b) Make multiple calls to your loadData() function for the different examples we have looked at today e.g.

// function loadData(url,callback)
// {
// 	fetch(url).then(function(response) {
// 		return response.json();
// 	}).then(function(json) {
// 		callback(json)
// 	});
// } //end of doAjax
//
// const showSpecies = function(data){
// 	console.log(data)
// 	const species = data.results;
// 	species.forEach(function(singleSpecies){
// 			console.log(singleSpecies.name);
// 	})
// }
//
// const showDetails = function(data){
// 	console.log(data)
// 	const species = data.result.properties;
// 	console.log(`Name: ${species.name}`);
// 	console.log(`Lifespan: ${species.average_lifespan}`);
// 	console.log(`Language: ${species.language}`);
// }
//
// const displayFilms = function(data){
// 	data.forEach(function(film){
// 		console.log(film.title);
// 	})
// }
//
// loadData("https://www.swapi.tech/api/species",showSpecies);
// loadData("https://www.swapi.tech/api/species/3",showDetails);
// loadData("./data/films.json",displayFilms);

// Q5) In completing the above exercises we have skipped over explaining the fetch() API and promises in any detail. If you are thinking of doing more JavaScript in the future you should be familiar with asynchronous programming, callbacks, promises and how the fetch() API works. Do some research into these topics so that you are familiar with these JavaScript concepts. The notes and the lecture slides from this week have some links to get you started. 
