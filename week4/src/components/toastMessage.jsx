import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const ToastMessage = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return ReactDOM.createPortal(
    <Toast>
      <p>{message}</p>
    </Toast>,
    document.body
  );
};

const Toast = styled.div`
  position: fixed;
  bottom: 1rem;
  padding: 1rem;
  font-size: 0.8rem;
  border-radius: 0.5rem;
  background-color: gray;
  color: white;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default ToastMessage;
