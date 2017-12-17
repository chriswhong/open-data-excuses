import React from 'react'
import Link from 'gatsby-link'

const IndexPage = (props) => {
  const excuses = props.data.allExcusesJson.edges.map(d => d.node);

  return (
    <div>
      {excuses.map(excuse => <li key={excuse.path}>{excuse.text}</li>)}
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query allExcuses {
    allExcusesJson {
      edges {
        node {
          path
          text
          description
          icon
        }
      }
    }
  }
`;
