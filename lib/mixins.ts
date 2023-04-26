import { css } from "styled-components";

export const truncate = css`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const screens = {
  md: "@media (min-width: 768px)",
  lg: "@media (min-width: 1024px)",
};
