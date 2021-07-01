import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { useState } from 'react';
import { useContextGlobal2 } from '../../Context';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "רקע בית.jpeg",
    backgroundSize: "cover",
    display: "flex",
    flexWrap: "wrap",
    margin: "20px",
    flexDirection: "column",
    justifyContent: "space-around",

  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 600,


  },
  media: {
    width: 200,
    height: 200,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function Home() {
  const cardsArray = useContextGlobal2();

  const classes = useStyles();
  const [data, setData] = useState();
  function aboutMe() {
    setData("Hey my name is kineret asiyahan"
    )
  }


  return (
    <div> <button onClick={aboutMe} type="button" name="x" className="aboutMe" value="bgdffsvxsfvdsdscdzscdscdscdzs">About Me</button>
      <p className="pHome">{data}</p>
      <div classNmae="content"></div>
      <Grid container spacing={2} justify="center">
        {cardsArray.map((item) => (
          <Grid item>
            <Card>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={`/${item.img}`}
                  title={item.header}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.header}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                  {item.date}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>))}

      </Grid></div>);
}

/*
// <Grid item component={Paper} className={classes.paper}>
          //   <Grid item>
          //     <ButtonBase className={classes.image}>
          //       <img className={classes.img} alt="complex" src={item.img} />
          //     </ButtonBase>
          //   </Grid>
          //   <Grid item xs={12} sm container>
          //     <Grid item xs container direction="row" spacing={2}>
          //       <Grid item xs>
          //         <Typography gutterBottom variant="subtitle1">
          //           {item.header}
          //         </Typography>
          //         <Typography variant="body2" gutterBottom>
          //           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi atque ea magnam nihil iusto est ratione, ab unde, iste nemo culpa. Sapiente, quos error provident, asperiores nihil architecto, nobis numquam ad reiciendis consectetur eius nemo. Perspiciatis cum dolor, dolorum esse earum dicta unde eum molestiae nobis saepe exercitationem iusto, aliquid consectetur blanditiis sed aut illum ab deleniti ducimus impedit aperiam! Ex molestias ipsa animi aliquid nisi dolore. Consequuntur vel quia, temporibus rem repellendus repudiandae dolor dolore adipisci, doloremque, asperiores quibusdam nemo accusantium blanditiis. Minus atque repellendus quo eveniet totam officia nulla obcaecati ab hic quod fuga eligendi molestias incidunt impedit velit quasi quisquam, dignissimos doloribus accusamus suscipit esse deserunt! Nostrum dolorum velit doloribus, aspernatur soluta sed? Qui odit, placeat, sunt quis aut fugiat, hic aspernatur ducimus ipsum nisi quae numquam pariatur! Dicta magni ratione, officiis velit molestias consequuntur hic sapiente blanditiis quis nam! Suscipit beatae enim iste tempora sapiente magnam porro nostrum dolore odit ullam impedit quas placeat repudiandae cupiditate totam similique explicabo amet dolor quam ipsam eius nemo, eveniet debitis a! Facere at, ab excepturi, officiis consequuntur quia ex commodi magnam veniam dolorem architecto id aliquid nihil, autem inventore itaque ducimus ut voluptatem ullam et cumque provident? Sed, itaque!</p>
          //         </Typography>
          //         <Typography variant="body2" color="textSecondary">
          //           {item.date}
          //         </Typography>
          //       </Grid>
          //       <Grid item>
          //         <Typography variant="body2" style={{ cursor: 'pointer' }}>
          //           {item.header}
          //         </Typography>
          //       </Grid>
          //     </Grid>
          //     <Grid item>
          //       <Typography variant="subtitle1"></Typography>
          //     </Grid>
          //   </Grid>
          // </Grid>
          */