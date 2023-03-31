import { useState, createContext } from 'react';
import App from '../App';


export const AppContextMovie = createContext();

export const MovieDisplayContext = (props) => {
    const [hasMovieDisplayEnabled, setMovieDisplayEnabled] = useState(false);
    const [movieSearchID, setMovieSearchID] = useState();

    const openMovieDisplay = (event) => {
        // Exporting Open Movie Display to main APP so it can be accessed from multiple parts.
        const movieId = getMovieID(event)
        setMovieDisplayEnabled(true);
        setMovieSearchID([movieId]);
      }

    const getMovieID = (event) => {
        const movieId = event.target.closest('.movie-card').id;
        return movieId;
    }

    const closeMovieDisplayWindow = () => {
        setMovieDisplayEnabled(false);
      }

    return (
        <AppContextMovie.Provider
            value={{
                openMovieDisplay: openMovieDisplay,
                hasMovieDisplayEnabled: hasMovieDisplayEnabled,
                movieSearchID: movieSearchID,
                closeMovieDisplayWindow: closeMovieDisplayWindow,
            }}
        >
            {props.children}
        </AppContextMovie.Provider>
    );
}

