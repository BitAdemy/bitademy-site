import _ from 'lodash';
import React from 'react';
import { dateTime, getPages, htmlToReact, Link, safePrefix } from '../../utils';

export default class SectionPosts extends React.Component {
  render() {
    let display_posts = _.orderBy(
      getPages(this.props.pageContext.pages, '/blog/'),
      'frontmatter.date',
      'desc'
    );
    let only_posts = display_posts.filter(file => _.get(file, 'template') === 'post');
    let recent_posts = only_posts.slice(0, 3);
    return (
      <section
        id={_.get(this.props, 'section.section_id')}
        className={'block posts-block bg-' + _.get(this.props, 'section.bg') + ' outer'}>
        <div className="block-header inner-small">
          {_.get(this.props, 'section.title') && (
            <h2 className="block-title">{_.get(this.props, 'section.title')}</h2>
          )}
          {_.get(this.props, 'section.subtitle') && (
            <p className="block-subtitle">{htmlToReact(_.get(this.props, 'section.subtitle'))}</p>
          )}
        </div>
        <div className="inner">
          <div className="post-feed">
            {_.map(recent_posts, (post, post_idx) => (
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
                      <h3 className="post-title">
                        <Link to={safePrefix(_.get(post, 'url'))} rel="bookmark">
                          {_.get(post, 'frontmatter.title')}
                        </Link>
                      </h3>
                    </header>
                    <div className="post-excerpt">
                      <p>{_.get(post, 'frontmatter.excerpt')}</p>
                    </div>
                    <footer className="post-meta">
                      <time
                        className="published"
                        dateTime={dateTime.getForRobots(_.get(post, 'frontmatter.date'))}>
                        {dateTime.getForHumans(_.get(post, 'frontmatter.date'))}
                      </time>
                    </footer>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
