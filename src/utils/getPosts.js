import _ from 'lodash';

export default function (pageContext) {
  const pages = pageContext.pages;
  const folderPath = pageContext.relativeDir.replace(/^\//, '');
  const allPages = _.filter(pages, page => page.relativeDir.startsWith(folderPath));
  const onlyPosts = allPages.filter(page => page.frontmatter.template === 'post');
  const ordered = _.orderBy(onlyPosts, 'frontmatter.date', 'desc');
  return ordered;
}
