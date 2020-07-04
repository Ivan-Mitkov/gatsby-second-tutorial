import React from "react";
import Layout from "../components/layout";
import Header from "../examples/header";
import { graphql } from "gatsby";
const Examples = props => {
  console.log(props);
  return (
    <Layout>
      <div>
        <h1>Examples</h1>
        <Header />
      </div>
    </Layout>
  );
};
//only in pages - passes data in props
export const data = graphql`
  query MyQuery {
    site {
      siteMetadata {
        name {
          name
          email
        }
        persons
        title
        description
        author
      }
    }
  }
`;
export default Examples;
