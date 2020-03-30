import _ from "lodash";
import moment from "moment-strftime";
import React from "react";
import { Link } from "../utils";

export default class TimeAuthor extends React.Component {
  date = _.get( this.props, "pageContext.frontmatter.date" );
  author = _.get( this.props, "pageContext.site.siteMetadata.author" );
  render() {
    return (
      <div className="outer-micro">
        <time
          dateTime={moment(
            this.date
          ).strftime("%Y-%m-%d %H:%M")}
        >
          📅{" "}
          {moment( this.date).strftime(
            "%d - %m - %y"
          )}
        </time>
        <p></p>
        <div>
          ✍{" "}
          <Link to={ this.author.url }>{ this.author.name }</Link>
        </div>
      </div>
    );
  }
}