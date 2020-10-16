export const splitPaneMap: { [key: string]: any } = {
  viewDefault: {
    outside: {
      split: 'vertical',
      size: '60%',
    },
    inside: {
      split: 'horizontal',
      size: '50%',
    },
  },
  viewTwoRows: {
    outside: {
      split: 'vertical',
      size: '100%',
    },
    inside: {
      split: 'vertical',
      size: '50%',
    },
  },
  viewThreeCols: {
    outside: {
      split: 'vertical',
      size: '66.6%',
    },
    inside: {
      split: 'vertical',
      size: '50%',
    },
  },
  viewThreeRows: {
    outside: {
      split: 'horizontal',
      size: '66.6%',
    },
    inside: {
      split: 'horizontal',
      size: '50%',
    },
  },
};
