import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Login from "./components/Login"
import Home from "./components/Home"
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/detail/:id">
            <MovieDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
