import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import ScubaImg from '../assets/equipment.jpg';

const styles = {
  imageStyle: {
    width: '80%',
    height: '100%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
};

function Scuba({ classes }) {
  return (
    <div>
      <img className={classes.imageStyle} src={ScubaImg} alt="ScubaImage" />
    </div>
  );
}

Scuba.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(Scuba);
