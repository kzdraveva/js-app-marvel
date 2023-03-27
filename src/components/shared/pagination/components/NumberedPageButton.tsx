import { Button, ButtonProps } from '@chakra-ui/react';

interface INumberedPageButton extends Omit<ButtonProps, 'onClick'> {
  onClick: (value: any) => void;
}

// Numbered page button component for pagination
export const NumberedPageButton = ({
  children,
  onClick,
  ...rest
}: INumberedPageButton) => {

  // MAIN RENDER
  // ----------
  return (
    <Button
      onClick={onClick}
      {...rest}
      background="transparent"
      p="2"
      borderRadius="68px"
      border="1px solid "
      borderColor="primaryColor"
      _hover={{ background: 'secondaryColor' }}
      _active={{ background: 'secondaryColor', border: 'none' }}
    >
      {children}
    </Button>
  );
};
