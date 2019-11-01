import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
// import Header from "./Components/Header/Header";
import Form from "./Components/Form/Form";
import Profile from "./Components/Profile";
import Discover from "./Components/Discover";
import Button from '@material-ui/core/Button';
import Header from './Components/Header';


class App extends Component {
    render() {

        return (
            <Router>
                <div>
                    <Header></Header>
                    <Button variant="contained" color="primary">
                        Hello World
                    </Button>
                    <Switch>
                        <Route exact path="/" component={Form} />
                        <Route path="/profile/:userId" component={Profile} />
                        <Route path="/discover/:userId" component={Discover} />
                    </Switch>
                </div>
            </Router>
        );

    }
}
export default App;
