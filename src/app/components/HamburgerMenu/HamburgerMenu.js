import React from "react";
import styles from "./HamburgerMenuStyle";
import { withStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Link } from "react-router-dom";

class HamburgerMenu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      checked : false
    }
  }

  handleCheckBox = () => {
    this.setState({checked : !this.state.checked});
  }

  //-----------------------------------------------------------------------------------------------
  //the change in styles in menu
  getMenu = () => {
    if(this.state.checked){
      return {visibility: "visible"}
    }

    else
      return {visibility : "hidden"};
  }

  getMenu1 = () => {
    if(this.state.checked){
      return {transform: "scale(1)", transitionDuration: "0.75s"}
    }

    else
      return {transform : "scale(0)"};
  }

  getMenu2 = () => {
    if(this.state.checked){
      return {opacity: 1, }}

    else
      return {opacity : 0, };
  }
  //-----------------------------------------------------------------------------------------------

  render() {
    const { classes } = this.props;
    const { checked } = this.state;
    return (
      <div className={classes.menu_wrap}>
        <input 
          onChange={() => this.handleCheckBox()} 
          type="checkbox" 
          className={classes.menu_wrap_toggler} />
        <div className={classes.menu_wrap_hamburger}>
          <div className={this.state.checked ? classes.menu_wrap_hamburger_div_ifChecked : classes.menu_wrap_hamburger_div}></div>
        </div>
        
        {/* <div style={this.getMenu()} className={classes.menu}>
          <div style={this.getMenu1()} className={classes.menu_in1}>
            <div style={this.getMenu2()} className={classes.menu_in2}>
              <ul className={classes.LI}>
                <Link to="/Home" style={{ textDecoration: 'none'}}>
                  <li className={classes.LI_A}>Home</li>
                </Link>

                <Link to="/Profile" style={{ textDecoration: 'none'}}>
                  <li className={classes.LI_A}>Profile</li>
                </Link>

                <Link to="/Home" onClick={this.props.handleLogout} style={{ textDecoration: 'none'}}>
                  <li className={classes.LI_A}>Logout</li>
                </Link>
              </ul>
            </div>
          </div>
        </div> */}
        <div className={classes.menu} style={{right: checked ? '0' : '-75vw'}}>

        </div>
      </div>
    );
  }
}

export default withStyles(styles)(HamburgerMenu);
