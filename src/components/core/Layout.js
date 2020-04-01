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
          <title>
            {props.getPageTitle(this.props) && props.getPageTitle(this.props) + ' - '}
            {props.getSiteTitle(this.props)}
          </title>
          <meta name="description" content={props.getPageExcerpt(this.props)}></meta>
          <link rel="icon" href="/images/favicon_io/favicon.ico" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="google" content="notranslate" />
          <meta name="robots" content="index, follow" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={props.getPageTitle(this.props)} />
          <meta property="og:description" content={props.getPageExcerpt(this.props)} />
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
          <meta name="twitter:description" content={props.getPageExcerpt(this.props)} />
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
