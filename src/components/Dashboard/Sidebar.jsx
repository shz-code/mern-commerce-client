import { LogOut, User } from "lucide-react";
import { useDispatch } from "react-redux";
import { userLoggedOut } from "../../features/auth/authSlice";
import DashboardLinks from "./DashboardLinks";

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-white rounded p-4 sticky top-2">
      <div className="flex items-center space-x-2 border-b-4 pb-2 ">
        {/* <img
            alt="Logo"
            className="rounded-full"
            height="40"
            src="/placeholder.svg"
            style={{
              aspectRatio: "40/40",
              objectFit: "cover",
            }}
            width="40"
          /> */}
        <span className="inline-block p-2 rounded-full bg-slate-200 cursor-pointe">
          <User size={20} />
        </span>
        <h1 className="text-lg font-semibold">Name</h1>
      </div>
      <nav className="dashboardNavLinks mt-4">
        <DashboardLinks />
        <span
          className="border cursor-pointer"
          onClick={() => {
            dispatch(userLoggedOut());
          }}
        >
          <LogOut size={18} />
          Logout
        </span>
      </nav>
    </div>
  );
};

export default Sidebar;
