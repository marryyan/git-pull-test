import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TvMode from './components/Tv/Tv';
import HotMode from './components/Hot/Hot';
import MovieMode from './components/Movie/Movie';


const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={home} />
    </div>
  </Router>
);

const home = () => (
  <div className="home">
    <HotMode />  
    <MovieMode />
    <TvMode />
  </div>
);

export default BasicExample;