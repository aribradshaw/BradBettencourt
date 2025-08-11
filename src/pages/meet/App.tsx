import React from 'react';
import { Layout } from '../../components/Layout';

const MeetBridgetPage: React.FC = () => {
  return (
    <Layout title="Meet Dr. Bridget Fitzgibbons - Arizona State Senate" description="Learn about Dr. Bridget Fitzgibbons, a leading physician and conservative leader running for Arizona State Senate." activeKey="meet">
      <section className="hero">
        <div className="container">
          <h1 className="page-title">Meet Dr. Bridget Fitzgibbons</h1>
          <p className="lead">Leading physician, community leader, and conservative champion for Arizona families.</p>
        </div>
      </section>
      
      <section className="container" style={{ padding: '48px 0' }}>
        <div className="about-content">
          <div className="about-intro">
            <h2>About Dr. Bridget Fitzgibbons</h2>
            <p className="intro-text">
              Dr. Bridget Fitzgibbons is a leading physician, specializing in psychology and social work, with a proven record of service to Arizona. As a community leader, she has dedicated her career to fighting for the health and safety of our state's most vulnerable.
            </p>
          </div>
          
          <div className="about-highlights">
            <div className="highlight-item">
              <div className="highlight-icon">🛡️</div>
              <div className="highlight-content">
                <h3>Protecting Arizona's Children</h3>
                <p>A dedicated physician fighting to end human trafficking and protect Arizona's children.</p>
              </div>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">🏥</div>
              <div className="highlight-content">
                <h3>Healthcare Leadership</h3>
                <p>A key voice in the medical community working to address healthcare shortages and lead advancements in medicine.</p>
              </div>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">🎓</div>
              <div className="highlight-content">
                <h3>Arizona Leadership Scholar</h3>
                <p>A respected Arizona Leadership Scholar, committed to good public policy and civic engagement.</p>
              </div>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">🇺🇸</div>
              <div className="highlight-content">
                <h3>Conservative Leadership</h3>
                <p>A proven conservative leader with a deep commitment to putting Arizona families first.</p>
              </div>
            </div>
          </div>
          
          <div className="about-mission">
            <h3>Why I'm Running</h3>
            <p>
              Bridget is running for State Senate to bridge her passion for healthcare and policy, ensuring a healthier, safer, and more prosperous future for all Arizonans.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MeetBridgetPage;


