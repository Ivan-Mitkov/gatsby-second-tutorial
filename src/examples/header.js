import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const getData = graphql`
  {
    site {
      info: siteMetadata {
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
const ComponentName = () => {
  //in pages and in components
  const data = useStaticQuery(getData);
  const {
    site: {
      //info is our name for siteMetadata
      info: {
        title,
        description,
        name: { name },
      },
    },
  } = data;
  console.log(JSON.stringify(data, null, 4));

  return (
    <>
      <h1>{title}</h1>
      <h2>Site purpose: {description}</h2>
      <p>Made by: {name}</p>
    </>
  );
};

export default ComponentName;
