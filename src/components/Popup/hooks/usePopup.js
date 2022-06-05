import { useState } from "react";

const usePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRender, setIsRender] = useState(false);

  const onOpen = () => {
    setIsOpen(true);

    setTimeout(() => {
      setIsRender(true);
    });
  };
  const onClose = () => {
    setIsOpen(false);

    setTimeout(() => {
      setIsRender(false);
    }, 800);
  };

  return {
      isOpen,
      isRender,
      onClose,
      onOpen,
  }
};

export default usePopup;
