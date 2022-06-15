import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';


interface Dates {
    id: string;
    date: string;
    title: string;
    dueTime: string;
    needVerification: boolean;
}


const CourseTimeLine = () => {

    const [times, setTimes] = useState<Array<Dates>>();

    useEffect(() => {
        fetch("course-timeline.json")
            .then(res => res.json())
            .then(data => setTimes(data));
    }, [])
    return (
        <Box sx={{}}>

            {
                times?.map((data, index) => (
                    <Box key={data.id} sx={{}}>
                        <Box
                            sx={{
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                border: '1px solid #2d2d2d',
                                marginTop: '62px',
                                padding: 0,
                                zIndex: 1,
                                backgroundColor: data.date.includes(new Date().getDate().toString()) ? '#F0CC00' : (index === 0 ? '#fff' : '#2d2d2d'),
                                position: 'relative',
                                '&:after': {
                                    content: "''",
                                    position: 'absolute',
                                    top: '10px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '1px',
                                    zIndex: index === times.length - 1 ? 2 : 1,
                                    backgroundColor: index === times.length - 1 ? '#ffff' : '#2d2d2d',
                                    height: '120px',
                                }
                            }}
                        />

                        <Typography sx={{ padding: '0 15px', lineHeight: 0 }}>
                            {data.date}
                            <Box component='span' sx={{
                                display: data.date.includes(new Date().getDate().toString()) ? 'inline' : 'none',
                                backgroundColor: '#F0CC00',
                                fontSize: '.8rem',
                                color: '#fff',
                                padding: '5px',
                                ml: '5px',
                                borderRadius: '5px'
                            }}>Today</Box>
                            <Box component='span' sx={{
                                display: data.needVerification ? 'inline' : 'none',
                                backgroundColor: '#00262b',
                                position: 'relative',
                                fontSize: '.8rem',
                                color: '#fff',
                                padding: '5px',
                                ml: '5px',
                                borderRadius: '5px'
                            }}>
                                <LockIcon sx={{ fontSize: '.8rem' }} />
                                Verified Only
                            </Box>
                        </Typography>
                        <Typography
                            sx={{
                                padding: '0 15px',
                                mt: 2,
                                fontSize: '.8rem',
                                fontWeight: 'bold',
                            }}>
                            {data.title}
                            <Box component='span' sx={{ fontWeight: 'normal' }}>
                                {' '} due {data.dueTime}
                            </Box>
                        </Typography>
                    </Box>
                ))
            }
            <br /><br />
        </Box>

    );
};

export default CourseTimeLine;