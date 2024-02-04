const Dashboard = () => {
  return (
    <div className="w-full">
      <div className="w-full">
        <main>
          <div className="lg:grid grid-cols-3 gap-6 space-y-6 lg:space-y-0">
            {/* Payment products info */}
            <div className="col-span-2 space-y-6">
              <div className="rounded bg-white shadow">
                <h3 className="text-xl font-semibold">Products</h3>
                <div>
                  <div className="relative w-full overflow-auto">
                    <table className="w-full text-sm">
                      <thead className="border-b">
                        <tr>
                          <th className="px-4 font-medium">Image</th>
                          <th className="px-4 font-medium">Name</th>
                          <th className="px-4 font-medium">Quantity</th>
                          <th className="px-4 font-medium">Total</th>
                          <th className="px-4 pb-8 font-medium"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-4">
                            {/* <img
                              src="/placeholder.svg"
                              width="64"
                              height="64"
                              alt="Product image"
                              className="aspect-square rounded-md object-cover"
                            /> */}
                          </td>
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
              <div className="rounded bg-white shadow">
                <h3 className="text-xl font-semibold">Payment</h3>
                <div>
                  <div className="relative w-full overflow-auto">
                    <table className="w-full text-sm">
                      <thead className="border-b">
                        <tr>
                          <th className="px-4 font-medium">Image</th>
                          <th className="px-4 font-medium">Name</th>
                          <th className="px-4 font-medium">Quantity</th>
                          <th className="px-4 font-medium">Total</th>
                          <th className="px-4 pb-8 font-medium"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-4">
                            {/* <img
                              src="/placeholder.svg"
                              width="64"
                              height="64"
                              alt="Product image"
                              className="aspect-square rounded-md object-cover"
                            /> */}
                          </td>
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
            </div>
            {/* User Info */}
            <div className="w-full lg:w-auto">
              <div className="rounded bg-white shadow" data-v0-t="card">
                <div className="border-b">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">
                      Contact information
                    </h3>
                    <span>Edit</span>
                  </div>
                  <div className="text-sm">
                    <div className="space-y-1">
                      <span className="text-slate-600 underline">
                        Sophia Anderson
                      </span>
                      <div>23 total orders</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    {" "}
                    Contact information
                  </h3>

                  <div className="text-sm">
                    <div className="space-y-1">
                      <span className="text-slate-600">sophia@example.com</span>
                      <div className="text-gray-500 ">+1 888 8888 8888</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <h3 className="text-xl font-semibold">Address</h3>
                  </div>
                  <div className="text-sm">
                    <div>Sophia Anderson 1234 Main St. Anytown, CA 12345</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
