import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles({
  title: {
    padding: '15px 30px',
    borderBottom: '1px solid #e3e3e3',
  }
})

type CustomModalProps = {
  title: string;
  show?: boolean;
  onHideModal: () => void;
}

const CustomModal: React.FunctionComponent<CustomModalProps> = ({
  title,
  show = false,
  onHideModal,
  children,
}) => {
  const classes = useStyle();

  return (
    <Modal
      show={show}
      onHide={onHideModal}
      size="lg"
    >
      <Modal.Title className={classes.title}>{title}</Modal.Title>
      <Modal.Body>
        {children}
      </Modal.Body>
    </Modal>
  )
}

export default CustomModal;
