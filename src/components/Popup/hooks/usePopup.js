import { useState, useEffect } from "react";

const usePopup = (isClosePopup) => {
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

  useEffect(() => {
    if (isClosePopup) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [isClosePopup]);

  return {
    isOpen,
    onOpen,
    onClose,
    isRender,
  }
};

export default usePopup;
