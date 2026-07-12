import { useState } from 'react'

function Lightbox({ src, alt, onClose }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        background: 'rgba(20,12,6,.85)', backdropFilter: 'blur(4px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'zoom-out', padding: 24,
      }}
    >
      <img
        src={src}
        alt={alt}
        onClick={e => e.stopPropagation()}
        style={{
          maxWidth: '100%', maxHeight: '90vh',
          borderRadius: 12, boxShadow: '0 16px 64px rgba(0,0,0,.5)',
          cursor: 'default',
        }}
      />
      <button
        onClick={onClose}
        style={{
          position: 'absolute', top: 20, right: 24,
          background: 'rgba(251,246,236,.15)', border: '1px solid rgba(251,246,236,.3)',
          color: '#fbf6ec', borderRadius: 8, padding: '6px 12px',
          fontSize: 13, fontWeight: 700, cursor: 'pointer',
          fontFamily: "'Nunito Sans', sans-serif",
        }}
      >✕ Close</button>
    </div>
  )
}

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

function Chip({ label, small }) {
  return (
    <span style={{
      fontWeight: 600, fontSize: small ? 12 : 13, color: '#6f5f50',
      border: '1px solid #d8c7aa', background: small ? '#fbf6ec' : '#f6eedd',
      padding: small ? '5px 9px' : '6px 11px', borderRadius: 999,
    }}>{label}</span>
  )
}

function ImagePlaceholder({ label, height }) {
  return (
    <div style={{
      height, background: '#f5eddd', border: '1px solid #dccbb0', borderRadius: 12,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#b09a7d', fontFamily: "'Nunito Sans', sans-serif",
      fontSize: 13, fontWeight: 600, textAlign: 'center', padding: 16,
    }}>
      {label}
    </div>
  )
}

const primpadTags = ['Raspberry Pi Pico', 'RP2040', 'Bare-metal C', 'TinyUSB', 'USB HID', 'KiCad', '3D Printing']

const keyMap = [
  { key: 'K1', desc: "Autoclicker, send 'F' every few seconds" },
  { key: 'K2', desc: 'Launch app + skip loading screens' },
  { key: 'K3', desc: 'Open Discord + send message' },
  { key: 'K4', desc: 'Hold 3s to make PC shut down in 30s', danger: true },
]

const moreProjects = [
  {
    title: 'STM32 Vending Machine',
    date: 'Jun 2026 – Present',
    desc: 'FSM driven C firmware on an STM32 Nucleo F446RE. GPIO EXTI button navigation, payment logic, PWM servo gates, IR drop detection, OLED menu, and RTC timestamped logging to microSD card.',
    tags: ['STM32', 'I2C / SPI', 'FatFS'],
  },
  {
    title: 'STM32 Temp Data Logger',
    date: 'Jun 2026 – Present',
    desc: 'Bare metal C on STM32 sampling a BME280 (temp / humidity / pressure) over I2C a set interval, logging timestamped readings to a FAT32 microSD over SPI for analysis.',
    tags: ['BME280', 'I2C', 'SPI / FatFS'],
  },
  {
    title: 'USB HID Autoclicker',
    date: 'May – Jun 2026',
    desc: 'Bare metal RP2040 firmware built from scratch, emulating a USB HID keyboard over TinyUSB, paired with a custom PCB designed in KiCad. The predecessor to PrimPad.',
    tags: ['RP2040', 'TinyUSB', 'KiCad'],
  },
  {
    title: 'LTC2308 ADC for SCOMP',
    date: 'Jan – May 2026',
    desc: 'Custom VHDL I/O peripheral letting a 16 bit SCOMP processor read a 12 bit LTC2308 ADC over SPI. A 5 state FSM manages 25 MHz SPI timing behind a memory mapped register interface.',
    tags: ['VHDL', 'FPGA', 'SPI'],
  },
]

