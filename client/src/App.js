import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx"
import Home from './components/Home/Home';
import { ActivityCreate } from './components/ActivityCreate/ActivityCreate';
import CardActivityRender from './components/CardActivity/CardActivityRender';
import Detail from './components/Detail/Detail';
import PruebaCss from './components/PruebaCss/pruebaCss.jsx'; //! borrar son pruebas
import pruebaCss2 from './components/PruebaCss/PruebaCss2.jsx'; //! borrar son pruebas

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/Home" component={Home} />
          <Route path="/Activity" component={ActivityCreate} />
          <Route path="/home/:id" component={Detail} />
          <Route path="/CardActivityRender" component={CardActivityRender} />
          <Route exact path="/PruebaCss" component={PruebaCss} />
          <Route exact path="/PruebaCss2" component={pruebaCss2} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
