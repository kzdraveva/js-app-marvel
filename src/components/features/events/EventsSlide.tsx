import { Box } from '@chakra-ui/react';

interface IEventsSlide {
  isActive: boolean;
  children: any;
}

// Component for Events Slide
export const EventsSlide = ({ isActive, children }: IEventsSlide) => {
  // Transitions
  const transitionDuration = '0.5s';
  const transitionTiming = 'ease-in-out';
  const transitionStyles = {
    entering: { transform: 'translateX(-100%)' },
    entered: { transform: 'translateX(0)' },
    exiting: { transform: 'translateX(100%)' },
    exited: { transform: 'translateX(100%)' },
  };

  // MAIN RENDER
  // -----------
  return (
    <Box
      w="100%"
      h="50%"
      display={isActive ? 'block' : 'none'}
      transition={`transform ${transitionDuration} ${transitionTiming}`}
      {...transitionStyles[isActive ? 'entered' : 'exited']}
    >
      {children}
    </Box>
  );
};
