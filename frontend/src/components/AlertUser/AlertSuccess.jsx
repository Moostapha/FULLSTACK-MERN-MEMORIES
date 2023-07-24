import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

const AlertSuccess  = () => {
    return (
        <Stack sx={{ width: '100%' }} spacing={2} >
            <Alert severity="success" variant='filled'>
                <AlertTitle>SUCCES</AlertTitle>
                Post créè avec succés !!!
            </Alert>
        </Stack>
    
    );
}

export default AlertSuccess

