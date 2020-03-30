import _ from "lodash";
import React from "react";
import { SocialSharing, TimeAuthor } from "../components/index";
import { Link, safePrefix } from "../utils";

export default class TutorialMetaData extends React.Component {


  render() {
    return (
      <section className="to-bottom">
        <TimeAuthor  {...this.props}></TimeAuthor>
        <hr></hr>
        {_.get(this.props, "pageContext.frontmatter.laboratory") && (
          <div className="outer-micro">
            <Link
              to={safePrefix(
                _.get(this.props, "pageContext.frontmatter.laboratory_url")
              ).toLowerCase()}
              className=" "
            >
              ⌨ {_.get(this.props, "pageContext.frontmatter.laboratory")}
            </Link>
          </div>
        )}
        {_.get(this.props, "pageContext.frontmatter.preview") && (
          <div className="outer-micro">
            <Link
              to={safePrefix(
                _.get(this.props, "pageContext.frontmatter.preview_url")
              ).toLowerCase()}
              className="  "
            >
              📹 {_.get(this.props, "pageContext.frontmatter.preview")}
            </Link>
          </div>
        )}
        <hr></hr>
        {_.get(this.props, "pageContext.frontmatter.up") && (
          <div className="outer-micro">
            <Link
              to={safePrefix(
                _.get(this.props, "pageContext.frontmatter.up_url")
              ).toLowerCase()}
              className="button secondary "
            >
              ⏏ {_.get(this.props, "pageContext.frontmatter.up")}
            </Link>
          </div>
        )}
        {_.get(this.props, "pageContext.frontmatter.next") && (
          <div className="outer-micro">
            <Link
              to={safePrefix(
                _.get(this.props, "pageContext.frontmatter.next_url")
              ).toLowerCase()}
              className="button secondary "
            >
              ▶ {_.get(this.props, "pageContext.frontmatter.next")}
            </Link>
          </div>
        )}
        {_.get(this.props, "pageContext.frontmatter.previous") && (
          <div className="outer-micro">
            <Link
              to={safePrefix(
                _.get(this.props, "pageContext.frontmatter.previous_url")
              ).toLowerCase()}
              className="button secondary "
            >
              ◀ {_.get(this.props, "pageContext.frontmatter.previous")}
            </Link>
          </div>
        )}
        <hr></hr>
        <SocialSharing  {...this.props}></SocialSharing>
      </section>
    );
  }
}
