import { useEffect } from "react";
import request from "../../api";

const DashboardPage = () => {
  useEffect(() => {
    let getUsers = async () => {
      let { data } = await request.get("auth/me");
      console.log(data);
    };
    getUsers();
  });
  return <div>DashboardPage</div>;
};

export default DashboardPage;
