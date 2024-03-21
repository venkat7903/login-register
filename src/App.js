import { BrowserRouter, Switch, Route } from "react-router-dom";

import Register from "./components/Register";
import Login from "./components/Login";

import "./App.css";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
);
export default App;
