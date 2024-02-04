import { LogOut, User } from "lucide-react";
import DashboardLinks from "./DashboardLinks";

const Sidebar = () => {
  return (
    <>
      <div className="flex items-center space-x-2 border-b-4 pb-2">
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
        <span className="border cursor-pointer" onClick={() => {}}>
          <LogOut size={18} />
          Logout
        </span>
      </nav>
    </>
  );
};

export default Sidebar;
