/**
 * transit({
 *   from: 'Akihabara',
 *   to: 'Shinjuku',
 *   total: '1 hour',
 *   items: [
 *     transit.stop({
 *       time: '20:30',
 *       name: 'Akihabara',
 *       color: '#ef454d',
 *     }),
 *     transit.path({
 *       description: 'Walk 4min',
 *     }),
 *     transit.stop({
 *       time: '20:34',
 *       name: 'Ochanomizu',
 *       color: '#6486e3',
 *     }),
 *     transit.path({
 *       description: 'Metro 1hr',
 *       color: '#6486e3',
 *     }),
 *     transit.stop({
 *       time: '20:40',
 *       name: 'Shinjuku',
 *       color: '#6486e3',
 *     }),
 *   ],
 * })
 */

function transit({ from, to, total, items = [] }) {
  return {
    type: 'bubble',
    size: 'mega',
    header: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: 'FROM',
              color: '#ffffff66',
              size: 'sm',
            },
            {
              type: 'text',
              text: from,
              color: '#ffffff',
              size: 'xl',
              flex: 4,
              weight: 'bold',
            },
          ],
        },
        {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: 'TO',
              color: '#ffffff66',
              size: 'sm',
            },
            {
              type: 'text',
              text: to,
              color: '#ffffff',
              size: 'xl',
              flex: 4,
              weight: 'bold',
            },
          ],
        },
      ],
      paddingAll: '20px',
      backgroundColor: '#0367D3',
      spacing: 'md',
      height: '154px',
      paddingTop: '22px',
    },
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: `Total: ${total}`,
          color: '#b7b7b7',
          size: 'xs',
        },
        ...items,
      ],
    },
  };
}

/**
 * stop({
 *   time: '20:30',
 *   name: 'Akihabara',
 *   color: '#b7b7b7',
 * })
 */
function stop({ time, name, color }) {
  return {
    type: 'box',
    layout: 'horizontal',
    contents: [
      {
        type: 'text',
        text: time,
        size: 'sm',
        gravity: 'center',
      },
      {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'filler',
          },
          {
            type: 'box',
            layout: 'vertical',
            contents: [
              {
                type: 'filler',
              },
            ],
            cornerRadius: '30px',
            height: '12px',
            width: '12px',
            borderColor: color,
            borderWidth: '2px',
          },
          {
            type: 'filler',
          },
        ],
        flex: 0,
      },
      {
        type: 'text',
        text: name,
        gravity: 'center',
        flex: 4,
        size: 'sm',
      },
    ],
    spacing: 'lg',
    cornerRadius: '30px',
  };
}

/**
 * path({
 *   description: 'Walk 4min',
 *   color: '#b7b7b7',
 * })
 */
function path({ description, color = '#b7b7b7' }) {
  return {
    type: 'box',
    layout: 'horizontal',
    contents: [
      {
        type: 'box',
        layout: 'baseline',
        contents: [
          {
            type: 'filler',
          },
        ],
        flex: 1,
      },
      {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'box',
            layout: 'horizontal',
            contents: [
              {
                type: 'filler',
              },
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'filler',
                  },
                ],
                width: '2px',
                backgroundColor: color,
              },
              {
                type: 'filler',
              },
            ],
            flex: 1,
          },
        ],
        width: '12px',
      },
      {
        type: 'text',
        text: description,
        gravity: 'center',
        flex: 4,
        size: 'xs',
        color: '#8c8c8c',
      },
    ],
    spacing: 'lg',
    height: '64px',
  };
}

transit.stop = stop;
transit.path = path;

module.exports = transit;
