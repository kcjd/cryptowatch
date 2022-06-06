import { useRouter } from 'next/router'
import styled from 'styled-components'
import { ChevronBack, ChevronForward } from '@styled-icons/ionicons-solid'
import Button from '../Button'

type Props = {
  current: number
  max: number
}

const Pagination = ({ current, max }: Props) => {
  const router = useRouter()

  const handleChange = (page: number) => {
    router.push(`?page=${page}`)
  }

  return (
    <Wrapper aria-label="Pagination">
      <Button
        onClick={() => handleChange(Math.max(current - 1, 1))}
        disabled={current === 1}
        aria-label="Page précédente"
      >
        <ChevronBack size={16} />
      </Button>
      {[...Array(max)].map((_, i) => {
        const page = i + 1
        const isActive = page === current
        return (
          <Button
            key={page}
            active={isActive}
            onClick={() => handleChange(page)}
            aria-current={isActive ? 'page' : 'false'}
            aria-label={`Page ${page}`}
          >
            {page}
          </Button>
        )
      })}
      <Button
        onClick={() => handleChange(Math.min(current + 1, max))}
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

  & ${Button} {
    justify-content: center;
    width: ${({ theme }) => theme.sizes[650]};
  }
`

export default Pagination
