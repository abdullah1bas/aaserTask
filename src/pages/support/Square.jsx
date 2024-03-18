import { Stack } from '@mui/material';
const Square = ({ss, key, text}) => {
    return (
        <Stack key={key} sx={{color: 'white',width: '50px', height: '50px', ...ss}}>
            {text}
        </Stack>
    );
}

export default Square;
