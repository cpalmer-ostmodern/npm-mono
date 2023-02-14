// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
//   swcMinify: true,

//   experimental: {
//     // Required:
//     appDir: true,
//   },
// };

// module.exports = nextConfig;

const WebpackBeforeBuildPlugin = require('before-build-webpack');
const fs = require('fs');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    // Required:
    appDir: true,
  },

  webpack: (
    config,
    {
      buildId,
      dev,
      isServer,
      defaultLoaders,
      nextRuntime,
      webpack,
    },
  ) => {
    // console.log(config);

    config.plugins.push(
      new WebpackBeforeBuildPlugin(
        async function (
          stats,
          callback,
        ) {
          const response = await fetch(
            'https://2s7jicu0rf.execute-api.eu-west-1.amazonaws.com/prod/lambda-a',
          );

          console.log(response.body);

          const dt =
            await response.json();

          fs.writeFileSync(
            './.tmp/colors.json',
            JSON.stringify(dt),
          );

          callback();
        },
      ),
    );
    // Important: return the modified config

    return config;
  },
};
