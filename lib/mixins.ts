import { css } from 'styled-components'

import theme from './theme'

export const truncate = css`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const mq = (key: keyof typeof theme.screens) => {
  return (style: TemplateStringsArray | String) =>
    `@media (min-width: ${theme.screens[key]}px) { ${style} }`
}
