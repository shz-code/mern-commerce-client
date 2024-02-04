const Payments = () => {
  return (
    <main>
      {/* Payment products info */}
      <div className="col-span-2 space-y-6">
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
          </div>
        </div>
      </div>
    </main>
  );
};

export default Payments;
