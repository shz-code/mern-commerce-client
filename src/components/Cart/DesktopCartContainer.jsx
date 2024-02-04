import { Minus, Plus, X } from "lucide-react";
import { Link } from "react-router-dom";

const DesktopCartContainer = () => {
  return (
    <div className="cartContainer">
      <div className="relative w-full overflow-auto">
        <table className="cartTable ">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Name</th>
              <th>ID</th>
              <th>Price(TK)</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-10">
                <span className="p-1 rounded-full bg-slate-800 inline-block text-white cursor-pointer">
                  <X size={12} />
                </span>
              </td>
              <td className="w-32">
                <Link to={`/product/`}>
                  <img src="https://erabanbd.com/wp-content/uploads/2024/01/qcy-watch-gt.png" />
                </Link>
              </td>
              <td>
                <Link to={`/product/`}>Glimmer Lamps</Link>
              </td>
              <td>Lorem ipsum dolor sit...</td>
              <td>120৳</td>
              <td>
                <div className="flex justify-center items-center gap-2">
                  <span className="p-1 rounded-full bg-slate-800 inline-block text-white">
                    <Minus size={12} />
                  </span>
                  <span className="text-xl border-2 px-2 rounded">1</span>
                  <span className="p-1 rounded-full bg-slate-800 inline-block text-white cursor-pointer">
                    <Plus size={12} />
                  </span>
                </div>
              </td>
              <td>
                {" "}
                <span className="text-xl text-slate-800 font-extrabold">
                  120৳
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DesktopCartContainer;
