export default function Resume() {
  return (
    <section id="resume" style={{ scrollMarginTop: 96, marginBottom: 40 }}>
      <div style={{
        border: '1px solid #dccbb0', background: '#fbf6ec', borderRadius: 14,
        boxShadow: '0 2px 16px rgba(90,70,50,.07)', overflow: 'hidden',
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: 12, background: '#f1e8d6', borderBottom: '1px solid #e2d4ba',
          padding: '13px 22px', flexWrap: 'wrap',
        }}>
          <span style={{
            display: 'flex', alignItems: 'center', gap: 11,
            fontFamily: "'Bitter', serif", fontWeight: 700, fontSize: 19, color: '#5a4632',
          }}>
            <span style={{ width: 11, height: 11, background: 'var(--acc, #c05f2c)', borderRadius: 3 }} />
            Resume
          </span>
          <a
            href="/assets/Cyrus-Yong-Resume.pdf"
            download="Cyrus-Yong-Resume.pdf"
            style={{
              fontFamily: "'Nunito Sans', sans-serif", fontWeight: 800, fontSize: 14,
              color: '#fbf6ec', background: 'var(--acc, #c05f2c)',
              padding: '10px 16px', borderRadius: 8,
              boxShadow: '0 2px 8px rgba(160,73,42,.25)',
            }}
          >Download PDF</a>
        </div>
        <div style={{ padding: 22 }}>
          <div style={{
            border: '1px solid #dccbb0', borderRadius: 10,
            overflow: 'hidden', background: '#ffffff',
          }}>
            <iframe
              src="/assets/Cyrus-Yong-Resume.pdf#toolbar=0&view=FitH"
              title="Cyrus Yong Resume"
              style={{ width: '100%', height: 720, border: 0, display: 'block' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
