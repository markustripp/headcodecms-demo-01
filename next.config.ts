import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  cacheComponents: true,
  reactCompiler: true,
  images: {
    remotePatterns: [
      new URL('https://olvzsyunffi8p5qo.public.blob.vercel-storage.com/**'),
      new URL('https://kgtqtevoofuen1xm.public.blob.vercel-storage.com/**'),
    ],
  },
}

export default nextConfig
