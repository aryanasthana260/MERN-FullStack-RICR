import React from "react";
import { TbChartTreemap } from "react-icons/tb";
import { TbTransactionRupee } from "react-icons/tb";
import { FaHireAHelper } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaTruckFast } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

const UserSideBar = ({ active, setActive, isCollapsed, setIsCollapsed }) => {
  const menuItems = [
    { key: "overview", title: "OverView", icon: <TbChartTreemap /> },
    { key: "profile", title: "Profile", icon: <CgProfile /> },
    { key: "orders", title: "Orders", icon: <FaTruckFast /> },
    {
      key: "transactions",
      title: "Transactions",
      icon: <TbTransactionRupee />,
    },
    { key: "helpdesk", title: "HelpDesk", icon: <FaHireAHelper /> },
  ];

  return (
    <>
      <div className="p-2 ">
        <div className="h-10 text-nowrap overflow-hidden font-bold gap-5 flex items-center mb-3">
          {" "}
          <button
            className="ms-2 hover:scale-105 "
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <GiHamburgerMenu className="" />
          </button>
          {!isCollapsed && (
            <span className="overflow-hidden text-nowrap">User Dashboard </span>
          )}
        </div>
        <hr />

        <div className="py-6 space-y-5 w-full">
          {menuItems.map((item, idx) => (
            <button
              className={`flex gap-3 items-center ps-2 rounded-xl h-12 w-full text-nowrap overflow-hidden duration-300 
              ${
                active === item.key
                  ? "bg-(--color-secondary) text-white"
                  : " hover:bg-gray-100/70"
              }
            `}
              onClick={() => setActive(item.key)}
              key={idx}
            >
              {" "}
              {item.icon}
            
              {!isCollapsed && item.title}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserSideBar;
