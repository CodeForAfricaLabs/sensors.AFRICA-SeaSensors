import React from 'react';
import ReactPlayer from 'react-player';
import { withStyles } from '@material-ui/core';

const styles = {
  backgroundVideo: {
    height: '644px !important',
    width: '100% !important',
    float: 'left',
    top: '0',
    padding: 'none',
    background: 'cover',
  },
};

function Video({ classes }) {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=gUJqdCq50EE"
      className={classes.backgroundVideo}
    />
  );
}

export default withStyles(styles)(Video);