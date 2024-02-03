import Products from "./Products/Products";

const Shop = () => {
  return (
    <div className="bg-slate-200">
      <div className="pageHeader py-8 px-2">
        <h2 className="text-4xl font-extrabold text-center">Shop</h2>
      </div>
      <div className="container mx-auto px-2 pb-8">
        <div className="grid grid-cols-3 gap-8">
          <div className="w-full bg-white p-4 rounded-sm">filters</div>
          <div className="col-span-2">
            <Products />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
