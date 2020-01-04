import { Link } from 'gatsby';
import React from 'react';
import Image from '../components/image';
import Layout from '../components/layout';
import SEO from '../components/seo';
import '../styles/tailwind.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div className="w-1/4">
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
