import { useContext, useState } from "react";
import { ToastContext, type ToastContextType } from "../provider/toast-context";
import "./contact.css";
export default function Contact() {
  type Topic =
    | "Recruiting / Hiring"
    | "Project / Architecture"
    | "Collaboration"
    | "General Inquiry";
  interface ContactFormData {
    name: string;
    email: string;
    company: string;
    topic: Topic;
    subject_line: string;
    message: string;
  }
  const [data, setData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    topic: "Recruiting / Hiring",
    subject_line: "",
    message: "",
  });

  const { showToast } = useContext(ToastContext) as ToastContextType;
  const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();


  if (!data.name.trim()) {
    showToast("Validation Error", "Name is required.", "error");
    return;
  }

  if (data.name.trim().length < 2) {
    showToast(
      "Validation Error",
      "Name must be at least 2 characters.",
      "error"
    );
    return;
  }

  if (!data.email.trim()) {
    showToast("Validation Error", "Email is required.", "error");
    return;
  }

  if (!isValidEmail(data.email)) {
    showToast(
      "Validation Error",
      "Please enter a valid email address.",
      "error"
    );
    return;
  }

  if (!data.topic) {
    showToast("Validation Error", "Please select a topic.", "error");
    return;
  }

  if (!data.message.trim()) {
    showToast("Validation Error", "Message cannot be empty.", "error");
    return;
  }

  if (data.message.trim().length < 10) {
    showToast(
      "Validation Error",
      "Message must be at least 10 characters.",
      "error"
    );
    return;
  }

  /* ===================== FORM DATA ===================== */

  const formData = new FormData();

  formData.append("name", data.name.trim());
  formData.append("email", data.email.trim());
  formData.append("company", data.company.trim());
  formData.append("topic", data.topic);
  formData.append(
    "_subject",
    data.subject_line?.trim() || `New Inquiry: ${data.topic}`
  );
  formData.append("message", data.message.trim());

  // FormSubmit settings
  formData.append("_captcha", "false");
  formData.append("_template", "table");
  formData.append("_replyto", data.email.trim());

  /* ===================== API CALL ===================== */

  try {
    const res = await fetch(
      "https://formsubmit.co/nithin.kanduru1908@gmail.com",
      {
        method: "POST",
        body: formData,
      }
    );

    if (!res.ok) throw new Error("Failed");

    showToast(
      "Transmission Complete",
      "Mail sent successfully.",
      "success"
    );

    setData({
      name: "",
      email: "",
      company: "",
      topic: "Recruiting / Hiring",
      subject_line: "",
      message: "",
    });
  } catch (err) {
    showToast(
      "Transmission Failed",
      "Failed to send mail. Please try again.",
      "error"
    );
    console.error(err);
  }
};


  return (
    <section
      id="contact"
      className="grow flex flex-col justify-center relative z-10 pt-24 pb-12 lg:pt-0"
    >
      <div className="layout-container flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 md:px-12 lg:px-24">
        <div className="w-full max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 w-fit mx-auto backdrop-blur-sm mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              <span className="text-xs font-bold text-primary tracking-widest uppercase">
                Inbox Open
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let's start a{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-[#a855f7] neon-text-glow">
                Conversation
              </span>
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Interested in working together? I'm always open to discussing
              product design work, scalable backends, or partnership
              opportunities.
            </p>
          </div>
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-2 glass-card rounded-2xl p-8 relative overflow-hidden h-full flex flex-col justify-between min-h-100">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Get in Touch
                </h3>
                <p className="text-slate-400 mb-8 text-sm">
                  Fill out the form or reach out directly.
                </p>
                <div className="space-y-6">
                  <a
                    className="flex items-center gap-4 group"
                    href="mailto:nithin.kanduru1908@gmail.com"
                    target="_blank"
                  >
                    <div className="size-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 transition-all shrink-0">
                      <span className="material-symbols-outlined text-white group-hover:text-primary transition-colors">
                        mail
                      </span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                        Email
                      </p>
                      <p className="text-white font-medium group-hover:text-primary transition-colors">
                        nithin.kanduru1908@gmail.com
                      </p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 group">
                    <div className="size-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-all shrink-0">
                      <span className="material-symbols-outlined text-white group-hover:text-purple-400 transition-colors">
                        location_on
                      </span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                        Base
                      </p>
                      <p className="text-white font-medium">
                        Hyderabad, Telangana
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative z-10 mt-12">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
                  Social Profiles
                </h4>
                <div className="flex gap-3">
                  <a
                    className="size-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                    href="https://github.com/ngworks1909" target="_blank"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                  <a
                    className="size-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0077b5]/20 hover:border-[#0077b5]/50 transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(0,119,181,0.3)] group"
                    href="https://www.linkedin.com/in/k-nithin-kumar-reddy-847284205/" target="_blank"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-white group-hover:text-[#0077b5]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        clipRule="evenodd"
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 glass-panel p-8 rounded-2xl border border-white/10 relative">
              <div className="absolute -top-2.5 right-5 w-20 h-px bg-linear-to-r from-transparent via-primary to-transparent opacity-50"></div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="material-symbols-outlined text-slate-500 group-focus-within:text-primary transition-colors text-sm">
                          person
                        </span>
                      </div>
                      <input
                        className="form-input w-full bg-[#162024] border border-white/10 rounded-xl pl-10 pr-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 transition-all text-sm"
                        id="name"
                        placeholder="John Doe"
                        value={data.name}
                        onChange={(e) => {
                          setData({ ...data, name: e.target.value });
                        }}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="material-symbols-outlined text-slate-500 group-focus-within:text-primary transition-colors text-sm">
                          alternate_email
                        </span>
                      </div>
                      <input
                        className="form-input w-full bg-[#162024] border border-white/10 rounded-xl pl-10 pr-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 transition-all text-sm"
                        id="email"
                        placeholder="john@company.com"
                        value={data.email}
                        onChange={(e) => {
                          setData({ ...data, email: e.target.value });
                        }}
                        type="email"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1"
                      htmlFor="company"
                    >
                      Company
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="material-symbols-outlined text-slate-500 group-focus-within:text-primary transition-colors text-sm">
                          business
                        </span>
                      </div>
                      <input
                        className="form-input w-full bg-[#162024] border border-white/10 rounded-xl pl-10 pr-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 transition-all text-sm"
                        id="company"
                        value={data.company}
                        onChange={(e) => {
                          setData({ ...data, company: e.target.value });
                        }}
                        placeholder="Company Name (Optional)"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1"
                      htmlFor="topic"
                    >
                      Inquiry Type
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="material-symbols-outlined text-slate-500 group-focus-within:text-primary transition-colors text-sm">
                          topic
                        </span>
                      </div>
                      <select
                        id="topic"
                        value={data.topic}
                        onChange={(e) => {
                          setData({ ...data, topic: e.target.value as Topic });
                        }}
                        className="form-input w-full bg-[#162024] border border-white/10 rounded-xl pl-10 pr-4 py-3.5 text-white focus:outline-none focus:border-primary/50 transition-all text-sm appearance-none"
                      >
                        <option value="hiring">Recruiting / Hiring</option>
                        <option value="project">Project / Architecture</option>
                        <option value="collab">Collaboration</option>
                        <option value="other">General Inquiry</option>
                      </select>

                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <span className="material-symbols-outlined text-slate-500 text-sm">
                          expand_more
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1"
                    htmlFor="subject_line"
                  >
                    Subject Line
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="material-symbols-outlined text-slate-500 group-focus-within:text-primary transition-colors text-sm">
                        short_text
                      </span>
                    </div>
                    <input
                      className="form-input w-full bg-[#162024] border border-white/10 rounded-xl pl-10 pr-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 transition-all text-sm"
                      id="subject_line"
                      value={data.subject_line}
                      onChange={(e) => {
                        setData({ ...data, subject_line: e.target.value });
                      }}
                      placeholder="Brief subject of your message"
                      type="text"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <div className="relative group">
                    <textarea
                      className="form-input w-full bg-[#162024] border border-white/10 rounded-xl p-4 text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 transition-all text-sm resize-none"
                      id="message"
                      value={data.message}
                      onChange={(e) => {
                        setData({ ...data, message: e.target.value });
                      }}
                      placeholder="Tell me about your project needs, timeline, and tech stack..."
                      rows={5}
                    ></textarea>
                  </div>
                </div>
                <div className="pt-2">
                  <button
                    className="w-full bg-linear-to-r from-primary to-blue-600 text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(37,192,244,0.3)] hover:shadow-[0_0_30px_rgba(37,192,244,0.5)] hover:scale-[1.01] transition-all flex items-center justify-center gap-2 group"
                    type="submit"
                  >
                    <span className="material-symbols-outlined group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform">
                      send
                    </span>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
