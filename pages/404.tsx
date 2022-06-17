import Head from 'next/head'

import styled from 'styled-components'

const ErrorPage = () => {
  return (
    <Container>
      <Head>
        <title>404 - Cryptowatch</title>
      </Head>
      <Heading>404</Heading>
      <p>Oups ! Cette page n&rsquo;existe pas</p>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  place-content: center;
  height: 100%;
  text-align: center;
`

const Heading = styled.h1`
  margin-bottom: ${({ theme }) => theme.sizes[250]};
  font-size: ${({ theme }) => theme.fontSizes[600]};
  font-weight: ${({ theme }) => theme.fontWeights[600]};
`

export default ErrorPage
