import { useState } from "react";
import MovieList from "./components/cine/MovieList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { MovieContext } from "./context/MovieContext";
import Page from "./Page";

export default function App() {
  const [cartData, setCartData] = useState([]);
  return (
    <>
      <MovieContext.Provider value={{ cartData, setCartData }}>
        <Page />
      </MovieContext.Provider>
    </>
  );
}
