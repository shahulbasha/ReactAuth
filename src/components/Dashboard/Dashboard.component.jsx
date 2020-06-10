import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Dashboard = () => {
  const authContext = useContext(AuthContext);
  const { authState } = authContext;
  return (
    <div>
      <h1>Welcome to your Dashboard {authState.userInfo.firstName}</h1>
    </div>
  );
};

export default Dashboard;
