import _ from "lodash";
import React from "react";
import {
  Layout,
  PostFooter,
  PostHeader,
  SectionCta,
} from "../components/index";
import { htmlToReact } from "../utils";

export default class Post extends React.Component {
  render() {
    return (
      <Layout {...this.props}>
        <div className="outer">
          <div className="inner-medium">
            <article className="post post-full">
              <PostHeader {...this.props}></PostHeader>
              <div className="post-content">
                {htmlToReact(_.get(this.props, "pageContext.html"))}
              </div>
              <PostFooter {...this.props}></PostFooter>
            </article>
            <SectionCta
              key="call-to-action"
              {...this.props}
              section={_.get(this.props, "pageContext.frontmatter.sections[0]")}
              site={this.props.pageContext.site}
            ></SectionCta>
          </div>
        </div>
      </Layout>
    );
  }
}
