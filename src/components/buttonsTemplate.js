function buttonsTemplateHeader({ text }) {
  const headerContents = text
    .split('\n')
    .map(t => (t.length === 0 ? ' ' : t)) // line flex doesn't accept zero length string
    .map(t => ({
      type: 'text',
      text: t,
      size: 'md',
      color: '#4F4F4F',
      wrap: true,
      margin: 'sm',
    }));

  return {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'box',
        layout: 'vertical',
        contents: headerContents,
        paddingAll: '15px',
        paddingBottom: '5px',
      },
      {
        type: 'separator',
        margin: 'md',
        color: '#F5F5F5',
      },
    ],
    backgroundColor: '#FAFAFA',
    paddingAll: '0px',
  };
}

function buttonsTemplateBodyContents({ actions }) {
  return actions.map(action => ({
    type: 'text',
    text: action.label,
    color: '#6D88B1',
    size: 'md',
    align: 'center',
    gravity: 'center',
    wrap: true,
    margin: 'xl',
    action,
  }));
}

function buttonsTemplateBodyLayout({ contents }) {
  return {
    type: 'box',
    layout: 'vertical',
    contents,
  };
}

function buttonsTemplateBody({ actions }) {
  return buttonsTemplateBodyLayout({
    contents: buttonsTemplateBodyContents({ actions }),
  });
}

buttonsTemplateBody.layout = buttonsTemplateBodyLayout;
buttonsTemplateBody.contents = buttonsTemplateBodyContents;


/**
 * @example
 *
 * ```js
 * buttonsTemplate({
 *   text: 'Please select',
 *   actions: [
 *     {
 *       type: 'postback',
 *       label: 'Buy',
 *       data: 'action=buy&itemid=123'
 *     },
 *     {
 *       type: 'postback',
 *       label: 'Add to cart',
 *       data: 'action=add&itemid=123'
 *     },
 *     {
 *       type: 'uri',
 *       label: 'View detail',
 *       uri: 'http://example.com/page/123'
 *     },
 *   ],
 * })
 * ```
 */
function buttonsTemplate({ text, actions }) {
  return {
    type: 'bubble',
    header: buttonsTemplateHeader({ text }),
    body: buttonsTemplateBody({ actions }),
  };
};

buttonsTemplate.header = buttonsTemplateHeader;
buttonsTemplate.body = buttonsTemplateBody;

module.exports = buttonsTemplate;
