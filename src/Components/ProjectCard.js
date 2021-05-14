import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardActions, CardContent, CardMedia, Typography, Icon } from '@material-ui/core';

import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 330,
    marginTop: "1rem",
    height: "100%",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', 
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
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
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
            <IconButton
                className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
            >
                <ExpandMoreIcon />
            </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        Built with: <span> {toolsUsed} </span>
                    </Typography> 
                    <Typography paragraph>
                        {contribution}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}


export default ProjectCard
