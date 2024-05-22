import React from "react";
import { useSelector } from "react-redux";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import UsersDashboard from "./UsersDashboard/UsersDashboard";

const MainDashboard = () => {
  const { error, loading, isAuthenticated, user } = useSelector(
    (state) => state.user
  );
  console.log("user", user);
  return (
    <>
      {user.role === "user" ? (
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
