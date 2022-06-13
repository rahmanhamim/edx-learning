import { Button, Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import TitleMain from 'components/shared/titles/TitleMain';
import React from 'react';
import CourseTimeLine from './CourseTimeLine';

const DateHeader = () => {

    const theme = useTheme();
    return (
        <>
            <TitleMain text="Important dates" my=".5em" />
            <Typography component="p" sx={{
                color: theme.palette.secondary.light
            }}>We’ve built a suggested schedule to help you stay on track. But don’t worry—it’s flexible so you can learn at your own pace</Typography>
            <br />

            <Box sx={{
                backgroundColor: "#FBFAF9",
                width: "100%",
                padding: ".5em",
                borderRadius: "5px",
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                display: "flex",
                justifyContent: "space-between"

            }}>
                <Typography sx={{
                    color: theme.palette.secondary.light
                }}>
                    It looks like you missed some important deadlines based on our suggested schedule. To keep yourself on track, you can update this schedule and shift the past due assignments into the future. Don’t worry—you won’t lose any of the progress you’ve made when you shift your due dates.
                </Typography>

                <Button variant='contained'
                    sx={{
                        backgroundColor: theme.palette.secondary.main,
                    }}
                >Upgrade to shift due dates</Button>
            </Box>
            <br /> <br />

            <CourseTimeLine />
        </>
    );
};

export default DateHeader;