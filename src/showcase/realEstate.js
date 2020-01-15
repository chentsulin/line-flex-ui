/**
 * realEstate({
 *   images: [
 *     'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip4.jpg',
 *     'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip5.jpg',
 *     'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip6.jpg',
 *   ],
 *   isNew: true,
 *   name: 'Cony Residence',
 *   numOfBedrooms: 3,
 *   price: '¥35,000',
 *   description: 'Private Pool, Delivery box, Floor heating, Private Cinema',
 * })
 */
function realEstate({
  images,
  isNew = true,
  name,
  numOfBedrooms,
  price,
  description,
}) {
  return {
    type: 'bubble',
    header: {
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
              size: 'full',
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
            ...(isNew
              ? [
                  {
                    type: 'box',
                    layout: 'horizontal',
                    contents: [
                      {
                        type: 'text',
                        text: 'NEW',
                        size: 'xs',
                        color: '#ffffff',
                        align: 'center',
                        gravity: 'center',
                      },
                    ],
                    backgroundColor: '#EC3D44',
                    paddingAll: '2px',
                    paddingStart: '4px',
                    paddingEnd: '4px',
                    flex: 0,
                    position: 'absolute',
                    offsetStart: '18px',
                    offsetTop: '18px',
                    cornerRadius: '100px',
                    width: '48px',
                    height: '25px',
                  },
                ]
              : []),
          ],
        },
      ],
      paddingAll: '0px',
    },
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'text',
                  contents: [],
                  size: 'xl',
                  wrap: true,
                  text: name,
                  color: '#ffffff',
                  weight: 'bold',
                },
                {
                  type: 'text',
                  text: `${numOfBedrooms} Bedrooms, ${price}`,
                  color: '#ffffffcc',
                  size: 'sm',
                },
              ],
              spacing: 'sm',
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
                      type: 'text',
                      contents: [],
                      size: 'sm',
                      wrap: true,
                      margin: 'lg',
                      color: '#ffffffde',
                      text: description,
                    },
                  ],
                },
              ],
              paddingAll: '13px',
              backgroundColor: '#ffffff1A',
              cornerRadius: '2px',
              margin: 'xl',
            },
          ],
        },
      ],
      paddingAll: '20px',
      backgroundColor: '#464F69',
    },
  };
}

module.exports = realEstate;
