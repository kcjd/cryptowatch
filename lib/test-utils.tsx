import { RenderOptions, render } from '@testing-library/react'
import { ReactElement } from 'react'

import Providers from 'components/Providers'

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: Providers, ...options })

const intersectionObserverMock = () => ({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
})

window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock)

export * from '@testing-library/react'
export { customRender as render }
