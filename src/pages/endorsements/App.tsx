import React from 'react';
import { Layout } from '../../components/Layout';

const EndorsementsPage: React.FC = () => {
  return (
    <Layout title="Endorsements" description="Community leaders and organizations supporting Bridget." activeKey="endorsements">
      <h1 className="page-title">Endorsements</h1>
      <div className="grid" style={{ paddingTop: 16 }}>
        <div className="card" style={{ gridColumn: 'span 12' }}>
          <p>Coming soon.</p>
        </div>
      </div>
    </Layout>
  );
};

export default EndorsementsPage;


