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
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
const useStyles = makeStyles((theme) => ({

  secondaryTail: {
    backgroundColor: "theme.palette.secondary.main",
  },
}));
export default function Skills() {
  const classes = useStyles();
  return (
    <div >
      <h1>MY SKILLS</h1>
      <VerticalTimeline >
  <VerticalTimelineElement  
    className="vertical-timeline-element--work"
    iconStyle={{ background: 'rgb(167,167,167)', color: '#fff' }}
  >
    <h1 className="vertical-timeline-element-title">Client Side</h1>
    <h3>
      HTML,CSS,JS,REACT,TS
    </h3>
    <img class="frontEndImg" src="html.png" alt="skills"></img>
    <img class="frontEndImg" src="css.png" alt="skills"></img>
    <img class="frontEndImg" src="js.png" alt="skills"></img>
    <img class="frontEndImg" src="react.jpg" alt="skills"></img>
    <img class="frontEndImg" src="Typescript_logo_.svg" alt="skills"></img>
  </VerticalTimelineElement>
  <VerticalTimelineElement

iconStyle={{ display:"none" }}
  >
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: 'rgb(167,167,167)', color: '#fff' }}
    
  >
    <h1 className="vertical-timeline-element-title">Server Side</h1>
    <h3>
      C#,MVC,NODE.JS
    </h3>
     <img class="backEndImg" src="c.png" alt="skills"></img>
     <img class="backEndImg" src="mvc.jpg" alt="skills"></img>
     <img class="backEndImg" src="dotnet.png" alt="skills"></img>
  </VerticalTimelineElement>
  <VerticalTimelineElement

iconStyle={{ display:"none" }}
>
</VerticalTimelineElement>
  
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    iconStyle={{ background: 'rgb(167,167,167)', color: '#fff' }}
    
  >
    <h1 className="vertical-timeline-element-title"> ENVIRONMENT</h1>
    <h3>
    VISUAL STUDIO CODE, VISUAL CODE
    </h3>
     <img class="backEndImg" src="vs code.jpg" alt="skills"></img>
  <img class="backEndImg" src="vs code2.png" alt="skills"></img>
  </VerticalTimelineElement>
</VerticalTimeline>

    </div>
  );
}


// <Timeline position="alternate" className="skillMainDiv" >
// <TimelineItem className="skillDiv">

//   <TimelineOppositeContent

//     sx={{ m: 'auto 0' }}
//     align="right"
//     variant="body2"
//     color="text.secondary"
//     backgroundColor="black"
//   >
//     <Typography className="skillHeader" variant="h3" component="span" >
//       CLIENT SIDE
//     </Typography>
//     <br></br>
//     <br></br>
//     <img src="https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" style={{ width: "150px", height: "150px" }}></img>
//   </TimelineOppositeContent>
//   <TimelineSeparator>
//     <TimelineConnector />
//     <TimelineDot color="primary" >
//       <LaptopMacIcon />
//     </TimelineDot>
//     <TimelineConnector />
//   </TimelineSeparator>
//   <TimelineContent sx={{ py: '12px', px: 2 }}>
//     <img class="frontEndImg" src="html.png" alt="skills"></img>
//     <img class="frontEndImg" src="css.png" alt="skills"></img>
//     <img class="frontEndImg" src="js.png" alt="skills"></img>
//     <img class="frontEndImg" src="react.jpg" alt="skills"></img>
//     <img class="frontEndImg" src="Typescript_logo_.svg" alt="skills"></img>
//   </TimelineContent>
// </TimelineItem >

// <TimelineItem className="skillDiv">
//   <TimelineOppositeContent
//     sx={{ m: 'auto 0' }}
//     variant="body2"
//     color="text.secondary"
//   >
//     <Typography className="skillHeader" variant="h3" component="span" >
//       SERVER SIDE
//     </Typography>
//     <br></br>
//     <br></br>
//     <img src="https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" style={{ width: "150px", height: "150px" }}></img>
//   </TimelineOppositeContent>
//   <TimelineSeparator>
//     <TimelineConnector />
//     <TimelineDot >
//       <LaptopMacIcon />
//     </TimelineDot>
//     <TimelineConnector />
//   </TimelineSeparator>
//   <TimelineContent sx={{ py: '12px', px: 2 }}>
//     <img class="backEndImg" src="c.png" alt="skills"></img>
//     <img class="backEndImg" src="mvc.jpg" alt="skills"></img>
//     <img class="backEndImg" src="dotnet.png" alt="skills"></img>
//   </TimelineContent>
// </TimelineItem>
// <TimelineItem className="skillDiv">
//   <Typography className="skillHeader" variant="h3" component="span">
//     ENVIRO
//     NMENT
//     <br></br>
//     <br></br>
//   <img src="https://images.pexels.com/photos/270366/pexels-photo-270366.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" style={{ width: "150px", height: "150px" }}></img>
//   </Typography>
//   <TimelineSeparator>
//     <TimelineConnector />
//     <TimelineDot color="primary" >
//       <LaptopMacIcon />
//     </TimelineDot>
//     <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
//   </TimelineSeparator>
//   <TimelineContent sx={{ py: '12px', px: 2 }}>
//     <img class="backEndImg" src="vs code.jpg" alt="skills"></img>
//     <img class="backEndImg" src="vs code2.png" alt="skills"></img>
//     <Typography></Typography>
//   </TimelineContent>
// </TimelineItem>
// </Timeline>



