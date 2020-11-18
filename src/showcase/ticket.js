/**
 * @example
 *
 * ```js
 * ticket({
 *   image: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_3_movie.png',
 *   name: "BROWN'S ADVENTURE\nIN MOVIE",
 *   rating: 4.0,
 *   date: 'Monday 25, 9:00PM',
 *   place: '7 Floor, No.3',
 *   seat: 'C Row, 18 Seat',
 *   qrcode: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/linecorp_code_withborder.png'
 * })
 * ```
 */
function ticket({ image, name, rating, date, place, seat, qrcode }) {
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
        uri: 'http://linecorp.com/',
      },
    },
    body: {
      type: 'box',
      layout: 'vertical',
      spacing: 'md',
      contents: [
        {
          type: 'text',
          text: name,
          wrap: true,
          weight: 'bold',
          gravity: 'center',
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
                  text: 'Date',
                  color: '#aaaaaa',
                  size: 'sm',
                  flex: 1,
                },
                {
                  type: 'text',
                  text: date,
                  wrap: true,
                  size: 'sm',
                  color: '#666666',
                  flex: 4,
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
                  flex: 4,
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
                  text: 'Seat',
                  color: '#aaaaaa',
                  size: 'sm',
                  flex: 1,
                },
                {
                  type: 'text',
                  text: seat,
                  wrap: true,
                  color: '#666666',
                  size: 'sm',
                  flex: 4,
                },
              ],
            },
          ],
        },
        ...(qrcode
          ? [
              {
                type: 'box',
                layout: 'vertical',
                margin: 'xxl',
                contents: [
                  {
                    type: 'spacer',
                  },
                  {
                    type: 'image',
                    url: qrcode,
                    aspectMode: 'cover',
                    size: 'xl',
                  },
                  {
                    type: 'text',
                    text:
                      'You can enter the theater by using this code instead of a ticket',
                    color: '#aaaaaa',
                    wrap: true,
                    margin: 'xxl',
                    size: 'xs',
                  },
                ],
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

module.exports = ticket;
