// next.config.js

module.exports = {
    async redirects() {
      return [
        {
          source: '/custom-route',
          destination: '/your-page',
          permanent: true, // Set to true for permanent redirects, false for temporary
        },
      ];
    },
  };
  