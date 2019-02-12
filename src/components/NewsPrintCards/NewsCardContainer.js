import React from 'react';
import {
  Card,
  withStyles,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
} from '@material-ui/core';
import arrow from '../../assets/arrow_2.png';

const styles = {
  card: {
    width: '360px',
    height: '554.8px',
    marginLeft: '40px',
    position: 'relative',
    '&:hover': {
      transition: 'all .2s ease-in-out',
      transform: 'scale(1.1)',
    },
  },
  media: {
    height: 400,
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    '&:hover': {
      height: 300,
    },
  },
  cardContent: {
    // padding: '49px 35px 0 44px',
    borderBottom: '0px',
    backgroundColor: 'none !important',
    '&:hover': {
      paddingBottom: '0',
    },
  },
  name: {
    fontFamily: 'Montserrat',
    fontSize: '22px',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '2.05',
    letterSpacing: '1.5px',
    color: '#023256',
  },
  titleText: {
    fontFamily: 'Oswald',
    fontSize: '1.7em',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 2,
    letterSpacing: '1px',
    color: '#023256',
    paddingBottom: '10px',
  },
  datePublished: {
    opacity: '0.6',
    fontFamily: 'Montserrat',
    fontSize: '15px',
    fontWeight: 'normal',
    fontStyle: 'italic',
    fontStretch: 'normal',
    lineHeight: '2.15',
    letterSpacing: '1px',
    color: '#023256',
  },
  text: {
    opacity: '0.6',
    fontFamily: 'Montserrat',
    fontSize: '15px',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '2.15',
    letterSpacing: '1px',
    color: '#023256',
    paddingBottom: '27px',
  },
  readMoreArrow: {
    color: '#ffffff',
    marginTop: '0.7em',
  },
  readMoreText: {
    fontFamily: 'Oswald',
    fontSize: '1.2em',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '2px',
    color: '#023256',
    paddingRight: '20px',
  },
  readMoreParent: {
    display: 'flex',
    position: 'relative',
  },
};

function NewsCardContainer(props) {
  const {
    classes,
    image,
    name,
    titleText,
    text,
    datePublished,
  } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="partner Image"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2" className={classes.name}>
            {name}
          </Typography>
          <Typography variant="body1" className={classes.titleText}>
            {titleText}
          </Typography>
          <Typography variant="body1" className={classes.datePublished}>
            {datePublished}
          </Typography>
          <Typography variant="body1" className={classes.text}>
            {text}
          </Typography>
          <div className={classes.readMoreParent}>
            <span className={classes.readMoreText}>READ MORE.</span>
            <span>
              <img src={arrow} alt="Arrow" />
            </span>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default withStyles(styles)(NewsCardContainer);