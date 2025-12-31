import {
  useRef,
  useState,
  type ReactNode,
} from "react";
import ToastItem from "../toast/toast";
import { ToastContext, type ToastState, type ToastType } from "./toast-context";

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastState[]>([]);
  const idRef = useRef(0);

  const showToast = (
    title: string,
    message: string,
    type: ToastType = "success"
  ) => {
    const id = ++idRef.current;

    setToasts((prev) => [
      ...prev,
      { id, title, message, type },
    ]);

    setTimeout(() => removeToast(id), 5000);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      <div className="fixed top-24 right-4 md:right-8 z-50 flex flex-col gap-4 w-full max-w-sm pointer-events-none">
        {toasts.map((toast) => (
          <ToastItem
            key={toast.id}
            toast={toast}
            onClose={removeToast}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};
