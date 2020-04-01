import React from 'react';

export default function Scripts(props) {
  return (
    <React.Fragment>
      <script async src={cookieScriptUrl} type="text/javascript"></script>
      <script
        async
        src={convertBox.src}
        id={convertBox.id}
        type="text/javascript"
        data-uuid={convertBox.data_uuid}
      />
    </React.Fragment>
  );
}
const cookieScriptUrl =
  'https://cdn.jsdelivr.net/npm/cookie-bar/cookiebar-latest.min.js?forceLang=es&tracking=1&thirdparty=1&always=1&showPolicyLink=1&privacyPage=https%3A%2F%2Fbitademy.com%2Fpolitics%2Fprivacidad';

const convertBox = {
  src: 'https://cdn.convertbox.com/convertbox/js/embed.js',
  id: 'app-convertbox-script',
  data_uuid: 'b3e703fb-a9f2-41c4-8db3-b114b7899c4c'
};
