import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Component/Client/Home.jsx";
import Login from '../Component/Login/Login.jsx';

function RouterClient() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={Login} />
                </Switch>
            </Router>
        </div>
    );
}

export default RouterClient;