import React from 'react';
import { Layout } from '../../components/Layout';
import { Button } from '../../components/Button';

const MediaKitPage: React.FC = () => {
  return (
    <Layout title="Media Kit" description="Brand assets, photos, and logos for press and partners." activeKey="mediakit">
      <h1 className="page-title">Media Kit</h1>
      <div className="grid" style={{ paddingTop: 16 }}>
        <div className="card section" style={{ gridColumn: 'span 12' }}>
          <h2>Gallery</h2>
          <p className="muted">Coming soon.</p>
        </div>

        <div className="card section" style={{ gridColumn: 'span 12' }}>
          <h2>Logos</h2>
          <div className="asset-grid">
            <div className="asset-card">
              <img src="/LogoColor.svg" alt="Logo - Full Color" />
              <div className="caption">Full Color SVG</div>
              <div className="btn-group">
                <Button variant="primary" href="/LogoColor.svg" download>Download SVG</Button>
              </div>
            </div>
            <div className="asset-card">
              <img src="/LogoBlack.svg" alt="Logo - Monochrome" />
              <div className="caption">Monochrome SVG</div>
              <div className="btn-group">
                <Button variant="outline" href="/LogoBlack.svg" download>Download SVG</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="card section" style={{ gridColumn: 'span 12' }}>
          <h2>Brand Colors</h2>
          <div className="swatch-grid">
            <div className="swatch-card">
              <div className="swatch" style={{ background: 'var(--color-red)' }} />
              <div className="swatch-meta"><span>Red</span><code>#dc2927</code></div>
            </div>
            <div className="swatch-card">
              <div className="swatch" style={{ background: 'var(--color-yellow)' }} />
              <div className="swatch-meta"><span>Yellow</span><code>#f2cf30</code></div>
            </div>
            <div className="swatch-card">
              <div className="swatch" style={{ background: 'var(--color-blue)' }} />
              <div className="swatch-meta"><span>Blue</span><code>#2c328e</code></div>
            </div>
          </div>
        </div>

        <div className="card section" style={{ gridColumn: 'span 12' }}>
          <h2>Typography</h2>
          <p className="muted">Primary font: Proxima Nova (Adobe Fonts). Weights: 400 (Regular), 700 (Bold), 900 (Black). Navigation uses uppercase Black.</p>
          <div className="btn-group btn-group-left">
            <Button variant="secondary" href="https://use.typekit.net/rqo6dsz.css" target="_blank" rel="noopener noreferrer">View Adobe Kit</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MediaKitPage;


