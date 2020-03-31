import _ from 'lodash';
import React from 'react';
import components, { Layout } from '../components/index';
import { props } from '../utils';

export default class Landing extends React.Component {
  render() {
    return (
      <Layout {...this.props}>
        {_.map(props.getPageSections(this.props), (section, section_idx) => {
          let component = _.upperFirst(_.camelCase(_.get(section, 'type')));
          let Component = components[component];
          return (
            <Component
              key={section_idx}
              {...this.props}
              section={section}
              site={this.props.pageContext.site}
            />
          );
        })}
      </Layout>
    );
  }
}
