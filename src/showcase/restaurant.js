/**
 * @example
 *
 * ```js
 * restaurant({
 *   name: 'Brown Cafe',
 *   image: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png',
 *   place: 'Miraina Tower, 4-1-6 Shinjuku, Tokyo',
 *   time: '10:00 - 23:00',
 *   rating: 4.0,
 *   phone: '+886912345678',
 *   webiste: 'https://linecorp.com',
 * })
 * ```
 */
function restaurant({ name, image, place, time, rating, phone, website }) {
  return {
    type: 'bubble',
    hero: {
      type: 'image',
      url: image,
      size: 'full',
      aspectRatio: '20:13',
      aspectMode: 'cover',
      ...(website
        ? {
            action: {
              type: 'uri',
              uri: website,
            },
          }
        : {}),
    },
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: name,
          weight: 'bold',
          size: 'xl',
        },
        {
          type: 'box',
          layout: 'baseline',
          margin: 'md',
          contents: getRatingContent(rating),
        },
        {
          type: 'box',
          layout: 'vertical',
          margin: 'lg',
          spacing: 'sm',
          contents: [
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: 'Place',
                  color: '#aaaaaa',
                  size: 'sm',
                  flex: 1,
                },
                {
                  type: 'text',
                  text: place,
                  wrap: true,
                  color: '#666666',
                  size: 'sm',
                  flex: 5,
                },
              ],
            },
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [
                {
                  type: 'text',
                  text: 'Time',
                  color: '#aaaaaa',
                  size: 'sm',
                  flex: 1,
                },
                {
                  type: 'text',
                  text: time,
                  wrap: true,
                  color: '#666666',
                  size: 'sm',
                  flex: 5,
                },
              ],
            },
          ],
        },
      ],
    },
    footer: {
      type: 'box',
      layout: 'vertical',
      spacing: 'sm',
      contents: [
        ...(phone
          ? [
              {
                type: 'button',
                style: 'link',
                height: 'sm',
                action: {
                  type: 'uri',
                  label: 'CALL',
                  uri: `tel:${phone}`,
                },
              },
            ]
          : []),
        ...(website
          ? [
              {
                type: 'button',
                style: 'link',
                height: 'sm',
                action: {
                  type: 'uri',
                  label: 'WEBSITE',
                  uri: website,
                },
              },
            ]
          : []),
      ],
    },
  };
}

const goldStar =
  'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png';
const grayStar =
  'https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png';

function getRatingContent(rating) {
  const starCount = Math.floor(rating);
  const starIconGold = {
    type: 'icon',
    size: 'sm',
    url: goldStar,
  };
  const starIconGray = {
    type: 'icon',
    size: 'sm',
    url: grayStar,
  };

  return [
    ...new Array(starCount).fill(0).map(() => starIconGold),
    ...new Array(5 - starCount).fill(0).map(() => starIconGray),
    {
      type: 'text',
      text: rating.toFixed(1),
      size: 'sm',
      color: '#999999',
      margin: 'md',
      flex: 0,
    },
  ];
}

module.exports = restaurant;
