import React from "react";
//Components and pages
import Home from "./pages/Home";
import Nav from "./components/Nav";
//Styles
import GlobalStyles from "./components/GlobalStyles";
//router
import {Route} from "react-router-dom";

function App() {

  return (
    <div>
     <GlobalStyles />
     <Nav />
      <Route path= {["/game/:id","/"]}>
      <Home />
     </Route>
    </div>
  );
}

export default App;
