import _ from 'lodash';

export default function (pages, folderPath) {
  // TODO: resolve relative paths relative to current page
  console.log({ pages });
  console.log({ folderPath });
  folderPath = folderPath.replace(/^\//, '');
  return _.filter(pages, page => page.relativeDir.startsWith(folderPath));
}
