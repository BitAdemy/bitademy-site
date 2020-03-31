import React from 'react';
import { htmlToReact, props } from '../utils';
export default class TutorialHeader extends React.Component {
  render() {
    return (
      <div>
        <header className="post-header">
          <h1 className="post-title">{props.getPageTitle(this.props)}</h1>
        </header>
        {props.getPageSubTitle(this.props) && (
          <div className="post-subtitle">{htmlToReact(props.getPageSubTitle(this.props))}</div>
        )}
      </div>
    );
  }
}
