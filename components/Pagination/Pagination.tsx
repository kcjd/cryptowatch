import styled from 'styled-components'
import Button from '../Button'
import { ChevronBack, ChevronForward } from '@styled-icons/ionicons-solid'

type Props = {
  current: number
  max: number
  onChange: (page: number) => void
}

const Pagination = ({ current, max, onChange }: Props) => {
  return (
    <Wrapper aria-label="Pagination">
      <Button onClick={() => onChange(Math.max(current - 1, 1))} disabled={current === 1} aria-label="Page précédente">
        <ChevronBack size={16} />
      </Button>
      {[...Array(max)].map((_, i) => {
        const page = i + 1
        const isActive = page === current
        return (
          <Button
            key={page}
            active={isActive}
            onClick={() => onChange(page)}
            aria-current={isActive ? 'page' : 'false'}
            aria-label={`Page ${page}`}
          >
            {page}
          </Button>
        )
      })}
      <Button
        onClick={() => onChange(Math.min(current + 1, max))}
        disabled={current === max}
        aria-label="Page suivante"
      >
        <ChevronForward size={16} />
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.sizes[200]};
  padding-block: ${({ theme }) => theme.sizes[400]};
`

export default Pagination
