// import {withSentryConfig} from "@sentry/nextjs";
import type { NextConfig } from "next";

// Axiom
// const { withAxiom } = require('next-axiom');

// const nextConfig = withAxiom({
//   // Your existing configuration.
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
// });


// const nextConfig: NextConfig = {
//   /* config options here */

//   // show warnings in console but wont break production build
//   eslint: {
//     ignoreDuringBuilds: true,
//   },

//   // Next.js 15
//   // serverExternalPackages: ["pino", "pino-pretty", "@logtail/pino", "thread-stream"],

//   // // resolves client-side module resolution error for pino
//   // // @see https://github.com/pinojs/pino/issues/1841#issuecomment-2244564289
//   // webpack: (config, context) => {
//   //   config.externals.push({
//   //     "thread-stream": "commonjs thread-stream",
//   //   });
//   //   return config;
//   // },
// };

// default next config
// const nextConfig = {
//   // Your existing configuration.
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
// };
// export default nextConfig;

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};
export default nextConfig;

// Sentry (which needs the default next config above)
// export default withSentryConfig(nextConfig, {
// // For all available options, see:
// // https://www.npmjs.com/package/@sentry/webpack-plugin#options

// org: "hmsoftware",
// project: "cooking",

// // Only print logs for uploading source maps in CI
// silent: !process.env.CI,

// // For all available options, see:
// // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

// // Upload a larger set of source maps for prettier stack traces (increases build time)
// widenClientFileUpload: true,

// // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
// // This can increase your server load as well as your hosting bill.
// // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
// // side errors will fail.
// tunnelRoute: "/monitoring",

// // Automatically tree-shake Sentry logger statements to reduce bundle size
// disableLogger: true,

// // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
// // See the following for more information:
// // https://docs.sentry.io/product/crons/
// // https://vercel.com/docs/cron-jobs
// automaticVercelMonitors: true,
// });