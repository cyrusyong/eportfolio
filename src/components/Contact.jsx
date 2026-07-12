const contacts = [
  { label: 'Email', value: 'cyong34@gatech.edu', href: 'mailto:cyong34@gatech.edu' },
  { label: 'GitHub', value: 'github.com/cyrusyong', href: 'https://github.com/cyrusyong', external: true },
  { label: 'LinkedIn', value: 'in/cyrus-yong', href: 'https://www.linkedin.com/in/cyrus-yong/', external: true },
  { label: 'Phone', value: '(678) 756-6713', href: 'tel:+16787566713' },
]

export default function Contact() {
  return (
    <section id="contact" style={{ scrollMarginTop: 96 }}>
      <div style={{
        border: '1px solid #dccbb0', background: '#fbf6ec', borderRadius: 14,
        boxShadow: '0 2px 16px rgba(90,70,50,.07)', overflow: 'hidden',
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 12, background: '#f1e8d6', borderBottom: '1px solid #e2d4ba', padding: '15px 22px',
        }}>
          <span style={{
            display: 'flex', alignItems: 'center', gap: 11,
            fontFamily: "'Bitter', serif", fontWeight: 700, fontSize: 19, color: '#5a4632',
          }}>
            <span style={{ width: 11, height: 11, background: 'var(--acc, #c05f2c)', borderRadius: 3 }} />
            Contact Me
          </span>
          <span style={{
            fontFamily: "'Nunito Sans', sans-serif", fontWeight: 800,
            fontSize: 12, color: '#b09a7d', letterSpacing: '1px',
          }}>05</span>
        </div>
        <div style={{ padding: '32px 34px' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 12,
          }}>
            {contacts.map(({ label, value, href, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener' } : {})}
                style={{
                  display: 'flex', flexDirection: 'column', gap: 6,
                  border: '1px solid #e2d4ba', background: '#f5eddd',
                  borderRadius: 12, padding: '18px 20px',
                }}
              >
                <span style={{
                  fontFamily: "'Nunito Sans', sans-serif", fontWeight: 800, fontSize: 12,
                  color: '#a08c73', letterSpacing: '.5px', textTransform: 'uppercase',
                }}>{label}</span>
                <span style={{
                  fontFamily: "'Bitter', serif", fontWeight: 700, fontSize: 18,
                  color: 'var(--acc, #c05f2c)',
                }}>{value}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
