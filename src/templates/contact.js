import React from 'react';
import { Layout, SectionCta } from '../components/index';
import { htmlToReact, props } from '../utils';

export default class Contact extends React.Component {
  render() {
    return (
      <Layout {...this.props}>
        <div className="outer">
          <div className="inner-medium">
            <article className="post post-full">
              <header className="post-header">
                <h1 className="post-title">{props.getPageTitle(this.props)}</h1>
              </header>
              {props.getPageSubTitle(this.props) && (
                <div className="post-subtitle">
                  {htmlToReact(props.getPageSubTitle(this.props))}
                </div>
              )}
              <div id="cbox-cfXDzli3mcNKRjjW"></div>
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
