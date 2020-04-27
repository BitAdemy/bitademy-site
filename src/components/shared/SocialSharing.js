import React from 'react';
import { props } from '../../utils';

export default class SocialSharing extends React.Component {
  message = props.getPageTitle(this.props);
  post_url = props.getPageUrl(this.props);
  production_url = props.getSiteProductionUrl(this.props);

  render() {
    return (
      <div className="outer-micro">
        <div>
          <a
            href={
              'https://twitter.com/intent/tweet/?text=' +
              this.message +
              '&url=' +
              this.production_url +
              this.post_url
            }
            target="_blank">
            🗨 En Twitter
          </a>
        </div>
        <div>
          <a
            href={
              'https://www.facebook.com/sharer/sharer.php?u=' + this.production_url + this.post_url
            }
            target="_blank">
            🗨 En Facebook
          </a>
        </div>
        <div>
          <a
            href={
              'https://www.linkedin.com/sharing/share-offsite/?url=' +
              this.production_url +
              this.post_url
            }
            target="_blank">
            🗨 En LinkedIn
          </a>
        </div>
      </div>
    );
  }
}
