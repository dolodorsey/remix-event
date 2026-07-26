'use client';

import { usePathname } from 'next/navigation';

const ACTIONS = [
  ['Free RSVP', '/forms/rsvp'],
  ['Celebrate a Birthday', '/forms/birthday'],
  ['Become a Vendor', '/forms/vendor'],
];

export default function DirectEventActions() {
  const pathname = usePathname();
  if (pathname !== '/') return null;

  return (
    <section aria-label="REMIX direct forms" style={styles.section}>
      <div style={styles.inner}>
        <div>
          <span style={styles.eyebrow}>Direct Requests</span>
          <h2 style={styles.title}>Choose your next move.</h2>
        </div>
        <div style={styles.actions}>
          {ACTIONS.map(([label, href]) => <a key={href} href={href} style={styles.link}>{label} →</a>)}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: { padding: '38px clamp(22px,5vw,72px)', borderTop: '1px solid rgba(212,184,122,.18)', background: '#080604', color: '#F5F0E8' },
  inner: { maxWidth: 1300, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 28, flexWrap: 'wrap' },
  eyebrow: { display: 'block', color: '#D4B87A', fontFamily: "'DM Mono',monospace", fontSize: 8, letterSpacing: '.35em', textTransform: 'uppercase', marginBottom: 8 },
  title: { margin: 0, fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(28px,4vw,46px)', fontWeight: 400 },
  actions: { display: 'flex', flexWrap: 'wrap', gap: 10 },
  link: { padding: '13px 17px', border: '1px solid rgba(212,184,122,.34)', color: '#F5F0E8', textDecoration: 'none', fontFamily: "'DM Sans',sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' },
};
