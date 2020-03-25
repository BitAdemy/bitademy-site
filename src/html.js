import PropTypes from "prop-types";
import React from "react";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>{props.headComponents}</head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/cookie-bar/cookiebar-latest.min.js?forceLang=es&tracking=1&thirdparty=1&always=1&showPolicyLink=1&privacyPage=https%3A%2F%2Fbitademy.com%2Fpolitics%2Fprivacidad"
        ></script>
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
