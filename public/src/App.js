import React from "react";
// components
import AppBar from "./components/AppBar";
// pages
import MovieList from "./pages/MovieList";
import Favourites from "./pages/Favourites";
import SingleMovie from "./pages/SingleMovie";
import Error from "./pages/Error";
//router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <AppBar />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/movie/:id" element={<SingleMovie />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
