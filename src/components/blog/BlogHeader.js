import React from 'react';
import { htmlToReact, props, safePrefix } from '../../utils';
export default class BlogHeader extends React.Component {
  render() {
    return (
      <header className="post-header">
        {props.getPageImgPath(this.props) && (
          <div className="post-thumbnail inner-micro">
            <img
              src={safePrefix(props.getPageImgPath(this.props))}
              alt={props.getPageTitle(this.props)}
            />
          </div>
        )}
        <div>
          <h1 className="post-title">{props.getPageTitle(this.props)}</h1>
        </div>
        {props.getPageSubTitle(this.props) && (
          <div className="post-subtitle">{htmlToReact(props.getPageSubTitle(this.props))}</div>
        )}
      </header>
    );
  }
}
