import { Fragment } from 'react'
import { RadioGroup } from '@headlessui/react'
import styled from 'styled-components'
import Button from '../Button'
import ButtonGroup from '../ButtonGroup'

type Props = {
  value: number
  filters: {
    value: number
    label: string
  }[]
  onChange: (value: number) => void
}

const FilterGroup = ({ value, filters, onChange }: Props) => {
  return (
    <RadioGroup as={Wrapper} value={value} onChange={onChange}>
      {filters.map((filter) => (
        <RadioGroup.Option as={Fragment} key={filter.value} value={filter.value}>
          {({ checked }) => <Filter active={checked}>{filter.label}</Filter>}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  )
}

const Wrapper = styled(ButtonGroup)`
  border-radius: ${({ theme }) => theme.borderRadius[300]};
  background-color: ${({ theme }) => theme.colors.surface};
  overflow: hidden;
`

const Filter = styled(Button)`
  border-radius: 0;
  background-color: ${({ theme, active }) => (active ? theme.colors.highlight : 'transparent')};
  font-size: ${({ theme }) => theme.fontSizes[300]};
`

export default FilterGroup
