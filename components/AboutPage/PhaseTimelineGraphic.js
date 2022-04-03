import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

const PhaseTimelineGraphic = () => {

    return (
        <Timeline position="alternate" sx={{width: 350, p: 0, m: 0}}>
            <TimelineItem>
                <TimelineOppositeContent>
                    4/15/22
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot sx={{backgroundColor: '#7f00ff'}}/>
                    <TimelineConnector sx={{backgroundColor: '#7f00ff'}}/>
                </TimelineSeparator>
                <TimelineContent>Prototype Complete</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    Phase Two
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot sx={{backgroundColor: '#7f00ff'}}/>
                    <TimelineConnector sx={{backgroundColor: '#7f00ff'}}/>
                </TimelineSeparator>
                <TimelineContent>
                    4/15/22 — 6/1/22
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    6/1/22 — 10/1/22
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot sx={{backgroundColor: '#7f00ff'}}/>
                    <TimelineConnector sx={{backgroundColor: '#7f00ff'}}/>
                </TimelineSeparator>
                <TimelineContent>Phase Three</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    Pre-Deployment
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot sx={{backgroundColor: '#7f00ff'}}/>
                    <TimelineConnector sx={{backgroundColor: '#7f00ff'}}/>
                </TimelineSeparator>
                <TimelineContent>
                    10/1/22 — 1/1/23
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    1/1/23
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot sx={{backgroundColor: '#7f00ff'}}/>
                </TimelineSeparator>
                <TimelineContent>Deployment</TimelineContent>
            </TimelineItem>


        </Timeline>
    );
};

export default PhaseTimelineGraphic;
