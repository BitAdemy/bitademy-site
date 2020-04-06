import React from 'react';
import { dateTime, Link, props } from '../../utils';

export default class TimeAuthor extends React.Component {
  date = props.getPageDate(this.props);
  author = props.getPageAuthor(this.props);
  render() {
    return (
      <div className="outer-micro">
        <div className="margin-bottom">
          <span className="margin-right" role="img" aria-label="fecha">
            📅
          </span>
          <time dateTime={dateTime.getForRobots(this.date)}>
            {dateTime.getForHumans(this.date)}
          </time>
        </div>
        <div>
          <span className="margin-right" role="img" aria-label="escritor">
            ✍🏼
          </span>
          <Link to={this.author.url}>{this.author.name}</Link>
        </div>
      </div>
    );
  }
}
