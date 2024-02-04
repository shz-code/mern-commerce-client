import Sidebar from "./Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="bg-slate-200">
      <div className="container mx-auto flex   py-8 px-2">
        <div className="w-64 bg-white border-2 rounded p-4">
          <Sidebar />
        </div>
        <div className="p-4">
          <div className="pageHeader">
            <h1 className="text-3xl font-extrabold">Home</h1>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
