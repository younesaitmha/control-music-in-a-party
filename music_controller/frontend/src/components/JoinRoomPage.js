import React, { Component } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, Grid, Typography } from "@material-ui/core";

export default class JoinRoomPage extends Component {
    constructor(props) {
        super(props);
        this.state ={
            roomCode: "",
            error: ""
        }
    }

    render() {
        return (
            <Grid container spacing={1} alignItems="center">
                <Grid item xs={12}>
                    <Typography variant="h4" component="h4">
                        Join A Room
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        error={ this.state.error }
                        label="Code"
                        placeholder="Enter A Room Code"
                        value={ this.state.roomCode }
                        HelperText={ this.state.error }
                        variant="outlined"
                    />
                </Grid>
            </Grid>
        );
    }
}
