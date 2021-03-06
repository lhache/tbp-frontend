import React from 'react'
import { navigate } from 'gatsby'
import _get from 'lodash/get'
import AppLayout from '../../layouts/app-layout'
import SEO from '../../components/seo'
import Header from '../../components/header'
import Results from '../../app/Results'
import Result from '../../app/result'
import { Flex, Box } from '@rebass/grid'
import TernaryButton from '../../design-system/Buttons/ternary-button'
import Ages from '../../app/ages'
import Categories from '../../app/categories'
import WidthContainer from '../../components/width-container'
import WordCloud from '../../app/wordcloud'

const DetailsPage = (props) => {
  return (
    <AppLayout>
      <SEO title="Spielzeug" robots={[`noindex`, `nofollow`]} />
      <Header siteTitle={'The Better Play'}>
        <Flex>
          <Box pl={[1, 1, 2]}>
            <TernaryButton
              onClick={() =>
                navigate(
                  '/app/results',
                  Object.assign({}, props.location.state, {
                    state: {
                      search: _get(props.location.state, 'search'),
                    },
                  })
                )
              }
              size="tiny"
            >
              {'< Zurück'}
            </TernaryButton>
          </Box>
        </Flex>
      </Header>

      <WidthContainer>
        <Flex my={2} width={1} justifyContent="center">
          <Box width={1} p={2}>
            <Result
              location={props.location}
              item={_get(props.location.state, 'selectedItem')}
            />
          </Box>
        </Flex>
        <Flex my={4} width={1} justifyContent="center" flexDirection="column">
          <Box width={1} px={3}>
            <h3
              style={{
                marginBottom: 0,
              }}
            >
              Ähnliche Spielzeuge
            </h3>
          </Box>
          <Flex mt={3} mb={2} width={1} justifyContent="center">
            <Box width={1}>
              <Flex>
                <Box width={1 / 2} pl={2} pr={2}>
                  <Ages
                    search={_get(props.location.state, 'search')}
                    locationState={props.location.state}
                  />
                </Box>
                <Box width={1 / 2} pr={2} pl={2}>
                  <Categories
                    search={_get(props.location.state, 'search')}
                    locationState={props.location.state}
                  />
                </Box>
              </Flex>
            </Box>
          </Flex>
          <Flex flexDirection="column"></Flex>
          <Box width={1}>
            <Results
              hideLoadMore={false}
              searchParams={
                _get(props.location.state, 'search') || {
                  age_from: 0,
                  age_until: 1200,
                }
              }
            />
          </Box>
          <Box>
            <Flex justifyContent="center">
              <Box width={[1, 2 / 3, 2 / 3]} mb={2} py={3}>
                <WordCloud
                  searchParams={_get(props.location.state, 'search')}
                />
              </Box>
            </Flex>
          </Box>
        </Flex>
      </WidthContainer>
    </AppLayout>
  )
}

export default DetailsPage
