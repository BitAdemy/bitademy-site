import _ from "lodash";
import React from "react";
import { Facebook, Linkedin, Twitter } from "react-social-sharing";


export default class SocialSharing extends React.Component {
  message = _.get( this.props, "pageContext.frontmatter.title" );
  post_url = _.get( this.props, "pageContext.frontmatter.post_url" );
  production_url = _.get( this.props, "pageContext.site.siteMetadata.header.production_url" );

  render() {
    return (
      <div className="outer-micro">
          <Twitter
            simple
            link={ this.production_url + this.post_url }
            message={this.message}
          />
          <Facebook
            simple
            link={ this.production_url + this.post_url }
          />
          <Linkedin
            simple
            link={ this.production_url + this.post_url }
            message={this.message}
          />
        </div>
    )
  }
}