import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Colors from '../../styles/Colors';

class Loader extends Component {
  render() {
    // const { classes } = this.props;
    return (
      <div>
        <svg height="500" width="500">
          <polygon points="300,150 225,280 75,280 0,150 75,20 225,20"
            style={{ fill: 'lime', stroke: 'purple', strokeWidth: '1' }} />
        </svg>
      </div>
    );
  }
}

Loader.propTypes = {
  // classes: PropTypes.object.isRequired
}


export default Loader;