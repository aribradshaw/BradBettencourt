import React, { useMemo, useState } from 'react';
import { Layout } from '../../components/Layout';
import { Button } from '../../components/Button';
import { SocialLinks } from '../../components/SocialLinks';
import { PatternFormat } from 'react-number-format';

const ConnectPage: React.FC = () => {
  return (
    <Layout title="Connect" description="Volunteer, request a yard sign, or contact the campaign." activeKey="connect">
      <h1 className="page-title">Connect</h1>
      <div className="connect-grid" style={{ paddingTop: 16 }}>
        {/* Sidebar 1/3 */}
        <aside className="card">
          <h2>Connect</h2>
          <p className="muted">Follow and DM us:</p>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <SocialLinks />
          </div>
          <div style={{ marginTop: 16 }}>
            <p className="muted" style={{ margin: 0 }}>Email</p>
            <a href="mailto:info@bradbettencourt.com">info@bradbettencourt.com</a>
          </div>
        </aside>

        {/* Form 2/3 */}
        <section className="card">
          <p>Get involved with the campaign! Email us at <a href="mailto:info@bradbettencourt.com">info@bradbettencourt.com</a> or send a message here.</p>
          <ContactForm />
        </section>
      </div>
    </Layout>
  );
};

export default ConnectPage;

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [topic, setTopic] = useState<'Volunteer' | 'Contact'>('Volunteer');
  const [phoneDigits, setPhoneDigits] = useState<string>('');
  const siteKey = useMemo(() => (import.meta as any).env?.VITE_RECAPTCHA_SITE_KEY as string, []);

  // Load reCAPTCHA immediately when component mounts
  React.useEffect(() => {
    console.log('[captcha] useEffect triggered, siteKey:', siteKey);
    if (siteKey) {
      console.log('[captcha] Loading reCAPTCHA on mount...');
      ensureRecaptcha().then(() => {
        console.log('[captcha] Successfully loaded on mount');
      }).catch(err => {
        console.error('[captcha] failed to load on mount:', err);
      });
    } else {
      console.log('[captcha] No siteKey available');
    }
  }, [siteKey]);

  function ensureRecaptcha(): Promise<any> {
    if ((window as any).grecaptcha?.ready) return Promise.resolve((window as any).grecaptcha);
    return new Promise((resolve, reject) => {
      if (import.meta.env.DEV) console.log('[captcha] injecting regular reCAPTCHA script with siteKey', siteKey);
      const s = document.createElement('script');
      s.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`;
      s.async = true;
      s.onload = () => {
        if (import.meta.env.DEV) console.log('[captcha] regular reCAPTCHA script loaded', Boolean((window as any).grecaptcha?.ready));
        resolve((window as any).grecaptcha);
      };
      s.onerror = () => reject(new Error('Captcha script failed to load'));
      document.head.appendChild(s);
    });
  }

  function formatPhoneDisplay(d: string): string {
    const a = d.substring(0, 3);
    const b = d.substring(3, 6);
    const c = d.substring(6, 10);
    if (!d) return '+1 (___) ___-____';
    if (d.length <= 3) return `+1 (${a.padEnd(3, '_')}) ___-____`;
    if (d.length <= 6) return `+1 (${a}) ${b.padEnd(3, '_')}-____`;
    return `+1 (${a}) ${b}-${c.padEnd(4, '_')}`;
  }
  const [error, setError] = useState<string>('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setError('');
    const form = e.currentTarget as HTMLFormElement;
    if (import.meta.env.DEV) console.log('[form] submit', { topic, phoneDigits, phoneLen: phoneDigits.length });
    if (topic === 'Volunteer' && phoneDigits.length !== 10) {
      setStatus('error');
      setError('Please enter a valid 10-digit phone number.');
      return;
    }
    
    const formData = new FormData(form);
    const body: Record<string, any> = Object.fromEntries(formData.entries());
    body['topic'] = topic;

    // reCAPTCHA v3 token
    try {
      console.log('[captcha] Starting reCAPTCHA execution...');
      const grecaptcha = await ensureRecaptcha();
      console.log('[captcha] grecaptcha object:', grecaptcha);
      if (import.meta.env.DEV) console.log('[captcha] reCAPTCHA ready…');
      const token: string = await grecaptcha.execute(siteKey, { action: 'submit' });
      console.log('[captcha] token received:', token ? 'YES' : 'NO', token?.substring(0, 12));
      body['g-recaptcha-response'] = token;
      console.log('[captcha] Body after adding token:', JSON.stringify(body, null, 2)); // Debug: see complete body
    } catch (err) {
      console.error('[captcha] error during execution:', err);
      if (import.meta.env.DEV) console.error('[captcha] error', err);
      setStatus('error');
      setError('Captcha failed. Please refresh and try again.');
      return;
    }
    try {
      if (import.meta.env.DEV) console.log('[mail] POST /api/send-mail.php', body);
      console.log('[form] Submitting form data:', JSON.stringify(body, null, 2)); // Debug: see complete body
      const res = await fetch('/api/send-mail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      const json = await res.json().catch(async () => ({ raw: await res.text() }));
      if (import.meta.env.DEV) console.log('[mail] response', res.status, json);
      console.log('[form] Full response:', json); // Debug log for error responses
      if (!res.ok || !json.ok) throw new Error(json.error || 'Request failed');
      setStatus('success');
      form.reset();
      setPhoneDigits('');
    } catch (err: any) {
      if (import.meta.env.DEV) console.error('[mail] submit error', err);
      setStatus('error');
      setError(err?.message || 'Something went wrong');
    }
  }

  return (
    <form onSubmit={onSubmit} style={{ display: 'grid', gap: 12, marginTop: 12 }}>
      <div className="btn-group btn-group-left" role="tablist" aria-label="Contact type">
        <Button
          variant={topic === 'Volunteer' ? 'primary' : 'outline'}
          type="button"
          onClick={() => setTopic('Volunteer')}
        >
          Volunteer
        </Button>
        <Button
          variant={topic === 'Contact' ? 'primary' : 'outline'}
          type="button"
          onClick={() => setTopic('Contact')}
        >
          Contact
        </Button>
      </div>
      <input className="input" name="name" type="text" placeholder="Full name" required />
      <div className="form-row two-col">
        <input className="input" name="email" type="email" placeholder="Email" required />
        <div>
          <input type="hidden" name="phone" value={phoneDigits} />
          <PatternFormat
            className="input"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            format="+1 (###) ###-####"
            mask="_"
            value={phoneDigits}
            onValueChange={(v) => setPhoneDigits((v.value || '').replace(/^1/, '').slice(0, 10))}
            aria-label="Phone"
            required={topic === 'Volunteer'}
          />
        </div>
      </div>
      {topic === 'Volunteer' && (
        <fieldset className="volunteer-section">
          <legend>How can you help?</legend>
          <div className="checkbox-grid">
            <label className="checkbox"><input type="checkbox" name="interests[]" value="Canvassing / Door Knocking" /> Canvassing / Door Knocking</label>
            <label className="checkbox"><input type="checkbox" name="interests[]" value="Make Phone Calls / Texts" /> Make Phone Calls / Texts</label>
            <label className="checkbox"><input type="checkbox" name="interests[]" value="Social Media" /> Social Media</label>
            <label className="checkbox"><input type="checkbox" name="interests[]" value="I Want a Yard Sign" /> I Want a Yard Sign</label>
            <label className="checkbox"><input type="checkbox" name="interests[]" value="Events / Tabling" /> Events / Tabling</label>
            <label className="checkbox"><input type="checkbox" name="interests[]" value="Host Meet & Greet or Fundraiser" /> Host Meet & Greet or Fundraiser</label>
            <label className="checkbox"><input type="checkbox" name="interests[]" value="Other" /> Other</label>
          </div>
        </fieldset>
      )}
      <input className="sr-only" name="website" tabIndex={-1} autoComplete="off" value="" />
      <textarea
        className="textarea"
        name="message"
        placeholder={topic === 'Volunteer' ? 'How can you help?' : 'How can we help?'}
        rows={5}
        required
      />
      <Button variant="primary" type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </Button>
      {status === 'success' && <div style={{ color: 'green' }}>Thanks — your message has been sent.</div>}
      {status === 'error' && <div style={{ color: 'var(--color-red)' }}>{error}</div>}
    </form>
  );
};


