/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, './'),
      };

      return config;
    },
    images:{
      remotePatterns:[
        {
          protocol: 'https',
          hostname: "images.pexels.com"
        }
      ]
    }
  }
  
  module.exports = nextConfig