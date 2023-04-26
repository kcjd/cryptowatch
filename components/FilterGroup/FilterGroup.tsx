import { RadioGroup } from "@headlessui/react";
import { Fragment } from "react";
import styled from "styled-components";
import Button from "components/Button";
import ButtonGroup from "components/ButtonGroup";

type Props = {
  value: number;
  filters: {
    value: number;
    label: string;
  }[];
  onChange: (value: number) => void;
};

const FilterGroup = ({ value, filters, onChange }: Props) => {
  return (
    <RadioGroup as={Wrapper} value={value} onChange={onChange}>
      {filters.map((filter) => (
        <RadioGroup.Option
          as={Fragment}
          key={filter.value}
          value={filter.value}
        >
          {({ checked }) => <Filter active={checked}>{filter.label}</Filter>}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
};

const Wrapper = styled(ButtonGroup)`
  grid-auto-columns: 1fr;
`;

const Filter = styled(Button)`
  justify-content: center;
  height: auto;
  padding: ${({ theme }) => theme.sizes[150]};
  border-radius: 0;
  border-bottom: 2px solid;
  border-color: ${({ theme, active }) =>
    active ? theme.colors.primary : "transparent"};
  background-color: transparent !important;
  color: ${({ theme, active }) =>
    active ? theme.colors.text : theme.colors.textLight};
  font-size: ${({ theme }) => theme.fontSizes[300]};
`;

export default FilterGroup;
