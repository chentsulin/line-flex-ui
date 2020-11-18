/**
 * @example
 *
 * ```js
 * localSearch({
 *   image: 'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip10.jpg',
 *   name: 'Brown Cafe',
 *   rating: 4.0,
 *   description: '東京旅行',
 * })
 * ```
 */
function localSearch({ image, name, rating, description }) {
  return {
    type: 'bubble',
    size: 'micro',
    hero: {
      type: 'image',
      url: image,
      size: 'full',
      aspectMode: 'cover',
      aspectRatio: '320:213',
    },
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: name,
          weight: 'bold',
          size: 'sm',
          wrap: true,
        },
        {
          type: 'box',
          layout: 'baseline',
          contents: getRatingContent(rating),
        },
        ...(description
          ? [
              {
                type: 'box',
                layout: 'vertical',
                contents: [
                  {
                    type: 'box',
                    layout: 'baseline',
                    spacing: 'sm',
                    contents: [
                      {
                        type: 'text',
                        text: description,
                        wrap: true,
                        color: '#8c8c8c',
                        size: 'xs',
                        flex: 5,
                      },
                    ],
                  },
                ],
              },
            ]
          : []),
      ],
      spacing: 'sm',
      paddingAll: '13px',
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
    size: 'xs',
    url: goldStar,
  };
  const starIconGray = {
    type: 'icon',
    size: 'xs',
    url: grayStar,
  };

  return [
    ...new Array(starCount).fill(0).map(() => starIconGold),
    ...new Array(5 - starCount).fill(0).map(() => starIconGray),
    {
      type: 'text',
      text: rating.toFixed(1),
      size: 'xs',
      color: '#8c8c8c',
      margin: 'md',
      flex: 0,
    },
  ];
}

module.exports = localSearch;
