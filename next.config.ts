import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    trailingSlash: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'limbourg-backend.pechschwarz.dev',
                port: '',
            },
        ],
        deviceSizes: [640, 768, 1024, 1280, 1536, 1920, 2500],
        imageSizes: [640, 768, 1024, 1280, 1536, 1920, 2500],
    },
};

export default nextConfig;
