import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
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

  useLayoutEffect(() => {
    const recalculateModalPosition = () => {
      const modal = modalRef.current;

      if (modal && isModalOpen) {
        const windowHeight = window.innerHeight;
        const modalHeight = modal.clientHeight;
        modal.style.top = `${Math.max((windowHeight - modalHeight) / 2, 0)}px`;
      }
    };

    recalculateModalPosition();
  }, [isModalOpen]);

  useEffect(() => {
    const recalculateModalPosition = () => {
      requestAnimationFrame(() => {
        const modal = modalRef.current;

        if (modal && isModalOpen) {
          const windowHeight = window.innerHeight;
          const modalHeight = modal.offsetHeight;
          modal.style.top = `${Math.max(
            (windowHeight - modalHeight) / 2,
            0,
          )}px`;
        }
      });
    };

    recalculateModalPosition();

    window.addEventListener('resize', recalculateModalPosition);

    return () => {
      window.removeEventListener('resize', recalculateModalPosition);
    };
  }, [isModalOpen]);

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
