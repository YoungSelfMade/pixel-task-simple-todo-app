
// Coded By Shayan (https://github.com/YoungSelfMade) - For Pixel Co


import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from "Routes";
import "Assets/Styles/baseStyles.scss";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* iterate over `Routes` Array and Create <Route> Component For Routing */}
          {Routes.map((route, i) => {
            return (
              <Route
                key={"Route" + i}
                path={route.path}
                render={(props) => {
                  return (
                    <route.layout {...props}>
                      <route.component {...props} />
                    </route.layout>
                  );
                }}
              />
            );
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
