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
        <Timeline position="alternate" sx={{}}>
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
                    Phase 2 Complete
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent color='text.content'>6/1/22</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color='text.content'>
                    8/1/22
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot/>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent color='text.content'>Phase 3 Complete</TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color='text.content'>
                    Full Deployment
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
