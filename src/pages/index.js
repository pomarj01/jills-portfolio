import * as React from "react";
import { Helmet } from "react-helmet";
import App from "./App";
import "../styles/index.css";

const IndexPage = ({ location }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Jillian Pomares's Portfolio</title>
      <html lang="en" />
      <meta name="description" content="Portfolio built using Gatsby" />
    </Helmet>

    <App location={location} />
  </>
);

export default IndexPage;
