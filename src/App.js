import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import routes from "./routes";
import CaretakerComp from "./Caretaker";

function App() {
  return (
    <Router>
      <CaretakerComp>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          );
        })}
      </CaretakerComp>
    </Router>
  );
}

export default App;
