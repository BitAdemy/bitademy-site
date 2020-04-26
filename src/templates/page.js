import React from 'react';
import { Layout, SectionCta } from '../components/index';
import { htmlToReact, props, safePrefix } from '../utils';

export default class Page extends React.Component {
  render() {
    return (
      <Layout {...this.props}>
        <div className="outer">
          <div className="inner-medium">
            <article className="post post-full">
              <header className="post-header">
                <h1 className="post-title">{props.getPageTitle(this.props)}</h1>
              </header>
              {props.getPageImgPath(this.props) && (
                <div className="post-thumbnail">
                  <img
                    src={safePrefix(props.getPageImgPath(this.props))}
                    alt={props.getPageTitle(this.props)}
                  />
                </div>
              )}
              {props.getPageSubTitle(this.props) && (
                <div className="post-subtitle">
                  {htmlToReact(props.getPageSubTitle(this.props))}
                </div>
              )}
              <div className="post-content">{htmlToReact(props.getPageHtml(this.props))}</div>
            </article>
            <SectionCta
              key="call-to-action"
              {...this.props}
              section={props.getPageFirstSection(this.props)}
              site={this.props.pageContext.site}></SectionCta>
          </div>
        </div>
      </Layout>
    );
  }
}
