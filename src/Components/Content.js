import { makeStyles } from '@material-ui/core/styles';
import ReactPlayer from 'react-player/youtube';
import { MainLayout } from "../styles/Layouts";
// import { Box, Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
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
    video: {
        marginTop: "1rem",
        // marginLeft: "10rem",
    }
  }));


const Content = () => {
    const classes = useStyles();
      
    return (
        <MainLayout>
            <h1>Youtube</h1>
            <div className={classes.video}>
              <ReactPlayer 
                  pip="true" 
                  controls="true" 
                  url={['https://www.youtube.com/watch?v=YOLjgYDNUBk',
                          'https://www.youtube.com/watch?v=WGUmvtVv5Hks',
                          'https://www.youtube.com/watch?v=etloE9G64tg',]}
              />
            </div>
            
        </MainLayout>
    )
}

export default Content
