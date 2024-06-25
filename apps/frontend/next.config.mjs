/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: "/api",
      destination: "http://localhost:3000/",
      permanent: true,
    },
  ],
};

export default nextConfig;
