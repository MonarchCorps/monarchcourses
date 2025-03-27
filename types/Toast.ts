import { ToastData } from "@/components/common/ToastItem";

export type ToastContextType = {
    showToast: (toast: Omit<ToastData, 'id'>) => void;
}