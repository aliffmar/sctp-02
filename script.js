document.addEventListener('DOMContentLoaded', function() {
    const movieForm = document.getElementById('movieForm');
    const movieList = document.getElementById('movieList');

    function renderMovies() {
        movieList.innerHTML = '';
        const movies = dataModule.getAllMovies();
        movies.forEach((movie, index) => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('col-md-4', 'movieCard');
            movieCard.innerHTML = `
                <h5>${movie.title}</h5>
                <p>Genre: ${movie.genre}</p>
                <p>User Rating: ${movie.userRating}</p>
                <p>Rotten Tomatoes Rating: ${movie.rottenTomatoesRating}</p>
                <button type="button" class="btn btn-warning" onclick="editMovie(${index})">Edit</button>
                <button type="button" class="btn btn-danger" onclick="deleteMovie(${index})">Delete</button>
            `;
            movieList.appendChild(movieCard);
        });
    }

    function addMovie(title, genre, userRating, rottenTomatoesRating) {
        const success = dataModule.addMovie(title, genre, userRating, rottenTomatoesRating);
        if (success) {
            renderMovies();
            return true;
        }
        return false;
    }

    function editMovie(index) {
        const newTitle = prompt('Enter new title:');
        const newGenre = prompt('Enter new genre:');
        const newUserRating = prompt('Enter new user rating (1-5):');
        const newRottenTomatoesRating = prompt('Enter new Rotten Tomatoes rating (1-100):');
        if (newTitle !== null && newGenre !== null && newUserRating !== null && newRottenTomatoesRating !== null && newUserRating >= 1 && newUserRating <= 5 && newRottenTomatoesRating >= 1 && newRottenTomatoesRating <= 100) {
            const success = dataModule.editMovie(index, newTitle, newGenre, newUserRating, newRottenTomatoesRating);
            if (success) {
                renderMovies();
                return true;
            }
        }
        return false;
    }

    function deleteMovie(index) {
        const success = dataModule.deleteMovie(index);
        if (success) {
            renderMovies();
            return true;
        }
        return false;
    }

    movieForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const genre = document.getElementById('genre').value; // Added genre
        const userRating = document.getElementById('userRating').value;
        const rottenTomatoesRating = document.getElementById('rottenTomatoesRating').value;
        if (title && genre && userRating >= 1 && userRating <= 5 && rottenTomatoesRating >= 1 && rottenTomatoesRating <= 100) {
            addMovie(title, genre, userRating, rottenTomatoesRating);
            movieForm.reset();
        } else {
            alert('Please enter valid title, genre, user rating (1-5), and Rotten Tomatoes rating (1-100).');
        }
    
    });

    window.editMovie = editMovie;
    window.deleteMovie = deleteMovie;

    renderMovies(); // Render movies when the page loads.
});
