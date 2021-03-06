import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  withStyles
} from '@material-ui/core';

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    padding: '1rem 2rem',
    height: '420px',
    margin: '1rem',
    borderRadius: 0,
    boxShadow: '0 28px 56px 0 rgba(0, 0, 0, 0.05)'
  },
  links: {
    display: 'grid',
    paddingBottom: '0.5rem'
  },
  linkText: {
    width: '100%',
    color: '#77064c',
    height: '34.8px',
    fontSize: '16.8px',
    fontStyle: 'normal',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    lineHeight: '24.8px',
    fontStretch: 'normal',
    textTransform: 'none',
    letterSpacing: '0.6px'
  },
  titleText: {
    width: '242.4px',
    height: '69.7px',
    fontFamily: 'Oswald',
    fontSize: '34px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '0.99',
    letterSpacing: '1.7px',
    color: '#023256',
    marginTop: '2rem'
  },
  cardText: {
    width: '219.8px',
    height: '128.3px',
    fontFamily: 'Montserrat',
    fontSize: '15px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '2.5',
    letterSpacing: '1px',
    color: '#023256'
  }
};

function ResourceCards({ classes, title, text, link, link2 }) {
  let SecondaryBtnLink = '';
  if (link2) {
    SecondaryBtnLink = <Button className={classes.linkText}>{link2}</Button>;
  }
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={classes.titleText}
        >
          {title}
        </Typography>
        <Typography component="p" className={classes.cardText}>
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <div className={classes.links}>
          <Button size="small" className={classes.linkText}>
            {link}
          </Button>
          {SecondaryBtnLink}
        </div>
      </CardActions>
    </Card>
  );
}

ResourceCards.propTypes = {
  classes: PropTypes.shape().isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  link2: PropTypes.string.isRequired
};

export default withStyles(styles)(ResourceCards);
