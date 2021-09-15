import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AdminPage from "./pages/admin/AdminPage";
import IndexPage from "./pages/user/IndexPage";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/admin">
                    <AdminPage/>
                </Route>
                <Route path="/">
                    <IndexPage/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
