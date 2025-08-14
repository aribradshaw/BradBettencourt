import React, { useState, useMemo } from 'react';

type HeaderProps = {
  activeKey?: 'home' | 'meet' | 'issues' | 'connect' | 'endorsements' | 'mediakit' | 'donate' | 'vote';
};

export const Header: React.FC<HeaderProps> = ({ activeKey }) => {
  const isDev = (import.meta as any).env?.DEV ?? false;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Robust logo source with fallbacks to handle casing/legacy names
  const logoCandidates = useMemo(
    () => ['/LogoTricolor.svg', '/logotricolor.svg', '/logoTricolor.svg'],
    []
  );
  const [logoIndex, setLogoIndex] = useState(0);
  const logoSrc = logoCandidates[Math.min(logoIndex, logoCandidates.length - 1)];

  const hrefFor = (key: HeaderProps['activeKey']) => {
    if (isDev) {
      switch (key) {
        case 'home': return '/src/pages/home/index.html';
        case 'meet': return '/src/pages/meet/index.html';
        case 'issues': return '/src/pages/issues/index.html';
        case 'connect': return '/src/pages/connect/index.html';
        case 'endorsements': return '/src/pages/endorsements/index.html';
        case 'mediakit': return '/src/pages/mediakit/index.html';
        case 'donate': return '/src/pages/donate/index.html';
        case 'vote': return '/src/pages/vote/index.html';
      }
    }
    // production build paths (clean URLs without .html)
    switch (key) {
      case 'home': return '/';
      default: return `/${key}`;
    }
  };

  // Keep active item at same BLACK weight as others
  const isActive = (key: HeaderProps['activeKey']) => activeKey === key ? { fontWeight: 900 } : undefined;

  const linkProps = (key: HeaderProps['activeKey']): React.AnchorHTMLAttributes<HTMLAnchorElement> => ({
    href: hrefFor(key),
    className: activeKey === key ? 'is-active' : undefined,
    'aria-current': activeKey === key ? 'page' : undefined
  });

  return (
    <header className="site-header">
      <div className="container nav">
        <div className="nav-left">
          <a href={hrefFor('home')} aria-label="Bridget Fitzgibbons Home">
            <img
              className="logo-img"
              src={logoSrc}
              alt="Bridget Fitzgibbons for State Senate"
              onError={() => setLogoIndex((i) => i + 1)}
            />
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        
        {/* Mobile menu backdrop */}
        {isMobileMenuOpen && (
          <div 
            className="mobile-menu-backdrop" 
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
        
        <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`} aria-label="Primary">
          <a style={isActive('home')} href={hrefFor('home')} onClick={() => setIsMobileMenuOpen(false)}>Meet Brad</a>
          <a style={isActive('issues')} {...linkProps('issues')} onClick={() => setIsMobileMenuOpen(false)}>Issues</a>
          <a style={isActive('connect')} {...linkProps('connect')} onClick={() => setIsMobileMenuOpen(false)}>Connect</a>
          <a style={isActive('vote')} {...linkProps('vote')} onClick={() => setIsMobileMenuOpen(false)}>Vote</a>
          {/* <a style={isActive('endorsements')} {...linkProps('endorsements')} onClick={() => setIsMobileMenuOpen(false)}>Endorsements</a> */}
          <a style={isActive('mediakit')} {...linkProps('mediakit')} onClick={() => setIsMobileMenuOpen(false)}>Media</a>
          <a className="donate-button" href={hrefFor('donate')} onClick={() => setIsMobileMenuOpen(false)}>Donate</a>
        </nav>
      </div>
    </header>
  );
};


