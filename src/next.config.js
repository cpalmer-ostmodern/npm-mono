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
    if (
      process.env.NODE_ENV !==
      'development'
    ) {
      // console.log(config);
      config.plugins.push(
        new WebpackBeforeBuildPlugin(
          async function (
            stats,
            callback,
          ) {
            // 'https://2s7jicu0rf.execute-api.eu-west-1.amazonaws.com/prod/lambda-b',
            const response =
              await fetch(
                'https://2s7jicu0rf.execute-api.eu-west-1.amazonaws.com/prod/lambda-a',
              );

            // console.log(response.body);

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
    } else {
      // do nothing - config has loaded
    }
    return config;
  },
};
