import { showNotification } from "@mantine/notifications";
import { ReactNode } from "react";

export const notify = (data: {
  status: string;
  title: string;
  message: string;
  icon?: ReactNode;
}) => {
  showNotification({
    autoClose: 3000,
    title: data?.title,
    icon: data?.icon,
    message: data?.message,
    color: data?.status,
    loading: false,
  });
};
