// @ts-ignore
import Runner from './Runner';

Runner(
  'iOS 11 / Safari Oldest',
  'https://cal-heatmap.com/tests/index-d3v7-umd.html',
  {
    'bstack:options': {
      deviceName: 'iPhone X',
      osVersion: '11',
      browserVersion: 'latest',
    },
    browserName: 'safari',
  },
);