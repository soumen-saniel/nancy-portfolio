import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'
import Button from 'src/components/Button'
import styles from './styles.module.scss'

const ProfilePicture = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "ProfilePicture.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img
    fluid={data.file.childImageSharp.fluid}
    objectFit='cover'
  />
}

const Landing = (props) => {
  return (
    <div className={styles.root}>
      <section className={styles.sectionContent}>
        <h1>The Thought <br/>Evangelist</h1>
        <p>
          Data Analyst | Writer | Speaker | Traveler | Voracious Reader
        </p>
        <h4>
          An inquisitive explorer with <br/>
          a wider frame of reference towards life, <br/>
          engineer by profession <br/>
          and a traveller by choice. <br/>
          Believe in expression of thought, <br/>
          so do I love to write.
        </h4>
        <section>
          <Button filled>CONTACT</Button>
        </section>
      </section>
      <div className={styles.sectionImg}>
        <ProfilePicture />
      </div>
    </div>
  )
}

export default Landing
