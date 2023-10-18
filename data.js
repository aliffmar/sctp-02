const dataModule = (function() {
    let movies = [];
  
    function getAllMovies() {
      return movies;
    }
  
    function addMovie(title, genre, userRating, rottenTomatoesRating) {
      const movie = { title, genre, userRating, rottenTomatoesRating };
      movies.push(movie);
      return true;
    }
  
    function editMovie(index, newTitle, newGenre, newUserRating, newRottenTomatoesRating) {
      if (index >= 0 && index < movies.length) {
        movies[index].title = newTitle;
        movies[index].genre = newGenre; // Add genre to the movie object.
        movies[index].userRating = newUserRating;
        movies[index].rottenTomatoesRating = newRottenTomatoesRating;
        return true;
      }
      return false;
    }
  
    function deleteMovie(index) {
      if (index >= 0 && index < movies.length) {
        movies.splice(index, 1);
        return true;
      }
      return false;
    }
  
    return {
      getAllMovies,
      addMovie,
      editMovie,
      deleteMovie
    };
  })();
  