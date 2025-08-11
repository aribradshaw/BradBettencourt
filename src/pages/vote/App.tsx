import React from 'react';
import { Layout } from '../../components/Layout';
import { Button } from '../../components/Button';

const VotePage: React.FC = () => {
  return (
    <Layout title="Vote" description="How, when, and where to vote in LD9." activeKey="vote">
      {/* Page title removed per design */}

      <div className="vote-grid">
        {/* LEFT COLUMN */}
        <section className="card">
          {/* <img src="/LogoColor.svg" alt="Campaign Logo" className="vote-logo" style={{ maxWidth: 260 }} /> */}
          <p className="vote-ready-label">ARE YOU READY TO</p>
          <h2 className="vote-title">Vote?</h2>

          <p className="muted" style={{ marginBottom: 16 }}>
            If you need to find your voting locations or need additional voting information, please visit
            {' '}<a href="https://BeBallotReady.vote" target="_blank" rel="noopener noreferrer">https://BeBallotReady.vote</a> to access Maricopa County’s voter services.
          </p>

          <div style={{ display: 'grid', gap: 10 }}>
            <Button variant="outline" fullWidth href="https://locations.maricopa.vote/" target="_blank" rel="noopener noreferrer">Find My Voting Locations</Button>
            <Button variant="outline" fullWidth href="https://justthefacts.vote/" target="_blank" rel="noopener noreferrer">Election Facts</Button>
            <Button variant="outline" fullWidth href="https://beballotready.vote/" target="_blank" rel="noopener noreferrer">Voter Dashboard</Button>
          </div>
        </section>

        {/* RIGHT COLUMN */}
        <section className="card">
          <h2 style={{ marginTop: 0 }}>2026 Election Dates</h2>
          <div className="dates-grid">
            <div className="date-card">
              <div className="date-card__month">OCT.</div>
              <div className="date-card__day">22</div>
              <div className="date-card__desc">Last Day to Request Early Ballot</div>
            </div>
            <div className="date-card">
              <div className="date-card__month">OCT.</div>
              <div className="date-card__day">25</div>
              <div className="date-card__desc">Final Day to Mail Back Ballot</div>
            </div>
            <div className="date-card">
              <div className="date-card__month">NOV.</div>
              <div className="date-card__day">2</div>
              <div className="date-card__desc">Last Day to Vote Early in Person</div>
            </div>
            <div className="date-card">
              <div className="date-card__month">NOV.</div>
              <div className="date-card__day">3</div>
              <div className="date-card__desc">General Election Day!</div>
            </div>
          </div>

          <div className="map-frame">
            <iframe
              src="https://www.google.com/maps/d/u/6/embed?mid=1E3pjKgoMjOA1BBB4VFt9QJXr-wvW930&ehbc=2E312F&noprof=1"
              width="640"
              height="480"
              style={{ border: 0, width: '100%', height: 420 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Voting Map"
            />
          </div>

          <div className="section">
            <h3 style={{ marginTop: 0 }}>To register to vote in Arizona you must meet the following qualifications (A.R.S. § 16-101):</h3>
            <ul>
              <li>Be a citizen of the United States of America</li>
              <li>Be a resident of Arizona and the county listed on your registration</li>
              <li>Be 18 years of age on or before the day of the next regular General Election</li>
            </ul>
            <h3>You cannot register to vote in Arizona if (A.R.S. § 16-101):</h3>
            <ul>
              <li>
                You have been convicted of a felony and have not yet had your civil rights restored. For a first-time felony
                conviction, civil rights are automatically restored upon completion of a person’s sentence and payment of any restitution.
              </li>
              <li>You have been adjudicated incapacitated by a court of law.</li>
            </ul>
          </div>

          <Button
            variant="primary"
            fullWidth
            href="https://azsos.gov/elections/voters/register-vote-update-current-voter-information?ref=voteusa_en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Arizona Secretary of State - Voter Registration
          </Button>
        </section>
      </div>
    </Layout>
  );
};

export default VotePage;



