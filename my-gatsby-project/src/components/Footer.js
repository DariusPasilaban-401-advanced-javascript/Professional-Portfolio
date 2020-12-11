import React from "react"
import { FootContainer, Content, MediaLink } from "./shared/Foot"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            linkedIn
            github
          }
        }
      }
    }
  `)
  const { social } = data.site.siteMetadata
  return (
    <FootContainer>
      <Content>
        <div>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
        <div>
          <MediaLink
            href={`https://github.com/${social.github}`}
            target="_blank"
          >
            Github
          </MediaLink>
          <MediaLink
            href={`https://www.linkedin.com/in/${social.linkedIn}`}
            target="_blank"
          >
            LinkedIn
          </MediaLink>
        </div>
      </Content>
    </FootContainer>
  )
}
export default Footer
