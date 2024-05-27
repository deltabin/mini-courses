import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'skill-x.ru',
			},
		],
	},
}

export default withNextVideo(nextConfig);