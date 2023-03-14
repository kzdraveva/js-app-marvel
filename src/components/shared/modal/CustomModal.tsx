import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { useEffect, useLayoutEffect, useRef } from 'react';

interface ICustomModal {
  isModalOpen: boolean;
  onModalOpen(): void;
  onModalClose(): void;
  buttonName: string;
  buttonWidth?: string;
  title: string;
  children: any;
}

// Custom modal component
export const CustomModal = ({
  buttonName,
  title,
  children,
  buttonWidth,
  onModalOpen,
  onModalClose,
  isModalOpen,
}: ICustomModal) => {
  const modalRef = useRef(null);

  // Calculating the position of the modal
  // called synchronously after every render, before the browser has had a chance to paint the screen
  useLayoutEffect(() => {
    const recalculateModalPosition = () => {
      const modal = modalRef.current;

      if (modal && isModalOpen) {
        const windowHeight = window.innerHeight;
        const modalHeight = modal.clientHeight;
        modal.style.top = `${Math.max((windowHeight - modalHeight) / 2, 0)}px`;
        modal.style.marginTop = 0;
      }
    };

    recalculateModalPosition();
  }, [isModalOpen]);

  // Calculating the position of the modal
  // the update occurs after any layout changes caused by the previous rendering have been applied
  useEffect(() => {
    const recalculateModalPosition = () => {
      // wait for the next frame before updating the position
      requestAnimationFrame(() => {
        const modal = modalRef.current;

        if (modal && isModalOpen) {
          const windowHeight = window.innerHeight;
          const modalHeight = modal.offsetHeight;
          modal.style.top = `${Math.max(
            (windowHeight - modalHeight) / 2,
            0,
          )}px`;
          modal.style.marginTop = 0;
        }
      });
    };

    recalculateModalPosition();

    window.addEventListener('resize', recalculateModalPosition);

    return () => {
      window.removeEventListener('resize', recalculateModalPosition);
    };
  }, [isModalOpen]);

  // MAIN RENDER
  // -----------
  return (
    <>
      <Button
        variant="outline"
        transition="all 0.1s"
        width={buttonWidth}
        _hover={{ transform: 'scale(1.1)' }}
        onClick={onModalOpen}
      >
        {buttonName}
      </Button>
      <Modal isOpen={isModalOpen} onClose={onModalClose}>
        <ModalOverlay />
        <ModalContent ref={modalRef}>
          <ModalHeader w="100%" textAlign="center">
            {title}
          </ModalHeader>
          <ModalCloseButton color="primaryColor" />
          <ModalBody>{children}</ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onModalClose}>
              {title}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
