import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import authAxios from "../../util/util";

const Dashboard = () => {
  const authContext = useContext(AuthContext);
  const { authState, logout } = authContext;

  const [userData, setUserData] = useState("");

  useEffect(() => {
    if (authState.token) {
      async function fetchData() {
        console.log(authState.token);
        const res = await authAxios.get("dashboard", {
          headers: { authorization: `Bearer ${authState.token}` },
        });
        console.log(typeof res.data);
        setUserData(res.data);
      }
      fetchData();
    }
  }, [authState.token]);

  return (
    <div>
      <h1>Welcome to your Dashboard {authState.userInfo.firstName}</h1>
      <p>hey {userData}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
