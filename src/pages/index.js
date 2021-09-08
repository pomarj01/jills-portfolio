import * as React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App'
import "../styles/index.css";


export default () => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Jillian Pomares's Portfolio</title>
        <html lang='en' />
        <meta name='description' content='Portfolio built using Gatsby' />
      </Helmet>

      <App />
    </>
  )
};
