import _ from "lodash";
import moment from "moment-strftime";
import React from "react";
import { Facebook, Linkedin, Twitter } from "react-social-sharing";
import { Layout, SectionCta } from "../components/index";
import { htmlToReact, Link, safePrefix } from "../utils";

export default class Post extends React.Component {
  render() {
    return (
      <Layout {...this.props}>
        <div className="outer">
          <section className="post-block cell">
            <div className="inner">
              <article className="post post-full">
                <PostHeader {...this.props}></PostHeader>
                <div className="grid">
                  <div className="post-content inner-medium">
                    {htmlToReact(_.get(this.props, "pageContext.html"))}
                  </div>
                  <PostMetaData
                    {...this.props}
                    className="inner-micro"
                  ></PostMetaData>
                </div>
              </article>
              <SectionCta
                key="call-to-action"
                {...this.props}
                section={_.get(
                  this.props,
                  "pageContext.frontmatter.sections[0]"
                )}
                site={this.props.pageContext.site}
              ></SectionCta>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

class PostHeader extends React.Component {
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

class PostMetaData extends React.Component {
  render() {
    return (
      <section className="to-bottom">
        <div className="outer-micro">
          <time
            dateTime={moment(
              _.get(this.props, "pageContext.frontmatter.date")
            ).strftime("%Y-%m-%d %H:%M")}
          >
            📅{" "}
            {moment(_.get(this.props, "pageContext.frontmatter.date")).strftime(
              "%d - %m - %y"
            )}
          </time>
          <p></p>
          <div>
            ✍{" "}
            <Link to="https://twitter.com/albertobasalo">Alberto Basalo</Link>
          </div>
        </div>
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
        <div className="outer-micro">
          <Twitter
            simple
            link={
              _.get(
                this.props,
                "pageContext.site.siteMetadata.header.production_url"
              ) + _.get(this.props, "pageContext.frontmatter.post_url")
            }
            message={_.get(this.props, "pageContext.frontmatter.title")}
          />
          <Facebook
            simple
            link={
              _.get(
                this.props,
                "pageContext.site.siteMetadata.header.production_url"
              ) + _.get(this.props, "pageContext.frontmatter.post_url")
            }
          />
          <Linkedin
            simple
            link={
              _.get(
                this.props,
                "pageContext.site.siteMetadata.header.production_url"
              ) + _.get(this.props, "pageContext.frontmatter.post_url")
            }
            message={_.get(this.props, "pageContext.frontmatter.title")}
          />
        </div>
      </section>
    );
  }
}
