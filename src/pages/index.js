import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import image from "./IMG_0475.jpg"
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
  <div className="container">
    <div className={styles.headingSection}>
      <div className={styles.profileImageWrapper}>
        <img src={image} alt="Profile Image" className={styles.profileImage} />
      </div>
      <h1 className="hero__title">Vivekanand Vernekar</h1>
      <p className="hero__subtitle">
     Full Stack Java Developer Intern at iNeuron.ai
    </p>
    </div>
    
    <div className={styles.buttons}></div>
  </div>
</header>

  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={"Vivekanand Vernekar"}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
