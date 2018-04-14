import React, {Component} from "react";
import Card from "material-ui/Card";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {Col, Row, Grid} from "react-bootstrap";
import TextField from 'material-ui/TextField';
import FlatButton from "material-ui/FlatButton";
import {Link} from "react-router-dom";






class Login extends Component{
    
    render(){
        return <MuiThemeProvider>
            <Grid>
              <Row>
                <Col md={10} mdOffset={1}>
                  <Card>
                    <h3>Login</h3>
                    <TextField hintText="Hint Text" floatingLabelText="Floating Label Text" />
                    <br />
                    <TextField hintText="Hint Text" floatingLabelText="Floating Label Text" />
                    <br />
                    <FlatButton label="Submit" />
                    <br/>
                    <Link to="/register" style={{fontSize: "12px"}}>Don't have an account?</Link>
                  </Card>
                </Col>
              </Row>
            </Grid>
          </MuiThemeProvider>;
    }
}

export default Login;
