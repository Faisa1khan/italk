import { useStaticQuery, graphql } from "gatsby"

const useImage = () => {
  const image = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "eduardo-dutra.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      message1: file(relativePath: { eq: "abigail-mangum.jpeg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      message2: file(relativePath: { eq: "christopher-rusev.jpeg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      message3: file(relativePath: { eq: "daniel-j-schwarz.jpeg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      message4: file(relativePath: { eq: "matt-barringer.jpeg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return image
}

export default useImage
