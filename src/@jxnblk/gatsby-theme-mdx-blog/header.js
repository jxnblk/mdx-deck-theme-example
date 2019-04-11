import React from 'react'
import { Link } from 'gatsby'
import {
  Box,
  Container,
  Styled,
} from '@jxnblk/gatsby-theme-mdx-blog'

export default props =>
  <Box as='header'>
    <Container
      css={{
        display: 'flex',
      }}>
      <Styled.h3
        css={{
          margin: 0,
          a: {
            color: 'inherit',
            textDecoration: 'none',
          }
        }}>
        <Link to='/'>
          Blog + MDX Deck
        </Link>
      </Styled.h3>
      <Box mx='auto' />
      <Styled.a as={Link} to='/decks'>
        Decks
      </Styled.a>
      <Box mx={2} />
      <Styled.a as={Link} to='/blog'>
        Blog
      </Styled.a>
    </Container>
  </Box>
