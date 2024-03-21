import { BrowserRouter, Switch, Route } from "react-router-dom";

import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/home";

import "./App.css";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
);
export default App;
