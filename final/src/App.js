import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from "./Components/Header/Header";
import SubmitForm from "./Components/SubmitForm/SubmitForm";
import Form from "./Components/Form/Form";
import Profile from "./Components/Profile";

class App extends Component {
    render() {

        return (
            <Router>
                <div>
                    <Header>
                        <p>
                            Pet Finder
                        </p>
                    </Header>
                        <Switch>
                            <Route exact path="/" component={Form} />
                            <Route path="/profile/:userId" component={Profile} />
                        </Switch>
                </div>
            </Router>
        );

    }
}
export default App;
