import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

type SocialLinksProps = {
  className?: string;
};

export const SocialLinks: React.FC<SocialLinksProps> = ({ className }) => {
  return (
    <div className={['social-links', className].filter(Boolean).join(' ')}>
      <a
        href="https://www.facebook.com/profile.php?id=100054644490884"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="social-link"
      >
        <FaFacebook size={22} />
      </a>
      <a
        href="https://www.instagram.com/drfitzgibbons/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="social-link"
      >
        <FaInstagram size={22} />
      </a>
    </div>
  );
};


