import _ from 'lodash';

export default function (pages, folderPath) {
  folderPath = folderPath.replace(/^\//, '');
  return _.filter(pages, page => page.relativeDir.startsWith(folderPath));
}
