import { Dialog } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { Dispatch, ReactNode, SetStateAction } from 'react'
import styled from 'styled-components'

import { fade, slideTop, spring } from 'lib/animations'

type Props = {
  isOpen: boolean
  toggle: Dispatch<SetStateAction<boolean>>
  onExit?: () => void
  children: ReactNode
}

const Modal = ({ isOpen, toggle, onExit, children }: Props) => {
  return (
    <AnimatePresence onExitComplete={onExit}>
      {isOpen && (
        <Dialog as={ModalWrapper} open={isOpen} onClose={toggle} static>
          <Dialog.Overlay
            as={ModalOverlay}
            variants={fade}
            initial="hidden"
            animate="visible"
            exit="hidden"
          />
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
  background-color: ${({ theme }) => theme.colors.surfaceLight};
  box-shadow: ${({ theme }) => theme.shadows[500]};
  backdrop-filter: blur(30px);
  overflow: hidden;
`

export default Modal
