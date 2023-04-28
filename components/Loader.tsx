import { motion } from "framer-motion";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledLoader
      animate={{ rotate: 360 }}
      transition={{ ease: "linear", duration: 2, repeat: Infinity }}
    />
  );
};

const StyledLoader = styled(motion.div)`
  width: ${(props) => props.theme.sizes[600]};
  height: ${(props) => props.theme.sizes[600]};
  border-radius: ${(props) => props.theme.borderRadius.full};
  border: 4px solid transparent;
  border-bottom-color: ${(props) => props.theme.colors.primary};
  pointer-events: none;
`;

export default Loader;
