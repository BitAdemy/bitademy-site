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
          <meta property="og:type" content="article" />
          <meta
            property="og:title"
            content={_.get(this.props, "pageContext.frontmatter.title")}
          />
          <meta
            property="og:description"
            content={_.get(this.props, "pageContext.frontmatter.excerpt")}
          />
          <meta
            property="og:image"
            content={
              _.get(this.props, "pageContext.site.siteMetadata.siteUrl") +
              "/" +
              _.get(this.props, "pageContext.frontmatter.img_path")
            }
          />
          <meta
            property="og:url"
            content={
              _.get(this.props, "pageContext.site.siteMetadata.siteUrl") +
              "/" +
              _.get(this.props, "pageContext.frontmatter.post_url")
            }
          />
          <meta
            property="og:site_name"
            content={_.get(
              this.props,
              "pageContext.site.siteMetadata.header.title"
            )}
          />
          <meta
            name="twitter:title"
            content={_.get(this.props, "pageContext.frontmatter.title")}
          />
          <meta
            name="twitter:description"
            content={_.get(this.props, "pageContext.frontmatter.excerpt")}
          />
          <meta
            name="twitter:image"
            content={
              _.get(this.props, "pageContext.site.siteMetadata.siteUrl") +
              "/" +
              _.get(this.props, "pageContext.frontmatter.img_path")
            }
          />
          <meta name="twitter:site" content="@bit_ademy" />
          <meta name="twitter:creator" content="@bit_ademy" />

          <link
            rel="canonical"
            href={
              _.get(this.props, "pageContext.site.siteMetadata.siteUrl") +
              "/" +
              _.get(this.props, "pageContext.frontmatter.post_url")
            }
          />
          <link
            async
            rel="stylesheet"
            href={safePrefix("assets/css/main.css")}
          />
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
