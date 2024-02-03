import { LucideHome, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="bg-slate-200">
      <div className="container mx-auto flex   py-8 px-2">
        <div className="w-64 bg-white border-2 rounded p-4">
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
            <Link to="#">
              <LucideHome size={18} />
              Home
            </Link>
            <Link to="#">
              <User size={18} />
              Profile
            </Link>
          </nav>
        </div>
        <div className="p-4">
          <div className="pageHeader">
            <h1 className="text-3xl font-extrabold">Home</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
