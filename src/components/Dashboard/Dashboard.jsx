import { Link } from "react-router-dom";
import Profile from "./Profile/Profile";

const Dashboard = () => {
  return (
    <main className="">
      <div className="lg:grid grid-cols-3 gap-6 space-y-6 lg:space-y-0">
        <div className="col-span-2 space-y-6">
          {/* Payment products info */}
          <div className="rounded bg-white shadow p-4">
            <h3 className="text-xl font-semibold">Payments</h3>
            <div className="relative w-full overflow-auto">
              <table className="w-full text-sm">
                <thead className="border-b">
                  <tr>
                    <th className="px-4 font-medium">Date</th>
                    <th className="px-4 font-medium">Amount</th>
                    <th className="px-4 font-medium">TRX</th>
                    <th className="px-4 font-medium">Order ID</th>
                    <th className="px-4 pb-8 font-medium"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 text-center">Glimmer Lamps</td>
                    <td className="p-4 text-center">2</td>
                    <td className="p-4 text-center">$120.00</td>
                    <td className="p-4 text-center"></td>
                  </tr>
                </tbody>
              </table>
              <Link
                to="/dashboard/payments"
                className="inline-block pt-4 text-xs underline cursor-pointer"
              >
                View All
              </Link>
            </div>
          </div>
          {/* Orders */}
          <div className="col-span-2 space-y-6">
            <div className="rounded bg-white shadow p-4">
              <h3 className="text-xl font-semibold">Orders</h3>
              <div className="relative w-full overflow-auto">
                <table className="w-full text-sm">
                  <thead className="border-b">
                    <tr>
                      <th className="px-4 font-medium">Image</th>
                      <th className="px-4 font-medium">Date</th>
                      <th className="px-4 font-medium">TRX</th>
                      <th className="px-4 font-medium">Items</th>
                      <th className="px-4 pb-8 font-medium"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 text-center">Glimmer Lamps</td>
                      <td className="p-4 text-center">2</td>
                      <td className="p-4 text-center">$120.00</td>
                      <td className="p-4 text-center"></td>
                    </tr>
                  </tbody>
                </table>
                <Link
                  to="/dashboard/orders"
                  className="inline-block pt-4 text-xs underline cursor-pointer"
                >
                  View All
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* User Info */}
        <Profile />
      </div>
    </main>
  );
};

export default Dashboard;
