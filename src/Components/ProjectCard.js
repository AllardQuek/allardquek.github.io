import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardHeader, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 330,
    maxWidth: 300,
    marginTop: "1rem",
    height: "100%",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));


// cardmedia with youtube url
const ProjectCard = ({ iconComps, projectName, projectType, image,
                       description, toolsUsed, contribution }) => {
    const classes = useStyles();

    return (
      <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.root} 
              variant="outlined" 
              elevation={3}>
            <CardHeader
            title={projectName}
            subheader={projectType}
            />
            <CardMedia
            className={classes.media}
            image={image}
            title={projectName}
            />
            <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
                {description}
            </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="github repo">
                  <a href={iconComps.icon1[0]} target="_blank" rel="noopener noreferrer" className="icon i-gh-ramsii">
                      {/* This will be the first icon component passed in the array of props, i.e GitHubIcon */}
                      {iconComps.icon1[1]}  
                  </a>
              </IconButton>
              <IconButton aria-label="other link">
                  <a href={iconComps.icon2[0]} target="_blank" rel="noopener noreferrer" className="icon i-tele">
                      {iconComps.icon2[1]}
                  </a>
              </IconButton>
            </CardActions>
        </Card>
      </Grid>
    )
}


export default ProjectCard
