import React from 'react';
import { Link, props } from '../../utils';
import { SocialSharing, TimeAuthor } from '../index';

export default class TutorialMetaData extends React.Component {
  render() {
    return (
      <section className="to-bottom">
        <TimeAuthor {...this.props}></TimeAuthor>
        <hr></hr>
        {props.getTutorialLaboratory(this.props) && (
          <div className="outer-micro">
            <Link to={props.getTutorialLaboratoryUrl(this.props)} className=" ">
              ⌨ {props.getTutorialLaboratory(this.props)}
            </Link>
          </div>
        )}
        {props.getTutorialPreview(this.props) && (
          <div className="outer-micro">
            <Link to={props.getTutorialPreviewUrl(this.props)} className="  ">
              📹 {props.getTutorialPreview(this.props)}
            </Link>
          </div>
        )}
        <hr></hr>
        {props.getTutorialUp(this.props) && (
          <div className="outer-micro">
            <Link to={props.getTutorialUpUrl(this.props)} className="button secondary ">
              ⏏ {props.getTutorialUp(this.props)}
            </Link>
          </div>
        )}
        {props.getTutorialNext(this.props) && (
          <div className="outer-micro">
            <Link to={props.getTutorialNextUrl(this.props)} className="button secondary ">
              ▶ {props.getTutorialNext(this.props)}
            </Link>
          </div>
        )}
        {props.getTutorialPrevious(this.props) && (
          <div className="outer-micro">
            <Link to={props.getTutorialPreviousUrl(this.props)} className="button secondary ">
              ◀ {props.getTutorialPrevious(this.props)}
            </Link>
          </div>
        )}
        <hr></hr>
        <SocialSharing {...this.props}></SocialSharing>
      </section>
    );
  }
}
