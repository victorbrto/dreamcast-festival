import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import LineUp from "./Components/LineUp";
import Banner from "./Components/Banner";
import Video from "./Components/Video";
import Footer from "./Components/Footer";

const Home = () => (
  <div>
    <LineUp />
    <Banner />
    <Video />
    <Footer />

  </div>
);

const App = () => {
  return (
    <Router basename="/dreamcast-festival">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
