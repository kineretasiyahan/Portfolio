import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({

  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));
export default function Skills() {
  const classes = useStyles();
  return (
    <div style={{ background:"url('skills4.jpeg')" ,opacity:"0.8"}}>
    <Timeline position="alternate" className="skillMainDiv" >
      <TimelineItem className="skillDiv">

        <TimelineOppositeContent

          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          <Typography className="skillHeader" variant="h3" component="span" >
            CLIENT SIDE
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" >
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <img class="frontEndImg" src="html.png" alt="skills"></img>
          <img class="frontEndImg" src="css.png" alt="skills"></img>
          <img class="frontEndImg" src="js.png" alt="skills"></img>
          <img class="frontEndImg" src="react.jpg" alt="skills"></img>
          <img class="frontEndImg" src="Typescript_logo_.svg" alt="skills"></img>
        </TimelineContent>
      </TimelineItem >

      <TimelineItem className="skillDiv">
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          <Typography className="skillHeader" variant="h3" component="span" >
          SERVER SIDE
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot >
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
        <img class="backEndImg" src="c.png" alt="skills"></img>
        <img class="backEndImg" src="mvc.jpg" alt="skills"></img>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className="skillDiv">
      <Typography className="skillHeader" variant="h3" component="span">
        ENVIRO
        NMENT
          </Typography>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" >
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
        <img class="backEndImg" src="vs code.jpg" alt="skills"></img>
        <img class="backEndImg" src="vs code2.png" alt="skills"></img>
          <Typography></Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
  );
}



