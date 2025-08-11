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
              <img src="/LogoGrayscale.svg" alt="Logo - Grayscale" />
              <div className="caption">Grayscale SVG</div>
              <div className="btn-group">
                <Button variant="outline" href="/LogoGrayscale.svg" download>Download SVG</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="card section" style={{ gridColumn: 'span 12' }}>
          <h2>Brand Colors</h2>
          <div className="swatch-grid">
            <div className="swatch-card">
              <div className="swatch" style={{ background: 'var(--color-maroon)' }} />
              <div className="swatch-meta"><span>Maroon</span><code>#8C1D40</code></div>
            </div>
            <div className="swatch-card">
              <div className="swatch" style={{ background: 'var(--color-gold)' }} />
              <div className="swatch-meta"><span>Gold</span><code>#FFC627</code></div>
            </div>
            <div className="swatch-card">
              <div className="swatch" style={{ background: '#000000' }} />
              <div className="swatch-meta"><span>Black</span><code>#000000</code></div>
            </div>
          </div>
        </div>

        <div className="card section" style={{ gridColumn: 'span 12' }}>
          <h2>Typography</h2>
          <p className="muted">Primary font: Source Serif 4 Variable (Adobe Fonts). Variable font with Roman and Italic styles, multiple weights. Navigation uses uppercase Black weight.</p>
          <div className="btn-group btn-group-left">
            <Button variant="secondary" href="https://use.typekit.net/tri1ejt.css" target="_blank" rel="noopener noreferrer">View Adobe Fonts</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MediaKitPage;


