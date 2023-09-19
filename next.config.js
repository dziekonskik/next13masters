/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: true,
	},
	redirects: async () => [{ source: "/products", destination: "/products/1", permanent: true }],
};

module.exports = nextConfig;
