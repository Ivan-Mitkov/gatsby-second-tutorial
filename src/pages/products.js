import React from "react";
import { graphql } from "gatsby";
import Image from "gatsby-image";
import { Link } from "gatsby";
import Layout from "../components/layout";
import styles from "./product.module.scss";
export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        id
        title
        price
        slug
      }
    }
  }
`;
const Products = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data;
  // console.log(products);
  return (
    <Layout>
      <div>
        <h1>Products</h1>
        <section className={styles.page}>
          {products.map(p => {
            return (
              <article key={p.id} className={styles.products}>
                <Image
                  fluid={p.image.fluid}
                  alt={p.title}
                  className={styles.productImage}
                />
                <h2 className={styles.title}>
                  {p.title}
                  <span className={styles.price}> ${p.price}</span>
                </h2>
                <Link to={`/products/${p.slug}`}>More details</Link>
              </article>
            );
          })}
        </section>
      </div>
    </Layout>
  );
};

export default Products;
