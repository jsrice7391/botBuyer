import React, {Component} from "react";
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle
} from "material-ui/Toolbar";
import {Link} from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import MenuItem from "material-ui/MenuItem";
import DropDownMenu from "material-ui/DropDownMenu";
import IconMenu from "material-ui/IconMenu";
import IconButton from "material-ui/IconButton";
import NavigationExpandMoreIcon from "material-ui/svg-icons/navigation/expand-more";

const styles = {
    backgroundColor: "blue",
    color: "white"
}

export default class NavBar extends Component {

    render(){
        return <MuiThemeProvider>
            <Toolbar style={styles}>
              <ToolbarGroup>
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  <ToolbarTitle text="My App" />
                </Link>
              </ToolbarGroup>
              <ToolbarGroup>
                <IconMenu iconButtonElement={<IconButton touch={true}>
                      <NavigationExpandMoreIcon />
                    </IconButton>}>
                  <Link to="/login">
                    <MenuItem primaryText="Login" />
                  </Link>
                  <MenuItem primaryText="More Info" />
                </IconMenu>
              </ToolbarGroup>
            </Toolbar>
          </MuiThemeProvider>;
    }
}
