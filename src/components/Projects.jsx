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

const primpadTags = ['Raspberry Pi Pico', 'RP2040', 'Bare-metal C', 'TinyUSB', 'USB HID', 'KiCad', '3D Printing']

const keyMap = [
  { key: 'K1', desc: "Autoclicker, send 'F' every few seconds" },
  { key: 'K2', desc: 'Launch app + skip loading screens' },
  { key: 'K3', desc: 'Open Discord + send message' },
  { key: 'K4', desc: 'Press to make PC shut down in 30s', danger: true },
]

const timeline = [
  {
    date: 'June 15, 2026 · 10:13 PM',
    text: "Have a Raspberry Pi Pico + 4 SPST switches on the breadboard. Plan: add four LEDs and each switch corresponds to one LED and lights it up on press.",
  },
  {
    date: 'June 15, 2026 · 11:52 PM',
    text: "Autoclicker functionality implemented on the breadboard. Need to swap the toggle switches functionality for push buttons to match real mechanical keyboard switches.",
  },
  {
    date: 'June 16, 2026 · 12:19 AM',
    text: "Replaced to push button switches. SW1 Autoclicker is complete. LED turns on and the 'F' key is sent at random intervals between 0.5 and 1.5 seconds.",
    img: '/assets/IMG_9982.jpeg',
    imgAlt: 'Breadboard prototype with push button switches',
  },
  {
    date: 'June 17, 2026 · 12:36 AM',
    text: "Added button debouncer to SW1 which fixed the issue where the switch needed to be held down for seconds before the function fired. Started implementing SW2: opening an app through the Windows Start menu.",
  },
  {
    date: 'June 17, 2026 · 2:34 PM',
    text: "All four switch firmware functions are done. Needs testing later. Moving on to schematic design.",
  },
  {
    date: 'June 17, 2026 · 3:05 PM',
    text: "Schematic complete and footprints assigned. Checked the Hive's parts inventory. I am planning to use 4 Cherry MX mechanical keyboard switches. Now arranging parts in the PCB editor.",
    img: '/assets/kicad_layout.png',
    imgAlt: 'KiCad PCB layout',
  },
  {
    date: 'June 17, 2026 · 4:03 PM',
    text: "PCB design finished. Generated Gerber and drill files. Will go to the Hive tomorrow to have the board drilled out.",
  },
  {
    date: 'June 17, 2026 · 10:58 PM',
    text: "SW3 bug: if the target app is minimized but not closed, typing its name in the Start menu and hitting Enter won't reopen it. The app has to be fully closed for the macro to work. Working on a fix.",
  },
  {
    date: 'June 17, 2026 · 11:41 PM',
    text: "Firmware is complete. Fragile, but it works.",
  },
  {
    date: 'June 21, 2026 · 8:42 PM',
    text: "Ordered the PCBs on JLCPCB as a backup in case the Hive machines can't get fixed in time. Also installed Fusion 360 to start designing the 3D enclosure.",
  },
  {
    date: 'July 5, 2026 · 5:29 PM',
    text: "PCBs arrived from JLCPCB.",
  },
  {
    date: 'July 9, 2026 · 3:07 PM',
    text: "Got the SMD red LED and resistor. SMD components were extremely small used the Hive's microscope station to solder them. Struggled but got it done.",
    img: '/assets/wiring.png',
    imgAlt: 'Internals and wiring',
  },
  {
    date: 'July 9, 2026 · 11:59 AM',
    text: "All electronic components are soldered on. Cherry MX switches are mounted. Just needs final testing on PC and keycaps.",
  },
  {
    date: 'July 20, 2026 · 8:29 PM',
    text: "First iteration of the enclosure printed. All PCB mounting holes line up with the board.",
    img: '/assets/3d_design.png',
    imgAlt: '3D printed enclosure',
  },
]

