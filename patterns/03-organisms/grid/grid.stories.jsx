import './index';
import mdx from './grid.mdx';

const patternDefinition = require('./grid.space.yml');

export const space = {
  patternDefinition,
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: mdx,
    },
  },
};
