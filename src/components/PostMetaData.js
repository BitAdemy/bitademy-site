import _ from "lodash";
import React from "react";
import { SocialSharing, TimeAuthor } from "../components/index";
import { Link, safePrefix } from "../utils";

export default class PostMetaData extends React.Component {
  render() {
    return (
      <section className="to-bottom">
        <TimeAuthor  {...this.props}></TimeAuthor>
        <hr></hr>
        {_.get(this.props, "pageContext.frontmatter.category") && (
          <div className="outer-micro">
            <Link
              to={safePrefix(
                _.get(this.props, "pageContext.frontmatter.category_url")
              ).toLowerCase()}
              className="button secondary "
            >
              📂 {_.get(this.props, "pageContext.frontmatter.category")}
            </Link>
          </div>
        )}
        <hr></hr>
        <SocialSharing  {...this.props}></SocialSharing>
      </section>
    );
  }
}