const skills = [
  {
    label: 'USB HID & TinyUSB',
    desc: 'Configured USB descriptors so the RP2040 enumerates on any PC as a composite HID device. Part keyboard, part mouse.',
  },
  {
    label: 'Button Debouncing',
    desc: 'Diagnosed why a single press registered as multiple clicks and implemented a 50ms debounce window in firmware to filter it out.',
  },
  {
    label: 'GPIO & Timing Logic',
    desc: 'Used GPIO interrupts to detect presses and built timer spaced macro sequences so the PC has time to respond between each synthetic keypress.',
  },
  {
    label: 'PCB Design (KiCad)',
    desc: "Drew the schematic, assigned footprints against the Hive's actual parts inventory, laid out the board, and generated Gerber and drill files for fabrication.",
  },
  {
    label: 'SMD Soldering & Verification',
    desc: "Hand soldered a SMD LED and resistor under the Hive's microscope, then verified every connection with a multimeter before powering the board.",
  },
  {
    label: '3D Modeling & Printing',
    desc: 'Designed the enclosure from scratch in Fusion 360 and printed it so the PCB mounting holes lined up on the first iteration.',
  },
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
  const [showDetails, setShowDetails] = useState(false)

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
        <div onClick={() => setLightbox({ src: '/assets/final_cropped.jpg', alt: 'PrimPad hero shot' })}
          style={{ height: 560, border: '1px solid #dccbb0', borderRadius: 12, overflow: 'hidden', background: '#f5eddd', marginBottom: 12, cursor: 'zoom-in' }}>
          <img src="/assets/final_cropped.jpg" alt="PrimPad hero shot" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
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
          <div style={{ height: 190, border: '1px solid #dccbb0', borderRadius: 12, overflow: 'hidden', background: '#f5eddd' }}>
            <video
              src="/assets/IMG_0218.mp4"
              controls
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
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
              types a preset message, and sends it, all from one press. The fourth button is to shut down the PC in thirty seconds.
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

        {/* Build Documentary toggle */}
        <div style={{ margin: '32px 0 0', display: 'flex', justifyContent: 'center' }}>
          <button
            onClick={() => setShowDetails(v => !v)}
            style={{
              fontFamily: "'Nunito Sans', sans-serif", fontWeight: 800, fontSize: 15,
              color: showDetails ? '#7a5c3e' : '#fbf6ec',
              background: showDetails ? 'transparent' : 'var(--acc, #c05f2c)',
              border: showDetails ? '1.5px solid #cbb692' : '1.5px solid transparent',
              padding: '13px 28px', borderRadius: 9, cursor: 'pointer',
              boxShadow: showDetails ? 'none' : '0 3px 12px rgba(160,73,42,.28)',
              transition: 'all .15s ease',
            }}
          >
            {showDetails ? '▲ Hide Build Documentary' : '▼ View Build Documentary'}
          </button>
        </div>

        {/* Documentary panel */}
        {showDetails && (
          <div style={{ marginTop: 36 }}>
            <div style={{ height: 1, background: '#e2d4ba', marginBottom: 36 }} />

            {/* Section header helper */}
            {[
              {
                label: '01', title: 'The Process',
                content: (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                    {timeline.map(({ date, text, img, imgAlt }, i) => (
                      <div key={i} style={{ display: 'flex', gap: 0 }}>
                        {/* Left spine */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 32, flexShrink: 0 }}>
                          <div style={{
                            width: 11, height: 11, borderRadius: '50%', flexShrink: 0, marginTop: 3,
                            background: img ? 'var(--acc, #c05f2c)' : '#cbb692',
                            border: img ? '2px solid #f7d7c0' : '2px solid #e2d4ba',
                          }} />
                          {i < timeline.length - 1 && (
                            <div style={{ width: 2, flex: 1, background: '#e2d4ba', minHeight: 24 }} />
                          )}
                        </div>

                        {/* Entry content */}
                        <div style={{ paddingLeft: 16, paddingBottom: i < timeline.length - 1 ? 28 : 0, flex: 1 }}>
                          <div style={{
                            fontFamily: "'Nunito Sans', sans-serif", fontWeight: 800, fontSize: 12,
                            color: '#a76f2b', letterSpacing: '.5px', textTransform: 'uppercase', marginBottom: 5,
                          }}>{date}</div>
                          <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start', flexWrap: 'wrap' }}>
                            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: '#4a3b30', flex: '1 1 260px' }}>
                              {text}
                            </p>
                            {img && (
                              <div
                                onClick={() => setLightbox({ src: img, alt: imgAlt })}
                                style={{
                                  flexShrink: 0, cursor: 'zoom-in',
                                  border: '1px solid #dccbb0', borderRadius: 10, overflow: 'hidden',
                                  boxShadow: '0 2px 10px rgba(90,70,50,.1)',
                                }}
                              >
                                <img
                                  src={img}
                                  alt={imgAlt}
                                  style={{ display: 'block', width: 220, height: 160, objectFit: 'cover' }}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ),
              },
              {
                label: '02', title: 'ECE Skills Gained',
                content: (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 14 }}>
                    {skills.map(({ label, desc }) => (
                      <div key={label} style={{
                        border: '1px solid #e2d4ba', background: '#f5eddd',
                        borderRadius: 12, padding: '16px 18px',
                      }}>
                        <div style={{
                          fontFamily: "'Bitter', serif", fontWeight: 700, fontSize: 15,
                          color: 'var(--acc, #c05f2c)', marginBottom: 6,
                        }}>{label}</div>
                        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: '#4a3b30' }}>{desc}</p>
                      </div>
                    ))}
                  </div>
                ),
              },
            ].map(({ label, title, content }) => (
              <div key={label} style={{ marginBottom: 48 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22 }}>
                  <span style={{
                    fontFamily: "'Nunito Sans', sans-serif", fontWeight: 800, fontSize: 11,
                    color: '#b09a7d', letterSpacing: '1.5px', textTransform: 'uppercase',
                  }}>{label}</span>
                  <h4 style={{
                    margin: 0, fontFamily: "'Bitter', serif", fontWeight: 700,
                    fontSize: 21, color: '#5a4632',
                  }}>{title}</h4>
                </div>
                {content}
              </div>
            ))}
          </div>
        )}

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
