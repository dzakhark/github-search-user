import { memo } from 'react';

interface AvatarProps {
    src: string,
    alt: string
}

const Avatar = ({ src, alt }: AvatarProps) => {
  return (
    <img className="h-12 w-12 rounded-full" src={src} alt={alt} loading="lazy" />
  )
}

export default memo(Avatar);