import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="bg-slate-200">
      <div className="container mx-auto sm:flex py-8 px-2 gap-6 space-y-6 sm:space-y-0">
        <div className="sm:w-64">
          <Sidebar />
        </div>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
