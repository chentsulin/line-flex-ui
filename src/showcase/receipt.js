/**
 * @example
 *
 * ```js
 * receipt({
 *   name: 'Brown Store',
 *   address: 'Miraina Tower, 4-1-6 Shinjuku, Tokyo',
 *   items: [
 *     { name: 'Energy Drink', price: 2.99 },
 *     { name: 'Chewing Gum', price: 0.99 },
 *     { name: 'Bottled Water', price: 3.33 },
 *   ],
 *   cash: 8.0,
 *   paymentId: '#743289384279',
 * })
 * ```
 */
function receipt({
  title = 'RECEIPT',
  name,
  address,
  items,
  cash,
  paymentId,
  formatPrice = defaultFormatPrice,
} = {}) {
  const itemContents = items.map(item => ({
    type: 'box',
    layout: 'horizontal',
    contents: [
      {
        type: 'text',
        text: item.name,
        size: 'sm',
        color: '#555555',
        flex: 0,
      },
      {
        type: 'text',
        text: formatPrice(item.price),
        size: 'sm',
        color: '#111111',
        align: 'end',
      },
    ],
  }));

  const totol =
    Math.round(items.reduce((acc, item) => acc + item.price, 0) * 100) / 100;

  return {
    type: 'bubble',
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: title,
          weight: 'bold',
          color: '#1DB446',
          size: 'sm',
        },
        {
          type: 'text',
          text: name,
          weight: 'bold',
          size: 'xxl',
          margin: 'md',
        },
        ...(address
          ? [
              {
                type: 'text',
                text: address,
                size: 'xs',
                color: '#aaaaaa',
                wrap: true,
              },
            ]
          : []),
        {
          type: 'separator',
          margin: 'xxl',
        },
        {
          type: 'box',
          layout: 'vertical',
          margin: 'xxl',
          spacing: 'sm',
          contents: [
            ...itemContents,
            {
              type: 'separator',
              margin: 'xxl',
            },
            {
              type: 'box',
              layout: 'horizontal',
              margin: 'xxl',
              contents: [
                {
                  type: 'text',
                  text: 'ITEMS',
                  size: 'sm',
                  color: '#555555',
                },
                {
                  type: 'text',
                  text: String(items.length),
                  size: 'sm',
                  color: '#111111',
                  align: 'end',
                },
              ],
            },
            {
              type: 'box',
              layout: 'horizontal',
              contents: [
                {
                  type: 'text',
                  text: 'TOTAL',
                  size: 'sm',
                  color: '#555555',
                },
                {
                  type: 'text',
                  text: formatPrice(totol),
                  size: 'sm',
                  color: '#111111',
                  align: 'end',
                },
              ],
            },
            {
              type: 'box',
              layout: 'horizontal',
              contents: [
                {
                  type: 'text',
                  text: 'CASH',
                  size: 'sm',
                  color: '#555555',
                },
                {
                  type: 'text',
                  text: formatPrice(cash),
                  size: 'sm',
                  color: '#111111',
                  align: 'end',
                },
              ],
            },
            {
              type: 'box',
              layout: 'horizontal',
              contents: [
                {
                  type: 'text',
                  text: 'CHANGE',
                  size: 'sm',
                  color: '#555555',
                },
                {
                  type: 'text',
                  text: formatPrice(cash - totol),
                  size: 'sm',
                  color: '#111111',
                  align: 'end',
                },
              ],
            },
          ],
        },
        ...(paymentId
          ? [
              {
                type: 'separator',
                margin: 'xxl',
              },
              {
                type: 'box',
                layout: 'horizontal',
                margin: 'md',
                contents: [
                  {
                    type: 'text',
                    text: 'PAYMENT ID',
                    size: 'xs',
                    color: '#aaaaaa',
                    flex: 0,
                  },
                  {
                    type: 'text',
                    text: paymentId,
                    color: '#aaaaaa',
                    size: 'xs',
                    align: 'end',
                  },
                ],
              },
            ]
          : []),
      ],
    },
    styles: {
      footer: {
        separator: true,
      },
    },
  };
}

function defaultFormatPrice(price) {
  return `$${price.toFixed(2)}`;
}

module.exports = receipt;
