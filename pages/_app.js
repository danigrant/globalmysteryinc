import React from 'react'
import App from 'next/app'
import Head from 'next/head'

class GlobalMysteryInc extends App {
  constructor(props) {
    super(props)
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <div>
        <Head>
          <title>Global Mystery Inc.</title>
          <link rel="icon" href="/images/favicon.png" type="image/png" />
          <link href="https://fonts.googleapis.com/css?family=Nunito:700,800,900&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <link rel="stylesheet" href="/css/utils.css" />
          <link rel="stylesheet" href="/css/styles.css" />
        </Head>
        <Component {...pageProps} />
      </div>
    )
  }
}

GlobalMysteryInc.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps }
}

export default GlobalMysteryInc
