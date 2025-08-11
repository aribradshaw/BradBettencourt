import React, { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

type LayoutProps = {
  title: string;
  description?: string;
  activeKey?: 'home' | 'issues' | 'connect' | 'endorsements' | 'mediakit' | 'donate' | 'vote' | 'meet';
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ title, description, activeKey, children }) => {
  useEffect(() => {
    document.title = title;
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'description');
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', description);
    }
  }, [title, description]);

  return (
    <div>
      <a href="#main" className="sr-only">Skip to content</a>
      <Header activeKey={activeKey} />
      <main id="main" className="container main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};


