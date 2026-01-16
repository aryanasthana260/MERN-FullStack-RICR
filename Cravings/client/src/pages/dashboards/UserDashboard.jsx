import React, { useState } from "react";
import UserSideBar from "../../components/userDashBoard/userSideBar";
import UserOverview from "../../components/userDashBoard/userOverview";
import UserProfile from "../../components/userDashBoard/UserProfile";
import UserTransactions from "../../components/userDashBoard/UserTransactions";
import UserHelpDesk from "../../components/userDashBoard/UserHelpDesk";
import UserOrders from "../../components/userDashBoard/UserOrders";
import { GiHamburgerMenu } from "react-icons/gi";


const UserDashboard = () => {
  const [active, setActive] = useState("overview");
  return (
    <>
      <div className="w-full h-[90vh] flex">
        <div className="bg-(--color-background) w-2/10">
          <UserSideBar active={active} setActive={setActive} />
        </div>
        <div className="border border-blue-800 w-8/10">
          {active === "overview" && <UserOverview />}
          {active === "profile" && <UserProfile />}
          {active === "orders" && <UserOrders />}
          {active === "transactions" && <UserTransactions />}
          {active === "helpdesk" && <UserHelpDesk />}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
