import _ from 'lodash';
import { safePrefix } from '../utils';
export const props = {
  getSiteTitle: props => _.get(props, 'pageContext.site.siteMetadata.title'),
  getSiteUrl: props => _.get(props, 'pageContext.site.siteMetadata.siteUrl'),
  getSiteProductionUrl: props =>
    _.get(props, 'pageContext.site.siteMetadata.header.production_url'),
  getSiteHeaderLogoImg: props => _.get(props, 'pageContext.site.siteMetadata.header.logo_img'),
  getSiteHeaderTitle: props => _.get(props, 'pageContext.site.siteMetadata.header.title'),
  getSiteHeaderMenuActions: props =>
    _.get(props, 'pageContext.site.siteMetadata.header.menu.actions'),
  getSitePalette: props => _.get(props, 'pageContext.site.siteMetadata.palette'),
  getSiteFooterLogoImg: props => _.get(props, 'pageContext.site.siteMetadata.footer.logo_img'),
  getPageTitle: props => _.get(props, 'pageContext.frontmatter.title'),
  getPageSubTitle: props => _.get(props, 'pageContext.frontmatter.subtitle'),
  getPageExcerpt: props => _.get(props, 'pageContext.frontmatter.excerpt'),
  getPageImgPath: props => _.get(props, 'pageContext.frontmatter.img_path'),
  getPageImgSize: props => _.get(props, 'pageContext.frontmatter.img_size'),
  getPageUrl: props => _.get(props, 'pageContext.frontmatter.post_url'),
  getPageSections: props => _.get(props, 'pageContext.frontmatter.sections'),
  getPageFirstSection: props => _.get(props, 'pageContext.frontmatter.sections[0]'),
  getPageTemplate: props => _.get(props, 'pageContext.frontmatter.template'),
  getPageHtml: props => _.get(props, 'pageContext.html'),
  getPageAuthor: props => _.get(props, 'pageContext.site.siteMetadata.author'),
  getPageDate: props => _.get(props, 'pageContext.frontmatter.date'),
  getPageMainMenu: props => _.get(props, 'pageContext.menus.main'),
  getPostCategory: props => _.get(props, 'pageContext.frontmatter.category'),
  getPostCategoryUrl: props => getUrl(_.get(props, 'pageContext.frontmatter.category_url')),
  getTutorialLaboratory: props => _.get(props, 'pageContext.frontmatter.laboratory'),
  getTutorialLaboratoryUrl: props => getUrl(_.get(props, 'pageContext.frontmatter.laboratory_url')),
  getTutorialPreview: props => _.get(props, 'pageContext.frontmatter.preview'),
  getTutorialPreviewUrl: props => getUrl(_.get(props, 'pageContext.frontmatter.preview_url')),
  getTutorialUp: props => _.get(props, 'pageContext.frontmatter.up'),
  getTutorialUpUrl: props => getUrl(_.get(props, 'pageContext.frontmatter.up_url')),
  getTutorialNext: props => _.get(props, 'pageContext.frontmatter.next'),
  getTutorialNextUrl: props => getUrl(_.get(props, 'pageContext.frontmatter.next_url')),
  getTutorialPrevious: props => _.get(props, 'pageContext.frontmatter.previous'),
  getTutorialPreviousUrl: props => getUrl(_.get(props, 'pageContext.frontmatter.previous_url')),
  isBlogOrLanding: props =>
    ['landing', 'blog'].includes(_.get(props, 'pageContext.frontmatter.template')),
  isCurrentMenuItem: (props, item) => _.get(props, 'pageContext.url') === _.get(item, 'url')
};

const getUrl = url => safePrefix(url).toLowerCase();
