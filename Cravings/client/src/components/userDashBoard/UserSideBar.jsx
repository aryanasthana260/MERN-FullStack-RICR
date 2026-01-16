import React from "react";
import { TbChartTreemap } from "react-icons/tb";
import { TbTransactionRupee } from "react-icons/tb";
import { FaHireAHelper } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaTruckFast } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

const UserSideBar = ({ active, setActive }) => {
  return (
    <>
      <div className="p-3">
        <div className="text-xl font-bold gap-2 flex  "> < GiHamburgerMenu/>User Dashboard</div>
        <hr />

        <div className="grid gap-3 p-6">
          <button
            className={`flex gap-3 items-center   rounded-xl p-2
              ${
                active === "overview"
                  ? "bg-(--color-secondary) text-white"
                  : " hover:bg-gray-100/70"
              }
            `}
            onClick={() => setActive("overview")}
          >
            {" "}
            <TbChartTreemap />
            Over-view
          </button>
          <button
            className={`flex gap-3 items-center   rounded-xl p-2
              ${
                active === "profile"
                  ? "bg-(--color-secondary) text-white"
                  : " hover:bg-gray-100/70"
              }
            `}
            onClick={() => setActive("profile")}
          >
            {" "}
            <CgProfile />
            Profile
          </button>
          <button
            className={`flex gap-3 items-center   rounded-xl p-2
              ${
                active === "orders"
                  ? "bg-(--color-secondary) text-white"
                  : " hover:bg-gray-100/70"
              }
            `}
            onClick={() => setActive("orders")}
          >
            {" "}
            <FaTruckFast />
            Orders
          </button>
          <button
            className={`flex gap-3 items-center   rounded-xl p-2
              ${
                active === "transactions"
                  ? "bg-(--color-secondary) text-white"
                  : " hover:bg-gray-100/70"
              }
            `}
            onClick={() => setActive("transactions")}
          >
            {" "}
            <TbTransactionRupee />
            Transactions
          </button>
          <button
            className={`flex gap-3 items-center   rounded-xl p-2
              ${
                active === "helpdesk"
                  ? "bg-(--color-secondary) text-white"
                  : " hover:bg-gray-100/70"
              }
            `}
            onClick={() => setActive("helpdesk")}
          >
            {" "}
            <FaHireAHelper />
            HelpDesk
          </button>
        </div>
      </div>
    </>
  );
};

export default UserSideBar;
