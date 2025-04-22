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
  // Your existing configuration.
  eslint: {
    ignoreDuringBuilds: true,
  },
};
export default nextConfig;
