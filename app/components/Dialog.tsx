import { Button, Dialog } from '@mui/material';
import { useState } from 'react';

export default function SimpleDialogDemo() {
  /* state */
  const [open, setOpen] = useState(false);
  /* function */
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  /* main */
  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        Open Mui Dialog
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <section>here is the dialog content</section>
      </Dialog>
    </>
  );
}
