/** @type {import('next').NextConfig} */

const nextConfig = {
    distDir: 'build',
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