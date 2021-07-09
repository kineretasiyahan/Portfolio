import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import { useContextGlobal2 , useContextTheme} from '../../Context';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
const useStyles = makeStyles(() => ({
  media: {
    width: 500,
    height: 360,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '200px',
    maxHeight: '200px',
  },
}));
export default function Home() {
  const cardsArray = useContextGlobal2();
  const getTheme=useContextTheme();
  const classes = useStyles();
  const [data, setData] = useState();
  function aboutMe() {
    if(data==""){
    setData(<h5>Hey my name is Kineret Asiyahan, I'm 25 years old I live in Kiryat-Ekron,Israel
      <br></br>
    I'm studing full stack deloveper in tec-career.</h5>   )} 
    
    else {
setData("")
    }
  } 
  return (
    <div> <button onClick={aboutMe} type="button" name="x" className="aboutMe" style={{backgroundColor:getTheme=="dark"?"black":"white",color:getTheme=="dark"?"white":"black"}}>KINERET ASIYAHAN - FULL STACK DEVELOPER 👇 </button>
      <p  className="pHome">{data} </p>
      <Grid container spacing={2} justify="center" >
        {cardsArray.map((item) => (
          <Grid item >
            <Card>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={`${item.img}`}
                  title={item.header}   />
                  <CardContent style={{backgroundColor:getTheme=="dark"?"black":"white"}}>
                  <Typography gutterBottom variant="h5" component="h2" style={{color:getTheme=="dark"?"white":"black"}}>
                    {item.header }
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" style={{color:getTheme=="dark"?"white":"black"}}>
                  {item.date}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
              </CardActions>
            </Card>
          </Grid>))}
      </Grid></div>);
}
