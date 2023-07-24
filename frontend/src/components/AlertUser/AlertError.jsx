import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

const AlertError = () => {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="error" variant='filled'>
                <AlertTitle>ERREUR</AlertTitle>
                Désolé, Une erreur est survenue
            </Alert>
        </Stack>
    
    )
}

export default AlertError