export default function Projects() {
  const [lightbox, setLightbox] = useState(null)
  return (
    <>
    {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />}
    <section id="projects" style={{ scrollMarginTop: 96, marginBottom: 40 }}>
      <SectionCard number="03" title="Projects">

        {/* Featured badge + title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 8 }}>
          <span style={{
            fontFamily: "'Nunito Sans', sans-serif", fontWeight: 800, fontSize: 11,
            letterSpacing: '1px', textTransform: 'uppercase', color: '#fbf6ec',
            background: 'var(--acc, #c05f2c)', padding: '6px 11px', borderRadius: 999,
          }}>DISCOVERY PROJECT</span>
          <h3 style={{
            margin: 0, fontFamily: "'Bitter', serif", fontWeight: 800,
            fontSize: 26, color: 'var(--acc, #c05f2c)',
          }}>PrimPad</h3>
        </div>

        <p style={{
          margin: '0 0 8px', fontFamily: "'Bitter', serif", fontWeight: 600,
          fontSize: 18, color: '#7a5c3e',
        }}>Custom 4 key USB HID macropad — firmware + PCB + enclosure</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
          {primpadTags.map(t => <Chip key={t} label={t} />)}
        </div>

        {/* Hero image */}
        <div onClick={() => setLightbox({ src: '/assets/hero.jpeg', alt: 'PrimPad hero shot' })}
          style={{ height: 360, border: '1px solid #dccbb0', borderRadius: 12, overflow: 'hidden', background: '#f5eddd', marginBottom: 12, cursor: 'zoom-in' }}>
          <img src="/assets/hero.jpeg" alt="PrimPad hero shot" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>

        {/* Gallery grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 12, marginBottom: 28,
        }}>
          <div onClick={() => setLightbox({ src: '/assets/kicad_layout.png', alt: 'KiCad PCB layout' })}
            style={{ height: 190, border: '1px solid #dccbb0', borderRadius: 12, overflow: 'hidden', background: '#f5eddd', cursor: 'zoom-in' }}>
            <img src="/assets/kicad_layout.png" alt="KiCad PCB layout" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div onClick={() => setLightbox({ src: '/assets/3d_design.png', alt: '3D printed enclosure' })}
            style={{ height: 190, border: '1px solid #dccbb0', borderRadius: 12, overflow: 'hidden', background: '#f5eddd', cursor: 'zoom-in' }}>
            <img src="/assets/3d_design.png" alt="3D printed enclosure" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div onClick={() => setLightbox({ src: '/assets/wiring.png', alt: 'Internals / wiring' })}
            style={{ height: 190, border: '1px solid #dccbb0', borderRadius: 12, overflow: 'hidden', background: '#f5eddd', cursor: 'zoom-in' }}>
            <img src="/assets/wiring.png" alt="Internals / wiring" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <ImagePlaceholder label="Video Demo In Progress" height={190} />
        </div>

        {/* Description + Key Map */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '28px 42px' }}>

          <div style={{ flex: '2 1 380px', minWidth: 300 }}>
            <p style={{ margin: '0 0 14px', fontSize: 17, lineHeight: 1.68, color: '#4a3b30' }}>
              PrimPad is a four key USB macropad I designed and built from the ground up. Firmware,
              PCB board, and enclosure all my own work. It runs on a Raspberry Pi Pico (RP2040)
              flashed with bare metal C firmware I wrote against the TinyUSB stack, so the board
              shows up on any computer as a standard USB HID composite device: part keyboard, part mouse.
            </p>
            <p style={{ margin: '0 0 14px', fontSize: 17, lineHeight: 1.68, color: '#4a3b30' }}>
              Each key is mapped to a macro I use. The first is an autoclicker: press it and
              the firmware fires a rapid, repeating stream of 'F' keypresses. I use this for games and
              anything that rewards mashing one key. The second is an app launcher: a single tap opens
              a pinned app from the Windows taskbar, then runs a timed series of presses to advance
              through its loading and start up screens so I skip straight to the part I care about.
              The third key is a macro that brings Discord to the foreground, opens a specific conversation,
              types a preset message, and sends it, all from one press. The fourth is a press and hold
              button. Holding it for three full seconds schedules the PC to shut down in thirty seconds,
              with the long hold acting as a safeguard against firing it by accident.
            </p>
            <p style={{ margin: '0 0 14px', fontSize: 17, lineHeight: 1.68, color: '#4a3b30' }}>
              I built PrimPad to practice building every layer of the stack. On the firmware side I
              handled USB descriptor setup and key event reporting through TinyUSB, debounced the
              switches, and built the timing logic for the multi step macros. The launcher and Discord
              keys in particular depend on carefully spaced delays so the app has time to respond
              between inputs. On the hardware side I designed a custom PCB in KiCad, laying out the
              Raspberry Pi Pico, the keyboard switches, and a SMD LED and resistor. I then modeled and
              3D printed a custom enclosure to house the board and give the pad a solid, finished feel
              on the desk.
            </p>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.68, color: '#4a3b30' }}>
              PrimPad grew directly out of an earlier single button HID controller project. PrimPad is
              small, but it touches everything I enjoy about embedded work: writing firmware, designing
              the board it runs on, the wiring and testing, and an enclosure I designed myself.
            </p>
          </div>

          {/* Key Map */}
          <div style={{ flex: '1 1 240px', minWidth: 240, alignSelf: 'flex-start' }}>
            <div style={{ border: '1px solid #e2d4ba', background: '#f5eddd', borderRadius: 12, overflow: 'hidden' }}>
              <div style={{
                fontFamily: "'Bitter', serif", fontWeight: 700, fontSize: 15,
                color: '#7a5c3e', padding: '14px 16px', borderBottom: '1px solid #e2d4ba',
              }}>Key Map</div>
              <div style={{ padding: '4px 16px 12px' }}>
                {keyMap.map(({ key, desc, danger }, i) => (
                  <div key={key} style={{
                    display: 'flex', gap: 13, alignItems: 'center', padding: '13px 0',
                    borderBottom: i < keyMap.length - 1 ? '1px dashed #dccbb0' : 'none',
                  }}>
                    <span style={{
                      fontFamily: "'Bitter', serif", fontWeight: 800, fontSize: 15,
                      color: '#fbf6ec', background: danger ? '#b0472e' : 'var(--acc, #c05f2c)',
                      padding: '8px 11px', borderRadius: 8,
                    }}>{key}</span>
                    <span style={{ fontSize: 15, color: '#4a3b30', lineHeight: 1.35 }}>{desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div style={{ height: 1, background: '#e2d4ba', margin: '32px 0 26px' }} />

        {/* More Projects */}
        <div style={{
          fontFamily: "'Bitter', serif", fontWeight: 700, fontSize: 17,
          color: 'var(--acc, #c05f2c)', marginBottom: 6,
        }}>More Projects</div>
        <p style={{ margin: '0 0 20px', fontSize: 16, color: '#7a6858' }}>
          Active and recent builds
        </p>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 14,
        }}>
          {moreProjects.map(({ title, date, desc, tags }) => (
            <div key={title} style={{
              border: '1px solid #e2d4ba', background: '#f5eddd', borderRadius: 12, padding: '18px 20px',
            }}>
              <span style={{ fontFamily: "'Bitter', serif", fontWeight: 700, fontSize: 17, color: '#4a3b30' }}>
                {title}
              </span>
              <div style={{ fontWeight: 700, fontSize: 13, color: '#a76f2b', margin: '5px 0 9px' }}>{date}</div>
              <p style={{ margin: '0 0 12px', fontSize: 15, lineHeight: 1.55, color: '#4a3b30' }}>{desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {tags.map(t => <Chip key={t} label={t} small />)}
              </div>
            </div>
          ))}
        </div>

      </SectionCard>
    </section>
    </>
  )
}
