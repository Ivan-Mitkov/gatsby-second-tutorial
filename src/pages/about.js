import React from "react";
import Layout from "../components/layout";
import styles from "../sass/about.module.scss";
const About = props => {
  return (
    <Layout>
      <div className={styles.aboutBody} >
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut quas
          vitae voluptatem quo magnam, facilis quis in molestiae quidem dolor
          atque? Odio eligendi voluptate ratione nam dicta in at deserunt.
        </p>
      </div>
    </Layout>
  );
};

export default About;
