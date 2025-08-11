import React from 'react';
import { Layout } from '../../components/Layout';
import { FaUsers, FaDollarSign, FaVoteYea, FaShieldAlt, FaHospital, FaGraduationCap, FaFlag } from 'react-icons/fa';

const HomePage: React.FC = () => {
  return (
    <Layout title="Dr. Bridget Fitzgibbons for Arizona State Senate" description="Physician. Community leader. People over politics." activeKey="home">
      <section className="hero">
        <div className="container">
          <h1 className="page-title">Let's Build a Stronger Arizona, Together</h1>
          <p className="lead">Physician. Community leader. People over politics.</p>
        </div>
      </section>
      <section className="container" style={{ padding: '48px 0' }}>
        <div className="text-center" style={{ marginBottom: '40px' }}>
          <h2 style={{ color: 'var(--color-blue)', fontSize: '32px', marginBottom: '16px' }}>
            STRONG SCHOOLS - SAFE COMMUNITIES - ECONOMIC PROSPERITY
          </h2>
          <p style={{ fontSize: '18px', color: '#555', maxWidth: '600px', margin: '0 auto' }}>
            It's time to put solutions before politics and do what's in the best interest of all Arizonans.
          </p>
        </div>
        
        <div className="action-cards">
          <div className="action-card">
            <div className="action-icon volunteer-icon">
              <FaUsers />
            </div>
            <h3>VOLUNTEER</h3>
            <p>Join our campaign team</p>
            <a href="/connect" className="action-btn">GO!</a>
          </div>
          
          <div className="action-card">
            <div className="action-icon donate-icon">
              <FaDollarSign />
            </div>
            <h3>DONATE TO THE CAUSE</h3>
            <p>Help Bridget win</p>
            <a href="/donate" className="action-btn">GO!</a>
          </div>
          
          <div className="action-card">
            <div className="action-icon vote-icon">
              <FaVoteYea />
            </div>
            <h3>VOTE IN 2026</h3>
            <p>Make your voice heard</p>
            <a href="/vote" className="action-btn">GO!</a>
          </div>
        </div>
      </section>
      <section className="container" style={{ padding: '48px 0' }}>
        <div className="about-content">
          <div className="about-intro">
            <div className="about-intro-content">
              <div className="about-text">
                <h2>About Brad Bettencourt</h2>
                <p className="intro-text">
                  Dr. Bridget Fitzgibbons is a leading physician, specializing in psychology and social work, with a proven record of service to Arizona. As a community leader, she has dedicated her career to fighting for the health and safety of our state's most vulnerable.
                </p>
              </div>
              <div className="about-photo">
                <img src="/pfp.jpg" alt="Dr. Bridget Fitzgibbons" />
              </div>
            </div>
          </div>
          
          <div className="about-highlights">
            <div className="highlight-item">
              <div className="highlight-icon">
                <FaShieldAlt />
              </div>
              <div className="highlight-content">
                <h3>Protecting Arizona's Children</h3>
                <p>A dedicated physician fighting to end human trafficking and protect Arizona's children.</p>
              </div>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">
                <FaHospital />
              </div>
              <div className="highlight-content">
                <h3>Healthcare Leadership</h3>
                <p>A key voice in the medical community working to address healthcare shortages and lead advancements in medicine.</p>
              </div>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">
                <FaGraduationCap />
              </div>
              <div className="highlight-content">
                <h3>Arizona Leadership Scholar</h3>
                <p>A respected Arizona Leadership Scholar, committed to good public policy and civic engagement.</p>
              </div>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">
                <FaFlag />
              </div>
              <div className="highlight-content">
                <h3>Conservative Leadership</h3>
                <p>A proven conservative leader with a deep commitment to putting Arizona families first.</p>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;


