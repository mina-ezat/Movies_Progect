import './App.css';
import Navbar from './component/navbar/navbar';
import React from 'react';
import { getAllMovies } from "./component/redux/action/moviesAction.js"
import MoviesList from './component/moviesList/moviesList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailesMovies from './component/detailesMovies/detailesMovies';
import { connect } from 'react-redux';

class App extends React.Component {


  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<MoviesList />} />

            <Route path="/movie/:id" element={<DetailesMovies />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    movies: () => dispatch(getAllMovies())
  }
}
export default connect(null, mapDispatchToProps)(App)
