import React from 'react'
import Link from 'gatsby-link'
import FontAwesome from 'react-fontawesome'


const getExcuseCard = (excuse) => {
  const { path, text, description, icon } = excuse;
  return (
    <div className="card" key={path}>
    <Link to={path}>
      <div className="card-body text-center">
        <FontAwesome
          name={icon}
          size='3x'
        />
        <h4 className="card-title excuse-text">{text}</h4>
      </div>
    </Link>
    </div>
  )
}

const IndexPage = (props) => {
  const excuses = props.data.allExcusesJson.edges.map(d => d.node);

  return (
    <div>
      <div className="card-columns">
        {excuses.map(excuse => getExcuseCard(excuse))}
      </div>
      <h5>What is this?</h5>
      <p>This is a prototype open data excuses site inspired by <a href="https://yourlogicalfallacyis.com/">yourlogicalfallacyis.com</a>. I thought a site like this could include common open data excuses and their rebuttals, with nice handy urls for each one.</p>
      <p><a href="https://github.com/chriswhong/open-data-excuses/">Github</a>.  I need help with content & design.  Please consider contributing!  This site was made using the gatsbyjs static site generator.</p>
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
