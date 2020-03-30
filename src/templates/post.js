import _ from "lodash";
import React from "react";
import { Layout, PostHeader, PostMetaData, SectionCta } from "../components/index";
import { htmlToReact } from "../utils";


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



