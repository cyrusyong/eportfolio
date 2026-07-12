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

function Chip({ label }) {
  return (
    <span style={{
      fontWeight: 600, fontSize: 13, color: '#6f5f50',
      border: '1px solid #d8c7aa', background: '#f6eedd',
      padding: '6px 11px', borderRadius: 999,
    }}>{label}</span>
  )
}

function Divider() {
  return <div style={{ height: 1, background: '#e2d4ba', margin: '30px 0' }} />
}

const embeddedSkills = [
  'C (bare metal)', 'STM32 / ARM Cortex M', 'RP2040',
  'VHDL / FPGA', 'SPI / I2C / UART', 'PWM / GPIO / Timers',
  'KiCad (PCB)', 'Fusion 360', '3D Printing', 'Scope / Logic Analyzer',
]
const languages = ['C', 'C++', 'Python', 'Java', 'JavaScript', 'VHDL', 'Assembly']
const softwareTools = ['FastAPI', 'ReactJS', 'LiteLLM', 'Git / Linux', 'AWS', 'Firebase']
const interests = [
  'Building embedded devices', 'Writing Firmware', 'PCB design',
  '3D printing', 'Debugging Hardware', 'Robotics',
]

export default function Background() {
  return (
    <section id="specs" style={{ scrollMarginTop: 96, marginBottom: 40 }}>
      <SectionCard number="02" title="Background & Skills">

        {/* Skills */}
        <div style={{
          fontFamily: "'Bitter', serif", fontWeight: 700, fontSize: 17,
          color: 'var(--acc, #c05f2c)', marginBottom: 18,
        }}>Skills</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px 34px', marginBottom: 0 }}>

          <div style={{ flex: '1 1 300px', minWidth: 260 }}>
            <div style={{
              fontFamily: "'Bitter', serif", fontWeight: 600, fontSize: 15,
              color: '#7a5c3e', marginBottom: 12,
            }}>Embedded &amp; Hardware</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {embeddedSkills.map(s => <Chip key={s} label={s} />)}
            </div>
          </div>

          <div style={{ flex: '1 1 300px', minWidth: 260 }}>
            <div style={{
              fontFamily: "'Bitter', serif", fontWeight: 600, fontSize: 15,
              color: '#7a5c3e', marginBottom: 12,
            }}>Languages</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
              {languages.map(s => <Chip key={s} label={s} />)}
            </div>
            <div style={{
              fontFamily: "'Bitter', serif", fontWeight: 600, fontSize: 15,
              color: '#7a5c3e', marginBottom: 12,
            }}>Software &amp; Tools</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {softwareTools.map(s => <Chip key={s} label={s} />)}
            </div>
          </div>

        </div>

        <Divider />

        {/* Education + Experience */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px 46px', marginBottom: 32 }}>

          <div style={{ flex: '1 1 320px', minWidth: 280 }}>
            <div style={{
              fontFamily: "'Bitter', serif", fontWeight: 700, fontSize: 17,
              color: 'var(--acc, #c05f2c)', marginBottom: 18,
            }}>Education</div>

            <div style={{ marginBottom: 22 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', alignItems: 'baseline' }}>
                <span style={{ fontFamily: "'Bitter', serif", fontWeight: 700, fontSize: 17, color: '#4a3b30' }}>
                  Georgia Institute of Technology
                </span>
                <span style={{ fontWeight: 700, fontSize: 14, color: '#a76f2b', whiteSpace: 'nowrap' }}>
                  Aug 2024 – May 2028
                </span>
              </div>
              <div style={{ fontSize: 16, color: '#4a3b30', marginTop: 6, lineHeight: 1.5 }}>
                B.S. Computer Science &amp; B.S. Electrical Engineering · Minor: Robotics · GPA 3.5
              </div>
              <div style={{ fontSize: 15, color: '#7a6858', marginTop: 4, lineHeight: 1.5 }}>
                EE: Robotics &amp; Autonomous Systems, Circuit Technology · Dean's List F24 / S25
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', alignItems: 'baseline' }}>
                <span style={{ fontFamily: "'Bitter', serif", fontWeight: 700, fontSize: 17, color: '#4a3b30' }}>
                  Georgia State University
                </span>
                <span style={{ fontWeight: 700, fontSize: 14, color: '#a76f2b', whiteSpace: 'nowrap' }}>
                  Aug 2022 – May 2024
                </span>
              </div>
              <div style={{ fontSize: 16, color: '#4a3b30', marginTop: 6, lineHeight: 1.5 }}>
                B.S. Computer Science (transferred to GT) · GPA 3.7
              </div>
              <div style={{ fontSize: 15, color: '#7a6858', marginTop: 4, lineHeight: 1.5 }}>
                President's List S23 / S24 · Dean's List F23
              </div>
            </div>
          </div>

          <div style={{ flex: '1 1 320px', minWidth: 280 }}>
            <div style={{
              fontFamily: "'Bitter', serif", fontWeight: 700, fontSize: 17,
              color: 'var(--acc, #c05f2c)', marginBottom: 18,
            }}>Experience</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap', alignItems: 'baseline' }}>
              <span style={{ fontFamily: "'Bitter', serif", fontWeight: 700, fontSize: 17, color: '#4a3b30' }}>
                Undergraduate Researcher — Georgia Tech
              </span>
              <span style={{ fontWeight: 700, fontSize: 14, color: '#a76f2b', whiteSpace: 'nowrap' }}>
                Aug 2025 – May 2026
              </span>
            </div>
            <div style={{ fontSize: 16, color: '#7a6858', marginTop: 5 }}>
              Intelligent Platform for Crowdsourcing (VIP)
            </div>
            <div style={{ fontSize: 16, color: '#4a3b30', marginTop: 10, lineHeight: 1.6 }}>
              {[
                'Built a structured data-extraction pipeline with LiteLLM on GT\'s PACE GPU cluster.',
                'Developed a RAG chatbot backend with controlled retrieval to reduce hallucinations.',
                'Designed a React + FastAPI full-stack app with custom document intake (BeautifulSoup, PyPDF).',
              ].map((bullet, i) => (
                <div key={i} style={{ display: 'flex', gap: 9, marginBottom: i < 2 ? 7 : 0 }}>
                  <span style={{ color: 'var(--acc, #c05f2c)', fontWeight: 800 }}>•</span>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        <Divider />

        {/* Interests */}
        <div style={{
          fontFamily: "'Bitter', serif", fontWeight: 700, fontSize: 17,
          color: 'var(--acc, #c05f2c)', marginBottom: 16,
        }}>Interests &amp; Hobbies</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 12px' }}>
          {interests.map(item => (
            <span key={item} style={{
              fontSize: 15, fontWeight: 600, color: '#6f5f50',
              borderLeft: '3px solid var(--acc, #c05f2c)',
              padding: '6px 14px', background: '#f5eddd',
              borderRadius: '0 8px 8px 0',
            }}>{item}</span>
          ))}
        </div>

      </SectionCard>
    </section>
  )
}
