import _ from "lodash";
import React from "react";
import { htmlToReact } from "../utils";
export default class TutorialHeader extends React.Component {
  render() {
    return (
      <div>
        <header className="post-header">
          <h1 className="post-title">
            {_.get(this.props, "pageContext.frontmatter.title")}
          </h1>
        </header>
        {_.get(this.props, "pageContext.frontmatter.subtitle") && (
          <div className="post-subtitle">
            {htmlToReact(_.get(this.props, "pageContext.frontmatter.subtitle"))}
          </div>
        )}
      </div>
    );
  }
}