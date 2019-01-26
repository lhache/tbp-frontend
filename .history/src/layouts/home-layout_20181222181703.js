import React from 'react'
import PropTypes from 'prop-types'
import {StaticQuery, graphql} from 'gatsby'

import Header from './header'
import './layout.css'

const HomeLayout = ({children}) => (
    <StaticQuery
        query={graphql ` query SiteTitleQuery { site { siteMetadata { title } } } `}
        render={data => (
        <React.Fragment>
            <Header siteTitle={data.site.siteMetadata.title}/>
            <div>search bar</div>
            <div>usp</div>
            <div
                style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `0px 1.0875rem 1.45rem`,
                paddingTop: 0
            }}>
                {children}
            </div>
            <div>link list</div>
            <div>footer</div>
        </React.Fragment>
    )}/>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default HomeLayout
