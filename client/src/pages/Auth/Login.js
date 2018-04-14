import React, {Component} from "react";
import Card from "material-ui/Card";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {Col, Row, Grid} from "react-bootstrap";



class Login extends Component{
    render(){
        return <MuiThemeProvider>
            <Grid>
              <Row>
                <Col md={10} mdOffset={1}>
                  <Card>
                    <h2>This is the login card</h2>
                  </Card>
                </Col>
              </Row>
            </Grid>
          </MuiThemeProvider>;
    }
}

export default Login;
