import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./app.css"
//Components
import SearchCountry from "./components/SearchCountry.jsx";
import SingleCountry from "./components/SingleCountry"

function App() {
  return (
      <div className="countryMainDiv">
        <Router>
          <Switch>
            <Route path="/" exact>
              <SearchCountry/>
            </Route>
            <Route path="/details/:name">
              <SingleCountry />
            </Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
