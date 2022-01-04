import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';

import CreateRoomPage from "./CreateRoomPage";
import JoinRoomPage from "./JoinRoomPage";
import Room from './Room';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path='/'><h1>This is the home page</h1></Route>
                    <Route path='/join' component={JoinRoomPage} />
                    <Route path='/create' component={CreateRoomPage} />
                    <Route path='/room/:roomCode' component={Room} />
                </Switch>
            </Router>
        )
    }
}
