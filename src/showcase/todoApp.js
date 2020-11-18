/**
 * @example
 *
 * ```js
 * todoApp({
 *   status: 'In Progress',
 *   percentage: 70,
 *   text: 'Buy milk and lettuce before class',
 * })
 * ```
 */
function todoApp({ status = 'In Progress', percentage = 0, text }) {
  return {
    type: 'bubble',
    size: 'nano',
    header: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: status,
          color: '#ffffff',
          align: 'start',
          size: 'md',
          gravity: 'center',
        },
        {
          type: 'text',
          text: `${percentage}%`,
          color: '#ffffff',
          align: 'start',
          size: 'xs',
          gravity: 'center',
          margin: 'lg',
        },
        {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'filler',
                },
              ],
              width: `${percentage}%`,
              backgroundColor: '#0D8186',
              height: '6px',
            },
          ],
          backgroundColor: '#9FD8E36E',
          height: '6px',
          margin: 'sm',
        },
      ],
      backgroundColor: '#27ACB2',
      paddingTop: '19px',
      paddingAll: '12px',
      paddingBottom: '16px',
    },
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'box',
          layout: 'horizontal',
          contents: [
            {
              type: 'text',
              text,
              color: '#8C8C8C',
              size: 'sm',
              wrap: true,
            },
          ],
          flex: 1,
        },
      ],
      spacing: 'md',
      paddingAll: '12px',
    },
    styles: {
      footer: {
        separator: false,
      },
    },
  };
}

module.exports = todoApp;
