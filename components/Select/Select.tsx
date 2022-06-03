import { Fragment } from 'react'
import styled from 'styled-components'
import { Listbox } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from '@styled-icons/ionicons-solid'
import Button from '../Button'
import { slideBottom, spring } from '../../helpers/animations'
import MenuItem from '../MenuItem'

type Props = {
  value: string
  options: string[]
  onChange: (value: string) => void
}

const Select = ({ value, options, onChange }: Props) => {
  return (
    <Listbox as={Wrapper} value={value} onChange={onChange}>
      {({ open }) => (
        <>
          <Listbox.Button as={SelectButton}>
            {value} <ChevronDown size={12} />
          </Listbox.Button>
          <AnimatePresence>
            {open && (
              <Listbox.Options
                as={SelectList}
                variants={slideBottom}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={spring}
                static
              >
                {options.map((option, i) => (
                  <Listbox.Option key={i} as={Fragment} value={option}>
                    {({ active }) => <MenuItem active={active}>{option}</MenuItem>}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            )}
          </AnimatePresence>
        </>
      )}
    </Listbox>
  )
}

const Wrapper = styled.div`
  position: relative;
`

const SelectButton = styled(Button)`
  min-width: ${({ theme }) => theme.sizes[900]};
`

const SelectList = styled(motion.ul)`
  position: absolute;
  width: 100%;
  margin-top: ${({ theme }) => theme.sizes[100]};
  padding-block: ${({ theme }) => theme.sizes[150]};
  border-radius: ${({ theme }) => theme.borderRadius[300]};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows[400]};
  overflow: hidden;
`

export default Select
