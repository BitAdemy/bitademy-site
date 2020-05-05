import _ from 'lodash';
import React from 'react';
import { Link, props, safePrefix } from '../../utils';

export default class Header extends React.Component {
  render() {
    return (
      <header id="masthead" className="site-header outer">
        <div className="inner">
          <div className="site-header-inside">
            <div className="site-branding">
              {props.getSiteHeaderLogoImg(this.props) && (
                <p className="site-logo">
                  <Link to={safePrefix('/')}>
                    <img src={safePrefix(props.getSiteHeaderLogoImg(this.props))} alt="Logo" />
                  </Link>
                </p>
              )}
              {props.isBlogOrLanding(this.props) ? (
                <h1 className="site-title">
                  <Link to={safePrefix('/')}>{props.getSiteHeaderTitle(this.props)}</Link>
                </h1>
              ) : (
                <p className="site-title">
                  <Link to={safePrefix('/')}>{props.getSiteHeaderTitle(this.props)}</Link>
                </p>
              )}
            </div>
            <nav id="main-navigation" className="site-navigation" aria-label="Main Navigation">
              <div className="site-nav-inside">
                <button id="menu-close" className="menu-toggle">
                  <span className="screen-reader-text">Open Menu</span>
                  <span className="icon-close" aria-hidden="true" />
                </button>
                {props.hideMenu(this.props) === true ? (
                  <ul className="menu">
                    {props.getSiteHeaderMenuActions(this.props) &&
                      _.map(props.getSiteHeaderMenuActions(this.props), (action, action_idx) => (
                        <li key={action_idx} className="menu-item menu-button">
                          <Link to={safePrefix(_.get(action, 'url'))} className="button">
                            {_.get(action, 'label')}
                          </Link>
                        </li>
                      ))}
                  </ul>
                ) : (
                  <ul className="menu">
                    {_.map(props.getPageMainMenu(this.props), (item, item_idx) => (
                      <li
                        key={item_idx}
                        className={
                          'menu-item ' +
                          (props.isCurrentMenuItem(this.props, item) ? ' current-menu-item' : '')
                        }>
                        <Link to={safePrefix(_.get(item, 'url'))}>{_.get(item, 'title')}</Link>
                      </li>
                    ))}
                    {props.getSiteHeaderMenuActions(this.props) &&
                      _.map(props.getSiteHeaderMenuActions(this.props), (action, action_idx) => (
                        <li key={action_idx} className="menu-item menu-button">
                          <Link to={safePrefix(_.get(action, 'url'))} className="button">
                            {_.get(action, 'label')}
                          </Link>
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            </nav>
            <button id="menu-open" className="menu-toggle">
              <span className="screen-reader-text">Close Menu</span>
              <span className="icon-menu" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>
    );
  }
}
