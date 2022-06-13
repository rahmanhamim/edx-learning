import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Box } from '@mui/material';
const CourseTimeLine = () => {
    return (
        <Box sx={{}}>
            <Timeline>
                <TimelineItem sx={{ textAlign: 'left !important', width: 'fit-content', border: '2px solid red' }}>
                    <TimelineSeparator>
                        <TimelineDot sx={{
                            backgroundColor: '#002121',
                            margin: '0 !important'
                        }} />
                        <TimelineConnector sx={{ backgroundColor: '#CCCCCC' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{
                        padding: '0px 16px'
                    }}>
                        Eat
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Box>
    );
};

export default CourseTimeLine;