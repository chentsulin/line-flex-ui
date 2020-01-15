/**
 * social({
 *   images: [
 *     'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip7.jpg',
 *     'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip8.jpg',
 *     'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip9.jpg',
 *   ],
 *   profile: 'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip13.jpg',
 *   username: 'brown_05',
 *   text: 'I went to the Brown&Cony cafe in Tokyo and took a picture',
 *   likeCount: 1140753,
 * })
 */
function social({ images, profile, username, text, likeCount }) {
  return {
    type: 'bubble',
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'box',
          layout: 'horizontal',
          contents: [
            {
              type: 'image',
              url: images[0],
              size: '5xl',
              aspectMode: 'cover',
              aspectRatio: '150:196',
              gravity: 'center',
              flex: 1,
            },
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'image',
                  url: images[1],
                  size: 'full',
                  aspectMode: 'cover',
                  aspectRatio: '150:98',
                  gravity: 'center',
                },
                {
                  type: 'image',
                  url: images[2],
                  size: 'full',
                  aspectMode: 'cover',
                  aspectRatio: '150:98',
                  gravity: 'center',
                },
              ],
              flex: 1,
            },
          ],
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
                  type: 'image',
                  url: profile,
                  aspectMode: 'cover',
                  size: 'full',
                },
              ],
              cornerRadius: '100px',
              width: '72px',
              height: '72px',
            },
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'text',
                  contents: [
                    {
                      type: 'span',
                      text: username,
                      weight: 'bold',
                      color: '#000000',
                    },
                    {
                      type: 'span',
                      text: '     ',
                    },
                    {
                      type: 'span',
                      text,
                    },
                  ],
                  size: 'sm',
                  wrap: true,
                },
                {
                  type: 'box',
                  layout: 'baseline',
                  contents: [
                    {
                      type: 'text',
                      text: `${String(likeCount)
                        .split('')
                        .reverse()
                        .reduce(
                          (acc, num) =>
                            acc.length === 3 || acc.indexOf(',') === 3
                              ? num + ',' + acc
                              : num + acc,
                          ''
                        )} Likes`,
                      size: 'sm',
                      color: '#bcbcbc',
                    },
                  ],
                  spacing: 'sm',
                  margin: 'md',
                },
              ],
            },
          ],
          spacing: 'xl',
          paddingAll: '20px',
        },
      ],
      paddingAll: '0px',
    },
  };
}

module.exports = social;
