import Products from "./Products/Products";
import Sidebar from "./Sidebar/Sidebar";

const Shop = () => {
  return (
    <div>
      <div className="bg-slate-200">
        <div className="pageHeader py-8 px-2">
          <h2 className="text-4xl font-extrabold text-center">Shop</h2>
        </div>
        <div className="container mx-auto px-2 pb-8">
          <div className="sm:flex gap-8">
            <div className="sm:max-w-[300px] w-full h-fit sm:sticky top-2 bg-white p-4 rounded-sm">
              <Sidebar />
            </div>
            <div className="w-full mt-6 sm:mt-0">
              <Products />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
