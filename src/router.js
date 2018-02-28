import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TopicsMode from './components/Topics';
import HomeMode from './components/Home';
import AboutMode from './components/About';


const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">喜剧</Link>
        </li>
        <li>
          <Link to="/about">爱情</Link>
        </li>
        <li>
          <Link to="/topics">科幻</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

const Home = () => (
  <div className="home">
    <HomeMode />
  </div>
);

const About = () => (
  <div className="about">
    <AboutMode />
  </div>
);

const Topics = () => (
  <div className="topics">
    <TopicsMode />
  </div>
);

export default BasicExample;