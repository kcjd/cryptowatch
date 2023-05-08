import { RadioGroup } from "@headlessui/react";
import styled from "styled-components";

type Props = {
  value: number;
  options: {
    value: number;
    label: string;
  }[];
  onChange: (value: number) => void;
};

const ToggleGroup = ({ value, options, onChange }: Props) => {
  return (
    <RadioGroup as={StyledToggleGroup} value={value} onChange={onChange}>
      {options.map((option) => (
        <RadioGroup.Option key={option.value} value={option.value}>
          {option.label}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
};

const StyledToggleGroup = styled.div`
  display: flex;
  gap: ${(props) => props.theme.sizes[200]};

  div {
    padding: ${(props) => props.theme.sizes[150]};
    border-bottom: 2px solid;
    border-color: transparent;
    color: ${(props) => props.theme.colors.neutral[400]};
    font-size: ${(props) => props.theme.fontSizes[300]};
    font-weight: 500;
    cursor: pointer;

    &[data-headlessui-state~="checked"] {
      border-color: ${(props) => props.theme.colors.primary[500]};
      color: ${(props) => props.theme.colors.neutral[50]};
    }
  }
`;

export default ToggleGroup;
