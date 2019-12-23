import React,{useState,createContext} from 'react';
import MovieList from './MovieList';
import Nav from './Nav';
// import MovieProvider from './MovieContext';
import AddMovie from './AddMovie';
export const MovieContext = createContext()
const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name:'Harry Potter',
            price:'$10',
            id:1
        },
        {
            name:'Game of Thrones',
            price:'$10',
            id:2
        },
        {
            name:'Inception',
            price:'$10',
            id:3
        }
    ])
    return ( 
        <MovieContext.Provider value={[movies, setMovies]}>
                <Nav/>
                <MovieList/>
                <AddMovie/>
        </MovieContext.Provider>
     );
}
 
export default MovieProvider;