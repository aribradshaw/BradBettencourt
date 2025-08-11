import React from 'react';
import { Layout } from '../../components/Layout';

const DonatePage: React.FC = () => {
  return (
    <Layout title="Donate" description="Support the campaign to elect Dr. Bridget Fitzgibbons to the Arizona State Senate." activeKey="donate">
      <h1 className="page-title">Donate</h1>
      <p className="lead">Your support makes this campaign possible. Thank you!</p>
      <div className="card" style={{ marginTop: 16 }}>
        <h2>Coming soon</h2>
        <p className="muted">Donation platform will be available here soon.</p>
      </div>
    </Layout>
  );
};

export default DonatePage;


