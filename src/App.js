import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route, Link } from 'react-router-dom'
import { Switch } from 'react-router'
import { useState, useEffect } from 'react';
import Movie from './Components/MovieCard/Movie';
import MovieDescription from './Components/MovieDescription/MovieDescription';
import SearchHistory from './Components/SearchHistory/SearchHistory';
function App() {
  const MovieApi = "http://www.omdbapi.com/?i=tt3896198&apikey=2f732fca";
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([""]);
  const [errorMessage, setErrorMessage] = useState(null);
  useEffect(() => {
    fetch(MovieApi)
      .then(response => response.json())
      .then(jsonResponse => {

        setMovies(jsonResponse.Search);
        setLoading(false);
      })
  }, []);
  const search = searchValue => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then(response => response.json())
      .then(jsonResponse => {
        console.log(jsonResponse);
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
          setLoading(false);
        } else {

          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
  };


  return (
    <div className="relative h-screen w-screen bg-slate-600 overflow-x-hidden">
      <Navbar search={search} />
      <Routes >

        <Route

          path='/'
          element={
            <>
              <div className='flex justify-center w-full h-[full] bg-slate-600 py-20'>
                <div className="relative grid md:grid-cols-2 grid-cols-1  top-20">
                  {loading && !errorMessage ? (
                    <span className='absolute left-0 md:left-[50%] top-[50%] text-3xl text-white'>loading...</span>
                  ) : errorMessage ? (
                    <div></div>
                  ) : (
                    movies && movies.map((movie, index) => (

                      <Movie key={`${index}-${movie.Title}`} movie={movie} />


                    ))
                  )}

                </div>
              </div>
            </>
          }
        />

        {movies && movies.map((movie, index) => (
          <Route path={`${movie.Title && movie.Title.split(" ").join('-')}`} element={<MovieDescription movie={movie} />} />
        ))}

      </Routes>
      <span className='absolute left-[10%] md:left-[50%] text-white font-bold top-[50%] md:translate-x-[-23rem] text-3xl'>{errorMessage && `SORRY, WE COULDN'T FIND YOUR MOVIE.BE MORE EXPLICIT `}</span>
    </div>
  );
}

export default App;
