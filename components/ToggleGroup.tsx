import { RadioGroup } from "@headlessui/react";
import styled from "styled-components";
import { Button, ButtonGroup } from "components/Button";

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
    <RadioGroup as={ButtonGroup} value={value} onChange={onChange}>
      {options.map((option) => (
        <RadioGroup.Option
          as={StyledOption}
          key={option.value}
          value={option.value}
        >
          {option.label}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
};

const StyledOption = styled(Button)`
  justify-content: center;
  height: auto;
  padding: ${(props) => props.theme.sizes[150]};
  border-radius: 0;
  border-bottom: 2px solid;
  border-color: transparent;
  background-color: transparent !important;
  color: ${(props) => props.theme.colors.textLight};
  font-size: ${(props) => props.theme.fontSizes[300]};

  &[data-headlessui-state~="checked"] {
    border-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text};
  }
`;

export default ToggleGroup;
