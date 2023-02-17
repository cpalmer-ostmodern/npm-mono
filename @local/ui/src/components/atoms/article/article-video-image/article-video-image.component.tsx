import { useState } from 'react';

/* eslint-disable-next-line */
export interface ArticleVideoImageProps {
  src?: string;
  alt?: string;
  twImg?: string;
  twIcon?: string;
}

function PlayIcon({ active = false }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={72} height={72} fill="none">
      <path fill="#fff" d="M0 0h72v72H0z" />
      <path
        d="M27.806 20.781 49.686 36l-21.88 15.219V20.781Z"
        fill={active ? '#212121' : ''}
        stroke="#212121"
        strokeWidth={1.5}
      />
    </svg>
  );
}

export function ArticleVideoImage({
  src = '',
  alt = '',
  twImg,
  twIcon,
}: ArticleVideoImageProps) {
  const [playIconActive, setPlayIconActive] = useState<boolean>(false);

  const handleMenuLinkEnter = () => {
    setPlayIconActive(true);
  };

  const handleMenuLinkLeave = () => {
    setPlayIconActive(false);
  };

  return src ? (
    <div
      className={twImg}
      onMouseEnter={handleMenuLinkEnter}
      onMouseLeave={handleMenuLinkLeave}
    >
      <img src={src} alt={alt} className="object-cover w-full" />
      <div className={twIcon}>
        <PlayIcon active={playIconActive} />
      </div>
    </div>
  ) : (
    <div className="text-center">Image could not be loaded</div>
  );
}

export default ArticleVideoImage;
