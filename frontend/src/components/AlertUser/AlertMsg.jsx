import  React, { useState, forwardRef } from 'react'
import Button from '@mui/material/Button';
import SnackBar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AlertMsg = ({ onClose, severity, msgUser }) => {
  
  // state initial à false qui masque l'alert
  const [open, setOpen] = useState(false);
  
  // Déclencheur qui fera apparaitre l'alerte en changeant le state en true
  const handleShowAlert = () => {
      setOpen(true);
  };
  
  // Fermer l'alert
  const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
  };
  
  return (
    <>
      <Button onClick={handleShowAlert} variant='contained'>
        Open snackbar Alert
      </Button>
      <SnackBar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert 
          onClose={handleClose} 
          severity={severity}>
          {msgUser}
        </Alert>
      </SnackBar>
    </>
  )
}

export default AlertMsg