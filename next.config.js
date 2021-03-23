// const path = require('path');

// module.exports = {
//   wepback: (config) => {
//     config.resolve.alias['components'] = path.join(__dirname, 'components');
//     config.resolve.alias['public'] = path.join(__dirname, 'public');

//     return config;
//   },
// };
require('dotenv').config();

module.exports = {

  env: {
    API_URL: process.env.API_URL,
    MONGO_DB_URL: process.env.MONGO_DB_URL,
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
  },

  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
