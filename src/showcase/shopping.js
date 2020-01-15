/**
 * shopping({
 *   image: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_5_carousel.png',
 *   name: 'Arm Chair, White',
 *   price: '$49.99',
 *   isAvailable: true,
 * })
 */
function shopping({ image, name, price, isAvailable = true }) {
  return {
    type: 'bubble',
    hero: {
      type: 'image',
      size: 'full',
      aspectRatio: '20:13',
      aspectMode: 'cover',
      url: image,
    },
    body: {
      type: 'box',
      layout: 'vertical',
      spacing: 'sm',
      contents: [
        {
          type: 'text',
          text: name,
          wrap: true,
          weight: 'bold',
          size: 'xl',
        },
        {
          type: 'box',
          layout: 'baseline',
          contents: [
            {
              type: 'text',
              text: price.split('.')[0],
              wrap: true,
              weight: 'bold',
              size: 'xl',
              flex: 0,
            },
            {
              type: 'text',
              text: `.${price.split('.')[1]}`,
              wrap: true,
              weight: 'bold',
              size: 'sm',
              flex: 0,
            },
          ],
        },
        ...(isAvailable
          ? []
          : [
              {
                type: 'text',
                text: 'Temporarily out of stock',
                wrap: true,
                size: 'xxs',
                margin: 'md',
                color: '#ff5551',
                flex: 0,
              },
            ]),
      ],
    },
    footer: {
      type: 'box',
      layout: 'vertical',
      spacing: 'sm',
      contents: [
        {
          type: 'button',
          style: 'primary',
          // TODO: add option to customize this action
          action: {
            type: 'uri',
            label: 'Add to Cart',
            uri: 'https://linecorp.com',
          },
          ...(isAvailable ? {} : { color: '#aaaaaa' }),
        },
        {
          type: 'button',
          // TODO: add option to customize this action
          action: {
            type: 'uri',
            label: 'Add to wishlist',
            uri: 'https://linecorp.com',
          },
        },
      ],
    },
  };
}

module.exports = shopping;
