import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Enter from "./Components/Enter/Enter";

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

                    <form>
                        <label>
                            Username:
                            <input type="text" name="name" />
                        </label>
                        <label>
                            Password:
                            <input type="text" name="name" />
                        </label>
                        <input type="submit" value="Login" />
                        <input type="submit" value="Sign Up" />
                    </form>




                 </Enter>

            </div>



        );

    }
}
export default App;
