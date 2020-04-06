import React from 'react';
import { Link, props } from '../../utils';
import { SocialSharing, TimeAuthor } from '../index';

export default class TutorialMetaData extends React.Component {
  render() {
    return (
      <aside className="to-bottom">
        <TimeAuthor {...this.props}></TimeAuthor>
        <nav className="outer-micro margin-top">
          <div className=" margin-top">
            {props.getTutorialUp(this.props) && (
              <div className="margin-bottom ">
                <span className="margin-right" role="img" aria-label="arriba">
                  🔼
                </span>
                <Link to={props.getTutorialUpUrl(this.props)}>
                  {props.getTutorialUp(this.props)}
                </Link>
              </div>
            )}
            {props.getTutorialPrevious(this.props) && (
              <div className="margin-bottom">
                <span className="margin-right" role="img" aria-label="atrás">
                  ⏮
                </span>
                <Link to={props.getTutorialPreviousUrl(this.props)}>
                  {props.getTutorialPrevious(this.props)}
                </Link>
              </div>
            )}{' '}
            {props.getTutorialNext(this.props) && (
              <div className="margin-bottom">
                <span className="margin-right" role="img" aria-label="adelante">
                  ⏭
                </span>
                <Link to={props.getTutorialNextUrl(this.props)}>
                  <strong>{props.getTutorialNext(this.props)}</strong>
                </Link>
              </div>
            )}
          </div>
          <div className=" margin-bottom">
            {props.getTutorialLaboratory(this.props) && (
              <div className="margin-bottom">
                <span className="margin-right" role="img" aria-label="teclado">
                  ⌨
                </span>
                <Link to={props.getTutorialLaboratoryUrl(this.props)}>
                  {props.getTutorialLaboratory(this.props)}
                </Link>
              </div>
            )}
            {props.getTutorialPreview(this.props) && (
              <div className="margin-bottom">
                <span className="margin-right" role="img" aria-label="video">
                  📹
                </span>
                <Link to={props.getTutorialPreviewUrl(this.props)}>
                  {props.getTutorialPreview(this.props)}
                </Link>
              </div>
            )}
          </div>
        </nav>
        <SocialSharing {...this.props}></SocialSharing>
      </aside>
    );
  }
}
