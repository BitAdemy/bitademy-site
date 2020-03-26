import _ from "lodash";
import moment from "moment-strftime";
import React from "react";
import { Twitter } from "react-social-sharing";
import { Layout } from "../components/index";
import { htmlToReact, Link, safePrefix } from "../utils";

export default class Post extends React.Component {
  render() {
    return (
      <Layout {...this.props}>
        <div className="outer">
          <div className="inner-medium">
            <article className="post post-full">
              <header className="post-header">
                <h1 className="post-title">
                  {_.get(this.props, "pageContext.frontmatter.title")}
                </h1>
              </header>
              {_.get(this.props, "pageContext.frontmatter.img_path") && (
                <div className="post-thumbnail">
                  <img
                    src={safePrefix(
                      _.get(this.props, "pageContext.frontmatter.img_path")
                    )}
                    alt={_.get(this.props, "pageContext.frontmatter.title")}
                  />
                </div>
              )}
              {_.get(this.props, "pageContext.frontmatter.subtitle") && (
                <div className="post-subtitle">
                  {htmlToReact(
                    _.get(this.props, "pageContext.frontmatter.subtitle")
                  )}
                </div>
              )}
              <div className="post-content">
                {htmlToReact(_.get(this.props, "pageContext.html"))}
                <h4>
                  <Link
                    to={safePrefix(
                      _.get(this.props, "pageContext.frontmatter.category_url")
                    ).toLowerCase()}
                    className="button secondary"
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
                  />
                </h4>
              </div>
              <footer className="post-meta">
                <time
                  className="published"
                  dateTime={moment(
                    _.get(this.props, "pageContext.frontmatter.date")
                  ).strftime("%Y-%m-%d %H:%M")}
                >
                  {moment(
                    _.get(this.props, "pageContext.frontmatter.date")
                  ).strftime("%d - %m - %y")}
                </time>
              </footer>
            </article>
          </div>
        </div>
      </Layout>
    );
  }
}
