import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

const FeaturesTimeline = () => {

    return (
        <Timeline position="alternate" sx={{my: 5}}>
            <TimelineItem>
                <TimelineOppositeContent color="text.content">
                    4/15/22
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent color='text.content'>Prototype Complete</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color='text.content'>
                    Phase Two
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent color='text.content'>6/1/22</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color='text.content'>
                    10/1/22
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent color='text.content'>Phase Three</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color='text.content'>
                    Deployment
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot/>
                </TimelineSeparator>
                <TimelineContent color='text.content'>1/1/23</TimelineContent>
            </TimelineItem>
        </Timeline>
    );
};

export default FeaturesTimeline;
