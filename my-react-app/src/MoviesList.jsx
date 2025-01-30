import React, { useState } from 'react';

const MoviesList = () => {
    const [movies, setMovies] = useState([
        { title: 'Whiplash', genre: 'Drama, Music', description: 'A young jazz drummer endures brutal training from an unforgiving music instructor in pursuit of greatness', showDetails: false },
        { title: 'Django Unchained', genre: 'Western, Drama, Action', description: 'A freed slave teams up with a bounty hunter to rescue his wife from a brutal plantation owner', showDetails: false },
        { title: 'Interstellar', genre: 'Sci-Fi', description: 'A team of astronauts travels through a wormhole in search of a new habitable planet for humanity', showDetails: false },
        { title: 'Avatar', genre: 'Sci-Fi', description: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.', showDetails: false },
        {title: 'Titanic', genre: 'Romance, Drama', description: 'A young couple from different social classes falls in love aboard the ill-fated Titanic', showDetails: false },
        {title: 'The Lord of the Rings: The Fellowship of the Ring', genre: 'Fantasy, Adventure', description: 'A young hobbit embarks on a dangerous journey to destroy an ancient ring of power', showDetails: false },
        {title: 'The Matrix', genre: 'Sci-Fi', description: ' A hacker discovers that reality is a simulation and joins a rebellion to fight against its controllers', showDetails: false },
        {title: 'The Shawshank Redemption', genre: 'Drama', description: ' A man wrongly convicted of murder forms an unlikely friendship in prison while never losing hope of proving his innocence', showDetails: false },
        {title: 'Fight Club', genre: 'Drama, Thriller', description: 'A discontented office worker and a soap salesman form an underground fight club that spirals out of control', showDetails: false },
        {title: 'Forrest Gump', genre: 'Drama, Romance', description: 'A simple man with a big heart unwittingly influences some of history’s greatest moments', showDetails: false },
        {title: 'Joker', genre: 'Drama, Crime, Thriller', description: 'A mentally troubled comedian embarks on a downward spiral that leads to a violent revolution', showDetails: false }
    ]);
    const [showAll, setShowAll] = useState(true);

    const toggleDetails = (index) => {
        const newMovies = [...movies];
        newMovies[index].showDetails = !newMovies[index].showDetails;
        setMovies(newMovies);
    };

    const removeMovie = (index) => {
        const newMovies = movies.filter((_, i) => i !== index);
        setMovies(newMovies);
    };

    const toggleView = () => {
        setShowAll(!showAll);
    };

    const moviesToDisplay = showAll ? movies : movies.filter(movie => movie.genre === 'Sci-Fi');

    return (
        <div>
            <button onClick={toggleView}>
                {showAll ? 'Show Action Movies' : 'Show Sci-Fi Movies'}
            </button>
            <ul>
                {moviesToDisplay.map((movie, index) => (
                    <li key={index}>
                        <span onClick={() => toggleDetails(index)} style={{ cursor: 'pointer' }}>
                            {movie.title}
                        </span>
                        {movie.showDetails && <p>{movie.description}</p>}
                        <button onClick={() => removeMovie(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;
