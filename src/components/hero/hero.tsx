import "./hero.css";

export default function Hero() {
  return (
    <section
      id="home"
      className="grow flex flex-col justify-center relative z-10 pt-28 pb-10"
    >
      <div className="layout-container flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 md:px-12 lg:px-24">
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col gap-6 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-primary font-medium tracking-wide text-lg md:text-xl flex items-center justify-center lg:justify-start gap-2">
                  <span className="material-symbols-outlined text-base">
                    waving_hand
                  </span>
                  Hi, I’m Nithin Kumar
                </h3>
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                  Backend &amp; Real-Time Systems Engineer
                </h2>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-slate-300 pt-2">
                Building{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-[#a855f7] neon-text-glow">
                  Scalable Backends
                </span>{" "}
                <br className="hidden lg:block" /> &amp; Real-Time Systems
              </h1>
              <h2 className="text-slate-400 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Architecting high-performance infrastructure using{" "}
                <strong className="text-white font-medium">Node.js</strong>,{" "}
                <strong className="text-white font-medium">TypeScript</strong>,{" "}
                <strong className="text-white font-medium">WebSockets</strong>,
                and <strong className="text-white font-medium">Redis</strong>{" "}
                for the next generation of gaming and enterprise systems.
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
              <button
                onClick={() => {
                  window.open("/resume.pdf", "_blank", "noopener,noreferrer");
                }}
                className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary px-8 py-3.5 text-background-dark font-bold text-base transition-all hover:bg-cyan-300 hover:shadow-[0_0_20px_rgba(37,192,244,0.5)]"
              >
                <span className="material-symbols-outlined text-xl">
                  description
                </span>
                View Resume
              </button>
              <button
                onClick={() => {
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-white font-bold text-base backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30"
              >
                <span className="material-symbols-outlined text-xl">
                  layers
                </span>
                View Projects
              </button>
            </div>
            <div className="pt-8 border-t border-white/5 mt-4">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">
                Core Technologies
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#1b2427] border border-[#3b4e54]/50 hover:border-primary/50 transition-colors cursor-default">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontSize: "20px" }}
                  >
                    dns
                  </span>
                  <span className="text-sm font-medium text-slate-300">
                    Node.js
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#1b2427] border border-[#3b4e54]/50 hover:border-primary/50 transition-colors cursor-default">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontSize: "20px" }}
                  >
                    code
                  </span>
                  <span className="text-sm font-medium text-slate-300">
                    TypeScript
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#1b2427] border border-[#3b4e54]/50 hover:border-primary/50 transition-colors cursor-default">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontSize: "20px" }}
                  >
                    hub
                  </span>
                  <span className="text-sm font-medium text-slate-300">
                    WebSockets
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#1b2427] border border-[#3b4e54]/50 hover:border-primary/50 transition-colors cursor-default">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontSize: "20px" }}
                  >
                    database
                  </span>
                  <span className="text-sm font-medium text-slate-300">
                    Redis
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center order-1 lg:order-2 min-h-100">
            <div className="absolute inset-0 bg-linear-to-tr from-primary/10 to-transparent rounded-full blur-3xl transform scale-75"></div>
            <div className="relative w-full max-w-md aspect-4/3">
              <div className="absolute top-1/2 left-1/2 w-64 md:w-80 glass-card rounded-xl p-5 z-20 animate-float">
                <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">
                      storage
                    </span>
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      Server Health
                    </span>
                  </div>
                  <span className="flex h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]"></span>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>CPU Usage</span>
                      <span className="text-white font-mono">24%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-700/50 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[24%] shadow-[0_0_10px_#25c0f4]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Memory</span>
                      <span className="text-white font-mono">68%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-700/50 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500 w-[68%] shadow-[0_0_10px_#a855f7]"></div>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-2">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-500 uppercase">
                        Uptime
                      </span>
                      <span className="text-xs font-mono text-white">
                        99.99%
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-500 uppercase">
                        Latency
                      </span>
                      <span className="text-xs font-mono text-green-400">
                        14ms
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-4 md:right-0 w-48 glass-card rounded-lg p-3 z-10 animate-float-delayed transform">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-yellow-400 text-sm">
                    javascript
                  </span>
                  <span className="text-[10px] text-slate-300">server.ts</span>
                </div>
                <div className="font-mono text-[8px] leading-relaxed text-slate-400">
                  <span className="text-purple-400">import</span> {"{ Server }"}{" "}
                  <span className="text-purple-400">from</span>{" "}
                  <span className="text-green-400">'ws'</span>;
                  <br />
                  <span className="text-purple-400">const</span> wss ={" "}
                  <span className="text-primary">new</span> Server({"{"} port:
                  8080 {"}"});
                  <br />
                  wss.
                  <span className="text-blue-400">on</span>(
                  <span className="text-green-400">'connection'</span>, (ws)
                  =&gt; {"{"}
                  <br />
                  &nbsp;&nbsp;console.
                  <span className="text-yellow-300">log</span>(
                  <span className="text-green-400">'Client connected'</span>
                  );
                  <br />
                  {"}"});
                </div>
              </div>
              <div className="absolute -bottom-8 -left-4 md:left-0 w-40 glass-card rounded-lg p-3 z-30 animate-float-delayed transform">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-red-400 text-sm">
                    database
                  </span>
                  <span className="text-[10px] text-slate-300">
                    Redis Cache
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white/5 rounded p-1.5 text-center">
                    <span className="block text-[8px] text-slate-500">
                      Hits
                    </span>
                    <span className="block text-[10px] font-mono text-white">
                      8.4M
                    </span>
                  </div>
                  <div className="bg-white/5 rounded p-1.5 text-center">
                    <span className="block text-[8px] text-slate-500">
                      Miss
                    </span>
                    <span className="block text-[10px] font-mono text-white">
                      0.2%
                    </span>
                  </div>
                </div>
              </div>
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none opacity-20 z-0"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  stroke="#25c0f4"
                  strokeDasharray="4 4"
                  strokeWidth="2"
                  x1="20%"
                  x2="50%"
                  y1="80%"
                  y2="50%"
                ></line>
                <line
                  stroke="#25c0f4"
                  strokeDasharray="4 4"
                  strokeWidth="2"
                  x1="80%"
                  x2="50%"
                  y1="20%"
                  y2="50%"
                ></line>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
