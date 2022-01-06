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
        this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
        this.roomButtonPressed = this.roomButtonPressed.bind(this);
    }

    handleTextFieldChange(e){
        this.setState({
            roomCode: e.target.value,
        })
    }
    roomButtonPressed(){
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                code: this.state.roomCode
            })
        }
        fetch('/api/join-room', requestOptions)
        .then(
            (res) => {
                if (res.ok){
                    this.props.history.push(`/room/${this.state.roomCode}`);
                } else {
                    this.setState({
                        error: "Room Not Found."
                    });
                }
            }
        ).catch(
            err => console.log(err)
        );
    }

    render() {
        return (
            <Grid container spacing={1}>
                <Grid item xs={12} align="center">
                    <Typography variant="h4" component="h4">
                        Join A Room
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <TextField
                        error={ this.state.error }
                        label="Code"
                        placeholder="Enter A Room Code"
                        value={ this.state.roomCode }
                        HelperText={ this.state.error }
                        variant="outlined"
                        onChange={ this.handleTextFieldChange }
                    />
                </Grid>
                <Grid item xs={12} align="center">
                    <Button variant="contained" color="primary" onClick={ this.roomButtonPressed }>
                        Enter Room
                    </Button>
                </Grid>
                <Grid item xs={12} align="center">
                    <Button variant="contained" color="secondary" to="/" component={Link}>
                        Back
                    </Button>
                </Grid>
            </Grid>
        );
    }
}
