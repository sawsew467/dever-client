"use client";
import { useState } from "react";

const useModal = () => {
  const [visible, setVisible] = useState<boolean>(false);

  function toggle() {
    setVisible(!visible);
  }
  function openModal() {
    setVisible(true);
  }
  function closeModal() {
    setVisible(false);
  }
  function modalState(state: boolean) {
    setVisible(state);
  }
  return {
    toggle,
    visible,
    openModal,
    closeModal,
    modalState,
  };
};

export default useModal;
