import { Stack } from '@mui/material';
import React from 'react';

const Circle = ({ss}) => {
    return (
        <Stack sx={{width: '50px', height: '50px', borderRadius: '50%', p: '20px', ...ss}}>
            
        </Stack>
    );
}

export default Circle;
