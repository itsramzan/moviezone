import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Movies from "./pages/Movies";
import Details from "./pages/Details";
import Watchlist from "./pages/Watchlist";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/type/:type" element={<Movies />} />
          <Route path="/search/:search" element={<Movies />} />
          <Route path="/genre/:genre" element={<Movies />} />
          <Route path="/movies/:id" element={<Details />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
