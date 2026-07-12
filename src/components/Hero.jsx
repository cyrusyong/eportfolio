function ImagePlaceholder({ label, style }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#b09a7d', fontFamily: "'Nunito Sans', sans-serif",
      fontSize: 14, fontWeight: 600, textAlign: 'center', padding: 16,
      ...style,
    }}>
      {label}
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" style={{ scrollMarginTop: 96, marginBottom: 64 }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px 48px', alignItems: 'stretch' }}>

        {/* Text */}
        <div style={{
          flex: '1.6 1 340px', minWidth: 300,
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
        }}>
          <div style={{
            fontFamily: "'Nunito Sans', sans-serif", fontWeight: 800, fontSize: 13,
            color: 'var(--acc, #c05f2c)', letterSpacing: '2.5px',
            textTransform: 'uppercase', marginBottom: 16,
          }}>Hello, my name is</div>

          <h1 style={{
            margin: 0, fontFamily: "'Bitter', serif", fontWeight: 800,
            fontSize: 'clamp(40px, 7vw, 68px)', lineHeight: 1.04,
            color: '#4a3b30', letterSpacing: '-.5px',
          }}>
            Cyrus <span style={{ color: 'var(--acc, #c05f2c)' }}>Yong</span>
          </h1>

          <p style={{
            margin: '18px 0 0', fontFamily: "'Bitter', serif", fontWeight: 600,
            fontStyle: 'italic', fontSize: 'clamp(20px, 2.6vw, 27px)',
            lineHeight: 1.3, color: '#7a5c3e',
          }}>Aspiring Embedded Systems Engineer</p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 28 }}>
            <a href="#projects" style={{
              fontFamily: "'Nunito Sans', sans-serif", fontWeight: 800, fontSize: 15,
              color: '#fbf6ec', background: 'var(--acc, #c05f2c)',
              padding: '13px 22px', borderRadius: 9,
              boxShadow: '0 3px 12px rgba(160,73,42,.28)',
            }}>View Projects</a>
            <a href="#resume" style={{
              fontFamily: "'Nunito Sans', sans-serif", fontWeight: 800, fontSize: 15,
              color: '#7a5c3e', background: 'transparent',
              padding: '13px 22px', borderRadius: 9, border: '1.5px solid #cbb692',
            }}>View Resume</a>
          </div>

          <p style={{
            margin: '22px 0 0', fontFamily: "'Nunito Sans', sans-serif",
            fontSize: 18, lineHeight: 1.65, color: '#4a3b30', maxWidth: '56ch',
          }}>
            I'm a Computer Science + Electrical Engineering student at Georgia Tech with a
            simple goal of building embedded systems from the ground up, for the rest of my life. I love the whole loop
            of firmware in C, designing the PCB in KiCad, wiring, testing, and 3D printing the
            enclosure that holds it all. Seeing what I built come to life in the physical world
            is everything.
          </p>
        </div>

        {/* Portrait */}
        <div style={{ flex: '1 1 280px', minWidth: 260, display: 'flex' }}>
          <div style={{
            width: '100%', minHeight: 420,
            border: '1px solid #dccbb0', borderRadius: 16,
            overflow: 'hidden', boxShadow: '0 8px 26px rgba(90,70,50,.12)',
            background: '#f5eddd',
          }}>
            <img src="/assets/IMG_1927.jpeg" alt="Cyrus Yong" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>

      </div>
    </section>
  )
}
