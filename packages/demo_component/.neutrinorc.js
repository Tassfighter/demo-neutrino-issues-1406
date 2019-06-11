const airbnb = require('@neutrinojs/airbnb');
const reactComponents = require('@neutrinojs/react-components');
const jest = require('@neutrinojs/jest');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    airbnb({
      eslint: {
        baseConfig: {
          rules: {
            // solves: 'react' should be listed in the project's dependencies, not devDependencies
            'import/no-extraneous-dependencies': 'off',
          },
        },
      },
    }),
    reactComponents({
      components: '.', // now you can put your components in src/
    }),
    jest(),
  ],
};
