const isGithubActions = process.env.GITHUB_ACTIONS || false;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: isGithubActions ? "/ModuHomepage" : "",
  assetPrefix: isGithubActions ? "/ModuHomepage/" : "",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // 현재 에러가 나는 Unsplash
      },
      {
        protocol: 'https',
        hostname: 'scontent.cdninstagram.com', // 인스타그램 사진 대비
      },
      {
        protocol: 'https',
        hostname: 's3-media*.fl.yelpcdn.com', // Yelp 사진 대비
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // 구글 리뷰 사진 대비
      },
    ],
  },
};

export default nextConfig;