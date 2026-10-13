function SectionCard({ number, title, children }) {
  return (
    <div
      style={{
        border: "1px solid #dccbb0",
        background: "#fbf6ec",
        borderRadius: 14,
        boxShadow: "0 2px 16px rgba(90,70,50,.07)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          background: "#f1e8d6",
          borderBottom: "1px solid #e2d4ba",
          padding: "15px 22px",
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: 11,
            fontFamily: "'Bitter', serif",
            fontWeight: 700,
            fontSize: 19,
            color: "#5a4632",
          }}
        >
          <span
            style={{
              width: 11,
              height: 11,
              background: "var(--acc, #c05f2c)",
              borderRadius: 3,
            }}
          />
          {title}
        </span>
        <span
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            fontWeight: 800,
            fontSize: 12,
            color: "#b09a7d",
            letterSpacing: "1px",
          }}
        >
          {number}
        </span>
      </div>
      <div style={{ padding: "30px 34px" }}>{children}</div>
    </div>
  );
}

const glanceItems = [
  { label: "Name", value: "Cyrus Yong" },
  { label: "Role", value: "CS + EE Student" },
  { label: "Location", value: "Atlanta, GA" },
  { label: "Focus", value: "Embedded / Firmware" },
  { label: "Stack", value: "Bare-metal C" },
  { label: "Status", value: "Interning & Building", accent: true },
];

export default function About() {
  return (
    <section id="about" style={{ scrollMarginTop: 96, marginBottom: 40 }}>
      <SectionCard number="01" title="About Me">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "30px 46px" }}>
          {/* Body text */}
          <div style={{ flex: "2 1 360px", minWidth: 300 }}>
            <p
              style={{
                margin: "0 0 15px",
                fontSize: 18,
                lineHeight: 1.68,
                color: "#4a3b30",
              }}
            >
              I am a Computer Science major who spent my early years of college
              building full stack web applications from React front ends to
              serverless backends using AWS tools. Then I moved into embedded
              systems, and that's where I found my passion.
            </p>
            <p
              style={{
                margin: "0 0 15px",
                fontSize: 18,
                lineHeight: 1.68,
                color: "#4a3b30",
              }}
            >
              I'm currently pursuing a dual B.S. in Computer Science and
              Electrical Engineering at Georgia Tech, with a minor in Robotics,
              and I spend most of my free time discovering new ideas with hardware.
            </p>
            <p
              style={{
                margin: 0,
                fontSize: 18,
                lineHeight: 1.68,
                color: "#4a3b30",
              }}
            >
              What I love is the whole loop: put together a system on a
              breadboard, write the firmware, design the PCB, test the product,
              and 3D print an enclosure to finish it off. Taking a project from
              an idea in my head to a physical thing sitting on my desk is what
              I love about the world of Electrical Engineering. I like to see
              the things I create come to life and interact with people in the real
              world.
            </p>
          </div>

          {/* At a Glance */}
          <div
            style={{
              flex: "1 1 230px",
              minWidth: 230,
              alignSelf: "flex-start",
              border: "1px solid #e2d4ba",
              background: "#f5eddd",
              borderRadius: 12,
              padding: "20px 22px",
            }}
          >
            <div
              style={{
                fontFamily: "'Bitter', serif",
                fontWeight: 700,
                fontSize: 15,
                color: "var(--acc, #c05f2c)",
                marginBottom: 14,
              }}
            >
              At a Glance
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {glanceItems.map(({ label, value, accent }, i) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 12,
                    padding: "8px 0",
                    borderBottom:
                      i < glanceItems.length - 1
                        ? "1px dashed #e2d4ba"
                        : "none",
                  }}
                >
                  <span
                    style={{
                      fontWeight: 800,
                      fontSize: 12,
                      color: "#a08c73",
                      letterSpacing: ".5px",
                      textTransform: "uppercase",
                    }}
                  >
                    {label}
                  </span>
                  <span
                    style={{
                      fontWeight: accent ? 700 : 600,
                      fontSize: 15,
                      color: accent ? "var(--acc, #c05f2c)" : "#4a3b30",
                      textAlign: "right",
                    }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionCard>
    </section>
  );
}
