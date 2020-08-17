import React from 'react';
import { Helmet } from 'react-helmet';
import { props, safePrefix } from '../../utils';
import Footer from './Footer';
import Header from './Header';

export default class Body extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>{props.getSiteTitle(this.props)}</title>
          <meta name="description" content={props.getPageDescription(this.props)}></meta>
          <link rel="icon" href="/images/favicon_io/favicon.ico" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="google" content="notranslate" />
          <meta name="robots" content="index, follow" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={props.getPageTitle(this.props)} />
          <meta property="og:description" content={props.getPageDescription(this.props)} />
          <meta
            property="og:image"
            content={props.getSiteUrl(this.props) + '/' + props.getPageImgPath(this.props)}
          />
          <meta
            property="og:url"
            content={props.getSiteUrl(this.props) + '/' + props.getPageUrl(this.props)}
          />
          <meta property="og:site_name" content={props.getSiteTitle(this.props)} />
          <meta name="twitter:title" content={props.getPageTitle(this.props)} />
          <meta name="twitter:description" content={props.getPageDescription(this.props)} />
          <meta
            name="twitter:image"
            content={props.getSiteUrl(this.props) + '/' + props.getPageImgPath(this.props)}
          />
          <meta name="twitter:site" content="@bit_ademy" />
          <meta name="twitter:creator" content="@bit_ademy" />
          <link
            rel="canonical"
            href={props.getSiteUrl(this.props) + '/' + props.getPageUrl(this.props)}
          />
          <script type="application/ld+json">
            {`
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "bitAdemy",
              "description": "Aprende CÓDIGO LIMPIO, PATRONES, ARQUITECTURA, INTEGRACIÓN, PRUEBAS... con Alberto Basalo.",
              "url" : "http://www.bitademy.com",
              "sameAs": [
                "https://www.facebook.com/bitAdemy/",
                "https://twitter.com/bit_ademy",
                "https://www.youtube.com/channel/UCOfRLPljJl9JzTCF6lO1uRw",
                "https://www.linkedin.com/company/bitademy/"
            ]
            `}
          </script>
          <script type="application/ld+json">
            {`
              "@context": "https://schema.org",
              "@type": "${props.getPageType(this.props)}",
              "name": "${props.getSiteTitle(this.props)}",
              "description": "${props.getPageDescription(this.props)}",
              "url" : "${props.getSiteUrl(this.props) + '/' + props.getPageUrl(this.props)}",
              "provider": {
                "@type": "Organization",
                "name": "bitAdemy",
                "sameAs": "http://www.bitademy.com"
              }
            `}
          </script>
          <link async rel="stylesheet" href={safePrefix('assets/css/main.css')} />
        </Helmet>
        <div id="page" className={'site palette-' + props.getSitePalette(this.props)}>
          <Header {...this.props} />
          <main id="content" className="site-content">
            {this.props.children}
          </main>
          <Footer {...this.props} />
        </div>
      </React.Fragment>
    );
  }
}
