import _ from 'lodash';

export const props = {
  getSiteTitle: props => _.get(props, 'pageContext.site.siteMetadata.title'),
  getSiteUrl: props => _.get(props, 'pageContext.site.siteMetadata.siteUrl'),
  getSitePalette: props => _.get(props, 'pageContext.site.siteMetadata.palette'),
  getPageTitle: props => _.get(props, 'pageContext.frontmatter.title'),
  getPageSubTitle: props => _.get(props, 'pageContext.frontmatter.subtitle'),
  getPageExcerpt: props => _.get(props, 'pageContext.frontmatter.excerpt'),
  getPageImgPath: props => _.get(props, 'pageContext.frontmatter.img_path'),
  getPageUrl: props => _.get(props, 'pageContext.frontmatter.post_url'),
  getPageSections: props => _.get(props, 'pageContext.frontmatter.sections'),
  getPageFirstSection: props => _.get(props, 'pageContext.frontmatter.sections[0]'),
  getPageHtml: props => _.get(props, 'pageContext.html')
};
