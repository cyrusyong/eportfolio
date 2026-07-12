function SectionCard({ number, title, children }) {
  return (
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
          {title}
        </span>
        <span style={{
          fontFamily: "'Nunito Sans', sans-serif", fontWeight: 800,
          fontSize: 12, color: '#b09a7d', letterSpacing: '1px',
        }}>{number}</span>
      </div>
      <div style={{ padding: '30px 34px' }}>{children}</div>
    </div>
  )
}

const roadmap = [
  {
    badge: 'Completed',
    badgeBg: '#6f8250',
    badgeColor: '#fbf6ec',
    border: '#e2d4ba',
    bg: '#f5eddd',
    title: 'Learn Core Peripherals',
    desc: 'Learned the fundamentals in C: GPIO, ADC, DAC, DMA, Timers, Interrupts, and Watchdogs.',
  },
  {
    badge: 'In Progress',
    badgeBg: '#a76f2b',
    badgeColor: '#fbf6ec',
    border: '#e6d3a8',
    bg: '#f7edd4',
    title: 'Master STM32 and Peripherals',
    desc: 'Learn STM32 and C while brushing up on the core peripheral concepts.',
  },
  {
    badge: 'Next',
    outlined: true,
    border: '#e2d4ba',
    bg: '#f5eddd',
    title: 'Communication Protocols',
    desc: 'Dig into the protocols like SPI, I2C, UART. Explore more like WiFi, Bluetooth and CAN.',
  },
  {
    badge: 'Next',
    outlined: true,
    border: '#e2d4ba',
    bg: '#f5eddd',
    title: 'Real Time Operating Systems',
    desc: 'Learn RTOS concepts like tasks, scheduling, and synchronization and build a project using FreeRTOS.',
  },
  {
    badge: 'Goal',
    badgeBg: 'var(--acc, #c05f2c)',
    badgeColor: '#fbf6ec',
    border: '#e2d4ba',
    bg: '#f5eddd',
    title: 'Land an Embedded Internship',
    desc: 'Apply my skills on a real team to ship out firmware and learn the industry standard.',
  },
  {
    badge: 'Career Goal',
    badgeBg: 'var(--acc, #c05f2c)',
    badgeColor: '#fbf6ec',
    border: 'var(--acc, #c05f2c)',
    borderWidth: '1.5px',
    bg: '#faefe4',
    boxShadow: '0 3px 14px rgba(160,73,42,.1)',
    title: 'Embedded Systems Engineer',
    titleAccent: true,
    desc: 'The destination: a full time role designing and shipping embedded systems for a living.',
  },
]

export default function Goals() {
  return (
    <section id="goals" style={{ scrollMarginTop: 96, marginBottom: 40 }}>
      <SectionCard number="04" title="Career Roadmap">

        <p style={{ margin: '0 0 26px', fontSize: 18, lineHeight: 1.65, color: '#4a3b30', maxWidth: '70ch' }}>
          My destination is clear: to become an{' '}
          <span style={{ color: 'var(--acc, #c05f2c)', fontWeight: 700 }}>embedded systems engineer</span>.
          This is the path I'm on and what I'm working on now.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {roadmap.map(({ badge, badgeBg, badgeColor, outlined, border, borderWidth, bg, boxShadow, title, titleAccent, desc }) => (
            <div key={title} style={{
              display: 'flex', gap: 16, alignItems: 'flex-start',
              border: `${borderWidth || '1px'} solid ${border}`,
              background: bg, borderRadius: 12, padding: '18px 20px',
              boxShadow: boxShadow || 'none',
            }}>
              <span style={{
                fontWeight: 800, fontSize: 11, letterSpacing: '.5px', textTransform: 'uppercase',
                whiteSpace: 'nowrap', borderRadius: 999,
                ...(outlined
                  ? { color: '#7a6858', background: 'transparent', border: '1.5px solid #cbb692', padding: '6px 10px' }
                  : { color: badgeColor, background: badgeBg, padding: '7px 11px' }
                ),
              }}>{badge}</span>
              <div>
                <div style={{
                  fontFamily: "'Bitter', serif", fontWeight: 700, fontSize: 17,
                  color: titleAccent ? 'var(--acc, #c05f2c)' : '#4a3b30', marginBottom: 5,
                }}>{title}</div>
                <p style={{ margin: 0, fontSize: 16, lineHeight: 1.55, color: '#4a3b30' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </SectionCard>
    </section>
  )
}
