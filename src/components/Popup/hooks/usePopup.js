import { useState, useEffect } from "react";

const usePopup = (isClosePopup) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRender, setIsRender] = useState(false);

  useEffect(() => {
    if (isClosePopup) {
      onClose();
    }
  }, [isClosePopup]);

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
