import * as React from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastAlert = () => {
  const { type, message, position } = useSelector(
    (state) => state.toastifyAlert
  );

  if (type !== undefined && type !== "") {
    switch (type) {
      case "info":
        toast.info(message);
        break;
      case "success":
        toast.success(message);
        break;
      case "warning":
        toast.warning(message);
        break;
      case "warn":
        toast.warn(message);
        break;
      case "error":
        toast.error(message);
        break;
      case "dark":
        toast.dark(message);
        break;
      case "basic":
      default:
        toast(message);
    }
  }

  return (
    <ToastContainer autoClose={3000} position={position && "top-center"} />
  );
};

export default ToastAlert;
