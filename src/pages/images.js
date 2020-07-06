import React from "react";
import Layout from "../components/layout";
// import Header from "../examples/header";
import Image from "gatsby-image";
import styles from "../components/layout.module.scss";
import { graphql, useStaticQuery } from "gatsby";
import img from "../images/image-1.jpg";
const getImages = graphql`
  {
    myFixedImage: file(relativePath: { eq: "image-3.jpg" }) {
      childImageSharp {
        fixed(width: 300, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    myFluidImage: file(relativePath: { eq: "image-2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;
const Examples = props => {
  const data = useStaticQuery(getImages);
  console.log(data);
  return (
    <Layout>
      <h1>Images Examples</h1>
      <section className={styles.images}>
        <article className={styles.singleImage}>
          <h3>Basic image</h3>
          <img src={img} alt="simple react import" width="100%" />
        </article>
        <article className={styles.singleImage}>
          <h3>Fixed Image/blur</h3>
          <Image
            fixed={data.myFixedImage.childImageSharp.fixed}
            objectFit="cover"
          />
        </article>
        <article className={styles.singleImage}>
          <h3>Fluid Image/svg</h3>
          <Image fluid={data.myFluidImage.childImageSharp.fluid} />
        </article>
      </section>
    </Layout>
  );
};

export default Examples;
