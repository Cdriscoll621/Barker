import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Enter from "./Components/Enter/Enter";
import Form from "./Components/Form/Form"

class App extends Component {
    render() {

        return (
            <div>
                <Header>
                    <p>
                        Pet Finder
                    </p>
                </Header>

                 <Enter>

                    <Form>

                    </Form>
                 </Enter>
            </div>
        );

    }
}
export default App;
