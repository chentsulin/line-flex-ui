/**
 * @example
 *
 * ```js
 * menu({
 *   image: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_2_restaurant.png',
 *   name: "Brown's Burger",
 *   priceRegular: '$10.5',
 *   kcalRegular: 400,
 *   priceLarge: '$15.5',
 *   kcalLarge: 550,
 *   description: 'Sauce, Onions, Pickles, Lettuce & Cheese',
 * })
 * ```
 */
function menu({
  image,
  name,
  priceRegular,
  kcalRegular,
  priceLarge,
  kcalLarge,
  description,
}) {
  return {
    type: 'bubble',
    hero: {
      type: 'image',
      url: image,
      size: 'full',
      aspectRatio: '20:13',
      aspectMode: 'cover',
      action: {
        type: 'uri',
        uri: 'https://linecorp.com',
      },
    },
    body: {
      type: 'box',
      layout: 'vertical',
      spacing: 'md',
      action: {
        type: 'uri',
        uri: 'https://linecorp.com',
      },
      contents: [
        {
          type: 'text',
          text: name,
          size: 'xl',
          weight: 'bold',
        },
        {
          type: 'box',
          layout: 'vertical',
          spacing: 'sm',
          contents: [
            {
              type: 'box',
              layout: 'baseline',
              contents: [
                {
                  type: 'icon',
                  url:
                    'https://scdn.line-apps.com/n/channel_devcenter/img/fx/restaurant_regular_32.png',
                },
                {
                  type: 'text',
                  text: priceRegular,
                  weight: 'bold',
                  margin: 'sm',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: `${kcalRegular}kcal`,
                  size: 'sm',
                  align: 'end',
                  color: '#aaaaaa',
                },
              ],
            },
            {
              type: 'box',
              layout: 'baseline',
              contents: [
                {
                  type: 'icon',
                  url:
                    'https://scdn.line-apps.com/n/channel_devcenter/img/fx/restaurant_large_32.png',
                },
                {
                  type: 'text',
                  text: priceLarge,
                  weight: 'bold',
                  margin: 'sm',
                  flex: 0,
                },
                {
                  type: 'text',
                  text: `${kcalLarge}kcal`,
                  size: 'sm',
                  align: 'end',
                  color: '#aaaaaa',
                },
              ],
            },
          ],
        },
        ...(description
          ? [
              {
                type: 'text',
                text: description,
                wrap: true,
                color: '#aaaaaa',
                size: 'xxs',
              },
            ]
          : []),
      ],
    },
    footer: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'spacer',
          size: 'xxl',
        },
        {
          type: 'button',
          style: 'primary',
          color: '#905c44',
          action: {
            type: 'uri',
            label: 'Add to Cart',
            uri: 'https://linecorp.com',
          },
        },
      ],
    },
  };
}

module.exports = menu;
