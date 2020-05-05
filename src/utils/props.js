import _ from 'lodash';
import { safePrefix } from '../utils';
const context = 'pageContext.';
const siteMetadata = context + 'site.siteMetadata.';
const frontmatter = context + 'frontmatter.';

export const props = {
  getSiteTitle: props => {
    const pageTitle = _.get(props, frontmatter + 'title');
    if (pageTitle) {
      return pageTitle;
    } else {
      const siteTitle = _.get(props, siteMetadata + 'title');
      return siteTitle;
    }
  },
  getSiteUrl: props => _.get(props, siteMetadata + 'siteUrl'),
  getSiteProductionUrl: props => _.get(props, siteMetadata + 'header.production_url'),
  getSiteHeaderLogoImg: props => _.get(props, siteMetadata + 'header.logo_img'),
  getSiteHeaderTitle: props => _.get(props, siteMetadata + 'header.title'),
  getSiteHeaderMenuActions: props => _.get(props, siteMetadata + 'header.menu.actions'),
  getSitePalette: props => _.get(props, siteMetadata + 'palette'),
  getSiteFooterLogoImg: props => _.get(props, siteMetadata + 'footer.logo_img'),
  getPageTitle: props => _.get(props, frontmatter + 'title'),
  getPageSubTitle: props => _.get(props, frontmatter + 'subtitle'),
  getPageDescription: props => {
    const excerpt = _.get(props, frontmatter + 'excerpt');
    const siteTitle = _.get(props, siteMetadata + 'title');
    const description = `${excerpt} - ${siteTitle}`;
    if (description.length > 159) return description.substring(0, 159);
    else return description;
  },
  getPageExcerpt: props => _.get(props, frontmatter + 'excerpt'),
  getPageImgPath: props => _.get(props, frontmatter + 'img_path'),
  getPageImgSize: props => _.get(props, frontmatter + 'img_size'),
  getPageUrl: props => _.get(props, frontmatter + 'post_url'),
  getPageSections: props => _.get(props, frontmatter + 'sections'),
  getPageFirstSection: props => _.get(props, frontmatter + 'sections[0]'),
  getPageTemplate: props => _.get(props, frontmatter + 'template'),
  getPageHtml: props => _.get(props, context + 'html'),
  getPageAuthor: props => _.get(props, siteMetadata + 'author'),
  getPageDate: props => _.get(props, frontmatter + 'date'),
  getPageMainMenu: props => _.get(props, context + 'menus.main'),
  getPostCategory: props => _.get(props, frontmatter + 'category'),
  getPostCategoryUrl: props => getUrl(_.get(props, frontmatter + 'category_url')),
  getTutorialLaboratory: props => _.get(props, frontmatter + 'laboratory'),
  getTutorialLaboratoryUrl: props => getUrl(_.get(props, frontmatter + 'laboratory_url')),
  getTutorialPreview: props => _.get(props, frontmatter + 'preview'),
  getTutorialPreviewUrl: props => getUrl(_.get(props, frontmatter + 'preview_url')),
  getTutorialUp: props => _.get(props, frontmatter + 'up'),
  getTutorialUpUrl: props => getUrl(_.get(props, frontmatter + 'up_url')),
  getTutorialNext: props => _.get(props, frontmatter + 'next'),
  getTutorialNextUrl: props => getUrl(_.get(props, frontmatter + 'next_url')),
  getTutorialPrevious: props => _.get(props, frontmatter + 'previous'),
  getTutorialPreviousUrl: props => getUrl(_.get(props, frontmatter + 'previous_url')),
  hideMenu: props => _.get(props, frontmatter + 'hide_menu'),
  isBlogOrLanding: props => ['landing', 'blog'].includes(_.get(props, frontmatter + 'template')),
  isCurrentMenuItem: (props, item) => _.get(props, context + 'url') === _.get(item, 'url')
};

const getUrl = url => safePrefix(url);
