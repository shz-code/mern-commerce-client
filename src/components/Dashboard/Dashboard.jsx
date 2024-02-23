import OrderSummary from "./Orders/OrderSummary";
import PaymentSummary from "./Payments/PaymentSummary";
import Profile from "./Profile/Profile";

const Dashboard = () => {
  return (
    <main className="">
      <div className="lg:grid grid-cols-3 gap-6 space-y-6 lg:space-y-0">
        <div className="col-span-2 space-y-6">
          {/* Payment products info */}
          <PaymentSummary />
          {/* Orders */}
          <OrderSummary />
        </div>
        {/* User Info */}
        <Profile />
      </div>
    </main>
  );
};

export default Dashboard;
