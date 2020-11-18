/**
 * @example
 *
 * ```js
 * impressionTracker({
 *   url: 'https://www.google-analytics.com/collect?...',
 * })
 * ```
 */

function impressionTracker({ url }) {
  return {
    height: '1px',
    layout: 'vertical',
    offsetStart: '0px',
    offsetTop: '0px',
    position: 'absolute',
    type: 'box',
    width: '1px',
    contents: [
      {
        aspectMode: 'cover',
        aspectRatio: '1:1',
        size: 'full',
        type: 'image',
        url,
      },
    ],
  };
}


module.exports = impressionTracker;
