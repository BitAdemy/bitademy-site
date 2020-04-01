import React from 'react';
import { Link, props } from '../../utils';
import { SocialSharing, TimeAuthor } from '../index';

export default class PostMetaData extends React.Component {
  render() {
    return (
      <section className="to-bottom">
        <TimeAuthor {...this.props}></TimeAuthor>
        <hr></hr>
        {props.getPostCategory(this.props) && (
          <div className="outer-micro">
            <Link to="/blog" className="button secondary ">
              📗 Blog
            </Link>
            <p></p>
            <Link to={props.getPostCategoryUrl(this.props)} className="button secondary ">
              📂 {props.getPostCategory(this.props)}
            </Link>
          </div>
        )}
        <hr></hr>
        <SocialSharing {...this.props}></SocialSharing>
      </section>
    );
  }
}
