import React from "react";
import { graphql } from "gatsby";
import Image from "gatsby-image";
import { Link } from "gatsby";
import Layout from "../components/layout";
import styles from "../pages/product.module.scss";

const ProductTemplate = (props) => {
  console.log(props);
  const {data}=props
  
  
  return (
    <Layout>
      {/* <pre>{JSON.stringify(data.product, null, 4)}</pre> */}
      <div>
        <Link to="/products">All products</Link>

        <section className={styles.singleProduct}>
          <article>
            <Image
              fixed={data.product.image.fixed}
              alt={data.product.title}
              className={styles.productImage}
            ></Image>
          </article>
          <article>
            <h1 className={styles.title}>{data.product.title}</h1>
            <h3 className={styles.price}>$ {data.product.price}</h3>
            <p>{data.product.info.info}</p>
          </article>
        </section>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query GetSingleProduct($currentSlug: String) {
    product: contentfulProduct(slug: { eq: $currentSlug }) {
      title
      slug
      id
      price
      info {
        info
      }
      image {
        fixed(width: 400) {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`;

export default ProductTemplate;
