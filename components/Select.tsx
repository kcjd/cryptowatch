import { Listbox } from "@headlessui/react";
import { ChevronDown } from "@styled-icons/ionicons-solid";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { Button } from "components/Button";
import { Menu, MenuItem } from "components/Menu";
import { slideBottom, spring } from "lib/animations";

type Props = {
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

const Select = ({ value, options, onChange }: Props) => {
  return (
    <Listbox as={StyledSelect} value={value} onChange={onChange}>
      {({ open }) => (
        <>
          <Listbox.Button as={Button}>
            {value} <ChevronDown size={12} />
          </Listbox.Button>
          <AnimatePresence>
            {open && (
              <Listbox.Options
                as={StyledMenu}
                variants={slideBottom}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={spring}
                static
              >
                {options.map((option, i) => (
                  <Listbox.Option key={i} as={MenuItem} value={option}>
                    {option}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            )}
          </AnimatePresence>
        </>
      )}
    </Listbox>
  );
};

const StyledSelect = styled.div`
  position: relative;

  ${Button} {
    min-width: ${(props) => props.theme.sizes[900]};
  }
`;

const StyledMenu = styled(motion(Menu))`
  position: absolute;
  width: 100%;
  margin-top: ${(props) => props.theme.sizes[100]};
  border-radius: ${(props) => props.theme.borderRadius[300]};
  background-color: ${(props) => props.theme.colors.surfaceLight};
  box-shadow: ${(props) => props.theme.shadows[400]};
  backdrop-filter: blur(30px);
`;

export default Select;
