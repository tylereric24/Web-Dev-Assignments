// 1. Create a string array of favorite movies and display the second movie.
var favoriteMovies = ["The Departed", "Blade Runner 2049", "The Dark Knight", "Pulp Fiction", "Nacho Libre"];
console.log(favoriteMovies[1]);

// 2. Declare an array using the constructor method and display the first movie.
var movies = new Array(5);
movies[0] = "Inception";
movies[1] = "Fight Club";
movies[2] = "Drive";
movies[3] = "The Lord of the Rings";
movies[4] = "Interstellar";
console.log(movies[0]);

// 3. Add a new movie to the 3rd position and display the array length.
movies.splice(2, 0, "Gladiator");
console.log(movies.length);

// 4. Declare an array using literal notation and remove the first movie.
var otherMovies = ["Fury", "Reservoir Dogs", "Inglourious Basterds", "The Silence of the Lambs", "Full Metal Jacket"];
delete otherMovies[0];
console.log(otherMovies);

// 5. Declare an array and iterate through it using a for/in loop.
var moreMovies = ["Braveheart", "The Gray Man", "Shutter Island", "The Unbearable Weight of Massive Talent", "Se7en", "Bullet Train", "Inception"];
for (var index in moreMovies) {
    console.log(moreMovies[index]);
}

// 6. Iterate through the array using a for/of loop.
for (var movie of moreMovies) {
    console.log(movie);
}

// 7. Iterate through the array using a for/of loop and display movies in sorted view.
for (var movie of moreMovies.sort()) {
    console.log(movie);
}

// 8. Create and display arrays of liked and disliked movies.
var leastFavMovies = ["The Last Airbender", "The Emoji Movie", "Transformers: Revenge of the Fallen"];
console.log("Movies I like:\n");
for (var movie of moreMovies) {
    console.log(movie);
}
console.log("\nMovies I regret watching:\n");
for (var movie of leastFavMovies) {
    console.log(movie);
}

// 9. Merge arrays using concat() method and display reverse sorted list.
var mergedMovies = moreMovies.concat(leastFavMovies);
console.log(mergedMovies.sort().reverse());

// 10. Display the last item in the array.
console.log(mergedMovies.slice(-1));

// 11. Display the first item in the array.
console.log(mergedMovies.slice(0, 1));

// 12. Programmatically manipulate arrays.
var dislikedIndices = [mergedMovies.indexOf("The Last Airbender"), mergedMovies.indexOf("The Emoji Movie"), mergedMovies.indexOf("Transformers: Revenge of the Fallen")];
var likedMovies = ["Oldboy", "Inglourious Basterds", "Ford v Ferrari"];
for (var index of dislikedIndices) {
    mergedMovies.splice(index, 1, likedMovies.shift());
}
console.log(mergedMovies);

// 13. Multi-dimensional array containing movie names and rankings.
var moviesRanking = [["The Departed", 1], ["Pulp Fiction", 2], ["The Dark Knight", 3], ["Blade Runner 2049", 4], ["Nacho Libre", 5]];
var movieNames = moviesRanking.map(movie => movie[0]);
console.log(movieNames);

// 14. Function to display employee names.
var employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];
function showEmployee(employeeArray) {
    console.log("Employees:\n");
    for (var employee of employeeArray) {
        console.log(employee);
    }
}
showEmployee(employees);

// 15. Function to filter false, null, 0, and blank values from an array.
function filterValues(array) {
    return array.filter(value => value);
}
console.log(filterValues([58, '', 'abcd', true, null, false, 0]));

// 16. Function to get a random item from an array.
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}
console.log(getRandomItem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 17. Function to get the largest number from a numeric array.
function getLargestNumber(array) {
    return Math.max(...array);
}
console.log(getLargestNumber([10, 20, 30, 40, 50]));
