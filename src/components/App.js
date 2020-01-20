import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import TestComponent from "./TestComponent";

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route exact path="/test" component={TestComponent} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;