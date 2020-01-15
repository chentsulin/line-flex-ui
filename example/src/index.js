const { router, line, text } = require('bottender/router');

const {
  apparel,
  hotel,
  localSearch,
  menu,
  realEstate,
  receipt,
  shopping,
  restaurant,
  social,
  ticket,
  todoApp,
  transit,
} = require('line-flex-ui/showcase');

const options = {
  quickReply: {
    items: [
      'apparel',
      'hotel',
      'localsearch',
      'menu',
      'realestate',
      'receipt',
      'restaurant',
      'shopping',
      'social',
      'ticket',
      'todoapp',
      'transit',
    ].map(type => ({
      type: 'action',
      action: {
        type: 'message',
        label: type,
        text: type,
      },
    })),
  },
};

async function Welcome(context) {
  await context.sendText('Welcome to Flex UI', options);
}

module.exports = async function App() {
  return router([
    line.follow(Welcome),
    line.join(Welcome),

    text(/apparel/i, async context => {
      await context.sendFlex(
        'Basic Apparel',
        apparel({
          image:
            'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip1.jpg',
          name: "Brown's T-shirts",
          originalPrice: '¥75,000',
          discountedPrice: '¥35,800',
          maskColor: '#03303acc',
        })
      );

      await context.sendFlex(
        "With `maskColor: '#9c8e7ecc'`",
        apparel({
          image:
            'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip1.jpg',
          name: "Brown's T-shirts",
          originalPrice: '¥75,000',
          discountedPrice: '¥35,800',
          maskColor: '#9c8e7ecc',
        })
      );

      await context.sendFlex(
        'With Other Image',
        apparel({
          image:
            'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip2.jpg',
          name: "Cony's T-shirts",
          originalPrice: '¥75,000',
          discountedPrice: '¥35,800',
          maskColor: '#9c8e7ecc',
        })
      );

      await context.sendFlex(
        'Carousel',
        {
          type: 'carousel',
          contents: [
            apparel({
              image:
                'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip1.jpg',
              name: "Brown's T-shirts",
              originalPrice: '¥75,000',
              discountedPrice: '¥35,800',
              maskColor: '#03303acc',
            }),
            apparel({
              image:
                'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip2.jpg',
              name: "Cony's T-shirts",
              originalPrice: '¥75,000',
              discountedPrice: '¥35,800',
              maskColor: '#9c8e7ecc',
            }),
          ],
        },
        options
      );
    }),
    text(/hotel/i, async context => {
      await context.sendFlex(
        'Basic Hotel',
        hotel({
          image:
            'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip3.jpg',
          name: 'Brown Grand Hotel',
          rating: 4.0,
          originalPrice: '¥82,000',
          discountedPrice: '¥62,000',
        }),
        options
      );
    }),
    text(/localsearch/i, async context => {
      await context.sendFlex(
        'Basic Local Search',
        localSearch({
          image:
            'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip10.jpg',
          name: 'Brown Cafe',
          rating: 4.0,
          description: '東京旅行',
        })
      );

      await context.sendFlex(
        'Without `description`',
        localSearch({
          image:
            'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip10.jpg',
          name: 'Brown Cafe',
          rating: 4.0,
        })
      );

      await context.sendFlex(
        'Carousel',
        {
          type: 'carousel',
          contents: [
            localSearch({
              image:
                'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip10.jpg',
              name: 'Brown Cafe',
              rating: 4.0,
              description: '東京旅行',
            }),
            localSearch({
              image:
                'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip11.jpg',
              name: "Brow&Cony's Restaurant",
              rating: 5.0,
              description: '東京旅行',
            }),
            localSearch({
              image:
                'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip12.jpg',
              name: 'Tata',
              rating: 0.1,
              description: '東京旅行',
            }),
          ],
        },
        options
      );
    }),
    text(/menu/i, async context => {
      await context.sendFlex(
        'Basic Menu',
        menu({
          image:
            'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_2_restaurant.png',
          name: "Brown's Burger",
          priceRegular: '$10.5',
          kcalRegular: 400,
          priceLarge: '$15.5',
          kcalLarge: 550,
          description: 'Sauce, Onions, Pickles, Lettuce & Cheese',
        })
      );

      await context.sendFlex(
        'Without `description`',
        menu({
          image:
            'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_2_restaurant.png',
          name: "Brown's Burger",
          priceRegular: '$10.5',
          kcalRegular: 400,
          priceLarge: '$15.5',
          kcalLarge: 550,
        }),
        options
      );
    }),
    text(/realestate/i, async context => {
      await context.sendFlex(
        'Basic Real Estate',
        realEstate({
          images: [
            'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip4.jpg',
            'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip5.jpg',
            'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip6.jpg',
          ],
          isNew: true,
          name: 'Cony Residence',
          numOfBedrooms: 3,
          price: '¥35,000',
          description:
            'Private Pool, Delivery box, Floor heating, Private Cinema',
        })
      );

      await context.sendFlex(
        'With `isNew: false`',
        realEstate({
          images: [
            'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip4.jpg',
            'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip5.jpg',
            'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip6.jpg',
          ],
          isNew: false,
          name: 'Cony Residence',
          numOfBedrooms: 3,
          price: '¥35,000',
          description:
            'Private Pool, Delivery box, Floor heating, Private Cinema',
        }),
        options
      );
    }),
    text(/receipt/i, async context => {
      await context.sendFlex(
        'Basic Receipt',
        receipt({
          name: 'Brown Store',
          address: 'Miraina Tower, 4-1-6 Shinjuku, Tokyo',
          items: [
            { name: 'Energy Drink', price: 2.99 },
            { name: 'Chewing Gum', price: 0.99 },
            { name: 'Bottled Water', price: 3.33 },
          ],
          cash: 8.0,
          paymentId: '#743289384279',
        })
      );

      await context.sendFlex(
        'Without `address`',
        receipt({
          name: 'Brown Store',
          items: [
            { name: 'Energy Drink', price: 2.99 },
            { name: 'Chewing Gum', price: 0.99 },
            { name: 'Bottled Water', price: 3.33 },
          ],
          cash: 8.0,
          paymentId: '#743289384279',
        })
      );

      await context.sendFlex(
        'Without `paymentId`',
        receipt({
          name: 'Brown Store',
          address: 'Miraina Tower, 4-1-6 Shinjuku, Tokyo',
          items: [
            { name: 'Energy Drink', price: 2.99 },
            { name: 'Chewing Gum', price: 0.99 },
            { name: 'Bottled Water', price: 3.33 },
          ],
          cash: 8.0,
        })
      );

      await context.sendFlex(
        'With `formatPrice`',
        receipt({
          name: 'Brown Store',
          address: 'Miraina Tower, 4-1-6 Shinjuku, Tokyo',
          items: [
            { name: 'Energy Drink', price: 2.99 },
            { name: 'Chewing Gum', price: 0.99 },
            { name: 'Bottled Water', price: 3.33 },
          ],
          cash: 8.0,
          formatPrice: price => `USD ${price.toFixed(2)}`,
        }),
        options
      );
    }),
    text(/restaurant/i, async context => {
      await context.sendFlex(
        'Basic Restaurant',
        restaurant({
          name: 'Brown Cafe',
          image:
            'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png',
          place: 'Miraina Tower, 4-1-6 Shinjuku, Tokyo',
          time: '10:00 - 23:00',
          rating: 4.0,
          phone: '+886912345678',
          website: 'https://linecorp.com',
        })
      );

      await context.sendFlex(
        'With `rating: 1.0`',
        restaurant({
          name: 'Brown Cafe',
          image:
            'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png',
          place: 'Miraina Tower, 4-1-6 Shinjuku, Tokyo',
          time: '10:00 - 23:00',
          rating: 1.0,
          phone: '+886912345678',
          website: 'https://linecorp.com',
        })
      );

      await context.sendFlex(
        'Multi-line `time`',
        restaurant({
          name: 'Brown Cafe',
          image:
            'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png',
          place: 'Miraina Tower, 4-1-6 Shinjuku, Tokyo',
          time: '10:00 - 21:00 (Mon.-Sat.)\n10:00 - 18:00 (Sun.)',
          rating: 4.0,
          phone: '+886912345678',
          website: 'https://linecorp.com',
        })
      );

      await context.sendFlex(
        'Without `phone`',
        restaurant({
          name: 'Brown Cafe',
          image:
            'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png',
          place: 'Miraina Tower, 4-1-6 Shinjuku, Tokyo',
          time: '10:00 - 23:00',
          rating: 1.0,
          website: 'https://linecorp.com',
        })
      );

      await context.sendFlex(
        'Without `website`',
        restaurant({
          name: 'Brown Cafe',
          image:
            'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png',
          place: 'Miraina Tower, 4-1-6 Shinjuku, Tokyo',
          time: '10:00 - 23:00',
          rating: 1.0,
          phone: '+886912345678',
        }),
        options
      );
    }),
    text(/shopping/i, async context => {
      await context.sendFlex(
        'Basic Shopping',
        shopping({
          image:
            'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_5_c.png',
          name: 'Arm Chair, White',
          price: '$49.99',
          isAvailable: true,
        })
      );

      await context.sendFlex(
        'With `isAvailable: false`',
        shopping({
          image:
            'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_6_c.png',
          name: 'Metal Desk Lamp',
          price: '$11.99',
          isAvailable: false,
        })
      );

      await context.sendFlex(
        'Carousel',
        {
          type: 'carousel',
          contents: [
            shopping({
              image:
                'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_5_c.png',
              name: 'Arm Chair, White',
              price: '$49.99',
              isAvailable: true,
            }),
            shopping({
              image:
                'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_6_c.png',
              name: 'Metal Desk Lamp',
              price: '$11.99',
              isAvailable: false,
            }),
          ],
        },
        options
      );
    }),
    text(/social/i, async context => {
      await context.sendFlex(
        'Basic Social',
        social({
          images: [
            'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip7.jpg',
            'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip8.jpg',
            'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip9.jpg',
          ],
          profile:
            'https://scdn.line-apps.com/n/channel_devcenter/img/flexsnapshot/clip/clip13.jpg',
          username: 'brown_05',
          text: 'I went to the Brown&Cony cafe in Tokyo and took a picture',
          likeCount: 1140753,
        }),
        options
      );
    }),
    text(/ticket/i, async context => {
      await context.sendFlex(
        'Basic Ticket',
        ticket({
          image:
            'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_3_movie.png',
          name: "BROWN'S ADVENTURE\nIN MOVIE",
          rating: 4.0,
          date: 'Monday 25, 9:00PM',
          place: '7 Floor, No.3',
          seat: 'C Row, 18 Seat',
          qrcode:
            'https://scdn.line-apps.com/n/channel_devcenter/img/fx/linecorp_code_withborder.png',
        })
      );

      await context.sendFlex(
        'Without `qrcode`',
        ticket({
          image:
            'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_3_movie.png',
          name: "BROWN'S ADVENTURE\nIN MOVIE",
          rating: 4.0,
          date: 'Monday 25, 9:00PM',
          place: '7 Floor, No.3',
          seat: 'C Row, 18 Seat',
        }),
        options
      );
    }),
    text(/todoapp/i, async context => {
      await context.sendFlex(
        'Basic TodoApp',
        todoApp({
          status: 'In Progress',
          percentage: 70,
          text: 'Buy milk and lettuce before class',
        })
      );

      await context.sendFlex(
        'Pending',
        todoApp({
          status: 'Pending',
          percentage: 70,
          text: 'Buy milk and lettuce before class',
        })
      );

      await context.sendFlex(
        '0 Percent',
        todoApp({
          status: 'In Progress',
          percentage: 0,
          text: 'Buy milk and lettuce before class',
        })
      );

      await context.sendFlex(
        '100 Percent',
        todoApp({
          status: 'In Progress',
          percentage: 100,
          text: 'Buy milk and lettuce before class',
        })
      );

      await context.sendFlex(
        'Carousel',
        {
          type: 'carousel',
          contents: [
            todoApp({
              status: 'In Progress',
              percentage: 70,
              text: 'Buy milk and lettuce before class',
            }),
            todoApp({
              status: 'Pending',
              percentage: 30,
              text: 'Wash my car',
            }),
            todoApp({
              status: 'In Progress',
              percentage: 100,
              text: 'Buy milk and lettuce before class',
            }),
          ],
        },
        options
      );
    }),
    text(/transit/i, async context => {
      await context.sendFlex(
        'Basic Transit',
        transit({
          from: 'Akihabara',
          to: 'Shinjuku',
          total: '1 hour',
          items: [
            transit.stop({
              time: '20:30',
              name: 'Akihabara',
              color: '#ef454d',
            }),
            transit.path({
              description: 'Walk 4min',
            }),
            transit.stop({
              time: '20:34',
              name: 'Ochanomizu',
              color: '#6486e3',
            }),
            transit.path({
              description: 'Metro 1hr',
              color: '#6486e3',
            }),
            transit.stop({
              time: '20:40',
              name: 'Shinjuku',
              color: '#6486e3',
            }),
          ],
        }),
        options
      );
    }),
  ]);
};
