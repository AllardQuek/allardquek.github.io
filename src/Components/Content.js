import { makeStyles } from '@material-ui/core/styles';
import { MainLayout } from "../styles/Layouts";
import ReactPlayer from 'react-player/youtube';


const useStyles = makeStyles(() => ({
    video: {
        marginTop: "1rem",
        position: "relative",
        paddingTop: "56.25%",
    },
    player: {
      position: "absolute",
      top: 0,
      left: 0,
    },
  }));


const Content = () => {
    const classes = useStyles();
      
    return (
        <MainLayout>
            <h1>Content</h1>
            {/* https://github.com/cookpete/react-player#responsive-player */}
            <div className={classes.video}>
              <ReactPlayer 
                  className={classes.player}
                  width="100%"
                  height="100%"
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
