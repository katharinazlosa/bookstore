import React from "react";
import Button from "./button";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* <Button position="closebtn" onClick={onClose} text="X" /> */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
