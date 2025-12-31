import { createContext } from "react";

export type ToastType = "success" | "error";

export interface ToastState {
  id: number;
  title: string;
  message: string;
  type: ToastType;
}

export interface ToastContextType {
  showToast: (
    title: string,
    message: string,
    type?: ToastType
  ) => void;
}


export const ToastContext = createContext<ToastContextType>({
  showToast: () => {},
});