import React from "react";
import { useSelector } from "react-redux";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import UsersDashboard from "./UsersDashboard/UsersDashboard";

const MainDashboard = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      {user?.role === "user" ? (
        <>
          <UsersDashboard />
        </>
      ) : (
        <>
          <AdminDashboard />
        </>
      )}
    </>
  );
};

export default MainDashboard;
