import React from 'react';
import { Layout } from '../../components/Layout';
import { FaShieldAlt, FaDollarSign, FaLandmark } from 'react-icons/fa';
import { GiDesert } from 'react-icons/gi';

const IssuesPage: React.FC = () => {
  return (
    <Layout title="Issues - Brad Bettencourt for Arizona State House" description="Learn about Brad Bettencourt's conservative policy positions on fiscal responsibility, border security, and Arizona values." activeKey="issues">
      <section className="container" style={{ padding: '48px 0' }}>
        <div className="issues-content">
          <h1 className="page-title">Issues</h1>
          <p className="lead">Brad Bettencourt: A Conservative Leader for State House</p>
          
          <div className="issue-with-image">
            <div className="issue-card">
              <div className="issue-header">
                <div className="issue-icon">
                  <FaDollarSign size={24} color="#FFC627" />
                </div>
                <h2>Fiscal Responsibility & Budget Reform</h2>
              </div>
              <div className="issue-content">
                <p>
                  Based on my background in finance, banking, and as President of Dobson Ranch, I'll be focused on fiscal responsibility. There were over $1.6 million in asset transfer errors found before I ran for the board at Dobson Ranch, along with other questionable financial decisions. We have worked hard on righting the ship there and I will continue to zone in on the budget as part of the legislature.
                </p>
              </div>
            </div>
            <div className="issue-image">
              <img src="/bradfamily.webp" alt="Brad with his family" />
              <div className="image-caption">
                <div className="caption-icon">
                  <FaShieldAlt size={16} color="#6b7280" />
                </div>
                <div className="caption-text">
                  <span className="caption-title">Family First</span>
                  <span className="caption-subtitle">Protecting Arizona families</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="issue-with-image-reverse">
            <div className="issue-image">
              <img src="/bradspeech.webp" alt="Brad giving a speech" />
              <div className="image-caption">
                <div className="caption-icon">
                  <FaLandmark size={16} color="#6b7280" />
                </div>
                <div className="caption-text">
                  <span className="caption-title">Conservative Voice</span>
                  <span className="caption-subtitle">Speaking for Arizona values</span>
                </div>
              </div>
            </div>
            <div className="issue-card">
              <div className="issue-header">
                <div className="issue-icon">
                  <GiDesert size={24} color="#FFC627" />
                </div>
                <h2>Water Issues & Arizona's Future</h2>
              </div>
              <div className="issue-content">
                <p>
                  Water issues will also be a big focus of mine, as it is very important since we are in Arizona. I've learned some more about water issues during my time at Dobson Ranch, in addition to what I learned during my previous experience in agriculture.
                </p>
              </div>
            </div>
          </div>
          
          <div className="issue-card">
            <div className="issue-header">
              <div className="issue-icon">
                <FaShieldAlt size={24} color="#FFC627" />
              </div>
              <h2>Protect Children & School Choice</h2>
            </div>
            <div className="issue-content">
              <p>
                We need to protect the children and keep school choice. My sister and her husband took my three nephews out of public school during Covid and put them in private school. Unfortunately, my other sister did not have the ability to transfer my nephew and niece from public school, since she lives in a state that does not have school choice, and my niece has to go into her middle school bathroom with boys that claim they are trans.
              </p>
            </div>
          </div>
          
          <div className="issue-card">
            <div className="issue-header">
              <div className="issue-icon">
                <FaShieldAlt size={24} color="#FFC627" />
              </div>
              <h2>Secure Our Border</h2>
            </div>
            <div className="issue-content">
              <p>
                In regards to the border, I lived in Yuma and worked at a bank in both Yuma and Nogales during Trump's first term. I was actually in Nogales while the military was putting up the concertina wire along the border and I went down to the road next to the border and took some pictures. Living and working that close to the border gave me a certain perspective and it was very interesting to be down there.
              </p>
            </div>
          </div>
          
          <div className="issue-card">
            <div className="issue-header">
              <div className="issue-icon">
                <FaShieldAlt size={24} color="#FFC627" />
              </div>
              <h2>2nd Amendment Rights</h2>
            </div>
            <div className="issue-content">
              <p>
                I strongly support and will defend the 2nd Amendment rights of all law-abiding Arizonans. The right to keep and bear arms is fundamental to our Constitution and our way of life.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IssuesPage;


