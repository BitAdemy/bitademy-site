import moment from 'moment-strftime';
import React from 'react';
import { Link, props } from '../utils';

export default class TimeAuthor extends React.Component {
  date = props.getPageDate(this.props);
  author = props.getPageAuthor(this.props);
  render() {
    return (
      <div className="outer-micro">
        <time dateTime={moment(this.date).strftime('%Y-%m-%d %H:%M')}>
          📅 {moment(this.date).strftime('%d - %m - %y')}
        </time>
        <p></p>
        <div>
          ✍ <Link to={this.author.url}>{this.author.name}</Link>
        </div>
      </div>
    );
  }
}
