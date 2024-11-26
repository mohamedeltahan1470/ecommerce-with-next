
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.google.com',
          port: '',
          // pathname: '/imgres/**', // Uncomment this if specific paths are needed
        },
      ],
    },
  };
  
  export default nextConfig;
  