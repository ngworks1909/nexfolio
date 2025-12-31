import type { ToastState } from "../provider/toast-context";
import "./toast.css";

export default function ToastItem({
  toast,
  onClose,
}: {
  toast: ToastState;
  onClose: (id: number) => void;
}) {
  const isSuccess = toast.type === "success";

  return (
    <div
      role="alert"
      className={`
        pointer-events-auto group relative overflow-hidden rounded-xl p-4 pr-10 shadow-2xl animate-slide-in
        ${isSuccess ? "glass-panel" : "glass-panel-error"}
      `}
    >
      {/* Glow */}
      <div
        className={`absolute -left-4 -top-4 size-16 rounded-full blur-xl
        ${isSuccess ? "bg-primary/20" : "bg-[#ff4d4d]/20"}`}
      />

      <div className="relative flex items-start gap-4">
        {/* Icon */}
        <div
          className={`
            flex h-10 w-10 shrink-0 items-center justify-center rounded-lg
            ${isSuccess
              ? "bg-primary/10 text-primary shadow-[0_0_15px_rgba(37,192,244,0.3)]"
              : "bg-[#ff4d4d]/10 text-[#ff4d4d] shadow-[0_0_15px_rgba(255,77,77,0.3)]"}
          `}
        >
          <span className="material-symbols-outlined text-[24px]">
            {isSuccess ? "check_circle" : "warning"}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-1 pt-0.5">
          <h3 className="text-sm font-semibold text-white tracking-wide">
            {toast.title}
          </h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            {toast.message}
          </p>
        </div>

        {/* Close */}
        <button
          onClick={() => onClose(toast.id)}
          className="absolute -right-2 -top-2 p-2 text-gray-500 hover:text-white transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">
            close
          </span>
        </button>
      </div>

      {/* Progress Bar */}
      <div
        className={`absolute bottom-0 left-0 h-0.5 w-full
        ${isSuccess ? "bg-primary/20" : "bg-[#ff4d4d]/20"}`}
      >
        <div
          className={`h-full animate-progress origin-left
          ${isSuccess
            ? "bg-primary shadow-[0_0_10px_rgba(37,192,244,0.8)]"
            : "bg-[#ff4d4d] shadow-[0_0_10px_rgba(255,77,77,0.8)]"}`}
        />
      </div>
    </div>
  );
}