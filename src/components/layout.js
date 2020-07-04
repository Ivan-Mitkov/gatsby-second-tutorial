/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { Link } from "gatsby";
//get accsess to bootstrap in all files
// import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./header";
import "./layout.module.scss";
import Footer from "./footer";
import Menu from "./menu";
import Button from "../components/button";

export const StyledLink = styled.div`
  a {
    color: #fff;
    text-decoration: none;
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Menu />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: "16px",
          minHeight: `100vh`,
        }}
      >
        <Button>
          <StyledLink>
            <Link to="/">Go back</Link>
          </StyledLink>
        </Button>
        <main className="mane">{children}</main>
      </div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
