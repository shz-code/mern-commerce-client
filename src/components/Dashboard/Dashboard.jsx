import OrderSummary from "./Orders/OrderSummary";
import PaymentSummary from "./Payments/PaymentSummary";
import Profile from "./Profile/Profile";

const Dashboard = () => {
  return (
    <main className="">
      <div className="lg:grid grid-cols-3 gap-2 space-y-4 lg:space-y-0">
        <div className="col-span-2 space-y-2">
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
