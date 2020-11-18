/**
 * @example
 *
 * ```js
 * hotel({
 *   image: 'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip3.jpg',
 *   name: 'Brown Grand Hotel',
 *   rating: 4.0,
 *   originalPrice: '¥82,000',
 *   discountedPrice: '¥62,000',
 * })
 * ```
 */
function hotel({ image, name, rating, originalPrice, discountedPrice }) {
  return {
    type: 'bubble',
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'image',
          url: image,
          size: 'full',
          aspectMode: 'cover',
          aspectRatio: '1:1',
          gravity: 'center',
        },
        {
          type: 'image',
          url:
            'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip15.png',
          position: 'absolute',
          aspectMode: 'fit',
          aspectRatio: '1:1',
          offsetTop: '0px',
          offsetBottom: '0px',
          offsetStart: '0px',
          offsetEnd: '0px',
          size: 'full',
        },
        {
          type: 'box',
          layout: 'horizontal',
          contents: [
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'box',
                  layout: 'horizontal',
                  contents: [
                    {
                      type: 'text',
                      text: name,
                      size: 'xl',
                      color: '#ffffff',
                    },
                  ],
                },
                {
                  type: 'box',
                  layout: 'baseline',
                  contents: getRatingContent(rating),
                  spacing: 'xs',
                },
                {
                  type: 'box',
                  layout: 'horizontal',
                  contents: [
                    {
                      type: 'box',
                      layout: 'baseline',
                      contents: [
                        {
                          type: 'text',
                          text: discountedPrice,
                          color: '#ffffff',
                          size: 'md',
                          flex: 0,
                          align: 'end',
                        },
                        {
                          type: 'text',
                          text: originalPrice,
                          color: '#a9a9a9',
                          decoration: 'line-through',
                          size: 'sm',
                          align: 'end',
                        },
                      ],
                      flex: 0,
                      spacing: 'lg',
                    },
                  ],
                },
              ],
              spacing: 'xs',
            },
          ],
          position: 'absolute',
          offsetBottom: '0px',
          offsetStart: '0px',
          offsetEnd: '0px',
          paddingAll: '20px',
        },
      ],
      paddingAll: '0px',
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
    url: goldStar,
  };
  const starIconGray = {
    type: 'icon',
    url: grayStar,
  };

  return [
    ...new Array(starCount).fill(0).map(() => starIconGold),
    ...new Array(5 - starCount).fill(0).map(() => starIconGray),
    {
      type: 'text',
      text: rating.toFixed(1),
      color: '#a9a9a9',
    },
  ];
}

module.exports = hotel;
