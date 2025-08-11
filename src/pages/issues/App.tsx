import React from 'react';
import { Layout } from '../../components/Layout';
import { FaShieldAlt, FaDollarSign, FaLandmark } from 'react-icons/fa';
import { GiDesert } from 'react-icons/gi';

const IssuesPage: React.FC = () => {
  return (
    <Layout title="Issues - Dr. Bridget Fitzgibbons for Arizona State Senate" description="Learn about Dr. Bridget Fitzgibbons' conservative policy positions on border security, economic prosperity, and Arizona values." activeKey="issues">
      <section className="container" style={{ padding: '48px 0' }}>
        <div className="issues-content">
          <h1 className="page-title">Issues</h1>
          <p className="lead">Dr. Bridget Fitzgibbons: A Conservative Champion for State Senate</p>
          
          <div className="issue-with-image">
            <div className="issue-card">
              <div className="issue-header">
                <div className="issue-icon">
                  <FaShieldAlt size={24} color="#dc2626" />
                </div>
                <h2>Secure Our Border & Communities</h2>
              </div>
              <div className="issue-content">
                <p>
                  Bridget will fight for a secure Arizona border by supporting our law enforcement and holding Washington accountable for its failure to act. She will work to implement tougher penalties on human trafficking and stop the flow of deadly drugs, like fentanyl, that are devastating our neighborhoods and families.
                </p>
              </div>
            </div>
                          <div className="issue-image">
                <img src="/lincolnstatue.jpg" alt="Lincoln Memorial" />
                <div className="lincoln-caption">
                  <div className="caption-icon">
                    <FaLandmark size={16} color="#6b7280" />
                  </div>
                  <div className="caption-text">
                    <span className="caption-title">Party of Lincoln</span>
                    <span className="caption-subtitle">Upholding constitutional principles</span>
                  </div>
                </div>
              </div>
          </div>
          
          <div className="issue-card">
            <div className="issue-header">
              <div className="issue-icon">
                <FaDollarSign size={24} color="#dc2626" />
              </div>
              <h2>Lowering the Cost of Living & Taxes</h2>
            </div>
            <div className="issue-content">
              <p>
                Bridget believes you know how to spend your hard earned money better than the government. She will champion responsible spending and tax relief for Arizona families and small businesses, promoting free-market principles to grow our economy and create jobs.
              </p>
            </div>
          </div>
          
          <div className="issue-card">
            <div className="issue-header">
              <div className="issue-icon">
                <GiDesert size={24} color="#dc2626" />
              </div>
              <h2>Defend Arizona's Values</h2>
            </div>
            <div className="issue-content">
              <p>
                Bridget will stand with parents, not government bureaucrats. She is a dedicated advocate for parental rights and school choice, ensuring every child has access to an excellent education. She will defend our constitutional liberties and push back on the radical, failed policies that are being imported from California and Washington D.C.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IssuesPage;


