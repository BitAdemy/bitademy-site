import _ from 'lodash';
import React from 'react';
import { BlogHeader, Layout } from '../components/index';
import { dateTime, getPosts, Link, safePrefix } from '../utils';

export default class Blog extends React.Component {
  render() {
    const display_posts = getPosts(this.props.pageContext);
    return (
      <Layout {...this.props}>
        <div className="outer">
          <div className="inner">
            <BlogHeader {...this.props}></BlogHeader>
            <div className="post-feed">
              {_.map(display_posts, (post, post_idx) => (
                <article key={post_idx} className="post post-card">
                  <div className="post-card-inside">
                    {_.get(post, 'frontmatter.thumb_img_path') && (
                      <Link className="post-card-thumbnail" to={safePrefix(_.get(post, 'url'))}>
                        <img
                          className="thumbnail"
                          src={safePrefix(_.get(post, 'frontmatter.thumb_img_path'))}
                          alt={_.get(post, 'frontmatter.title')}
                        />
                      </Link>
                    )}
                    <div className="post-card-content">
                      <header className="post-header">
                        <h2 className="post-title">
                          <Link to={safePrefix(_.get(post, 'url'))} rel="bookmark">
                            {_.get(post, 'frontmatter.title')}
                          </Link>
                        </h2>
                      </header>
                      <div className="post-excerpt">
                        <p>{_.get(post, 'frontmatter.excerpt')}</p>
                      </div>
                      <footer className="post-meta">
                        <Link
                          to={safePrefix(_.get(post, 'frontmatter.category_url'))}
                          rel="bookmark"
                          className="margin-left">
                          📂 {_.get(post, 'frontmatter.category')}
                        </Link>
                        <time
                          className="published margin-right"
                          dateTime={dateTime.getForRobots(_.get(post, 'frontmatter.date'))}>
                          📅 {dateTime.getForHumans(_.get(post, 'frontmatter.date'))}
                        </time>
                      </footer>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
