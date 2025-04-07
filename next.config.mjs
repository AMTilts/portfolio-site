/** @type {import('next').NextConfig} */
    const nextConfig = {
      reactStrictMode: true,
      // Disable SWC minification
      swcMinify: false,
      // Explicitly disable SWC for compilation/transforms and force Babel
      experimental: {
        forceSwcTransforms: false,
      },

      // Add other configurations here if needed
    };

    export default nextConfig;
