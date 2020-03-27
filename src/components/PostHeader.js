import _ from "lodash";
import moment from "moment-strftime";
import React from "react";
import { htmlToReact, Link, safePrefix } from "../utils";

export default class PostHeader extends React.Component {
  render() {
    return (
      <div>
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
            {htmlToReact(_.get(this.props, "pageContext.frontmatter.subtitle"))}
          </div>
        )}
        <PostTags {...this.props}></PostTags>
      </div>
    );
  }
}
class PostTags extends React.Component {
  render() {
    return (
      <section>
        <time
          className="margin-right"
          dateTime={moment(
            _.get(this.props, "pageContext.frontmatter.date")
          ).strftime("%Y-%m-%d %H:%M")}
        >
          📅{" "}
          {moment(_.get(this.props, "pageContext.frontmatter.date")).strftime(
            "%d - %m - %y"
          )}
        </time>
        <Link
          to={safePrefix(
            _.get(this.props, "pageContext.frontmatter.category_url")
          ).toLowerCase()}
          className="margin-left margin-right"
        >
          {_.get(this.props, "pageContext.frontmatter.category")}
        </Link>
        <hr />
      </section>
    );
  }
}
