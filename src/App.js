import React, { Component } from "react";
import AppBar from "./components/AppBar";
import MoviesList from "./pages/MoviesList";
import Favourites from "./pages/Favourites";
import SingleMovie from "./pages/SingleMovie";
import Error from "./pages/Error";
import { Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <AppBar />
        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/movie/:id" element={<SingleMovie />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    );
  }
}

export default App;
