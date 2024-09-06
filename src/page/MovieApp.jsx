import { useEffect, useState } from 'react';
import axios from 'axios'


const MovieApp = () => {
    const baseURL = 'http://localhost:5000/movie';
    const [movie, setMovie] = useState([]);
    const [newMovie, setNewMovie] = useState({title: '', year: ''});
    const [editMovie, setEditMovie] = useState([])

    useEffect(() => {
        fetchAPI();
    }, []);
    const fetchAPI = () => {
        axios.get(baseURL)
        .then((res) => {
            setMovie(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const addMovie = (movie) => {
        axios.post(baseURL, movie)
        .then(() => {
            fetchAPI();
            setNewMovie({title: '', year: ''})
        }).catch((err) => {console.log(err);})
    }

    const hundlerAddedMovie = () => {
        addMovie(newMovie)
    }
 
    const deleteMovie =  () => {
        axios.delete('')
        .then(() => {
            fetchAPI();
            seeEditNovied(null)
        }).catch((err) => {console.log(err);
        })
    }
    const hundlerEdit = (movie)


    return (
        <div>
            <h1>Movies</h1>
            {
                movie && 
                movie.map((item) => (
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <p>{item.year}</p>
                    </div>
                ))
            }
            <h2>Added new film</h2>
            <input value={newMovie.title} onChange={(e) => {setNewMovie({...newMovie, title: e.target.value})}} type="text" />
            <input value={newMovie.year} onChange={(e) => {setNewMovie({...newMovie, year: e.target.value})}} type="text" />
            <button onClick={hundlerAddedMovie}>Added movie</button>
        </div>

    );
}

export default MovieApp;
