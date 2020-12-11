import React from "react"
import { Text, TextWrapper } from "../components/shared/TextWrapper"
import { SkillWrapper, Items, SkillItem } from "../components/shared/Skill"
import { useStaticQuery, graphql } from "gatsby"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          stacks
        }
      }
    }
  `)
  return (
    <>
      <TextWrapper>
        <Text>
          I build websites and web applications! I have background both on front and back end technologies. My main stack would be MongoDB, Express, React and NodeJs, but at the moment I'm focusing more on the front-end technologies.
        </Text>
      </TextWrapper>
      <SkillWrapper>
        <h4>Current Dev Stack</h4>
        <Items>
          {data.site.siteMetadata.stacks.map(stack => (
            <SkillItem key={stack}>{stack}</SkillItem>
          ))}
        </Items>
      </SkillWrapper>
    </>
  )
}
export default About
