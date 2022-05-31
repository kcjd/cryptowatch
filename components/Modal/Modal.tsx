import { Dispatch, PropsWithChildren, SetStateAction } from 'react'
import { Dialog } from '@headlessui/react'
import styled from 'styled-components'
import { AnimatePresence, motion } from 'framer-motion'
import { fade, slideTop, spring } from '../../helpers/animations'

type Props = {
  isOpen: boolean
  toggle: Dispatch<SetStateAction<boolean>>
  onExit?: () => void
}

const Modal = ({ isOpen, toggle, onExit, children }: PropsWithChildren<Props>) => {
  return (
    <AnimatePresence onExitComplete={onExit}>
      {isOpen && (
        <Dialog as={ModalWrapper} open={isOpen} onClose={toggle} static>
          <Dialog.Overlay as={ModalOverlay} variants={fade} initial="hidden" animate="visible" exit="hidden" />
          <Dialog.Panel
            as={ModalBody}
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
  )
}

const ModalWrapper = styled.div`
  position: fixed;
  inset: 0;
`

const ModalOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background-color: ${({ theme }) => theme.colors.overlay};
`

const ModalBody = styled(motion.div)`
  position: relative;
  width: min(100% - ${({ theme }) => theme.sizes[600]}, 30rem);
  margin-inline: auto;
  margin-top: 25vh;
  border-radius: ${({ theme }) => theme.borderRadius[400]};
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows[500]};
  overflow: hidden;
`

export default Modal
