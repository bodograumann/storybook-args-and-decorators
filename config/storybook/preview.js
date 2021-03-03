const withPrefix = () => ({
  provide: {
    prefix: 'Storybook-Foobar',
  },
  template: "<story />",
});

export const decorators = [
  withPrefix,
];
