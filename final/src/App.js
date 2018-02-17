import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header/Header";
// import Enter from './Components/Enter/Enter';

class App extends Component {
    render() {

        return (
            <div>
                <Header>
                    <p>
                        Pet Finder
                    </p>
                </Header>
            </div>
        );
    }
}
export default App;
