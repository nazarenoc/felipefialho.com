import styled from 'styled-components'
import media from 'styled-media-query'

import * as V from 'styles/variables'

export const Layout = styled.section`
  display: block;
`

export const Main = styled.main.attrs({
  role: 'main',
})`
  margin-top: ${V.Height.headerSm};
  padding-top: ${V.Space.default};
  width: 100%;

  ${media.greaterThan('medium')`
    margin-top: ${V.Height.headerLg};
  `}
`

export const Template = styled.section`
  ${media.greaterThan('large')`
    display: grid;
    grid-column-gap: ${V.Space.default};
    grid-template-columns: minmax(13rem, 15rem) 1fr minmax(13rem, 15rem);
  `}
`