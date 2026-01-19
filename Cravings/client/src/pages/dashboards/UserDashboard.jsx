import React, { useState } from "react";
import UserSideBar from "../../components/userDashBoard/UserSideBar";
import UserOverview from "../../components/userDashBoard/userOverview";
import UserProfile from "../../components/userDashBoard/UserProfile";
import UserTransactions from "../../components/userDashBoard/UserTransactions";
import UserHelpDesk from "../../components/userDashBoard/UserHelpDesk";
import UserOrders from "../../components/userDashBoard/UserOrders";
import { GiHamburgerMenu } from "react-icons/gi";

const UserDashboard = () => {
  const [active, setActive] = useState("overview");
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      <div className="w-full h-[90vh] flex">
        <div
          className={`bg-(--color-background) duration-300 ${isCollapsed ? "w-2/60" : "w-12/60"}`}
        >
          <UserSideBar
            active={active}
            setActive={setActive}
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
          />
        </div>
        <div className={` ${isCollapsed ? "w-58/60" : "w-48/60"} duration-300`}>
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
