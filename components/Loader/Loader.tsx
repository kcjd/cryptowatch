import { motion } from "framer-motion";
import styled from "styled-components";

type Props = {
  className?: string;
};

const Loader = ({ className }: Props) => {
  return (
    <Wrapper className={className}>
      <Spinner
        animate={{ rotate: 360 }}
        transition={{ ease: "linear", duration: 2, repeat: Infinity }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Spinner = styled(motion.div)`
  width: ${({ theme }) => theme.sizes[600]};
  height: ${({ theme }) => theme.sizes[600]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  border: 4px solid transparent;
  border-bottom-color: ${({ theme }) => theme.colors.primary};
  pointer-events: none;
`;

export default Loader;
