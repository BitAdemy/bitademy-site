import _ from "lodash";
import React from "react";
import { Helmet } from "react-helmet";
import { safePrefix } from "../utils";
import Footer from "./Footer";
import Header from "./Header";

export default class Body extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>
            {_.get(this.props, "pageContext.frontmatter.title") &&
              _.get(this.props, "pageContext.frontmatter.title") + " - "}
            {_.get(this.props, "pageContext.site.siteMetadata.title")}
          </title>
          <meta
            name="description"
            content={_.get(this.props, "pageContext.frontmatter.excerpt")}
          ></meta>
          <link rel="icon" href="/images/favicon_io/favicon.ico" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="google" content="notranslate" />
          <meta name="robots" content="index, follow" />
          <link rel="stylesheet" href={safePrefix("assets/css/main.css")} />
        </Helmet>
        <div
          id="page"
          className={
            "site palette-" +
            _.get(this.props, "pageContext.site.siteMetadata.palette")
          }
        >
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
