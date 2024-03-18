import { Stack } from '@mui/material';
import React from 'react';

const Triangle = ({ss, key}) => {
    return (
        <Stack key={key} sx={{width: 0, border: '70px solid', borderColor: `transparent transparent ${ss.borderColor} transparent`}}>
            
        </Stack>
    );
}

export default Triangle;
