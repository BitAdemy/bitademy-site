import React from "react";

export default class SubscribeForm extends React.Component {
  render() {
    return (
      <form
        name="subscribeForm"
        method="POST"
        action="https://bitademy.us4.list-manage.com/subscribe/post"
        id="subscribe-form"
        className="subscribe-form"
      >
        <input type="hidden" name="u" value="c8ad2d2e7d02c26e32ce4cded"></input>
        <input type="hidden" name="id" value="b67e4d2339"></input>
        <div className="screen-reader-text">
          <label>
            Don't fill this out if you're human: <input name="bot-field" />
          </label>
        </div>
        <div className="form-row">
          <label for="MERGE0">
            <span className="screen-reader-text">Dirección de email</span>
            <input
              className="subscribe-email"
              type="email"
              name="MERGE0"
              id="MERGE0"
              placeholder="Dirección de Email..."
            />
          </label>
        </div>
        <button className="button" type="submit">
          📨 Subscribirme
        </button>
      </form>
    );
  }
}
