export default function Nav() {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 70,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      flexWrap: 'wrap', gap: '8px 18px', padding: '14px 26px',
      background: 'rgba(251,246,236,.9)', backdropFilter: 'blur(8px)',
      borderBottom: '1px solid #e2d4ba', boxShadow: '0 2px 16px rgba(90,70,50,.06)',
    }}>
      <a href="#top" style={{
        display: 'flex', alignItems: 'center', gap: 9,
        fontFamily: "'Bitter', serif", fontWeight: 700, fontSize: 19, color: '#5a4632',
      }}>
        <span style={{
          width: 12, height: 12, background: 'var(--acc, #c05f2c)',
          borderRadius: 3, display: 'inline-block',
        }} />
        Cyrus Yong
      </a>
      <div style={{
        display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '2px 4px',
        fontFamily: "'Nunito Sans', sans-serif", fontWeight: 700, fontSize: 13,
      }}>
        {['About', 'Background', 'Projects', 'Goals', 'Resume'].map(label => (
          <a key={label} href={`#${label === 'Background' ? 'specs' : label.toLowerCase()}`}
            style={{ padding: '8px 12px', color: '#6f5f50', letterSpacing: '.3px' }}>
            {label}
          </a>
        ))}
        <a href="#contact" style={{
          marginLeft: 8, padding: '9px 15px', color: '#fbf6ec',
          background: 'var(--acc, #c05f2c)', borderRadius: 8,
          boxShadow: '0 2px 8px rgba(160,73,42,.25)',
        }}>Contact Me</a>
      </div>
    </nav>
  )
}
