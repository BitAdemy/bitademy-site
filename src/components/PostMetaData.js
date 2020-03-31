import React from 'react';
import { SocialSharing, TimeAuthor } from '../components/index';
import { Link, props } from '../utils';

export default class PostMetaData extends React.Component {
  render() {
    return (
      <section className="to-bottom">
        <TimeAuthor {...this.props}></TimeAuthor>
        <hr></hr>
        {props.getPostCategory(this.props) && (
          <div className="outer-micro">
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
