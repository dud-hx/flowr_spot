import { Box, Modal, ModalProps, Typography } from '@mui/material'
import React from 'react'
export interface modalProps extends ModalProps {
  open: boolean;
  handleClose: () => void;
  title: string;
}
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  p: 4,

};
const ModalComponent = (props: modalProps) => {
  const { open, handleClose, children,title } = props
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="modal_content"
    >
      {<Box sx={style}>
        <Typography className='typography__overwrite' sx={{ textAlign: 'center' ,mb: 2}}> 
      {title}</Typography>

        {children}

      </Box>}
    </Modal>
  )
}

export default ModalComponent