import React from 'react';
import { dateTime, Link, props } from '../utils';

export default class TimeAuthor extends React.Component {
  date = props.getPageDate(this.props);
  author = props.getPageAuthor(this.props);
  render() {
    return (
      <div className="outer-micro">
        <time dateTime={dateTime.getForRobots(this.date)}>
          📅 {dateTime.getForHumans(this.date)}
        </time>
        <p></p>
        <div>
          ✍ <Link to={this.author.url}>{this.author.name}</Link>
        </div>
      </div>
    );
  }
}
