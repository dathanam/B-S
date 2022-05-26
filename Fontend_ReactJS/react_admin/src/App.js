import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import RouterClient from "./Router/RouterClient";
import RouterAdmin from "./Router/RouterAdmin";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={RouterClient} />
          <Route path="/admin" component={RouterAdmin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
