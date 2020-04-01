import React from 'react';
import { Link, props } from '../../utils';
import { SocialSharing, TimeAuthor } from '../index';

export default class PostMetaData extends React.Component {
  render() {
    return (
      <aside className="to-bottom">
        <TimeAuthor {...this.props}></TimeAuthor>
        <nav className="outer-micro margin-top">
          <div className="margin-bottom">
            <span className="margin-right" role="img" aria-label="libro">
              📗
            </span>
            <Link to="/blog">Blog</Link>
          </div>
          <div className="margin-bottom">
            <span className="margin-right" role="img" aria-label="carpeta">
              📂
            </span>
            <Link to={props.getPostCategoryUrl(this.props)}>
              {props.getPostCategory(this.props)}
            </Link>
          </div>
        </nav>
        <SocialSharing {...this.props}></SocialSharing>
      </aside>
    );
  }
}
