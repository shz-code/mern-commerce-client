import { LogOut, User } from "lucide-react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userLoggedOut } from "../../features/auth/authSlice";
import DashboardLinks from "./DashboardLinks";

const Sidebar = () => {
  const { photo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <div className="bg-white rounded p-4 sticky top-2">
      <div className="flex items-center space-x-2 border-b-4 pb-2 ">
        <Link to="/dashboard" className="flex items-center gap-2">
          <span className="inline-block p-2 rounded-full bg-slate-200 cursor-pointe">
            {photo != undefined && photo != "none" ? (
              <div className="w-6">
                <img
                  src={photo}
                  className="rounded-full"
                  alt="Profile Picture"
                />
              </div>
            ) : (
              <User size={20} />
            )}
          </span>
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </Link>
      </div>
      <nav className="dashboardNavLinks mt-4">
        <DashboardLinks />
        <span
          className="border cursor-pointer"
          onClick={() => {
            dispatch(userLoggedOut());
            toast.success("Logged Out");
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
