import React from 'react'
import styled from 'styled-components'
import { Box, Flex } from '@rebass/grid'
import InternalLink from '../design-system/Links/internal-link'
import { colors } from '../design-system/theme'
import FooterList from './footer-list'
import ExternalLink from '../design-system/Links/external-link'
import WidthContainer from './width-container'
import SSRRenderer from './ssr-renderer'

const FooterLogo = styled.img`
  max-width: 300px;
`

const FooterComponentMobile = (props) => (
  <WidthContainer className={props.className}>
    <Flex p={4} flexDirection="column" bg={colors.teal}>
      <Box alignSelf="center">
        <InternalLink to="/">
          <FooterLogo
            className="Header-Logo"
            src="/images/logo.svg"
            alt="the better play"
          />
        </InternalLink>
      </Box>
      <Box>Inspiration fur gutes Spielzeug</Box>
      <Box>Copyright © {new Date().getFullYear()}</Box>
      <Box alignSelf="flex-start" mt={3}>
        <ExternalLink
          href="https://www.facebook.com/THE-BETTER-PLAY-311913689294308/"
          target="_blank"
        >
          <img src="/images/icons/icon-f.svg" alt="Facebook" width="20px" />
        </ExternalLink>
      </Box>
      <Box alignSelf="flex-end">
        <FooterList data={props.data} />
      </Box>
    </Flex>
  </WidthContainer>
)

const FooterMobile = styled(FooterComponentMobile)`
  background: ${colors.teal};
  color: ${colors.halfGrey};
  font-size: 14px;
  box-shadow: 0px 0px 2px 2px ${colors.darkGrey};
`

const FooterComponentDesktop = (props) => (
  <Flex
    className={props.className}
    justifyContent="center"
    p={4}
    bg={colors.teal}
  >
    <WidthContainer>
      <Flex>
        <Box width={4 / 10}>
          <Flex flexDirection="column">
            <Box>
              <InternalLink to="/">
                <FooterLogo
                  className="Header-Logo"
                  src="/images/logo.svg"
                  alt="the better play"
                />
              </InternalLink>
            </Box>
            <Box>Inspiration fur gutes Spielzeug</Box>
            <Box>Copyright © {new Date().getFullYear()}</Box>
            <Box>
              <ExternalLink
                href="https://www.facebook.com/THE-BETTER-PLAY-311913689294308/"
                target="_blank"
              >
                <img
                  src="/images/icons/icon-f.svg"
                  alt="Facebook"
                  width="20px"
                />
              </ExternalLink>
            </Box>
          </Flex>
        </Box>
        <Box width={6 / 10}>
          <Flex flexDirection="column">
            <Box alignSelf="flex-end" mt={5}>
              <FooterList data={props.data} />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </WidthContainer>
  </Flex>
)

const FooterDesktop = styled(FooterComponentDesktop)`
  background: ${colors.teal};
  color: ${colors.halfGrey};
  font-size: 14px;
  box-shadow: 0px 0px 2px 2px ${colors.darkGrey};
`

const Footer = (props) => (
  <SSRRenderer
    mobileComponent={<FooterMobile {...props} />}
    desktopComponent={<FooterDesktop {...props} />}
  />
)

export default Footer
