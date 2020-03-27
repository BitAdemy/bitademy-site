import _ from "lodash";
import React from "react";
import { Twitter } from "react-social-sharing";
import { Link, safePrefix } from "../utils";

export default class PostFooter extends React.Component {
  render() {
    return (
      <footer className="post-meta">
        <Link
          to={safePrefix(
            _.get(this.props, "pageContext.frontmatter.category_url")
          ).toLowerCase()}
          className="button secondary margin-left"
        >
          {_.get(this.props, "pageContext.frontmatter.category")}
        </Link>
        <Twitter
          solid
          small
          link={
            _.get(
              this.props,
              "pageContext.site.siteMetadata.header.production_url"
            ) + _.get(this.props, "pageContext.frontmatter.post_url")
          }
          message={_.get(this.props, "pageContext.frontmatter.title")}
          className="margin-left margin-right"
        />
      </footer>
    );
  }
}
