import React from 'react';
import { Layout } from '../../components/Layout';
import { FaUsers, FaDollarSign, FaVoteYea, FaShieldAlt, FaHospital, FaGraduationCap, FaFlag } from 'react-icons/fa';

const HomePage: React.FC = () => {
  return (
    <Layout title="Brad Bettencourt for Arizona State House" description="Conservative leader. Community advocate. Fighting for Arizona values in the State House." activeKey="home">
      <section className="hero">
        <div className="container">
          <h1 className="page-title">Conservative Leadership for Arizona</h1>
          <p className="lead">Business leader. Community advocate. Fighting for fiscal responsibility and Arizona values.</p>
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
            <p>Help Brad win</p>
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
                  After spending most of my adult life in the East Valley, I moved into Dobson Ranch a few years ago and have enjoyed living in this area. After gaining valuable experience in banks as a Credit Analyst and Credit Officer, as well as running my own business, I'm now running for State House to bring fiscal responsibility and conservative values to the legislature.
                </p>
                <p className="intro-text">
                  After graduating from Arizona State University with Bachelor's and Master's degrees, I spent time living and working in 3 other states and southern Arizona, but I returned to the East Valley because it is where I feel most at home, and it is where I want to be long-term. Currently, my business is focused largely on real estate investment and we do business in 3 states.
                </p>
              </div>
              <div className="about-photo">
                <img src="/pfp.webp" alt="Brad Bettencourt" />
              </div>
            </div>
          </div>
          
          <div className="about-highlights">
            <div className="highlight-item">
              <div className="highlight-icon">
                <FaShieldAlt />
              </div>
              <div className="highlight-content">
                <h3>Fiscal Responsibility</h3>
                <p>With my background in finance, banking, and business, I'll bring real-world fiscal expertise to the legislature. I've successfully managed budgets and implemented sound financial practices that will help Arizona's economy thrive.</p>
              </div>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">
                <FaGraduationCap />
              </div>
              <div className="highlight-content">
                <h3>ASU Education</h3>
                <p>Graduated from Arizona State University with both Bachelor's and Master's degrees, providing a strong foundation for legislative work.</p>
              </div>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">
                <FaFlag />
              </div>
              <div className="highlight-content">
                <h3>Conservative Values</h3>
                <p>Committed to protecting children, defending the 2nd Amendment, securing our borders, and maintaining school choice for Arizona families.</p>
              </div>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">
                <FaHospital />
              </div>
              <div className="highlight-content">
                <h3>Real Estate & Business</h3>
                <p>Currently running a successful real estate investment business operating in 3 states, with experience in finance, banking, and capital improvement projects.</p>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;


