const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'ac.goit.global', pathname: "/**" },
    ],
  },
};

export default nextConfig;