import _ from "lodash";
import React from "react";
import { htmlToReact, safePrefix } from "../utils";
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
      </div>
    );
  }
}