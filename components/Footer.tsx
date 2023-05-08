import { LogoGithub } from "@styled-icons/ionicons-solid";
import dayjs from "dayjs";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <div>Cryptowatch — {dayjs().year()}</div>
      <a
        href="https://github.com/kcjd/cryptowatch"
        target="_blank"
        aria-label="Github"
      >
        <LogoGithub size={24} />
      </a>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: ${(props) => props.theme.sizes[600]};
  font-size: ${(props) => props.theme.fontSizes[300]};
  font-weight: 500;
  color: ${(props) => props.theme.colors.neutral[400]};
`;

export default Footer;
