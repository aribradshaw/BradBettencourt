import React from 'react';
import { Button } from './Button';

export const Footer: React.FC = () => {
  const isDev = (import.meta as any).env?.DEV ?? false;
  const hrefFor = (key: 'home' | 'meet' | 'issues' | 'connect' | 'vote' | 'endorsements' | 'mediakit' | 'donate') => {
    if (isDev) {
      switch (key) {
        case 'home': return '/src/pages/home/index.html';
        case 'meet': return '/src/pages/meet/index.html';
        case 'issues': return '/src/pages/issues/index.html';
        case 'connect': return '/src/pages/connect/index.html';
        case 'vote': return '/src/pages/vote/index.html';
        case 'endorsements': return '/src/pages/endorsements/index.html';
        case 'mediakit': return '/src/pages/mediakit/index.html';
        case 'donate': return '/src/pages/donate/index.html';
      }
    }
    // production build paths (clean URLs without .html)
    switch (key) {
      case 'home': return '/';
      default: return `/${key}`;
    }
  };

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-main">
          <div className="footer-section">
            <h3 className="footer-title">Navigation</h3>
            <nav className="footer-nav" aria-label="Footer">
              <a href={hrefFor('meet')}>Meet Brad</a>
              <a href={hrefFor('issues')}>Issues</a>
              <a href={hrefFor('connect')}>Connect</a>
              <a href={hrefFor('vote')}>Vote</a>
              {/* <a href={hrefFor('endorsements')}>Endorsements</a> */}
              <a href={hrefFor('mediakit')}>Media</a>
            </nav>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Get Involved</h3>
            <div className="footer-actions">
              <Button href={hrefFor('donate')} variant="primary">
                DONATE
              </Button>
              <div className="newsletter">
                <h4 className="newsletter-title">Stay Updated</h4>
                <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                  <label className="sr-only" htmlFor="newsletter-email">Email</label>
                  <input id="newsletter-email" type="email" required placeholder="Enter your email" />
                  <Button type="submit" variant="outline">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Donate by Mail</h3>
            <div className="footer-actions">
              <p>Contact us for mailing address</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <p>Paid for by Bettencourt for AZ LD9</p>
            <p>© 2025 Bettencourt for AZ LD9. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};


