import { Dialog } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { fade, slideTop, spring } from "lib/animations";

type Props = React.PropsWithChildren & {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  onExit?: () => void;
};

const Modal = ({ isOpen, setOpen, onExit, children }: Props) => {
  return (
    <AnimatePresence onExitComplete={onExit}>
      {isOpen && (
        <Dialog as={StyledDialog} open={isOpen} onClose={setOpen} static>
          <Dialog.Overlay
            as={StyledOverlay}
            variants={fade}
            initial="hidden"
            animate="visible"
            exit="hidden"
          />
          <Dialog.Panel
            as={StyledBody}
            variants={slideTop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={spring}
          >
            {children}
          </Dialog.Panel>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

const StyledDialog = styled.div`
  position: fixed;
  inset: 0;
`;

const StyledOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background-color: ${(props) => props.theme.colors.overlay};
`;

const StyledBody = styled(motion.div)`
  position: relative;
  width: min(100% - ${(props) => props.theme.sizes[600]}, 30rem);
  margin-inline: auto;
  margin-top: 25vh;
  border-radius: ${(props) => props.theme.borderRadius[400]};
  background-color: ${(props) => props.theme.colors.surfaceLight};
  box-shadow: ${(props) => props.theme.shadows[500]};
  backdrop-filter: blur(30px);
  overflow: hidden;
`;

export default Modal;
