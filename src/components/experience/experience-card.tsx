import type { ExperienceItem } from "./experience";
import "./experience.css";

interface ExperienceCardProps {
  item: ExperienceItem;
  isLeft: boolean;
}

export default function ExperienceCard({
  item,
  isLeft,
}: ExperienceCardProps) {
  return (
    <div className="mb-12 md:grid md:grid-cols-2 md:gap-8 items-center group">
      {/* LEFT SIDE - Duration */}
      {isLeft ? (
        <div className="hidden md:block text-right pr-8 relative">
          <span
            className={`inline-block py-1 px-3 rounded-full border text-sm font-medium ${
              item.current
                ? "bg-surface-dark border-border-dark text-primary"
                : "text-slate-400"
            }`}
          >
            {item.duration}
          </span>
        </div>
      ) : (
        <div className="hidden md:block" />
      )}

      {/* TIMELINE DOT */}
      <div className="absolute hidden md:flex left-1/2 w-8 h-8 -ml-4 items-center justify-center z-10">
        <div
          className={`w-3 h-3 rounded-full ring-4 ring-background-dark transition-colors ${
            item.current
              ? "bg-primary shadow-[0_0_15px_rgba(37,192,244,0.8)]"
              : "bg-surface-dark border-2 border-slate-600 group-hover:border-primary"
          }`}
        />
      </div>

      {/* CARD */}
      {isLeft ? (
        <div className="md:col-start-2">
          {/* Mobile duration */}
          <div className="md:hidden mb-2">
            <span className="inline-block py-1 px-3 rounded-full bg-surface-dark border border-border-dark text-xs font-medium text-primary">
              {item.duration}
            </span>
          </div>

          {/* Experience card */}
          <div className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-neon group-hover:-translate-y-1">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-surface-dark flex items-center justify-center border border-border-dark">
                  <span className="material-symbols-outlined text-white">
                    {item.icon}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    {item.role}
                  </h3>

                  <p className="text-slate-400 text-sm">
                    {item.company}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {item.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="md:col-start-1 md:col-end-2 md:text-right">
          {/* Mobile duration */}
          <div className="md:hidden mb-2">
            <span className="inline-block py-1 px-3 rounded-full bg-surface-dark border border-border-dark text-xs font-medium text-primary">
              {item.duration}
            </span>
          </div>

          {/* Experience card */}
          <div className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-neon group-hover:-translate-y-1">
            <div className="flex items-start justify-between mb-4 md:flex-row-reverse">
              <div className="flex items-center gap-3 md:flex-row-reverse">
                <div className="w-10 h-10 rounded-lg bg-surface-dark flex items-center justify-center border border-border-dark">
                  <span className="material-symbols-outlined text-white">
                    {item.icon}
                  </span>
                </div>

                <div className="md:text-right">
                  <h3 className="text-xl font-bold text-white">
                    {item.role}
                  </h3>

                  <p className="text-slate-400 text-sm">
                    {item.company}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-2 md:justify-end">
              {item.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* RIGHT SIDE - Duration */}
      {!isLeft ? (
        <div className="hidden md:block text-left pl-8 relative">
          <span
            className={`inline-block py-1 px-3 rounded-full border text-sm font-medium ${
              item.current
                ? "bg-surface-dark border-border-dark text-primary"
                : "text-slate-400"
            }`}
          >
            {item.duration}
          </span>
        </div>
      ) : (
        <div className="hidden md:block" />
      )}
    </div>
  );
}