import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LayoutLeft from "../Layout/LayoutLeft.jsx";
import AdminHome from "../Component/Admin/AdminHome.jsx";

function RouterAdmin() {
    return (
        <div className="container">
            <LayoutLeft />
            <Router>
                <Switch>
                    <Route path="/admin" component={AdminHome} />
                </Switch>
            </Router>
        </div>
    );
}

export default RouterAdmin;