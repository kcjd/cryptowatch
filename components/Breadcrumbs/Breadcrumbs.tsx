import Link from 'next/link'

import { ChevronForward } from '@styled-icons/ionicons-solid'
import { Fragment } from 'react'
import styled from 'styled-components'

type Props = {
  items: {
    label: string
    href: string
  }[]
}

const Breadcrumbs = ({ items }: Props) => {
  const allItems = [{ label: 'Accueil', href: '/' }, ...items]

  return (
    <Wrapper aria-label="Fil d'ariane">
      {allItems.map((item, i) => {
        const isLast = i === allItems.length - 1
        return (
          <Fragment key={item.label}>
            <Link href={item.href} passHref>
              <Item aria-current={isLast ? 'page' : 'false'}>{item.label}</Item>
            </Link>
            {!isLast && <ChevronForward size={12} />}
          </Fragment>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.sizes[200]};
  margin-bottom: ${({ theme }) => theme.sizes[650]};
  color: ${({ theme }) => theme.colors.textLight};
`

const Item = styled.a`
  font-size: ${({ theme }) => theme.fontSizes[300]};
`

export default Breadcrumbs
