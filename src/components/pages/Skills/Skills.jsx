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
    <img class="frontEndImg" src="Portfolio/html.png" alt="skills"></img>
    <img class="frontEndImg" src="Portfolio/css.png" alt="skills"></img>
    <img class="frontEndImg" src="Portfolio/js.png" alt="skills"></img>
    <img class="frontEndImg" src="Portfolio/react.jpg" alt="skills"></img>
    <img class="frontEndImg" src="Portfolio/Typescript_logo_.svg" alt="skills"></img>
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
     <img class="backEndImg" src="Portfolio/c.png" alt="skills"></img>
     <img class="backEndImg" src="Portfolio/mvc.jpg" alt="skills"></img>
     <img class="backEndImg" src="Portfolio/dotnet.png" alt="skills"></img>
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
     <img class="backEndImg" src="Portfolio/vs code.jpg" alt="skills"></img>
  <img class="backEndImg" src="Portfolio/vs code2.png" alt="skills"></img>
  </VerticalTimelineElement>
</VerticalTimeline>

    </div>
  );
}


