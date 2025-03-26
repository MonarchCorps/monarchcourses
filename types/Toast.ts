import { ToastData } from "@/components/ToastItem";

export type ToastContextType = {
    showToast: (toast: Omit<ToastData, 'id'>) => void;
}