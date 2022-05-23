import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import {motion} from 'framer-motion';

const PhaseTimelineGraphic = () => {

    return (
        <motion.div whileHover={{scale: 1.2}} initial={{opacity: 0}} animate={{opacity: 1}} transition={{ opacity: {duration: 1.5, delay: 0.5}, scale: {duration: 0.2}}}>
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
        </motion.div>
    );
};

export default PhaseTimelineGraphic;
