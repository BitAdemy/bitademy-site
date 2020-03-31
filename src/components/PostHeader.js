import React from 'react';
import { htmlToReact, props, safePrefix } from '../utils';
export default class PostHeader extends React.Component {
  render() {
    return (
      <div>
        <header className="post-header">
          <h1 className="post-title">{props.getPageTitle(this.props)}</h1>
        </header>
        {props.getPageImgPath(this.props) && (
          <div className="post-thumbnail">
            <img
              src={safePrefix(props.getPageImgPath(this.props))}
              alt={props.getPageTitle(this.props)}
            />
          </div>
        )}
        {props.getPageSubTitle(this.props) && (
          <div className="post-subtitle">{htmlToReact(props.getPageSubTitle(this.props))}</div>
        )}
      </div>
    );
  }
}
