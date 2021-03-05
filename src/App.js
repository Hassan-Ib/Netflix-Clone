import React from "react";
import Row from "./Row";
import Navbar from "./Navbar";
import Banner from "./Banner";
import request from "./request";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginal}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTrending} />
      <Row title="Action Moives" fetchUrl={request.fetchActionMovie} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovie} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovie} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovie} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
