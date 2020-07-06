/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const productTemplate = path.resolve(`src/templates/product-template.js`);
  const result = await graphql(`
    query GetProducts {
      products: allContentfulProduct {
        nodes {
          slug
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  // console.log("#######", JSON.stringify(result.data.products.nodes));
  result.data.products.nodes.forEach(node => {
    // console.log(JSON.stringify(node));
    createPage({
      path: `products/${node.slug}`,
      component: productTemplate,
      context: {
        currentSlug: node.slug,
      }, // additional data can be passed via context
    });
  });
};
