import React from 'react';
import { Facebook, Linkedin, Twitter } from 'react-social-sharing';
import { props } from '../../utils';

export default class SocialSharing extends React.Component {
  message = props.getPageTitle(this.props);
  post_url = props.getPageUrl(this.props);
  production_url = props.getSiteProductionUrl(this.props);

  render() {
    return (
      <div className="outer-micro">
        <Twitter simple link={this.production_url + this.post_url} message={this.message} />
        <Facebook simple link={this.production_url + this.post_url} />
        <Linkedin simple link={this.production_url + this.post_url} message={this.message} />
      </div>
    );
  }
}
